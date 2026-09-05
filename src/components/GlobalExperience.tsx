import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Globe, MapPin, CheckCircle, Shield, ArrowUpRight } from 'lucide-react';

export const GlobalExperience: React.FC = () => {
  const markets = [
    {
      country: 'United Kingdom',
      code: 'UK',
      coordinates: '51.5074° N, 0.1278° W',
      focus: 'Enterprise Workflows & Fintech Automation',
      highlight: 'API & Banking Data Compliance',
    },
    {
      country: 'Spain',
      code: 'ES',
      coordinates: '40.4168° N, 3.7038° W',
      focus: 'E-commerce & SaaS Process Optimization',
      highlight: 'Multilingual Inbound Lead Triage',
    },
    {
      country: 'Germany',
      code: 'DE',
      coordinates: '52.5200° N, 13.4050° E',
      focus: 'Operational Data Infrastructure & n8n',
      highlight: 'Strict GDPR & Privacy Guardrails',
    },
  ];

  return (
    <section id="global-work" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              International Standards
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Building Technology for Modern Businesses
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct collaboration with fast-moving businesses across European and global markets, adhering strictly to enterprise security, data privacy, and time-zone flexibility.
          </p>
        </div>

        {/* Abstract International Market Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {markets.map((m) => (
            <div
              key={m.country}
              className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-7 hover:border-cyan-400/40 hover:bg-[#0d0d10] transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center font-mono text-xs font-bold text-cyan-300">
                    {m.code}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {m.country}
                  </h3>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="p-3 rounded-xl bg-[#08080a] border border-white/[0.05] font-mono text-xs text-slate-400 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{m.coordinates}</span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                  Domain Application
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {m.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Standard</span>
                <span className="text-cyan-300">{m.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Abstract World Grid Visual Representation */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Cross-Timezone Collaboration
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              GDPR & Privacy Compliant Schemas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              English & European Business Protocols
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
