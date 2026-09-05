import React from 'react';
import { INDUSTRIES_APPLICATIONS } from '../data/portfolioData';
import { 
  ShoppingBag, 
  Cloud, 
  Briefcase, 
  Sparkles, 
  Building, 
  GraduationCap, 
  Headphones, 
  BarChart, 
  Cog, 
  Server,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface IndustriesSectionProps {
  onContactClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag,
  Cloud,
  Briefcase,
  Sparkles,
  Building,
  GraduationCap,
  Headphones,
  BarChart,
  Cog,
  Server,
};

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onContactClick }) => {
  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Market Applications
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Where AI Automation Can Create Impact
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical deployment patterns across diverse business domains where automation workflows yield immediate operational dividends.
          </p>
        </div>

        {/* 10 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_APPLICATIONS.map((ind) => {
            const Icon = iconMap[ind.iconName] || Briefcase;

            return (
              <div
                key={ind.name}
                className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] hover:border-cyan-400/35 hover:bg-[#0d0d10] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {ind.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                      Target Automation Workflows
                    </span>
                    {ind.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={onContactClick}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Discuss {ind.name} Automation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
