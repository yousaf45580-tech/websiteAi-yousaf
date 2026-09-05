import React from 'react';
import { WHY_WORK_WITH_ME, CORE_PHILOSOPHY_STATEMENT } from '../data/portfolioData';
import { 
  Target, 
  Cpu, 
  Share2, 
  ShieldCheck, 
  Sliders, 
  TrendingUp, 
  Quote, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WhyWorkWithMeProps {
  onContactClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Target,
  Cpu,
  Share2,
  ShieldCheck,
  Sliders,
  TrendingUp,
};

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onContactClick }) => {
  return (
    <section id="why-work-with-me" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              The Strategic Advantage
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Technology With a Business-First Mindset
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging high-level executive commercial priorities with low-level deterministic system engineering.
          </p>
        </div>

        {/* Anchor Philosophy Statement Banner */}
        <div className="relative rounded-3xl bg-[#0a0a0c] border border-cyan-500/30 p-8 sm:p-10 mb-16 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 shrink-0 mt-1 opacity-80" />
            <div>
              <p className="text-lg sm:text-2xl font-semibold text-white tracking-tight leading-relaxed italic">
                "{CORE_PHILOSOPHY_STATEMENT}"
              </p>
              <span className="mt-3 block text-xs font-mono tracking-wider uppercase text-cyan-300">
                — Syed Muhammad Yousaf, Agentic AI Architect
              </span>
            </div>
          </div>
        </div>

        {/* 6 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName] || Cpu;

            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-[#0d0d10] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Enterprise Grade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
