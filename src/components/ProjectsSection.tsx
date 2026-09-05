import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowRight, 
  Layers, 
  Workflow, 
  Bot, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface ProjectsSectionProps {
  onContactClick: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onContactClick }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                Architecture Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Featured Projects & Systems
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Concrete system implementations connecting intelligent AI reasoning with deterministic workflow automation.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Factual Architecture Specs
            </span>
          </div>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0a0a0c] border border-white/[0.08] p-7 sm:p-8 hover:border-cyan-400/40 hover:bg-[#0d0d10] hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="mt-2 text-sm text-slate-300 leading-relaxed font-medium">
                  {project.tagline}
                </p>

                {/* Problem vs Solution Summary */}
                <div className="mt-6 space-y-3 pt-5 border-t border-white/[0.06]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                      Business Challenge
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                      Automation Architecture
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[200px] sm:max-w-xs">Structured Workflow</span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.05] hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
};
