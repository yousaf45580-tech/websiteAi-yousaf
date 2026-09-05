import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, ShieldCheck, Mail, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12 text-slate-400 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0a0a0c] border border-cyan-400/40 shadow-sm shadow-cyan-950/40">
                <span className="font-mono text-cyan-400 font-bold text-sm">SY</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Designing intelligent AI systems, automated workflows, AI agents, SaaS solutions, and business automation systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-cyan-400/40 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-cyan-400/40 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4 text-cyan-400" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-cyan-400/40 transition-colors"
                aria-label="Email address"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification Status */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Availability & Standards
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Available for New Projects</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Consulting across UK, Spain, Germany, and global remote organizations.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] hover:text-white hover:border-white/20 transition-all cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Syed Muhammad Yousaf. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Enterprise AI Architecture</span>
            <span>•</span>
            <span>Business Process Automation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
