import React from 'react';
import { TrendingUp, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom TikTok Icon SVG component since Lucide does not include it natively
function TikTokIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.1v-3.5a6.37 6.37 0 0 0-.83-.05A6.34 6.34 0 0 0 3 15.57 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.16 8.16 0 0 0 4.91 1.63V7.23a4.85 4.85 0 0 1-1-.54z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-gray-800/80 text-gray-400 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand Info & Social Media Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <TrendingUp className="w-5 h-5 text-navy-900 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Market <span className="text-emerald-400">Path</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Educational resources, tools and insights to help beginners understand forex trading and make more informed decisions.
            </p>

            {/* Social Icons: Twitter, TikTok, Facebook */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl bg-navy-800 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-xl bg-navy-800 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-navy-800 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/roadmap" className="hover:text-emerald-400 transition-colors">Learn Forex</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Tools</Link></li>
              <li><Link to="/knowledge" className="hover:text-emerald-400 transition-colors">Platform Guides</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-emerald-400 transition-colors">Terms of Use</Link></li>
              <li><Link to="/affiliate-disclosure" className="hover:text-emerald-400 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Popular Topics */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Popular Topics</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/roadmap" className="hover:text-emerald-400 transition-colors">What is Forex?</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Position Size Calculator</Link></li>
              <li><Link to="/roadmap" className="hover:text-emerald-400 transition-colors">Risk Management Tips</Link></li>
              <li><Link to="/knowledge" className="hover:text-emerald-400 transition-colors">MT4 vs MT5</Link></li>
              <li><Link to="/roadmap" className="hover:text-emerald-400 transition-colors">Beginner Trading Strategies</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright Bar */}
        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2026 Market Path. All rights reserved.</p>
          <p className="max-w-2xl text-center md:text-right leading-relaxed">
            Affiliate Disclosure: Market Path may receive compensation from partner links. This does not influence our objective rating methodology or risk guidelines.
          </p>
        </div>

      </div>
    </footer>
  );
}