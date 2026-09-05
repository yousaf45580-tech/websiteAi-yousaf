import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Workflow, 
  Send, 
  FileText,
  Mail,
  Zap,
  Check
} from 'lucide-react';

interface SimulationScenario {
  id: string;
  name: string;
  inputSource: string;
  aiStep: string;
  automationStep: string;
  dataStep: string;
  actionStep: string;
}

export const ArchitectureVisual: React.FC = () => {
  const scenarios: SimulationScenario[] = [
    {
      id: 'lead',
      name: 'High-Value Lead Intake',
      inputSource: 'Website Form / CRM Inbound',
      aiStep: 'LLM analyzes company size, requirements, and purchase intent score',
      automationStep: 'n8n triggers enrichment API and evaluates routing rules',
      dataStep: 'Writes enriched profile to PostgreSQL & HubSpot CRM',
      actionStep: 'Instant Slack alert to VP of Sales & drafted custom proposal',
    },
    {
      id: 'invoice',
      name: 'Document & Invoice OCR',
      inputSource: 'Vendor Billing Email (PDF Attachment)',
      aiStep: 'Vision model parses line items, VAT, supplier ID, and totals',
      automationStep: 'Webhook matches purchase order with accounting ledger',
      dataStep: 'Records sanitized line items in financial database',
      actionStep: 'Flags for payment approval & sends receipt acknowledgement',
    },
    {
      id: 'support',
      name: 'Tier-1 Customer Inquiry',
      inputSource: 'Customer Support Portal / WhatsApp',
      aiStep: 'Autonomous Agent retrieves RAG context from verified docs',
      automationStep: 'Validates subscription status via billing API tool',
      dataStep: 'Logs inquiry category and sentiment in ticket warehouse',
      actionStep: 'Dispatches natural language resolution in <4 seconds',
    },
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('lead');
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const layers = [
    {
      level: 1,
      title: 'Input Source',
      subtitle: 'Website / Email / Form / CRM',
      icon: Mail,
      tag: 'INGESTION',
      currentDetail: activeScenario.inputSource,
      accent: 'border-sky-500/50 text-sky-400 bg-sky-500/10',
    },
    {
      level: 2,
      title: 'AI Processing Layer',
      subtitle: 'LLM / AI Agent / Classification / Reasoning',
      icon: Cpu,
      tag: 'INTELLIGENCE',
      currentDetail: activeScenario.aiStep,
      accent: 'border-cyan-400/60 text-cyan-300 bg-cyan-500/10',
    },
    {
      level: 3,
      title: 'Automation Layer',
      subtitle: 'n8n / APIs / Webhooks',
      icon: Workflow,
      tag: 'ORCHESTRATION',
      currentDetail: activeScenario.automationStep,
      accent: 'border-indigo-500/50 text-indigo-400 bg-indigo-500/10',
    },
    {
      level: 4,
      title: 'Data Layer',
      subtitle: 'Database / Spreadsheet / CRM',
      icon: Database,
      tag: 'PERSISTENCE',
      currentDetail: activeScenario.dataStep,
      accent: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
    },
    {
      level: 5,
      title: 'Business Action',
      subtitle: 'Notification / Customer Response / Task / Report',
      icon: Send,
      tag: 'EXECUTION',
      currentDetail: activeScenario.actionStep,
      accent: 'border-emerald-500/60 text-emerald-300 bg-emerald-500/10',
    },
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveLayer(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step <= 4) {
        setActiveLayer(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  return (
    <section id="architecture" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Signature Architecture
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Automation Architecture Visual
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            The 5-tier intelligent pipeline that converts unstructured incoming data into deterministic, audited business execution.
          </p>
        </div>

        {/* Interactive Scenario Bar */}
        <div className="max-w-4xl mx-auto mb-10 p-2 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-mono text-slate-500 px-3 uppercase hidden md:inline-block">
              Simulate:
            </span>
            {scenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => {
                  setActiveScenarioId(scen.id);
                  setActiveLayer(0);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeScenarioId === scen.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {scen.name}
              </button>
            ))}
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 transition-all cursor-pointer"
          >
            {isSimulating ? (
              <>
                <RotateCcw className="w-3.5 h-3.5 animate-spin text-slate-950" />
                <span>Simulating Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>Test Live Data Flow</span>
              </>
            )}
          </button>
        </div>

        {/* 5-Layer Stack Visualization */}
        <div className="max-w-4xl mx-auto space-y-3 relative">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isHighlighted = activeLayer === index;

            return (
              <div key={layer.title} className="relative">
                {/* Visual Down Connector Arrow */}
                {index > 0 && (
                  <div className="flex justify-center -my-2 relative z-20">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                        activeLayer >= index
                          ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.4)]'
                          : 'bg-[#0a0a0c] border-white/10 text-slate-600'
                      }`}
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                {/* Layer Card */}
                <div
                  className={`relative z-10 rounded-2xl p-5 transition-all duration-500 border ${
                    isHighlighted
                      ? 'bg-[#0f1118]/95 border-cyan-400/80 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-400/40 scale-[1.01]'
                      : 'bg-[#0a0a0c] border-white/[0.08] hover:border-white/15'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className={`p-3 rounded-xl border ${layer.accent} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono text-cyan-400/90 font-semibold uppercase tracking-wider">
                            Tier 0{layer.level} // {layer.tag}
                          </span>
                          {isHighlighted && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              PROCESSING PACKET
                            </span>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {layer.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400">
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Active Scenario Flow Readout */}
                    <div className="sm:text-right max-w-sm pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                        Scenario Action
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 block leading-snug">
                        {layer.currentDetail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Engineered with automatic retry logic, schema verification, and dead-letter queues</span>
          </div>
        </div>

      </div>
    </section>
  );
};
