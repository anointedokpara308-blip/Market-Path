import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { curriculumData } from '../data/curriculumData';
import { supabase } from '../supabaseClient';
import { 
  ShieldAlert, CheckCircle2, Lock, Unlock, Users, Calculator, BookOpen, ExternalLink, Download, Layers, Eye 
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Visit Timeframe Filter State ('all', 'month', 'week', 'today')
  const [visitTimeframe, setVisitTimeframe] = useState('all');

  // Modals state
  const [showUserListModal, setShowUserListModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Telemetry Metrics State
  const [analyticsData, setAnalyticsData] = useState({
    totalVisits: 0,
    visitsMonth: 0,
    visitsWeek: 0,
    visitsToday: 0,
    roadmapVisits: 0,
    activeUsersCount: 0,
    quizCompletions: 0,
    calculatorInteractions: 0,
    toolkitDownloads: 0,
    brokerClicks: {},
    articleReads: {},
    completedModulesCount: 0,
    curriculumModuleStats: {},
    simulatedUsers: []
  });

  const MASTER_ADMIN_KEY = 'marketpath_admin_2026';

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('mp_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      loadComprehensiveTelemetry();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() === MASTER_ADMIN_KEY) {
      sessionStorage.setItem('mp_admin_auth', 'true');
      setIsAuthenticated(true);
      setErrorMsg('');
      loadComprehensiveTelemetry();
    } else {
      setErrorMsg('Invalid master key. Access denied.');
    }
  };

  const loadComprehensiveTelemetry = async () => {
    try {
      // Fetch all recorded telemetry events from Supabase cloud table
      const { data: events, error } = await supabase
        .from('telemetry_events')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching telemetry from Supabase:', error.message);
        return;
      }

      const allEvents = events || [];

      // Timeframe calculations based on real event timestamps
      const now = new Date();
      const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const visitsToday = allEvents.filter(e => (e.event_type === 'roadmap_visit' || e.event_type === 'visit') && new Date(e.created_at) >= oneDayAgo).length;
      const visitsWeek = allEvents.filter(e => (e.event_type === 'roadmap_visit' || e.event_type === 'visit') && new Date(e.created_at) >= oneWeekAgo).length;
      const visitsMonth = allEvents.filter(e => (e.event_type === 'roadmap_visit' || e.event_type === 'visit') && new Date(e.created_at) >= oneMonthAgo).length;
      const totalVisits = allEvents.filter(e => e.event_type === 'roadmap_visit' || e.event_type === 'visit').length;

      const roadmapVisits = allEvents.filter(e => e.event_type === 'roadmap_visit').length;
      const toolkitDownloads = allEvents.filter(e => e.event_type === 'toolkit_download').length;
      const quizCompletions = allEvents.filter(e => e.event_type === 'quiz_complete').length;
      const calculatorInteractions = allEvents.filter(e => e.event_type === 'calculator_use').length;

      let brokerClicksMap = {};
      allEvents.filter(e => e.event_type === 'broker_click').forEach(e => {
        const broker = e.meta?.brokerName || 'Exness';
        brokerClicksMap[broker] = (brokerClicksMap[broker] || 0) + 1;
      });

      let articleReadsMap = {};
      allEvents.filter(e => e.event_type === 'article_read').forEach(e => {
        const title = e.meta?.articleTitle || 'Guide';
        articleReadsMap[title] = (articleReadsMap[title] || 0) + 1;
      });

      // Group events dynamically by IP Address / Client ID
      const userMap = {};
      allEvents.forEach(e => {
        const ip = e.ip_address && e.ip_address !== 'global-node-client' ? e.ip_address : (e.meta?.clientId || 'Unknown Visitor');
        
        if (!userMap[ip]) {
          userMap[ip] = {
            ipAddress: ip,
            device: e.meta?.userAgent ? (e.meta.userAgent.includes('Mobile') ? 'Mobile Device' : 'Desktop Browser') : 'Standard Web Node',
            lastActive: new Date(e.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            completedModules: [],
            quizCompleted: false,
            calculatorUsed: 0,
            toolkitDownloaded: false,
            toolkitDetails: 'None',
            brokerClicks: {},
            articleReads: {}
          };
        }

        const u = userMap[ip];
        if (e.event_type === 'toolkit_download') {
          u.toolkitDownloaded = true;
          u.toolkitDetails = 'Starter Toolkit PDF Acquired';
        }
        if (e.event_type === 'quiz_complete') {
          u.quizCompleted = true;
        }
        if (e.event_type === 'calculator_use') {
          u.calculatorUsed += 1;
        }
        if (e.event_type === 'broker_click') {
          const bName = e.meta?.brokerName || 'Broker';
          u.brokerClicks[bName] = (u.brokerClicks[bName] || 0) + 1;
        }
        if (e.event_type === 'article_read' || e.event_type === 'curriculum_progress') {
          const lesson = e.meta?.articleTitle || e.meta?.lessonId || 'Module Activity';
          u.articleReads[lesson] = (u.articleReads[lesson] || 0) + 1;
          
          // Type-safe handling for completed modules
          const rawModId = e.meta?.completedModuleId || e.meta?.lessonId;
          if (rawModId !== undefined && rawModId !== null) {
            const modIdStr = String(rawModId);
            if (!u.completedModules.some(id => String(id) === modIdStr)) {
              u.completedModules.push(rawModId);
            }
          }
        }
      });

      const uniqueUsersList = Object.values(userMap);

      // Global curriculum aggregation map (type-safe comparison)
      let moduleCompletionMap = {};
      curriculumData.forEach(mod => {
        const isModDone = uniqueUsersList.some(u => u.completedModules.some(id => String(id) === String(mod.id)));
        moduleCompletionMap[mod.id] = { title: mod.title, completed: isModDone };
      });

      setAnalyticsData({
        totalVisits: Math.max(1, totalVisits),
        visitsMonth: Math.max(1, visitsMonth || totalVisits),
        visitsWeek: Math.max(1, visitsWeek || totalVisits),
        visitsToday: Math.max(1, visitsToday || totalVisits),
        roadmapVisits: Math.max(1, roadmapVisits),
        activeUsersCount: uniqueUsersList.length || 1,
        quizCompletions,
        calculatorInteractions,
        toolkitDownloads,
        brokerClicks: brokerClicksMap,
        articleReads: articleReadsMap,
        completedModulesCount: uniqueUsersList.reduce((acc, u) => Math.max(acc, u.completedModules.length), 0),
        curriculumModuleStats: moduleCompletionMap,
        simulatedUsers: uniqueUsersList.length > 0 ? uniqueUsersList : [{
          ipAddress: 'Local Diagnostic Client',
          device: 'Current Browser Node',
          lastActive: 'Just Now',
          completedModules: [],
          quizCompleted: false,
          calculatorUsed: calculatorInteractions,
          toolkitDownloaded: toolkitDownloads > 0,
          toolkitDetails: toolkitDownloads > 0 ? 'Starter Toolkit PDF' : 'None',
          brokerClicks: brokerClicksMap,
          articleReads: articleReadsMap
        }]
      });

    } catch (err) {
      console.error('Failed to load global cloud telemetry', err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-navy-950 text-slate-100 font-sans min-h-screen flex items-center justify-center px-4">
        <div className="bg-navy-900 border border-slate-800 rounded-3xl max-w-md w-full p-8 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto mb-6">
            <Lock className="w-8 h-8"/>
          </div>
          <h1 className="text-2xl font-black text-white mb-2">Restricted Executive Portal</h1>
          <p className="text-slate-400 text-xs mb-6">
            Enter your administrative master key to access deep platform telemetry and user interaction analytics.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Admin Master Key..."
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors text-center font-mono"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold text-xs transition-all cursor-pointer shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2"
            >
              <Unlock className="w-4 h-4"/>
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          {errorMsg && <p className="text-rose-400 text-xs font-mono mt-4">{errorMsg}</p>}

          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link className="text-xs text-slate-500 hover:text-slate-300 transition-colors" to="/">
              ← Return to Public Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalBrokerClicks = Object.values(analyticsData.brokerClicks).reduce((a, b) => a + b, 0);

  const getDisplayedVisits = () => {
    if (visitTimeframe === 'today') return analyticsData.visitsToday;
    if (visitTimeframe === 'week') return analyticsData.visitsWeek;
    if (visitTimeframe === 'month') return analyticsData.visitsMonth;
    return analyticsData.totalVisits;
  };

  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-400 text-xs font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5"/>
              <span>EXECUTIVE TELEMETRY & TOOLKIT AUDIT</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Market Path Admin Analytics
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowUserListModal(true)}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              <Users className="w-4 h-4"/>
              <span>Inspect Users by IP Address ({analyticsData.simulatedUsers.length})</span>
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem('mp_admin_auth');
                setIsAuthenticated(false);
              }}
              className="px-4 py-2 rounded-xl bg-navy-900 border border-slate-800 text-rose-400 text-xs font-bold hover:bg-navy-800 transition-all cursor-pointer"
            >
              Lock Session
            </button>
          </div>
        </div>

        {/* Primary Metrics Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Visits</span>
                <select
                  value={visitTimeframe}
                  onChange={(e) => setVisitTimeframe(e.target.value)}
                  className="bg-navy-950 border border-slate-800 rounded-lg px-2 py-1 text-[10px] font-bold text-emerald-400 focus:outline-none cursor-pointer"
                >
                  <option value="all">All-Time</option>
                  <option value="month">This Month</option>
                  <option value="week">This Week</option>
                  <option value="today">Today</option>
                </select>
              </div>
              <div className="text-3xl font-black text-white">{getDisplayedVisits()}</div>
            </div>
            <div className="text-[10px] text-emerald-400 mt-4 font-mono">
              Viewing: {visitTimeframe === 'today' ? 'Today\'s traffic' : visitTimeframe === 'week' ? 'Past 7 days' : visitTimeframe === 'month' ? 'Past 30 days' : 'Cumulative total'}
            </div>
          </div>

          <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">PDF Toolkit Downloads</span>
                <Download className="w-4 h-4 text-emerald-400"/>
              </div>
              <div className="text-3xl font-black text-white">{analyticsData.toolkitDownloads}</div>
            </div>
            <div className="text-[10px] text-emerald-400 mt-4 font-mono">Starter kit guides acquired</div>
          </div>

          <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Visits</span>
                <Layers className="w-4 h-4 text-cyan-400"/>
              </div>
              <div className="text-3xl font-black text-white">{analyticsData.roadmapVisits}</div>
            </div>
            <div className="text-[10px] text-cyan-400 mt-4 font-mono">Total roadmap page views</div>
          </div>

          <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Users (IP Tracked)</span>
                <Users className="w-4 h-4 text-emerald-400"/>
              </div>
              <div className="text-3xl font-black text-white">{analyticsData.simulatedUsers.length}</div>
            </div>
            <div className="text-[10px] text-emerald-400 mt-4 font-mono">Click top button to view list</div>
          </div>

          <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quiz / Calculators</span>
                <Calculator className="w-4 h-4 text-amber-400"/>
              </div>
              <div className="text-3xl font-black text-white">{analyticsData.quizCompletions} / {analyticsData.calculatorInteractions}</div>
            </div>
            <div className="text-[10px] text-amber-400 mt-4 font-mono">Evaluations & Tools Used</div>
          </div>

          <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Partner Broker Clicks</span>
                <ExternalLink className="w-4 h-4 text-cyan-400"/>
              </div>
              <div className="text-3xl font-black text-white">{totalBrokerClicks}</div>
            </div>
            <div className="text-[10px] text-cyan-400 mt-4 font-mono truncate">
              {Object.entries(analyticsData.brokerClicks).length > 0
                ? Object.entries(analyticsData.brokerClicks).map(([broker, count]) => `${broker}: ${count}`).join(' | ')
                : 'No broker clicks yet'}
            </div>
          </div>

        </div>

        {/* Curriculum Module Progress Breakdown */}
        <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-emerald-400"/>
                <span>Global Curriculum Completion Overview</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Aggregated progression across all modules.
              </p>
            </div>
            <button
              onClick={() => setShowUserListModal(true)}
              className="text-xs font-bold text-cyan-400 hover:underline cursor-pointer flex items-center space-x-1"
            >
              <span>View Per-User Breakdown →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(analyticsData.curriculumModuleStats).map(([modId, stats]) => (
              <div key={modId} className={`p-4 rounded-xl border flex items-center justify-between ${
                stats.completed ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-navy-950 border-slate-800'
              }`}>
                <div className="truncate pr-2">
                  <div className="text-[10px] font-mono text-slate-400">MODULE {modId}</div>
                  <div className="text-xs font-bold text-white truncate">{stats.title}</div>
                </div>
                <div>
                  {stats.completed ? (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3"/>
                      <span>Completed</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">Pending</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User List Modal */}
        {showUserListModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-navy-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Users className="w-5 h-5"/>
                  <h3 className="text-lg font-bold text-white">Active Users Directory (By IP Fingerprint)</h3>
                </div>
                <button 
                  onClick={() => setShowUserListModal(false)}
                  className="text-slate-400 hover:text-white font-mono text-sm cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <p className="text-xs text-slate-300 mb-6">
                Click on any user below to inspect their individual curriculum module progress, PDF toolkit status, and tool engagement metrics.
              </p>

              <div className="space-y-3">
                {analyticsData.simulatedUsers.map((user, idx) => (
                  <div 
                    key={idx}
                    onClick={() => { setSelectedUser(user); }}
                    className="bg-navy-950 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div>
                      <div className="text-sm font-bold text-white font-mono flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{user.ipAddress}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Device: {user.device} | Last Active: {user.lastActive}</div>
                    </div>
                    <button className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold flex items-center space-x-1">
                      <Eye className="w-3.5 h-3.5"/>
                      <span>Inspect Profile</span>
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* Individual User Inspector Modal */}
        {selectedUser && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-navy-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-500/30">User Inspection Profile</span>
                  <h3 className="text-lg font-bold text-white font-mono mt-1">{selectedUser.ipAddress}</h3>
                </div>
                <button 
                  onClick={() => setSelectedUser(null)}
                  className="text-slate-400 hover:text-white font-mono text-sm cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              {/* User Summary Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-navy-950 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400">Completed Modules</div>
                  <div className="text-base font-bold text-emerald-400">{selectedUser.completedModules.length} / {curriculumData.length}</div>
                </div>
                <div className="bg-navy-950 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400">PDF Toolkit</div>
                  <div className="text-base font-bold text-emerald-400">{selectedUser.toolkitDownloaded ? 'Acquired ✓' : 'Not Downloaded'}</div>
                </div>
                <div className="bg-navy-950 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400">Risk Quiz</div>
                  <div className="text-base font-bold text-amber-400">{selectedUser.quizCompleted ? 'Completed ✓' : 'Not Taken'}</div>
                </div>
                <div className="bg-navy-950 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400">Calculators Used</div>
                  <div className="text-base font-bold text-cyan-400">{selectedUser.calculatorUsed} Times</div>
                </div>
              </div>

              {/* PDF Toolkit Acquisition Details Box */}
              <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Download className="w-5 h-5"/>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Starter Toolkit PDF Status</div>
                    <div className="text-xs font-mono text-emerald-400">{selectedUser.toolkitDetails}</div>
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${
                  selectedUser.toolkitDownloaded ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {selectedUser.toolkitDownloaded ? 'Downloaded' : 'No Download'}
                </span>
              </div>

              {/* Per-User Curriculum Breakdown */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Curriculum Module Progress Breakdown</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {curriculumData.map((mod) => {
                    // Type-safe string comparison for module completion matching
                    const isDone = selectedUser.completedModules.some(id => String(id) === String(mod.id));
                    return (
                      <div key={mod.id} className="bg-navy-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-300">Module {mod.id}: {mod.title}</span>
                        {isDone ? (
                          <span className="text-emerald-400 font-bold flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5"/>
                            <span>Completed</span>
                          </span>
                        ) : (
                          <span className="text-slate-500 font-mono">Pending</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Broker & Article Engagement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-white mb-2">Broker Clicks</div>
                  {Object.keys(selectedUser.brokerClicks).length > 0 ? (
                    Object.entries(selectedUser.brokerClicks).map(([broker, count], i) => (
                      <div key={i} className="text-xs text-emerald-400 font-mono">{broker}: {count} Clicks</div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-500">No broker clicks recorded</div>
                  )}
                </div>

                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-white mb-2">Articles Read</div>
                  {Object.keys(selectedUser.articleReads).length > 0 ? (
                    Object.entries(selectedUser.articleReads).map(([art, count], i) => (
                      <div key={i} className="text-xs text-cyan-400 font-mono truncate">{art}</div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-500">No article reads recorded</div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}