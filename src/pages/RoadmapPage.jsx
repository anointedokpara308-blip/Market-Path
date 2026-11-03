import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { curriculumData } from '../data/curriculumData';
import { BookOpen, Search, CheckCircle2, ArrowRight, Trophy, Share2, Download, Loader2, KeyRound } from 'lucide-react';

export default function RoadmapPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [completedModules, setCompletedModules] = useState([]);
  
  // Sync Code Modal & Loading States
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [syncMode, setSyncMode] = useState('export'); // 'export' or 'import'
  const [importCodeInput, setImportCodeInput] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');
  const [exportCode, setExportCode] = useState('');

  // Load completed modules from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('market_path_completed_modules');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedModules(parsed);
        generateSyncCode(parsed);
      } catch (e) {
        console.error('Error parsing completed modules', e);
      }
    } else {
      generateSyncCode([]);
    }
  }, []);

  // Generate a unique encoded sync code based on completed modules
  const generateSyncCode = (modulesArray) => {
    const modsString = modulesArray.join(',');
    const randomSalt = Math.random().toString(36).substring(2, 6).toUpperCase();
    const encoded = `MP-V1-${btoa(modsString)}-${randomSalt}`;
    setExportCode(encoded);
  };

  // Handle importing a sync code from another device with a loading simulation
  const handleImportProgress = () => {
    if (!importCodeInput.trim()) {
      setSyncMessage('Please enter a valid sync code.');
      return;
    }

    setIsSyncing(true);
    setSyncMessage('Connecting to secure sync node...');

    setTimeout(() => {
      try {
        // Expected format: MP-V1-[base64]-[salt]
        const parts = importCodeInput.trim().split('-');
        if (parts.length >= 3 && parts[0] === 'MP') {
          const decodedModsString = atob(parts[2]);
          const parsedModules = decodedModsString ? decodedModsString.split(',').map(Number).filter(Boolean) : [];
          
          setCompletedModules(parsedModules);
          localStorage.setItem('market_path_completed_modules', JSON.stringify(parsedModules));
          generateSyncCode(parsedModules);
          
          setIsSyncing(false);
          setSyncMessage('Success! Progress fully restored.');
          setTimeout(() => {
            setShowSyncModal(false);
            setSyncMessage('');
            setImportCodeInput('');
          }, 1500);
        } else {
          setIsSyncing(false);
          setSyncMessage('Invalid sync code format. Please check and try again.');
        }
      } catch (e) {
        setIsSyncing(false);
        setSyncMessage('Failed to decode sync code. Ensure it is correct.');
      }
    }, 3500); // Simulated 3.5-second secure loading state
  };

  const categories = ['All', 'Beginner', 'Psychology', 'Risk', 'Brokers', 'Advanced'];

  const filteredModules = curriculumData.filter((mod) => {
    const matchesSearch =
      mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || mod.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalModules = curriculumData.length;
  const completedCount = completedModules.length;
  const progressPercentage = Math.round((completedCount / totalModules) * 100);

  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>FULL ACADEMY CURRICULUM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Forex Educational Roadmap
          </h1>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Explore our structured curriculum modules designed to guide you step-by-step from beginner basics to advanced trading discipline.
          </p>
        </div>

        {/* Progress Tracker Card with Sync Button */}
        <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 mb-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4 w-full lg:w-auto">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Your Learning Progress</div>
              <div className="text-lg font-extrabold text-white">
                {completedCount} of {totalModules} Modules Completed ({progressPercentage}%)
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="w-full sm:w-48 bg-navy-950 rounded-full h-3 p-0.5 border border-slate-800">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <button
              onClick={() => { setShowSyncModal(true); setSyncMode('export'); }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
            >
              <Share2 className="w-4 h-4" />
              <span>Cross-Device Sync</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search curriculum modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-navy-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-navy-900 p-1.5 rounded-xl border border-slate-800 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-navy-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((mod) => {
            const Icon = mod.icon || BookOpen;
            const isCompleted = completedModules.includes(mod.id);

            return (
              <div
                key={mod.id}
                className={`group bg-navy-900 border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 shadow-lg ${
                  isCompleted ? 'border-emerald-500/50 bg-navy-900/90' : 'border-slate-800/90 hover:border-emerald-500/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${mod.iconBg || 'bg-emerald-500/10 text-emerald-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {isCompleted && (
                        <span className="inline-flex items-center space-x-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Completed</span>
                        </span>
                      )}
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${mod.badgeBg}`}>
                        MODULE {mod.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {mod.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {mod.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center space-x-2.5 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${mod.checkColor || 'text-emerald-400'}`} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-slate-400">
                    {mod.duration}
                  </span>

                  <Link
                    to={`/roadmap/${mod.slug}`}
                    className={`bg-navy-950 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-800 transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${mod.btnHover}`}
                  >
                    <span>{isCompleted ? 'Review Module' : 'Start Module'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Cross-Device Sync Modal */}
      {showSyncModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2 text-emerald-400">
                <KeyRound className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Cross-Device Progress Sync</h3>
              </div>
              <button 
                onClick={() => { setShowSyncModal(false); setSyncMessage(''); }}
                className="text-slate-400 hover:text-white font-mono text-sm cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {/* Mode Selector Tabs */}
            <div className="grid grid-cols-2 gap-2 bg-navy-950 p-1.5 rounded-xl border border-slate-800 mb-6">
              <button
                onClick={() => { setSyncMode('export'); setSyncMessage(''); }}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  syncMode === 'export' ? 'bg-emerald-500 text-navy-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Export Sync Key
              </button>
              <button
                onClick={() => { setSyncMode('import'); setSyncMessage(''); }}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  syncMode === 'import' ? 'bg-emerald-500 text-navy-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Import Sync Key
              </button>
            </div>

            {/* Export Mode Content */}
            {syncMode === 'export' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Copy your unique sync code below and paste it on your other device (like your laptop) to instantly load all your completed roadmap modules.
                </p>
                <div className="bg-navy-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 break-all select-all">
                  {exportCode}
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(exportCode);
                    setSyncMessage('Sync code copied to clipboard!');
                  }}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-extrabold text-xs transition-all cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Copy Sync Code</span>
                </button>
              </div>
            )}

            {/* Import Mode Content */}
            {syncMode === 'import' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Paste your sync code from your other device below to restore your learning progress instantly.
                </p>
                <textarea
                  rows={3}
                  placeholder="Paste your MP-V1-... sync code here"
                  value={importCodeInput}
                  onChange={(e) => setImportCodeInput(e.target.value)}
                  disabled={isSyncing}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
                <button
                  onClick={handleImportProgress}
                  disabled={isSyncing}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-navy-950 font-extrabold text-xs transition-all cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2"
                >
                  {isSyncing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Syncing with Cloud Node (Restoring progress)...</span>
                    </>
                  ) : (
                    <span>Restore Progress</span>
                  )}
                </button>
              </div>
            )}

            {syncMessage && (
              <div className={`mt-4 p-3 rounded-xl text-xs font-mono text-center ${
                syncMessage.includes('Success') || syncMessage.includes('copied') ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
              }`}>
                {syncMessage}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}