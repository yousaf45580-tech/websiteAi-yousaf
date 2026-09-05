import React, { useState } from 'react';
import { WORKING_PROCESS } from '../data/portfolioData';
import { 
  CheckCircle, 
  ArrowRight, 
  FileCheck, 
  Layers, 
  Cpu, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Execution Methodology
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            My Working Process
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A disciplined 6-phase engineering lifecycle that transforms manual chaos into high-assurance automated infrastructure.
          </p>
        </div>

        {/* Timeline Progression Bar on Large Screens */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-12">
          {WORKING_PROCESS.map((step, index) => {
            const isActive = index === activeStepIndex;
            const isCompleted = index < activeStepIndex;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(index)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/10 border-cyan-400/80 shadow-lg shadow-cyan-950/20'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-sm font-bold ${
                      isActive ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {step.durationEstimate}
                  </span>
                </div>
                <span
                  className={`text-sm font-bold block ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Highlight Card */}
        <div className="rounded-3xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-cyan-400">
                  {WORKING_PROCESS[activeStepIndex].number}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Phase {activeStepIndex + 1} of 6
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {WORKING_PROCESS[activeStepIndex].title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {WORKING_PROCESS[activeStepIndex].description}
              </p>
            </div>

            <div className="lg:w-80 shrink-0 p-5 rounded-2xl bg-black/40 border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <FileCheck className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Phase Deliverable
                </span>
              </div>
              <p className="text-sm font-medium text-slate-200">
                {WORKING_PROCESS[activeStepIndex].deliverable}
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verification Method</span>
                <span className="text-emerald-400">Sign-Off Gate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Grid for all 6 steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKING_PROCESS.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                idx === activeStepIndex
                  ? 'bg-white/[0.05] border-cyan-400/40 shadow-md'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xl font-bold text-slate-400">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                  {step.durationEstimate}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5" />
                <span className="truncate">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
