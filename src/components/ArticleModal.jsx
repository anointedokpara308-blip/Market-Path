import React from 'react';
import { X, Calendar, Clock, User, ShieldCheck } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-navy-800 border border-gray-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-navy-900 border-b border-gray-700 flex items-center justify-between">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
            {article.category}
          </span>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-gray-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-6 text-xs text-gray-400 border-b border-gray-700 pb-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-400" /> {article.readTime}</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-emerald-400" /> {article.author}</span>
          </div>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p className="text-base font-medium text-gray-200">{article.excerpt}</p>
            <p>
              Forex trading is built on understanding liquidity, currency quotes, and managing your risk-to-reward ratio. When starting out, keeping a disciplined journal and sticking strictly to the 1% risk rule ensures you preserve capital while building confidence.
            </p>
            <h3 className="text-lg font-bold text-white pt-2">Key Takeaways for Beginners</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Always calculate exact lot sizes relative to your stop loss and account balance.</li>
              <li>Avoid high leverage ratios above 1:30 until you have consistent profitability.</li>
              <li>Trade major session overlaps (London & New York) for optimal market liquidity and tighter spreads.</li>
            </ul>
          </div>

          <div className="bg-navy-900 border border-amber-500/30 rounded-xl p-4 flex items-start space-x-3 mt-6">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-300 leading-relaxed">
              <strong>Educational Disclaimer:</strong> This article is for informational purposes only and does not constitute financial advice. Trading foreign exchange carries high risk.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}