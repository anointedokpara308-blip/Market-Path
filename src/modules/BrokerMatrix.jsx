import React, { useState } from 'react';
import { ShieldCheck, Star, ExternalLink, Award, HelpCircle, X, CheckCircle2, UserCheck, Shield, Wallet } from 'lucide-react';

export default function BrokerMatrix() {
  const [filter, setFilter] = useState('All');
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  const brokers = [
    {
      name: 'Exness',
      rating: 5.0,
      reviews: '14.2k',
      tier: 'FCA, CySEC, FSC',
      spread: '0.0 - 0.1 pips',
      minDeposit: '$10',
      platforms: 'MT4, MT5, Exness Trade App',
      isFeatured: true, // Highlights Exness prominently
      badge: "Best Choice",
      regulationType: ['FCA'],
      affiliateLink: 'https://www.exness.com', // YOUR_EXNESS_AFFILIATE_LINK_HERE
    },
    {
      name: 'Pepperstone',
      rating: 4.9,
      reviews: '8.5k',
      tier: 'FCA, ASIC',
      spread: '0.0 - 0.2 pips',
      minDeposit: '$0',
      platforms: 'MT4, MT5, cTrader, TradingView',
      isFeatured: false,
      badge: null,
      regulationType: ['FCA', 'ASIC'],
      affiliateLink: '#',
    },
    {
      name: 'IC Markets',
      rating: 4.8,
      reviews: '10.1k',
      tier: 'ASIC, CySEC',
      spread: '0.0 - 0.1 pips',
      minDeposit: '$200',
      platforms: 'MT4, MT5, cTrader',
      isFeatured: false,
      badge: null,
      regulationType: ['ASIC'],
      affiliateLink: '#',
    },
    {
      name: 'OANDA',
      rating: 4.7,
      reviews: '6.3k',
      tier: 'FCA, NFA, ASIC',
      spread: '0.6 pips (Fixed)',
      minDeposit: '$0',
      platforms: 'MetaTrader 4, Web API',
      isFeatured: false,
      badge: null,
      regulationType: ['FCA', 'ASIC'],
      affiliateLink: '#',
    },
    {
      name: 'XM Group',
      rating: 4.6,
      reviews: '9.0k',
      tier: 'FCA, CySEC, ASIC',
      spread: '0.6 pips',
      minDeposit: '$5',
      platforms: 'MT4, MT5',
      isFeatured: false,
      badge: null,
      regulationType: ['FCA', 'ASIC'],
      affiliateLink: '#',
    },
  ];

  const filteredBrokers = brokers.filter((broker) => {
    if (filter === 'All') return true;
    return broker.regulationType.includes(filter);
  });

  return (
    <section id="brokers" className="bg-navy-950 text-slate-100 font-sans py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/85">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>INDEPENDENT AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Broker Comparison & Platform Matrix
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl">
              Transparent evaluation of regulated brokers suitable for complete beginners, featuring zero-conflict execution metrics.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2 bg-navy-900 p-1.5 rounded-xl border border-slate-800 w-fit">
            {['All', 'FCA', 'ASIC'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  filter === tab 
                    ? 'bg-emerald-500 text-navy-950 shadow-md shadow-emerald-500/20' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Brokers' : `${tab} Regulated`}
              </button>
            ))}
          </div>
        </div>

        {/* Setup Guide Banner Trigger */}
        <div className="bg-gradient-to-r from-navy-900 to-emerald-950/40 border border-slate-800 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">First time opening a regulated trading account?</h4>
              <p className="text-xs text-slate-400">Follow our step-by-step verification and account setup walkthrough before getting started.</p>
            </div>
          </div>
          <button
            onClick={() => setIsGuideModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all shadow-sm flex-shrink-0 cursor-pointer"
          >
            View Setup Guide
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-navy-900 border border-slate-800 rounded-2xl shadow-2xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-navy-950/60 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-6">Broker & Rating</th>
                <th className="py-4 px-6">Tier-1 Regulation</th>
                <th className="py-4 px-6">EUR/USD Spread</th>
                <th className="py-4 px-6">Min Deposit</th>
                <th className="py-4 px-6">Platforms</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredBrokers.map((broker, index) => (
                <tr 
                  key={index}
                  className={`transition-colors ${
                    broker.isFeatured 
                      ? 'bg-emerald-950/20 hover:bg-emerald-950/30 border-l-4 border-l-emerald-500' 
                      : 'hover:bg-navy-950/40'
                  }`}
                >
                  {/* Broker Name & Rating */}
                  <td className="py-5 px-6">
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-base font-bold text-white">{broker.name}</span>
                          {broker.badge && (
                            <span className="bg-emerald-500 text-navy-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-sm shadow-emerald-500/30">
                              <Award className="w-3 h-3" />
                              <span>{broker.badge}</span>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 mt-1 text-xs text-amber-400 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{broker.rating}</span>
                          <span className="text-slate-500 font-normal">({broker.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Regulation */}
                  <td className="py-5 px-6">
                    <span className="text-sm font-semibold text-emerald-400">
                      {broker.tier}
                    </span>
                  </td>

                  {/* Spread */}
                  <td className="py-5 px-6">
                    <span className="text-sm font-mono text-slate-200">
                      {broker.spread}
                    </span>
                  </td>

                  {/* Min Deposit */}
                  <td className="py-5 px-6">
                    <span className="text-sm font-bold text-white font-mono">
                      {broker.minDeposit}
                    </span>
                  </td>

                  {/* Platforms */}
                  <td className="py-5 px-6">
                    <span className="text-xs text-slate-300 font-medium">
                      {broker.platforms}
                    </span>
                  </td>

                  {/* Action Button (Affiliate link slot) */}
                  <td className="py-5 px-6 text-right">
                    <a
                      href={broker.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                        broker.isFeatured
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-navy-950 shadow-emerald-500/25 ring-2 ring-emerald-400/40'
                          : 'bg-navy-950 hover:bg-slate-800 text-slate-200 border border-slate-700'
                      }`}
                    >
                      <span>Visit Broker</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Broker Setup Guide Modal */}
      {isGuideModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-navy-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsGuideModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Step-by-Step Walkthrough</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              How to Open Your First Live Trading Account Safely
            </h3>

            {/* Steps Container */}
            <div className="space-y-6 text-slate-300 text-sm leading-relaxed mb-8">
              
              <div className="bg-navy-950 border border-slate-800 rounded-2xl p-5 flex items-start space-x-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>Choose a Tier-1 Regulated Broker</span>
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Always select brokers regulated by top financial authorities like the FCA (UK), ASIC (Australia), or CySEC (Cyprus). This ensures your funds are segregated and protected.
                  </p>
                </div>
              </div>

              <div className="bg-navy-950 border border-slate-800 rounded-2xl p-5 flex items-start space-x-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Complete KYC Identity Verification</span>
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Regulated brokers are legally required to verify your identity. Have a clear photo of your government-issued ID (passport or driver's license) and a recent utility bill or bank statement ready for address proof.
                  </p>
                </div>
              </div>

              <div className="bg-navy-950 border border-slate-800 rounded-2xl p-5 flex items-start space-x-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-emerald-400" />
                    <span>Select Account Type & Fund Securely</span>
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Start with a Standard or Cent account with low minimum deposits ($10–$50). Fund only using secure, verified payment methods matching your legal name.
                  </p>
                </div>
              </div>

              <div className="bg-navy-950 border border-slate-800 rounded-2xl p-5 flex items-start space-x-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Download MT4/MT5 & Login</span>
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Use your server credentials provided in your broker dashboard to log into MetaTrader or the broker's proprietary app, and always test with micro-lots first!
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setIsGuideModalOpen(false)}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-xs transition-all shadow-lg cursor-pointer"
              >
                Got It, Thanks!
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}