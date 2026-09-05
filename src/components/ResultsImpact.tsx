import React from 'react';
import { RESULTS_IMPACT } from '../data/portfolioData';
import { 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Database, 
  ShieldCheck, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface ResultsImpactProps {
  onContactClick: () => void;
}

export const ResultsImpact: React.FC<ResultsImpactProps> = ({ onContactClick }) => {
  return (
    <section id="results" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Delivered Value
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Operational Results & Business Impact
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real organizational transformation anchored in verifiable operational improvements rather than fabricated marketing statistics.
          </p>
        </div>

        {/* 4 Impact Metric Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS_IMPACT.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 hover:border-cyan-400/40 hover:bg-[#0d0d10] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    0{index + 1} //
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] bg-[#08080a] -mx-6 -mb-6 p-4 rounded-b-2xl border-t">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Practical Transformation
                </span>
                <p className="text-xs text-slate-300 font-medium">
                  {item.transformation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Guarantee Banner */}
        <div className="mt-12 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-slate-400">
            System performance telemetry is monitored continuously via automated healthchecks, latency tracing, and exception reporting.
          </p>
        </div>

      </div>
    </section>
  );
};
