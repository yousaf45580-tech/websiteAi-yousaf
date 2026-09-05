import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { TechItem } from '../types';
import { 
  Sparkles, 
  Cpu, 
  Workflow, 
  Code, 
  Database, 
  Layers, 
  Check, 
  Terminal 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'AI', 'Automation', 'Development', 'Data', 'SaaS'];

  const filteredTech =
    activeCategory === 'ALL'
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                Under The Hood
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Technology Stack
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              A curated suite of battle-tested tools, frameworks, and intelligence APIs selected strictly for reliability, execution speed, and enterprise security.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                    : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl bg-[#0a0a0c] border border-white/[0.08] p-5 hover:border-cyan-400/35 hover:bg-[#0d0d10] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                    {tech.category}
                  </span>
                  {tech.featured && (
                    <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Core Focus
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {tech.name}
                </h3>

                <p className="mt-1 text-xs font-mono text-cyan-300/80">
                  {tech.role}
                </p>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in Production</span>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
