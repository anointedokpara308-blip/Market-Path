import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, CandlestickChart, Brain, ShieldAlert,
  Building2, Cpu, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function LearningRoadmap() {
  const modules = [
    {
      id: '01',
      slug: 'forex-basics-market-mechanics',
      title: '1. Forex Basics & Market Mechanics',
      description: 'Learn how currency pairs work, base vs quote currencies, pips, leverage, spreads, and market session overlaps.',
      icon: Globe,
      lessons: '5 Lessons',
      duration: '25 min',
      accent: 'emerald',
      topics: ['What is a Pip & Lot Size', 'Major vs Minor Pairs', 'Forex Market Hours'],
      borderHover: 'hover:border-emerald-500/60 hover:shadow-emerald-500/10',
      iconBg: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      checkColor: 'text-emerald-400',
      btnHover: 'hover:bg-emerald-500 hover:text-navy-950 hover:border-emerald-500 hover:shadow-emerald-500/20'
    },
    {
      id: '02',
      slug: 'technical-analysis-foundations',
      title: '2. Technical Analysis Foundations',
      description: 'Read candlestick charts, identify support and resistance levels, trend lines, and essential moving averages.',
      icon: CandlestickChart,
      lessons: '6 Lessons',
      duration: '35 min',
      accent: 'emerald',
      topics: ['Candlestick Patterns', 'Support & Resistance', 'Moving Averages & RSI'],
      borderHover: 'hover:border-emerald-500/60 hover:shadow-emerald-500/10',
      iconBg: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      checkColor: 'text-emerald-400',
      btnHover: 'hover:bg-emerald-500 hover:text-navy-950 hover:border-emerald-500 hover:shadow-emerald-500/20'
    },
    {
      id: '03',
      slug: 'trading-psychology-discipline',
      title: '3. Trading Psychology & Discipline',
      description: 'Master your emotions, eliminate revenge trading, overcome FOMO, and stick to a strict rule-based execution plan.',
      icon: Brain,
      lessons: '4 Lessons',
      duration: '20 min',
      accent: 'purple',
      topics: ['Overcoming FOMO', 'Trade Journaling Habit', 'Managing Drawdowns'],
      borderHover: 'hover:border-purple-500/60 hover:shadow-purple-500/10',
      iconBg: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-navy-950',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      checkColor: 'text-purple-400',
      btnHover: 'hover:bg-purple-500 hover:text-white hover:border-purple-500 hover:shadow-purple-500/20'
    },
    {
      id: '04',
      slug: 'risk-capital-preservation',
      title: '4. Risk & Capital Preservation',
      description: 'The 1%-2% risk rule, calculating exact lot sizes, setting stop loss orders, and maintaining a positive risk-to-reward ratio.',
      icon: ShieldAlert,
      lessons: '5 Lessons',
      duration: '30 min',
      accent: 'amber',
      topics: ['The 1% Golden Rule', 'Risk-to-Reward Ratio', 'Trailing Stop Loss'],
      borderHover: 'hover:border-amber-500/60 hover:shadow-amber-500/10',
      iconBg: 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-navy-950',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      checkColor: 'text-amber-400',
      btnHover: 'hover:bg-amber-500 hover:text-navy-950 hover:border-amber-500 hover:shadow-amber-500/20'
    },
    {
      id: '05',
      slug: 'how-to-select-a-safe-broker',
      title: '5. How to Select a Safe Broker',
      description: 'Identify Tier-1 regulation (FCA, ASIC), recognize red flags, understand ECN/STP execution, and minimize hidden fees.',
      icon: Building2,
      lessons: '4 Lessons',
      duration: '20 min',
      accent: 'rose',
      topics: ['Tier-1 Regulators', 'ECN vs Dealing Desk', 'Deposit/Withdrawal Safety'],
      borderHover: 'hover:border-rose-500/60 hover:shadow-rose-500/10',
      iconBg: 'bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-navy-950',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      checkColor: 'text-rose-400',
      btnHover: 'hover:bg-rose-500 hover:text-white hover:border-rose-500 hover:shadow-rose-500/20'
    },
    {
      id: '06',
      slug: 'intro-to-automated-algo-trading',
      title: '6. Intro to Automated & Algo Trading',
      description: 'Understand Expert Advisors (EAs), backtesting trading strategies with historical tick data, and algorithmic execution.',
      icon: Cpu,
      lessons: '5 Lessons',
      duration: '30 min',
      accent: 'indigo',
      topics: ['EA & Algo Principles', 'Strategy Backtesting', 'VPS Setup Basics'],
      borderHover: 'hover:border-indigo-500/60 hover:shadow-indigo-500/10',
      iconBg: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-navy-950',
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      checkColor: 'text-indigo-400',
      btnHover: 'hover:bg-indigo-500 hover:text-white hover:border-indigo-500 hover:shadow-indigo-500/20'
    }
  ];

  return (
    <section id='roadmap' className="bg-navy-950 text-slate-100 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>COMPLETE CURRICULUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Step-by-Step Learning Roadmap
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-2xl">
              Master forex fundamentals systematically with structured bite-sized modules.
            </p>
          </div>

          <div className="text-xs font-mono font-semibold text-slate-400 bg-navy-900 border border-slate-800 px-4 py-2.5 rounded-xl w-fit">
            Progress: <span className="text-emerald-400 font-bold">0 of 6 Modules Done</span>
          </div>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;

            return (
              <div
                key={mod.id}
                className={`group bg-navy-900 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 shadow-lg ${mod.borderHover}`}
              >
                <div>
                  {/* Top Header: Icon & Module Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${mod.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${mod.badgeBg}`}>
                      MODULE {mod.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-100 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {mod.description}
                  </p>

                  {/* Checklist Topics */}
                  <ul className="space-y-2.5 mb-8">
                    {mod.topics.map((topic, index) => (
                      <li key={index} className="flex items-center space-x-2.5 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${mod.checkColor}`} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Meta Info & Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <div className="text-xs font-mono text-slate-400">
                    {mod.lessons} • {mod.duration}
                  </div>
                  <Link
                    to={`/roadmap/${mod.slug}`}
                    className={`bg-navy-950 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-800 transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${mod.btnHover}`}
                  >
                    <span>Start Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* See All Curriculum Button */}
        <div className="mt-12 text-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <span>See All Curriculum Modules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}