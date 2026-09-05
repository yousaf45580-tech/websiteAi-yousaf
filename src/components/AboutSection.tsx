import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ShieldCheck, 
  ArrowRight, 
  Cpu, 
  Bot, 
  Workflow, 
  Layers, 
  Code, 
  Globe, 
  CheckCircle,
  Briefcase
} from 'lucide-react';

interface AboutSectionProps {
  onExploreExpertise: () => void;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreExpertise, onContactClick }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-cyan-400" />
          <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
            About The Specialist
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Authority Spec Sheet */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 shadow-2xl overflow-hidden group">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Portrait Visual Representation */}
              <div className="relative aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-[#121216] via-[#0c0c0f] to-[#070709] border border-white/[0.08] flex flex-col items-center justify-center p-6 overflow-hidden">
                {/* Tech grid texture in background */}
                <div className="absolute inset-0 bg-tech-grid opacity-25" />
                
                {/* Stylized Executive Portrait Emblem */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-zinc-800 to-zinc-950 border border-cyan-400/40 p-1 flex items-center justify-center shadow-xl shadow-cyan-950/40">
                      <div className="w-full h-full rounded-xl bg-[#0f0f13] flex items-center justify-center relative overflow-hidden">
                        {/* Executive Architect Monogram Avatar */}
                        <span className="font-mono text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
                          SMY
                        </span>
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 to-sky-400" />
                      </div>
                    </div>

                    {/* Verified Specialist Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-[#0a0a0c] border border-emerald-500/40 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-300 font-semibold uppercase">Verified</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 mt-1">
                    AI Automation Specialist & Agentic AI Architect
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-xs">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                      Autonomous Agents
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                      n8n Architect
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                      SaaS Engineer
                    </span>
                  </div>
                </div>

                {/* Bottom Spec Footer inside portrait card */}
                <div className="absolute bottom-3 inset-x-3 bg-black/50 backdrop-blur-md rounded-lg p-2.5 border border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>UK • Spain • Germany</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Accepting Projects
                  </span>
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Discipline</span>
                  <span className="text-xs font-semibold text-slate-200">Intelligent Systems</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Focus</span>
                  <span className="text-xs font-semibold text-slate-200">Business Outcomes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineering Intelligent Systems,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                Not Just Software
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                {PERSONAL_INFO.aboutIntroduction}
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                {PERSONAL_INFO.aboutExtended}
              </p>
            </div>

            {/* Core Architectural Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Process-First Analysis</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Understanding organizational bottlenecks before writing a single line of automation code.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Autonomous Agentics</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Equipping AI models with verified tools, memory, and guardrails to complete multi-step goals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Connected Architecture</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connecting web applications, APIs, databases, and CRMs into a synchronized highway.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Zero-Loss Reliability</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building fault-tolerant retries, error traps, and audit logging into every production flow.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreExpertise}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
              >
                <span>More About My Expertise</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={onContactClick}
                className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer px-2 py-2"
              >
                Discuss a business process &rarr;
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
