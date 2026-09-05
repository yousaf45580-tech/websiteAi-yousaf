import React from 'react';
import { ProjectCaseStudy } from '../types';
import { 
  X, 
  CheckCircle2, 
  Cpu, 
  Workflow, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Activity,
  Terminal
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0a0a0c] border border-cyan-400/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10">
            {project.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {project.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
          {project.tagline}
        </p>

        {/* Problem vs Solution Split */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
            <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1.5">
              The Operational Problem
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1.5">
              Architectural Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Automation Architecture Flow */}
        <div className="mt-6 p-5 rounded-2xl bg-black/40 border border-white/[0.08]">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
            <Workflow className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Automation Architecture & Sequence
            </h4>
          </div>
          <div className="space-y-3">
            {project.architecture.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-mono text-cyan-300 shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-300 leading-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Execution Steps */}
        <div className="mt-6">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
            Workflow Execution Pipeline
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {project.workflowSteps.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-cyan-400 block font-semibold mb-1">
                  {s.step}
                </span>
                <span className="text-xs text-slate-300 leading-tight block">
                  {s.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mt-6 pt-5 border-t border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
            Technologies & Middleware
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Measured Outcome */}
        <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
              Business Outcome
            </span>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-slate-500">
            Available for custom adaptation to your stack
          </span>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
          >
            <span>Implement Similar Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
