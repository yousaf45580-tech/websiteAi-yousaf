import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { TestimonialItem } from '../types';
import { Quote, Sparkles, PlusCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [showConfigInfo, setShowConfigInfo] = useState<boolean>(false);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                Client Validation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Endorsements & Feedback
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Professional feedback placeholders ready to be populated with verified enterprise references and verified reviews.
            </p>
          </div>

          <button
            onClick={() => setShowConfigInfo(!showConfigInfo)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors self-start md:self-end cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>{showConfigInfo ? 'Hide Configuration Info' : 'Manage Feedback Slots'}</span>
          </button>
        </div>

        {/* Informational Banner if opened */}
        {showConfigInfo && (
          <div className="mb-10 p-5 rounded-2xl bg-[#0a0a0c] border border-cyan-500/30 animate-in fade-in duration-200">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Client Confidentiality & Review Configuration
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  In compliance with strict non-disclosure agreements, enterprise client identities are protected. As new public endorsements and authorized case study quotes are approved, they are populated into <code className="text-cyan-300">src/data/portfolioData.ts</code>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-cyan-400/40 hover:bg-[#0d0d10] transition-all group"
            >
              <div>
                {/* Header with Slot Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2 rounded-xl bg-white/[0.04] text-cyan-400">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] text-cyan-300 border border-white/[0.08]">
                    Client Testimonial 0{idx + 1}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">
                    {t.role}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">
                    {t.context}
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-cyan-400/60" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
