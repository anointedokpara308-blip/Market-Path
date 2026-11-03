import React, { useState } from 'react';
import { Calculator, DollarSign, ShieldAlert, PieChart, Layers } from 'lucide-react';

export default function CalculatorsSuite() {
  const [activeTab, setActiveTab] = useState(1); // 1: Position Size, 2: Profit & Pip, 3: Margin & Leverage

  // Tab 1 States: Position Size & Risk
  const [accountBalance, setAccountBalance] = useState(5000);
  const [riskPercentage, setRiskPercentage] = useState(2.0);
  const [stopLossPips, setStopLossPips] = useState(30);
  const [currencyPair, setCurrencyPair] = useState('EUR/USD');

  // Pair pip values per standard lot (100,000 units)
  const pairPipValues = {
    'EUR/USD (Pip = $10/Lot)': 10,
    'GBP/USD (Pip = $10/Lot)': 10,
    'USD/JPY (Pip = $6.70/Lot)': 6.7,
    'AUD/USD (Pip = $10/Lot)': 10,
    'XAU/USD (Pip = $10/Lot)': 10,
  };

  const activePipValuePerLot = pairPipValues[currencyPair] || 10;
  
  // Tab 1 Calculations
  const cashAtRisk = ((Number(accountBalance) || 0) * (riskPercentage / 100));
  const calculatedLots = (Number(stopLossPips) || 0) > 0 ? (cashAtRisk / ((Number(stopLossPips) || 0) * activePipValuePerLot)) : 0;
  const calculatedUnits = Math.round(calculatedLots * 100000);
  const valuePerPip = calculatedLots * activePipValuePerLot;

  // Tab 2 States: Profit & Pip Value
  const [positionSize, setPositionSize] = useState(1.0);
  const [targetProfitPips, setTargetProfitPips] = useState(50);
  const [tab2StopLoss, setTab2StopLoss] = useState(25);

  // Tab 2 Calculations
  const expectedProfit = (Number(positionSize) || 0) * (Number(targetProfitPips) || 0) * 10;
  const maxLoss = (Number(positionSize) || 0) * (Number(tab2StopLoss) || 0) * 10;
  const rrRatio = (Number(tab2StopLoss) || 0) > 0 ? ((Number(targetProfitPips) || 0) / Number(tab2StopLoss)).toFixed(1) : 0;

  // Tab 3 States: Margin & Leverage
  const [tradeSizeLots, setTradeSizeLots] = useState(1.0);
  const [leverage, setLeverage] = useState(30); // Default 1:30

  // Tab 3 Calculations (1 Standard Lot = $100,000 notional value)
  const requiredMargin = (Number(leverage) || 0) > 0 ? ((Number(tradeSizeLots) || 0) * 100000) / Number(leverage) : 0;

  // Helper to filter out letters and allow only numbers and dots
  const handleNumericInput = (setter) => (e) => {
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setter(val);
  };

  return (
    <section id='calculators' className="bg-navy-950 text-slate-100 font-sans py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>DYNAMIC INTERACTIVE CALCULATORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Precision Risk & Position Sizing
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Accurately calculate lot sizes, pip values, leverage margin requirements, and potential profits before placing a live order.
          </p>
        </div>

        {/* Outer Calculator Box Container */}
        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Top Switcher Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 bg-navy-950 p-2 rounded-2xl border border-slate-800/80">
            <button
              onClick={() => setActiveTab(1)}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === 1 
                  ? 'bg-emerald-500 text-navy-950 shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-navy-900/50'
              }`}
            >
              <span>1. Position Size & Risk</span>
            </button>

            <button
              onClick={() => setActiveTab(2)}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === 2 
                  ? 'bg-emerald-500 text-navy-950 shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-navy-900/50'
              }`}
            >
              <span>2. Profit & Pip Value</span>
            </button>

            <button
              onClick={() => setActiveTab(3)}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === 3 
                  ? 'bg-emerald-500 text-navy-950 shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-navy-900/50'
              }`}
            >
              <span>3. Margin & Leverage</span>
            </button>
          </div>

          {/* TAB 1: POSITION SIZE & RISK */}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Inputs */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Account Balance Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Account Balance ($ USD)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={accountBalance}
                    onChange={handleNumericInput(setAccountBalance)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Risk Percentage Range Slider & Input Display */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-300">
                      Risk Percentage (%)
                    </label>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {riskPercentage.toFixed(1)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="10"
                    step="0.1"
                    value={riskPercentage}
                    onChange={(e) => setRiskPercentage(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 bg-navy-950 cursor-pointer h-2 rounded-lg"
                  />
                </div>

                {/* Stop Loss & Currency Pair Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      Stop Loss (Pips)
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={stopLossPips}
                      onChange={handleNumericInput(setStopLossPips)}
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      Currency Pair
                    </label>
                    <select
                      value={currencyPair}
                      onChange={(e) => setCurrencyPair(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                    >
                      {Object.keys(pairPipValues).map((pair) => (
                        <option key={pair} value={pair}>
                          {pair}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Right Column Output Display Board */}
              <div className="lg:col-span-5 bg-navy-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    RECOMMENDED POSITION SIZE
                  </div>
                  
                  <div className="flex items-baseline space-x-2 mb-1">
                    <span className="text-5xl font-black text-white tracking-tight">
                      {calculatedLots.toFixed(2)}
                    </span>
                    <span className="text-base font-bold text-emerald-400">Lots</span>
                  </div>

                  <div className="text-xs text-slate-400 font-mono mb-6">
                    Equivalent to <span className="text-slate-200 font-semibold">{calculatedUnits.toLocaleString()}</span> Units
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                  <div className="bg-navy-900/60 p-3 rounded-xl border border-slate-800/60">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">TOTAL CASH AT RISK</div>
                    <div className="text-lg font-extrabold text-rose-400 font-mono">
                      ${cashAtRisk.toFixed(2)}
                    </div>
                  </div>

                  <div className="bg-navy-900/60 p-3 rounded-xl border border-slate-800/60">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">VALUE PER PIP</div>
                    <div className="text-lg font-extrabold text-emerald-400 font-mono">
                      ${valuePerPip.toFixed(2)}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: PROFIT & PIP VALUE */}
          {activeTab === 2 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Position Size (Standard Lots)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={positionSize}
                    onChange={handleNumericInput(setPositionSize)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Target Profit (Pips)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={targetProfitPips}
                    onChange={handleNumericInput(setTargetProfitPips)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Stop Loss (Pips)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={tab2StopLoss}
                    onChange={handleNumericInput(setTab2StopLoss)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80">
                <div className="bg-navy-950 border border-emerald-500/30 p-5 rounded-2xl text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">EXPECTED PROFIT ($)</div>
                  <div className="text-3xl font-black text-emerald-400 font-mono">
                    +${expectedProfit.toFixed(2)}
                  </div>
                </div>

                <div className="bg-navy-950 border border-rose-500/30 p-5 rounded-2xl text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">MAX LOSS ($)</div>
                  <div className="text-3xl font-black text-rose-400 font-mono">
                    -${maxLoss.toFixed(2)}
                  </div>
                </div>

                <div className="bg-navy-950 border border-cyan-500/30 p-5 rounded-2xl text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">RISK:REWARD RATIO</div>
                  <div className="text-3xl font-black text-cyan-400 font-mono">
                    1 : {rrRatio}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MARGIN & LEVERAGE */}
          {activeTab === 3 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Trade Size (Lots)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={tradeSizeLots}
                    onChange={handleNumericInput(setTradeSizeLots)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Account Leverage Ratio
                  </label>
                  <select
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                  >
                    <option value={30}>1:30 (FCA / ASIC Standard Limit)</option>
                    <option value={50}>1:50 (US CFTC Limit)</option>
                    <option value={100}>1:100 (Professional Limit)</option>
                    <option value={200}>1:200 (Offshore Limit)</option>
                    <option value={500}>1:500 (High Leverage)</option>
                  </select>
                </div>
              </div>

              {/* Required Margin Output Display */}
              <div className="bg-navy-950 border border-amber-500/30 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    REQUIRED MARGIN TO OPEN TRADE
                  </div>
                  <div className="text-xs text-slate-400">
                    This amount will be locked by your broker as collateral.
                  </div>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight">
                  ${requiredMargin.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}