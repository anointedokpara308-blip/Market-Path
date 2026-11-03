import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TrendingUp, Search, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const tickerContainerRef = useRef(null);

  // Dynamically embed TradingView Live Ticker Tape Widget
  useEffect(() => {
    if (tickerContainerRef.current) {
      tickerContainerRef.current.innerHTML = '';
      
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.type = 'text/javascript';
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "FOREXCOM:EURUSD", title: "EUR/USD" },
          { proName: "FOREXCOM:GBPUSD", title: "GBP/USD" },
          { proName: "FOREXCOM:USDJPY", title: "USD/JPY" },
          { proName: "FOREXCOM:AUDUSD", title: "AUD/USD" },
          { proName: "TVC:GOLD", title: "Gold (XAUUSD)" },
          { proName: "TVC:SILVER", title: "Silver (XAGUSD)" },
          { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
          { proName: "BITSTAMP:ETHUSD", title: "ETH/USD" },
          { proName: "BINANCE:SOLUSD", title: "SOL/USD" },
          { proName: "INDEX:SPX", title: "S&P 500" },
          { proName: "INDEX:IUXX", title: "Nasdaq 100" }
        ],
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: "regular", // Standard non-scrolling layout
        colorTheme: "dark",
        locale: "en"
      });

      tickerContainerRef.current.appendChild(script);
    }
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false); // Close mobile menu if open

    if (location.pathname === '/') {
      // If already on home page, scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-gray-800">
      
      {/* Real Live Market Feed Bar (No Forced Auto-Scroll, Fully Live Up/Down Prices) */}
      <div className="bg-navy-950 border-b border-gray-800/80 px-2 py-1 overflow-x-auto">
        <div 
          ref={tickerContainerRef} 
          className="tradingview-widget-container max-w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div onClick={() => handleNavClick('home')} className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <TrendingUp className="w-6 h-6 text-navy-900 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              Market <span className="text-emerald-400">Path</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-400 block -mt-1">
              Learn • Practice • Grow
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <button onClick={() => handleNavClick('home')} className="text-white hover:text-emerald-400 transition-colors cursor-pointer">Home</button>
          <button onClick={() => handleNavClick('roadmap')} className="hover:text-emerald-400 transition-colors cursor-pointer">Learn Forex</button>
          <button onClick={() => handleNavClick('calculators')} className="hover:text-emerald-400 transition-colors cursor-pointer">Calculators</button>
          <button onClick={() => handleNavClick('brokers')} className="hover:text-emerald-400 transition-colors cursor-pointer">Brokers</button>
          <button onClick={() => handleNavClick('articles')} className="hover:text-emerald-400 transition-colors cursor-pointer">Insights</button>
          <button onClick={() => handleNavClick('quiz')} className="hover:text-emerald-400 transition-colors cursor-pointer">Risk Quiz</button>
        </nav>

        {/* Action Controls (Hidden on tablets, visible on large desktop screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-800 border border-gray-700/60 text-gray-400 hover:text-white hover:border-gray-600 text-xs transition-all cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search guides...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-gray-900 border border-gray-700 rounded text-gray-400">⌘K</kbd>
          </button>

          <button 
            onClick={() => handleNavClick('roadmap')}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-900 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-navy-800 text-gray-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-b border-gray-800 px-6 py-4 space-y-3">
          <button onClick={() => handleNavClick('home')} className="block text-left w-full text-gray-200 hover:text-emerald-400 py-1.5 cursor-pointer">Home</button>
          <button onClick={() => handleNavClick('roadmap')} className="block text-left w-full text-gray-200 hover:text-emerald-400 py-1.5 cursor-pointer">Learn Forex Roadmap</button>
          <button onClick={() => handleNavClick('calculators')} className="block text-left w-full text-gray-200 hover:text-emerald-400 py-1.5 cursor-pointer">Trading Calculators</button>
          <button onClick={() => handleNavClick('brokers')} className="block text-left w-full text-gray-200 hover:text-emerald-400 py-1.5 cursor-pointer">Broker Reviews & Matrix</button>
          <button onClick={() => handleNavClick('articles')} className="block text-left w-full text-gray-200 hover:text-emerald-400 py-1.5 cursor-pointer">Market Insights & Articles</button>
          <button onClick={() => handleNavClick('quiz')} className="block text-left w-full text-gray-200 hover:text-emerald-400 py-1.5 cursor-pointer">Risk Assessment Quiz</button>
          <button 
            onClick={onOpenSearch}
            className="flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-navy-800 border border-gray-700/60 text-gray-400 hover:text-white hover:border-gray-600 text-xs transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>Search guides...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-gray-900 border border-gray-700 rounded text-gray-400">⌘K</kbd>
          </button>

          <div className="pt-2">
            <button 
              onClick={() => handleNavClick('roadmap')} 
              className="block w-full py-2.5 text-center rounded-xl bg-emerald-500 text-navy-900 font-bold cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}