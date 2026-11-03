import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold">
            <Shield className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Last Updated: October 2026</p>
        </div>

        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              Market Path ("we," "our," or "us") respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our educational portal and utilize our interactive tools.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Personal Contact Data:</strong> When you subscribe to receive our downloadable PDF toolkit, we collect your email address via EmailJS.</li>
              <li><strong>Usage Data:</strong> We may collect non-identifiable technical data such as IP address, browser type, device details, and page interaction metrics to improve site performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Data</h2>
            <p>
              We collect personal information solely for delivering requested educational materials (such as the PDF Toolkit), communicating updates, and optimizing website user experience. We do not sell, rent, or trade your personal email address to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Cookies and Analytics</h2>
            <p>
              Market Path uses standard browser cookies and analytical scripts to store local operational preferences (such as calculator parameter states) and measure visitor engagements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Third-Party External Links</h2>
            <p>
              Our website contains links to third-party platforms, brokers, and partner services. Clicking these links transfers you to external websites governed by their own privacy terms and security protocols.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}