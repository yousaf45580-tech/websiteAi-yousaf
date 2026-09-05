import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { 
  Cpu, 
  Bot, 
  Workflow, 
  Layers, 
  Code, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  Terminal
} from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Bot,
  Workflow,
  Layers,
  Code,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const ActiveIcon = iconMap[activeService.iconName] || Cpu;

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Client Solutions
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            AI & Automation Solutions Built Around Your Business
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering production-tested systems that automate operational friction, optimize team workflows, and deploy intelligent agents with complete security and auditability.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 gap-2.5 no-scrollbar">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Cpu;
            const isSelected = service.id === selectedServiceId;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-cyan-500/15 border border-cyan-400/80 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                    : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="rounded-3xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Overview, Scope & Primary Action */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    Core Capability
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {activeService.description}
              </p>

              {/* Core Deliverables Matrix */}
              <div className="p-5 rounded-2xl bg-[#08080a] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Implementation Deliverables
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400">Production Ready</span>
                </div>
                <div className="space-y-2 pt-1">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>Build This Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Col: Capabilities Checklist & System Architecture Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    Specialized Modules & Functional Scope
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                    {activeService.items.length} Modules
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activeService.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Guarantee Guarantee Box */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-white block">Zero Vendor Lock-In & Complete Ownership:</strong>
                  All workflow scripts, API configurations, and custom agent prompts are completely transferred to your control.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
