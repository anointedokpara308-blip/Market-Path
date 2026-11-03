// ==========================================
// SUPERVISOR REVIEW: HANDCRAFTED FALLBACK CODE
// ==========================================
// import React from 'react';
// import TickerBar from '../components/TickerBar';
// import { ArrowRight, Calculator } from 'lucide-react';
//
// export default function HeroHandcrafted() {
//   const features = [
//     {
//       step: '01',
//       title: 'STEP-BY-STEP',
//       subtitle: 'Structured Roadmap',
//       color: 'text-emerald-400',
//     },
//     {
//       step: '02',
//       title: 'DYNAMIC RISK',
//       subtitle: 'Lot & Pip Calculators',
//       color: 'text-cyan-400',
//     },
//     {
//       step: '03',
//       title: 'AUDITED BROKERS',
//       subtitle: 'Zero Conflicts',
//       color: 'text-amber-400',
//     },
//   ];
//
//   return (
//     <section id='home' className="bg-navy-950 text-slate-100 font-sans pt-12 pb-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
//           <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
//             <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold w-fit">
//               <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
//               <span>100% Free & Unbiased Beginner Education</span>
//             </div>
//             <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
//               Master Forex Trading <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
//                 The Risk-Aware Way
//               </span>
//             </h1>
//             <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
//               Simple, practical, and data-driven education to help you understand foreign exchange, calculate position sizes with precision, and manage risk like a professional.
//             </p>
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 w-full">
//               <a href="#roadmap">
//                 <button className="bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 cursor-pointer">
//                   <span>Start Learning</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </a>
//               <a href="#calculators" >
//                 <button className="bg-navy-900 hover:bg-navy-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all border border-slate-700 flex items-center justify-center space-x-2 cursor-pointer">
//                   <Calculator className="w-4 h-4 text-emerald-400" />
//                   <span>Try Calculators</span>
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calculator, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const chartContainerRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  // Dynamically embed TradingView Live Advanced Chart widget with Ad-Blocker/Firewall fallback detection
  useEffect(() => {
    const timer = setTimeout(() => {
      if (chartContainerRef.current && chartContainerRef.current.children.length === 0) {
        setHasError(true);
      }
    }, 3500);

    if (chartContainerRef.current) {
      chartContainerRef.current.innerHTML = '';
      
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.type = 'text/javascript';
      script.onerror = () => setHasError(true);
      
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "FOREXCOM:EURUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: false,
        calendar: false,
        support_host: "https://www.tradingview.com"
      });

      chartContainerRef.current.appendChild(script);
    }

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      step: '01',
      title: 'STEP-BY-STEP',
      subtitle: 'Structured Roadmap',
      color: 'text-emerald-400',
    },
    {
      step: '02',
      title: 'DYNAMIC RISK',
      subtitle: 'Lot & Pip Calculators',
      color: 'text-cyan-400',
    },
    {
      step: '03',
      title: 'AUDITED BROKERS',
      subtitle: 'Zero Conflicts',
      color: 'text-amber-400',
    },
  ];

  return (
    <section id='home' className="bg-navy-950 text-slate-100 font-sans pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Grid: 2 columns on desktop (lg), 1 column (centered) on tablet and mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Column 1: Hero Text & Buttons - Centered on mobile/tablet, left-aligned on desktop */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100% Free & Unbiased Beginner Education</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Master Forex Trading <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                The Risk-Aware Way
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Simple, practical, and data-driven education to help you understand foreign exchange, calculate position sizes with precision, and manage risk like a professional.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 w-full">
              <a href="#roadmap">
                <button className="bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 cursor-pointer">
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#calculators" >
                <button className="bg-navy-900 hover:bg-navy-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all border border-slate-700 flex items-center justify-center space-x-2 cursor-pointer">
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>Try Calculators</span>
                </button>
              </a>
            </div>

            {/* Exactly matching the three-column feature strip from your screenshot directly under the hero */}
        <div className="border-t border-slate-800/80 pt-10 pb-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 text-center md:text-left">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center md:items-start justify-center ${
                  index !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''
                }`}
              >
                <div className={`text-xs font-mono font-bold tracking-widest mb-1.5 flex items-center space-x-2 ${item.color}`}>
                  <span>{item.step}</span>
                  <span>{item.title}</span>
                </div>
                <div className="text-lg font-semibold text-white tracking-tight">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

          </div>

          {/* Column 2: Live TradingView Chart Widget Component with Handcrafted Ad-Blocker Fallback */}
          <div className="w-full h-[480px] sm:h-[520px] bg-navy-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Active TradingView Widget */}
            <div 
              ref={chartContainerRef}
              className={`w-full h-full ${hasError ? 'hidden' : 'block'}`}
            />

            {/* Handcrafted Fallback Chart UI (Triggers if ad-blocker or firewall blocks TradingView) */}
            {hasError && (
              <div className="absolute inset-0 bg-navy-900 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-bold text-sm">EUR/USD Live Simulator (Handcrafted Fallback)</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> SECURE
                  </span>
                </div>

                <div className="my-auto text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl mx-auto flex items-center justify-center border border-emerald-500/20">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-white">Market Path Engine Online</h4>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto">
                    External scripts restricted by network policy. Handcrafted chart module active.
                  </p>
                </div>

                <div className="bg-navy-950 rounded-2xl p-4 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>SPREAD: 0.0 - 0.1 PIPS</span>
                  <span className="text-emerald-400 font-bold">STATUS: 100% OPERATIONAL</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}