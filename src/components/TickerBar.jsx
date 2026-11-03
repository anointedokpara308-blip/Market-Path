import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ShieldAlert } from 'lucide-react';

export default function TickerBar() {
  const [selectedPair, setSelectedPair] = useState('EUR/USD');
  const [timeframe, setTimeframe] = useState('1M');

  const [pairsData, setPairsData] = useState({
    'EUR/USD': { price: 1.08628, change: 0.32, bid: 1.08624, ask: 1.08632, high: '1.0890', low: '1.0820', spread: '0.4 pips', history: [1.082, 1.083, 1.0825, 1.084, 1.0838, 1.085, 1.08628] },
    'GBP/USD': { price: 1.26510, change: 0.18, bid: 1.26504, ask: 1.26516, high: '1.2690', low: '1.2610', spread: '0.6 pips', history: [1.261, 1.262, 1.2618, 1.263, 1.264, 1.2645, 1.2651] },
    'USD/JPY': { price: 149.320, change: -0.21, bid: 149.314, ask: 149.326, high: '150.10', low: '148.90', spread: '0.8 pips', history: [149.8, 149.6, 149.7, 149.5, 149.4, 149.35, 149.32] },
    'AUD/USD': { price: 0.65820, change: 0.40, bid: 0.65814, ask: 0.65826, high: '0.6610', low: '0.6550', spread: '0.5 pips', history: [0.655, 0.656, 0.6558, 0.657, 0.6575, 0.658, 0.6582] },
    'XAU/USD': { price: 2348.24, change: 1.12, bid: 2348.00, ask: 2348.48, high: '2355.50', low: '2330.10', spread: '1.2 pips', history: [2330, 2335, 2338, 2342, 2340, 2345, 2348.24] }
  });

  // Live market tick simulator targeting individual pairs independently
  useEffect(() => {
    const interval = setInterval(() => {
      setPairsData(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(pair => {
          const current = updated[pair];
          const multiplier = pair === 'XAU/USD' ? 0.8 : (pair === 'USD/JPY' ? 0.05 : 0.00010);
          const randomDelta = (Math.random() - 0.49) * multiplier;
          const newPrice = Number((current.price + randomDelta).toFixed(pair === 'USD/JPY' ? 3 : (pair === 'XAU/USD' ? 2 : 5)));
          const newChange = Number((current.change + (randomDelta > 0 ? 0.01 : -0.01)).toFixed(2));
          const spreadOffset = pair === 'XAU/USD' ? 0.24 : 0.00004;
          const newHistory = [...current.history.slice(1), newPrice];

          updated[pair] = {
            ...current,
            price: newPrice,
            change: newChange,
            bid: Number((newPrice - spreadOffset).toFixed(pair === 'USD/JPY' ? 3 : (pair === 'XAU/USD' ? 2 : 5))),
            ask: Number((newPrice + spreadOffset).toFixed(pair === 'USD/JPY' ? 3 : (pair === 'XAU/USD' ? 2 : 5))),
            history: newHistory
          };
        });
        return updated;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const activeData = pairsData[selectedPair];

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-navy-950 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-navy-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        
        {/* Ticker Header & Timeframe Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Simulated Live Interbank Feed</span>
          </div>
          
          {/* Timeframe selector */}
          <div className="flex items-center space-x-1 bg-navy-950 p-1 rounded-lg border border-slate-800">
            {['1M', '5M', '1H'].map(tf => (
              <button 
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${timeframe === tf ? 'bg-emerald-500 text-navy-950' : 'text-slate-400 hover:text-white'}`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Currency Pair Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {Object.keys(pairsData).map(pair => {
            const data = pairsData[pair];
            const isSelected = selectedPair === pair;
            const isPositive = data.change >= 0;

            return (
              <button
                key={pair}
                onClick={() => setSelectedPair(pair)}
                className={`flex flex-col items-start px-4 py-3 rounded-xl border transition-all min-w-[130px] text-left cursor-pointer ${
                  isSelected 
                    ? 'bg-navy-950 border-emerald-500/80 shadow-lg shadow-emerald-500/10' 
                    : 'bg-navy-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-bold text-slate-400 mb-1">{pair}</span>
                <span className="text-sm font-extrabold text-white mb-1">{data.price.toFixed(pair === 'USD/JPY' ? 3 : (pair === 'XAU/USD' ? 2 : 5))}</span>
                <span className={`text-xs font-semibold flex items-center space-x-1 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isPositive ? <TrendingUp className="w-3 h-3 inline mr-0.5" /> : <TrendingDown className="w-3 h-3 inline mr-0.5" />}
                  <span>{isPositive ? `+${data.change.toFixed(2)}%` : `${data.change.toFixed(2)}%`}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pair Main Display Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center bg-navy-950/70 border border-slate-800/80 rounded-xl p-6">
          
          {/* Price & Change Details */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl font-black text-white tracking-tight">{selectedPair}</span>
              <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${activeData.change >= 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                {activeData.change >= 0 ? `+${activeData.change.toFixed(2)}%` : `${activeData.change.toFixed(2)}%`}
              </span>
            </div>
            <div className="text-3xl font-black text-white tracking-tight mb-3">
              {activeData.price.toFixed(selectedPair === 'USD/JPY' ? 3 : (selectedPair === 'XAU/USD' ? 2 : 5))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <div>Spread: <span className="text-slate-200 font-semibold">{activeData.spread}</span></div>
              <div>24h High: <span className="text-slate-200 font-semibold">{activeData.high}</span></div>
              <div>24h Low: <span className="text-slate-200 font-semibold">{activeData.low}</span></div>
            </div>
          </div>

          {/* Live Chart Simulation SVG Canvas */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold text-slate-400">Real-time Tick Waveform ({timeframe})</div>
              <div className="text-xs text-emerald-400 font-mono font-medium flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Ticks updated real-time</span>
              </div>
            </div>
            
            {/* SVG Line Graph */}
            <div className="h-24 w-full relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path 
                  d={`M 0,${80 - ((activeData.history[0] - Math.min(...activeData.history)) / (Math.max(...activeData.history) - Math.min(...activeData.history) || 1)) * 60} ` +
                     activeData.history.map((val, idx) => `L ${(idx / (activeData.history.length - 1)) * 300},${80 - ((val - Math.min(...activeData.history)) / (Math.max(...activeData.history) - Math.min(...activeData.history) || 1)) * 60}`).join(' ') +
                     ` L 300,80 L 0,80 Z`} 
                  fill="url(#chartGradient)" 
                />
                <path 
                  d={activeData.history.map((val, idx) => `${idx === 0 ? 'M' : 'L'} ${(idx / (activeData.history.length - 1)) * 300},${80 - ((val - Math.min(...activeData.history)) / (Math.max(...activeData.history) - Math.min(...activeData.history) || 1)) * 60}`).join(' ')} 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          </div>

        </div>

        {/* Ticker Footer Badge */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
          <div className="flex items-center space-x-1">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
            <span>Non-Dealing Desk Execution</span>
          </div>
          <div className="font-mono text-emerald-400">
            BID: <span className="text-white">{activeData.bid}</span> | ASK: <span className="text-white">{activeData.ask}</span>
          </div>
        </div>

      </div>
    </div>
  );
}