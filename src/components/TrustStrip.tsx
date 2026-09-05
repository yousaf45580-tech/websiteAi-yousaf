import React from 'react';
import { TRUST_STRIP_ITEMS } from '../data/portfolioData';
import { Check, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const duplicatedItems = [...TRUST_STRIP_ITEMS, ...TRUST_STRIP_ITEMS];

  return (
    <div className="relative py-8 bg-[#08080a]/90 border-y border-white/[0.07] backdrop-blur-md overflow-hidden">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 text-center">
        <h2 className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400 font-semibold flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
          Technology, Automation & AI — Built Around Business Outcomes
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
        </h2>
      </div>

      {/* Marquee track */}
      <div className="flex overflow-hidden select-none">
        <div className="flex shrink-0 items-center gap-4 sm:gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-300 bg-white/[0.03] border border-white/[0.07] whitespace-nowrap hover:border-cyan-400/50 hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
