import React, { useState, useEffect } from 'react';
import { 
  User, 
  Bot, 
  Workflow, 
  Cpu, 
  Database, 
  Building2, 
  CheckCircle2, 
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  name: string;
  sub: string;
  icon: React.ElementType;
  color: string;
  borderGlow: string;
  description: string;
}

export const HeroEcosystemVisual: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(1);
  const [packetPosition, setPacketPosition] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nodes: EcosystemNode[] = [
    {
      id: 'client',
      name: 'Client Inbound',
      sub: 'Email / Web / CRM',
      icon: User,
      color: 'text-sky-400',
      borderGlow: 'hover:border-sky-500/60',
      description: 'Customer inquiries, invoice payloads, or automated triggers initiate the pipeline.',
    },
    {
      id: 'agent',
      name: 'AI Agent',
      sub: 'Reasoning & LLM',
      icon: Bot,
      color: 'text-cyan-400',
      borderGlow: 'hover:border-cyan-400/80',
      description: 'Autonomous evaluation: intent classification, entity extraction, and decision planning.',
    },
    {
      id: 'automation',
      name: 'Automation',
      sub: 'n8n Orchestration',
      icon: Workflow,
      color: 'text-indigo-400',
      borderGlow: 'hover:border-indigo-400/80',
      description: 'Deterministic multi-branch logic, conditional execution, and error recovery.',
    },
    {
      id: 'apis',
      name: 'APIs & Webhooks',
      sub: 'Middleware Handlers',
      icon: Cpu,
      color: 'text-teal-400',
      borderGlow: 'hover:border-teal-400/80',
      description: 'Secure data transformation, token exchange, and bidirectional service requests.',
    },
    {
      id: 'database',
      name: 'Database',
      sub: 'Structured Storage',
      icon: Database,
      color: 'text-blue-400',
      borderGlow: 'hover:border-blue-400/80',
      description: 'Persistent indexing, audit logging, and normalized schema storage.',
    },
    {
      id: 'business',
      name: 'Business System',
      sub: 'CRM / Slack / ERP',
      icon: Building2,
      color: 'text-emerald-400',
      borderGlow: 'hover:border-emerald-400/80',
      description: 'Direct insertion into enterprise toolchains without human intervention.',
    },
    {
      id: 'results',
      name: 'Value & Growth',
      sub: 'Automated Outcome',
      icon: CheckCircle2,
      color: 'text-amber-400',
      borderGlow: 'hover:border-amber-400/80',
      description: 'Hours saved, zero latency response, and fully synchronized business operations.',
    },
  ];

  // Auto-pulse packet animation
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setPacketPosition((prev) => (prev + 1) % nodes.length);
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isHovered, nodes.length]);

  return (
    <div 
      className="relative w-full rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 sm:p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background fine grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      
      {/* Ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal-style header bar */}
      <div className="relative flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-mono text-[11px] text-slate-400 tracking-wider ml-2 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            AUTONOMOUS_PIPELINE.SYSTEM
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            LIVE ECOSYSTEM
          </span>
        </div>
      </div>

      {/* Interactive System Nodes Pipeline */}
      <div className="relative space-y-3">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = index === activeNodeIndex;
          const isPacketHere = index === packetPosition;

          return (
            <div key={node.id} className="relative">
              {/* Connector line between nodes */}
              {index < nodes.length - 1 && (
                <div className="absolute left-6 top-11 bottom-0 w-[2px] -mb-3 bg-white/10 z-0">
                  <div
                    className={`w-full transition-all duration-700 ${
                      index < activeNodeIndex
                        ? 'h-full bg-gradient-to-b from-cyan-400 to-indigo-500'
                        : 'h-0'
                    }`}
                  />
                </div>
              )}

              {/* Node Card */}
              <button
                type="button"
                onClick={() => {
                  setActiveNodeIndex(index);
                  setPacketPosition(index);
                }}
                className={`w-full text-left relative z-10 flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.08] border border-cyan-400/40 shadow-lg shadow-cyan-950/30 translate-x-1'
                    : 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-lg border transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                        : 'bg-[#0f0f13] border-white/10 text-zinc-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {isPacketHere && (
                      <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white tracking-wide">
                        {node.name}
                      </span>
                      {isActive && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono uppercase tracking-wider bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">
                          Active Node
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {node.sub}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-500">
                    0{index + 1}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                    }`}
                  />
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Inspector Drawer */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] bg-black/30 rounded-xl p-3 border border-white/[0.04]">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-medium">
              Layer Inspection: {nodes[activeNodeIndex].name}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Node {activeNodeIndex + 1}/7
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-300 leading-relaxed">
          {nodes[activeNodeIndex].description}
        </p>
      </div>

      {/* Telemetry Status Bar */}
      <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-400 px-1">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>ZERO DATA LOSS ARCHITECTURE</span>
        </div>
        <span className="text-cyan-400/80">LATENCY: &lt;110ms</span>
      </div>
    </div>
  );
};
