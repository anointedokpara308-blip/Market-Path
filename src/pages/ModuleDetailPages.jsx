import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from '../data/curriculumData';
import { ArrowLeft, CheckCircle2, Award, ExternalLink, BookOpen, Clock, Check } from 'lucide-react';

export default function ModuleDetailPage() {
  const { slug } = useParams();

  // Retrieve the selected module from curriculumData matching the URL slug
  const moduleData = curriculumData.find((mod) => mod.slug === slug) || curriculumData[0];
  const { fullContent } = moduleData;

  const [isCompleted, setIsCompleted] = useState(false);

  // Load completion status on mount
  useEffect(() => {
    const saved = localStorage.getItem('market_path_completed_modules');
    if (saved) {
      try {
        const completedIds = JSON.parse(saved);
        if (completedIds.includes(moduleData.id)) {
          setIsCompleted(true);
        }
      } catch (e) {
        console.error('Error reading completed modules', e);
      }
    }
  }, [moduleData.id]);

  // Toggle completion status and store in localStorage
  const toggleComplete = () => {
    const saved = localStorage.getItem('market_path_completed_modules');
    let completedIds = [];
    if (saved) {
      try {
        completedIds = JSON.parse(saved);
      } catch (e) {
        completedIds = [];
      }
    }

    if (isCompleted) {
      completedIds = completedIds.filter((id) => id !== moduleData.id);
      setIsCompleted(false);
    } else {
      if (!completedIds.includes(moduleData.id)) {
        completedIds.push(moduleData.id);
      }
      setIsCompleted(true);
    }

    localStorage.setItem('market_path_completed_modules', JSON.stringify(completedIds));
  };

  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Back Link */}
        <Link 
          to="/roadmap"
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Curriculum Modules</span>
        </Link>

        {/* Module Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-md border ${moduleData.badgeBg}`}>
                MODULE {moduleData.id}
              </span>
              <div className="flex items-center space-x-1 text-xs text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{moduleData.duration} • {moduleData.lessons}</span>
              </div>
            </div>

            {/* Mark as Complete Interactive Button */}
            <button
              onClick={toggleComplete}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                isCompleted 
                  ? 'bg-emerald-500 text-navy-950 shadow-lg shadow-emerald-500/20' 
                  : 'bg-navy-900 border border-slate-800 text-slate-300 hover:border-emerald-500/50'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-navy-950' : 'text-emerald-400'}`} />
              <span>{isCompleted ? 'Completed ✓' : 'Mark as Complete'}</span>
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {moduleData.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed border-l-4 border-emerald-500 pl-4 bg-navy-900/40 py-2 rounded-r-xl">
            {fullContent.overview}
          </p>
        </div>

        {/* Detailed Lesson Sections */}
        <div className="space-y-6 mb-12">
          {fullContent.sections.map((section, idx) => (
            <div key={idx} className="bg-navy-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">
                {section.heading}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-navy-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Key Lessons & Takeaways</span>
          </h3>
          <ul className="space-y-3">
            {fullContent.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exness Recommended Partner Callout Box */}
        {fullContent.recommendedBroker && (
          <div className="bg-gradient-to-r from-emerald-950/40 to-navy-900 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-emerald-500/10">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-emerald-500 text-navy-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mb-3">
                <Award className="w-3 h-3" />
                <span>RECOMMENDED BROKER FOR THIS MODULE</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Practice Strategy on {fullContent.recommendedBroker.name}
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                {fullContent.recommendedBroker.description}
              </p>
            </div>

            <a
              href={fullContent.recommendedBroker.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2 shadow-lg shadow-emerald-500/25 flex-shrink-0 cursor-pointer"
            >
              <span>Open Exness Account</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
}