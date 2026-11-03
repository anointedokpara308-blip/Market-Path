import React, { useState } from 'react';
import { Search, X, BookOpen, Calculator, Shield, ArrowRight } from 'lucide-react';
import { articlesData } from '../data/articlesData';
import { curriculumData } from '../data/curriculumData';

export default function SearchDialog({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredArticles = articlesData.filter(art => 
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredModules = curriculumData.filter(mod =>
    mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mod.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-md flex items-start justify-center pt-20 px-4">
      <div className="bg-navy-800 border border-gray-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-700 bg-navy-900">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search guides, calculators, brokers..."
            className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="px-2 py-1 text-xs bg-navy-700 hover:bg-navy-600 rounded text-gray-300"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-4">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              Type to search across guides, curriculum modules, and tools...
            </div>
          ) : (
            <>
              {filteredModules.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Curriculum & Roadmap</span>
                  {filteredModules.map(mod => (
                    <div key={mod.id} onClick={onClose} className="p-3 bg-navy-900 hover:bg-navy-700 rounded-xl cursor-pointer transition-colors flex items-center justify-between">
                      <div>
                        <span className="text-xs text-emerald-400 font-semibold">{mod.number}</span>
                        <h4 className="text-sm font-bold text-white">{mod.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}

              {filteredArticles.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Articles & Insights</span>
                  {filteredArticles.map(art => (
                    <div key={art.id} onClick={onClose} className="p-3 bg-navy-900 hover:bg-navy-700 rounded-xl cursor-pointer transition-colors flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-400">{art.category} • {art.readTime}</span>
                        <h4 className="text-sm font-bold text-white">{art.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}

              {filteredModules.length === 0 && filteredArticles.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No results found for "{searchTerm}". Try another keyword.
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}