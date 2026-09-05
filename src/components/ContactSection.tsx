import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Send, 
  Mail, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  Globe, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: 'AI Automation',
    businessProblem: '',
    timeline: 'Within 2-4 weeks',
    message: '',
    honeypot: '', // anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const projectTypes = [
    'AI Automation',
    'AI Agent',
    'Workflow Automation',
    'SaaS',
    'Web Development',
    'Business Process Automation',
    'Other',
  ];

  const timelines = [
    'Immediate (Urgent)',
    'Within 2-4 weeks',
    '1-2 months',
    'Exploratory / Planning phase',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.businessProblem.trim()) {
      errs.businessProblem = 'Please describe the core business process or bottleneck';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot tripped honeypot

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate verified secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Direct Access
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Discuss Your AI & Automation Project
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Outline your current operational friction, systems in use, or vision. You will receive an architectural response within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Credentials & Inquiry Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#0a0a0c] border border-white/[0.08] p-7 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  Lead Specialist
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Verified Engagement Standards */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block">Rapid Response Window:</strong>
                    Direct reply with preliminary technical assessment within 24 business hours.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block">Strict Confidentiality:</strong>
                    NDA protection guaranteed on all proprietary workflow reviews and data schemas.
                  </div>
                </div>
              </div>

              {/* Social & Professional Links */}
              <div className="pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-3">
                  Professional Channels & Profiles
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={PERSONAL_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="p-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-950/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project outline regarding <span className="text-cyan-300 font-mono">[{formData.projectType}]</span> has been received. Syed Muhammad Yousaf will analyze your technical requirements and respond to <span className="text-cyan-300">{formData.email}</span>.
                  </p>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] max-w-md mx-auto text-left text-xs font-mono text-slate-400 space-y-1">
                    <div>Status: <span className="text-emerald-400">QUEUED_FOR_ARCHITECT_REVIEW</span></div>
                    <div>Timeline: <span className="text-slate-200">{formData.timeline}</span></div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        company: '',
                        projectType: 'AI Automation',
                        businessProblem: '',
                        timeline: 'Within 2-4 weeks',
                        message: '',
                        honeypot: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <span>Submit another brief</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Honeypot field (hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500/80 focus:border-red-400' : 'border-white/[0.08] focus:border-cyan-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-400' : 'border-white/[0.08] focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Project Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp / Stealth Startup"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#0a0a0c] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Estimated Timeline */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Target Implementation Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelines.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setFormData({ ...formData, timeline: time })}
                          className={`p-2.5 rounded-xl text-xs font-mono transition-all text-center cursor-pointer ${
                            formData.timeline === time
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
                              : 'bg-white/[0.02] text-slate-400 border border-white/[0.06] hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Business Problem */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Core Business Problem / Process to Automate *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.businessProblem}
                      onChange={(e) => setFormData({ ...formData, businessProblem: e.target.value })}
                      placeholder="Describe what manual tasks your team performs, which systems need connecting, or what bottlenecks you're facing..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.businessProblem ? 'border-red-500/80 focus:border-red-400' : 'border-white/[0.08] focus:border-cyan-400'
                      }`}
                    />
                    {errors.businessProblem && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.businessProblem}
                      </p>
                    )}
                  </div>

                  {/* Additional Context Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Additional Details / Current Stack (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tools you currently use (e.g. HubSpot, PostgreSQL, Slack, Stripe, Airtable)..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2.5 py-4 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-xl shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Encrypting & Sending Brief...</span>
                      ) : (
                        <>
                          <span>Discuss Your Project</span>
                          <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
