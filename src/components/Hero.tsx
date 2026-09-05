import React from 'react';
import { PERSONAL_INFO, HERO_CREDENTIALS } from '../data/portfolioData';
import { HeroEcosystemVisual } from './HeroEcosystemVisual';
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown, Layers, Terminal } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreWorkClick }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authority Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Intelligent AI Systems
              </span>{' '}
              That Automate, Scale & Transform Businesses.
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg font-medium text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.supportingHeadline}
            </p>

            {/* Concise Professional Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Syed Muhammad Yousaf designs enterprise-grade AI-powered automations, autonomous agentic workflows, n8n pipeline orchestrations, SaaS solutions, and business process automation architectures engineered for measurable speed, accuracy, and operational reliability.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 cursor-pointer"
              >
                <span>Let's Build Your AI Solution</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreWorkClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Hero Credentials Badges */}
            <div className="pt-4 border-t border-white/[0.08] w-full">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                Core Disciplines & Architectural Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {HERO_CREDENTIALS.map((credential) => (
                  <div
                    key={credential}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/50 hover:bg-white/[0.06] hover:text-cyan-200 transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Signature Ecosystem Interactive Architecture */}
          <div className="lg:col-span-5 relative">
            <HeroEcosystemVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
