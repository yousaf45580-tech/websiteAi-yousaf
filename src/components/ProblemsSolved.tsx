import React from 'react';
import { BUSINESS_PROBLEMS } from '../data/portfolioData';
import { 
  Clock, 
  Zap, 
  Mail, 
  Network, 
  MessageSquare, 
  Database, 
  GitMerge,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ProblemsSolvedProps {
  onContactClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Clock,
  Zap,
  Mail,
  Network,
  MessageSquare,
  Database,
  GitMerge,
};

export const ProblemsSolved: React.FC<ProblemsSolvedProps> = ({ onContactClick }) => {
  return (
    <section id="problems-solved" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Operational Remediation
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            From Manual Processes to Intelligent Systems
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminating the operational drag, friction, and delays that prevent growing organizations from operating at their full potential.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_PROBLEMS.map((item, index) => {
            const Icon = iconMap[item.iconName] || Zap;

            return (
              <div
                key={item.problem}
                className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 hover:border-cyan-400/40 hover:bg-[#0d0d10] hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      Problem 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {item.problem}
                  </h3>

                  <div className="p-3 rounded-xl bg-red-950/15 border border-red-500/15 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1">
                      Current Bottleneck
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                      Intelligent Automation Solution
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">{item.systemBenefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Identify a similar bottleneck in your day-to-day workflow?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Let's evaluate how an autonomous agent or automated pipeline can resolve it within days.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
          >
            <span>Resolve This Problem</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
