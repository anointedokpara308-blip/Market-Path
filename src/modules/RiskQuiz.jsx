import React, { useState } from 'react';
import { HelpCircle, RefreshCw, ShieldAlert, ArrowRight } from 'lucide-react';

export default function RiskQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ q1: null, q2: null, q3: null });
  const [result, setResult] = useState(null);

  const questions = {
    1: {
      question: "1. What is your main objective with Forex trading?",
      options: [
        { label: "Consistent Capital Growth", desc: "Low risk, steady compounding over time.", score: 1 },
        { label: "Supplemental Monthly Income", desc: "Balanced risk, active swing trading.", score: 2 },
        { label: "High Return Speculation", desc: "Higher volatility tolerance & day trading.", score: 3 }
      ]
    },
    2: {
      question: "2. How would you react if a trade loses 2% of your account?",
      options: [
        { label: "Calm & Unfazed", desc: "Accept losses as normal trading expense.", score: 1 },
        { label: "Slightly Anxious", desc: "Re-evaluate stop loss placement.", score: 2 },
        { label: "Urge to Recover Immediately", desc: "High risk of emotional revenge trading.", score: 3 }
      ]
    },
    3: {
      question: "3. What is your preferred approach to market analysis?",
      options: [
        { label: "Strict Risk & Rule-Based", desc: "Focus entirely on probability and fixed lot sizes.", score: 1 },
        { label: "Blended Technicals & Trends", desc: "Using moving averages and support/resistance.", score: 2 },
        { label: "Aggressive Momentum Triggers", desc: "Trading breakouts and high-impact news events.", score: 3 }
      ]
    }
  };

  const handleSelectOption = (questionNum, score) => {
    const newAnswers = { ...answers, [`q${questionNum}`]: score };
    setAnswers(newAnswers);

    if (questionNum < 3) {
      setStep(questionNum + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const totalScore = (finalAnswers.q1 || 1) + (finalAnswers.q2 || 1) + (finalAnswers.q3 || 1);
    
    if (totalScore <= 4) {
      setResult({
        title: "Disciplined Capital Preserver",
        desc: "You have a healthy, risk-conscious mindset! Focus on Module 4 (Risk Management) and practice calculating lot sizes on a demo account.",
      });
    } else if (totalScore <= 7) {
      setResult({
        title: "Balanced Growth Trader",
        desc: "You maintain a steady balance between risk and reward. Focus on technical analysis foundations (Module 2) to refine your entries.",
      });
    } else {
      setResult({
        title: "High Emotional Risk Profile",
        desc: "You are prone to emotional revenge trading. Prioritize Module 3 (Trading Psychology) and start with strict automated stop-loss rules.",
      });
    }
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ q1: null, q2: null, q3: null });
    setResult(null);
  };

  return (
    <section id="quiz" className="bg-navy-950 text-slate-100 font-sans py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/85">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Diagnostic Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Discover Your Trading Personality
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Answer 3 quick questions to uncover your ideal learning pathway and risk tolerance profile.
          </p>
        </div>

        {/* Quiz Outer Box */}
        <div className="bg-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          
          {step <= 3 && (
            <div>
              <div className="text-lg sm:text-xl font-bold text-white mb-6">
                {questions[step].question}
              </div>

              {/* 3-Column Grid Layout for Desktop & Tablet */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {questions[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(step, option.score)}
                    className="group bg-navy-950 border border-slate-800 hover:border-emerald-500/80 rounded-2xl p-6 text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer flex flex-col justify-between min-h-[140px]"
                  >
                    <div>
                      <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                        {option.label}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed">
                        {option.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result View */}
          {step === 4 && result && (
            <div className="bg-navy-950 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1">
                    DIAGNOSTIC RESULT
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {result.title}
                  </h3>
                </div>

                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center space-x-1.5 bg-navy-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer w-fit"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Retake</span>
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {result.desc}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}