import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold">
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Terms of Use</h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Effective Date: October 2026</p>
        </div>

        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>Notice:</strong> All materials provided on Market Path are strictly for educational and informational purposes only. Nothing on this website constitutes financial, investment, or trading advice.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Educational Disclaimer</h2>
            <p>
              The content, calculators, candlestick charts, and curriculum modules published on Market Path do not constitute financial advice, personalized trading signals, or solicitation to buy or sell securities, currencies, or derivatives.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. High Risk Warning</h2>
            <p>
              Trading Foreign Exchange (Forex) and CFDs involves substantial risk of loss and is not suitable for all investors. Leveraged products can lead to severe loss of capital. You are solely responsible for managing your financial risk and performing independent due diligence.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
            <p>
              All original educational copy, custom chart components, calculators, design layout, and downloadable PDF toolkits are protected intellectual property of Market Path. Unauthorized redistribution or reproduction is prohibited.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}