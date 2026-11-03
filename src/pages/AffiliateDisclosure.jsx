import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

export default function AffiliateDisclosure() {
  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold">
            <DollarSign className="w-4 h-4" />
            <span>Transparency Statement</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Affiliate Disclosure</h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Compliance Policy 2026</p>
        </div>

        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300">
              Market Path believes in 100% transparency. We want our visitors to clearly understand how this platform operates, stays free to access, and maintains business sustainability.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Partner Referral Links</h2>
            <p>
              Some of the links on Market Path (including broker review buttons, platform banners, and registration links) are affiliate links. If you click on one of these links and create a trading account with a partner broker (such as Exness), we may receive commission or compensation at <strong>no additional cost to you</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Integrity of Educational Content</h2>
            <p>
              Our affiliate partnerships never influence the educational objectivity of our curriculum, calculators, or risk management guides. We only feature platforms and regulated brokers that adhere to high industry standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. User Responsibility</h2>
            <p>
              You are under no obligation to use our referral links. We encourage all traders to perform personal due diligence, check local regulatory requirements, and choose trading service providers that fit their specific risk profile.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}