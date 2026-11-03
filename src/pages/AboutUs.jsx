import React from 'react';
import { ShieldCheck, Target, Award, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            About Market Path
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Empowering Retail Forex Traders Worldwide
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Market Path is built to bridge the gap between complex institutional foreign exchange markets and practical retail trading education.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
            <Target className="w-6 h-6 text-emerald-400" />
            <span>Our Core Mission</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            The foreign exchange market is the largest and most liquid financial market in the world, processing over $7.5 trillion in daily volume. However, upwards of 70-80% of retail traders lose money due to inadequate risk management, predatory Signal services, and poor technical foundation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Market Path was constructed to deliver structured, textbook-grade curriculum, interactive tools, and transparent risk management methodologies so aspiring traders can make objective, informed decisions.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-navy-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl w-fit text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Structured Education</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Step-by-step module curriculums designed to take you from foundational market mechanics to advanced price action execution.
            </p>
          </div>

          <div className="bg-navy-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl w-fit text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Risk-First Discipline</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We prioritize capital protection above profit targets, offering position sizing calculators and strict draw-down guidelines.
            </p>
          </div>

          <div className="bg-navy-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl w-fit text-emerald-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Uncompromising Transparency</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Clear affiliate disclosures, objective broker evaluations, and zero "get-rich-quick" promises.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}