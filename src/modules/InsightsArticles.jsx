import React from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/articlesData';
import { BookOpen, Clock, ArrowRight, Calendar, Globe } from 'lucide-react';
import { trackAction } from '../telemetry';

export default function InsightsArticles({ onSelectArticle }) {
  // Only display the first 3 articles on the homepage
  const homeArticles = articlesData.slice(0, 3);

  const handleArticleClick = (art) => {
    trackAction('article_read', { articleTitle: art.title });
    if (onSelectArticle) {
      onSelectArticle(art);
    }
  };

  return (
    <section id="articles" className="bg-navy-950 text-slate-100 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Title */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Recent Market Articles & Guides
          </h2>
          <p className="text-slate-400 mt-2 text-base">
            Practical strategies, risk tips, and technical analysis guides.
          </p>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {homeArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => handleArticleClick(art)}
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

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
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

        {/* See More Articles CTA Button */}
        <div className="mb-20 text-center">
          <Link
            to="/knowledge"
            className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <span>See More Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Live Economic Calendar Widget Section */}
        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-400 text-xs font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>LIVE MARKET FEED</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Global Economic Calendar
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Track high-impact macroeconomic data releases driving currency volatility today.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono bg-navy-950 px-4 py-2 rounded-xl border border-slate-800 w-fit">
              <Globe className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Times set to Local Timezone</span>
            </div>
          </div>

          {/* Embedded TradingView / Financial Economic Calendar Widget Container */}
          <div className="w-full h-[540px] bg-navy-950 rounded-2xl border border-slate-800 overflow-hidden relative flex items-center justify-center">
            {/* iframe widget for real-time live economic calendar */}
            <iframe
              title="Economic Calendar"
              src="https://s.tradingview.com/embed-widget/events/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22colorTheme%22%3A%22dark%22%2C%22importanceFilter%22%3A%220%2C1%22%2C%22currencyFilter%22%3A%22USD%2CEUR%2CGBP%2CJPY%2CAUD%2CCAD%2CNZD%2CCHF%22%7D"
              className="w-full h-full border-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}