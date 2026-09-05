import React from 'react';
import { CORE_EXPERTISE } from '../data/portfolioData';
import { 
  Cpu, 
  Bot, 
  Workflow, 
  Sparkles, 
  Layers, 
  Code, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface CoreExpertiseProps {
  onSelectService: (serviceId: string) => void;
  onContactClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Bot,
  Workflow,
  Sparkles,
  Layers,
  Code,
};

export const CoreExpertise: React.FC<CoreExpertiseProps> = ({ onSelectService, onContactClick }) => {
  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                Core Specializations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Architectural Capabilities
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Specialized expertise designed around eliminating operational drag and building autonomous systems that scale with enterprise needs.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Request customized architecture spec</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_EXPERTISE.map((card) => {
            const Icon = iconMap[card.iconName] || Cpu;

            return (
              <div
                key={card.number}
                className="group relative rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-7 hover:border-cyan-400/40 hover:bg-[#0d0d10] hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Number & Icon Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {card.number}
                    </span>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2">
                    {card.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-400 font-medium leading-normal">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors">
                    Tailored Deployment
                  </span>
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
