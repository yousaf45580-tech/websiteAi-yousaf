import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Services', href: '#services' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Authority Label */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors shadow-inner">
              <span className="font-mono text-cyan-400 font-bold text-sm tracking-wider">SY</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                AI Architect & Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-500/40 hover:border-cyan-400/70 transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] cursor-pointer"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0a0c]/95 border-b border-white/[0.08] backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-cyan-500/20 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
