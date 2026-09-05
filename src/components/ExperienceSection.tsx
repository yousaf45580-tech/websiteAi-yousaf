import React from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Sparkles, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Discipline Evolution
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Professional Experience & Focus
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A solid track record spanning AI agentic architectures, complex n8n workflows, and full-stack SaaS engineering.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-white/10 hidden sm:block" />

          {EXPERIENCE_TIMELINE.map((item, index) => (
            <div
              key={item.title}
              className="relative sm:pl-16 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="hidden sm:flex absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-cyan-400 items-center justify-center group-hover:scale-125 transition-transform z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Card */}
              <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 hover:border-cyan-400/40 hover:bg-[#0d0d10] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                      {item.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08] self-start sm:self-auto">
                    {item.role}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                  {item.focus}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {item.keyContributions.map((contrib, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {contrib}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
