import React from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onStartConversation: () => void;
  onViewExpertise: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartConversation, onViewExpertise }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      {/* Background glow and subtle tech lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Authority Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-medium text-slate-300">
            System Architecture & Automation Consultation
          </span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
          Have a Business Process That{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
            Should Be Automated?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let's turn repetitive work, disconnected systems, and complex workflows into intelligent automation.
        </p>

        {/* CTA Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartConversation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-xl shadow-cyan-500/25 cursor-pointer hover:scale-[1.02]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={onViewExpertise}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <span>View My Expertise</span>
          </button>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Zero-risk discovery consultation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            24-hour initial technical evaluation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Full code & workflow transfer
          </span>
        </div>

      </div>
    </section>
  );
};
