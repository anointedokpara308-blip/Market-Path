import React, { useState } from 'react';
import { articlesData } from '../data/articlesData';
import { BookOpen, Search, Clock, ArrowRight } from 'lucide-react';

export default function KnowledgeCenterPage({ onSelectArticle }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Beginner', 'Risk Management', 'Platforms', 'Advanced', 'Macroeconomics', 'Psychology'];

  const filteredArticles = articlesData.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE CENTER & GUIDES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Market Guides & Knowledge Hub
          </h1>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Explore deep-dive technical guides, risk management frameworks, platform comparisons, and market psychology insights.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search market guides..."
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle && onSelectArticle(art)}
              className={`group bg-navy-900 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 shadow-lg cursor-pointer ${art.hoverBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${art.badgeBg}`}>
                    {art.category}
                  </span>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {art.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto text-xs">
                <span className="text-slate-500 font-mono">{art.author}</span>
                <span className={`font-bold text-emerald-400 flex items-center space-x-1 transition-colors ${art.btnHover}`}>
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}