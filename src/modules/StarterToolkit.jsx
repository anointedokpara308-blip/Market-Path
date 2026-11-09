import React, { useState } from 'react';
import { ShieldAlert, Download, CheckCircle2, Send, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { trackAction } from '../telemetry';

export default function StarterToolkit() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMessage('');

    // EmailJS configuration parameters
    const serviceID = 'service_7rjefxi';
    const templateID = 'template_yy6yebf';
    const publicKey = 'Q-G_OO5a4_5WV2ucF';

    const templateParams = {
      email: email,       // Matches {{email}} in EmailJS To field
      to_email: email,    // Backup parameter
      message: 'Here is your Forex Starter Toolkit PDF download link.'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        
        // Log telemetry event for PDF toolkit acquisition
        trackAction('toolkit_download');

        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        setErrorMessage('Failed to send email. Please try again later.');
      });
  };

  return (
    <section id="toolkit" className="bg-navy-950 text-slate-100 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Important Risk Warning & Regulatory Disclaimer Banner */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 flex items-start space-x-4">
          <div className="p-2 bg-amber-500/20 rounded-xl text-amber-400 flex-shrink-0 mt-0.5">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              IMPORTANT RISK WARNING & REGULATORY DISCLAIMER
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) on margin carries a high level of risk and may not be suitable for all investors. High leverage can work against you as well as for you. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite. You could sustain a loss of some or all of your initial investment.
            </p>
          </div>
        </div>

        {/* Toolkit Download Card */}
        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl">
            
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold mb-5">
              <Download className="w-3.5 h-3.5" />
              <span>Free Starter Package</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Download the 2026 Forex Starter Toolkit PDF
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Get our cheat sheet covering Pip formulas, Market Session Overlaps, Candlestick Cheatsheet, and Risk Calculation rules.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 flex items-center space-x-4 animate-fade-in">
                <div className="p-3 bg-emerald-500 text-navy-950 rounded-xl flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Toolkit Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    We’ve automatically emailed your PDF copy to <span className="text-emerald-400 font-semibold">{email}</span>. Check your inbox!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-700/80 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-extrabold px-8 py-3.5 rounded-2xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 flex-shrink-0 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="text-xs">Sending PDF...</span>
                    ) : (
                      <>
                        <span>Get PDF Toolkit</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
                {errorMessage && (
                  <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
                )}
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}