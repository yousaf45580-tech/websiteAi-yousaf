import {
  ExpertiseCard,
  ServiceCategory,
  ProjectCaseStudy,
  TechItem,
  ProcessStep,
  BusinessProblem,
  IndustryApplication,
  ImpactMetric,
  TestimonialItem,
  ExperienceItem,
  FAQItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Syed Muhammad Yousaf',
  title: 'AI Automation Specialist & Agentic AI Architect',
  shortTitle: 'AI Architect & Automation Expert',
  tagline: 'Building Intelligent AI Systems That Automate, Scale & Transform Businesses.',
  supportingHeadline:
    'AI Automation Specialist & Agentic AI Architect helping businesses turn repetitive processes into intelligent, automated systems.',
  coreMessage:
    'I design intelligent AI systems, automate complex business workflows, and build AI-powered solutions that help businesses operate faster, smarter, and more efficiently.',
  aboutIntroduction:
    'Syed Muhammad Yousaf is an AI Automation Specialist and Agentic AI Architect focused on designing intelligent systems that connect AI, automation, applications, APIs, databases, and business processes.',
  aboutExtended:
    'His work combines AI architecture, workflow automation, AI agents, web development, SaaS engineering, and business process optimization to create practical technology solutions. The primary focus is not simply building technology, but understanding the business process and converting it into an intelligent, scalable system.',
  availabilityStatus: 'Available for AI Automation & Technology Projects',
  location: 'International Consultant',
  marketsServed: ['United Kingdom', 'Spain', 'Germany'],
  email: 'yousaf45580@gmail.com',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/syedmuhammadyousaf',
    github: 'https://github.com/syedmuhammadyousaf',
    email: 'mailto:yousaf45580@gmail.com',
  },
};

export const HERO_CREDENTIALS = [
  'AI Automation',
  'Agentic AI',
  'AI Agents',
  'Workflow Automation',
  'SaaS Development',
  'Business Process Automation',
  'Web Development',
];

export const TRUST_STRIP_ITEMS = [
  'AI Automation',
  'Agentic AI',
  'AI Agents',
  'n8n Orchestration',
  'REST & GraphQL APIs',
  'RAG Architectures',
  'LLM Systems',
  'SaaS Platforms',
  'Workflow Automation',
  'Business Process Automation',
];

export const CORE_EXPERTISE: ExpertiseCard[] = [
  {
    number: '01',
    title: 'AI Automation Specialist',
    description:
      'Design intelligent automation systems that reduce repetitive manual work and improve operational efficiency.',
    highlights: [
      'Document & intake parsing pipelines',
      'Intelligent routing & notification systems',
      'Data extraction from unstructured sources',
      'End-to-end process elimination of manual tasks',
    ],
    iconName: 'Cpu',
  },
  {
    number: '02',
    title: 'Agentic AI Architect',
    description:
      'Design autonomous AI systems capable of reasoning, using tools, executing workflows, and completing multi-step tasks.',
    highlights: [
      'Autonomous agent decision loops',
      'Function calling & external tool integration',
      'Multi-agent collaborative pipelines',
      'Context windows & memory orchestration',
    ],
    iconName: 'Bot',
  },
  {
    number: '03',
    title: 'Workflow Automation Expert',
    description:
      'Build sophisticated automated workflows connecting applications, APIs, databases, communication platforms, CRMs, and business systems.',
    highlights: [
      'Complex multi-branch n8n workflows',
      'Bidirectional CRM & database synchronization',
      'Custom webhook listeners & payload transformers',
      'Fault-tolerant retry & logging mechanisms',
    ],
    iconName: 'Workflow',
  },
  {
    number: '04',
    title: 'AI Agents Development',
    description:
      'Develop specialized AI agents for customer support, lead management, research, data processing, internal operations, and business workflows.',
    highlights: [
      'Customer support & qualification agents',
      'Deep research & competitive intelligence agents',
      'Internal knowledge base retrieval agents',
      'Automated email drafting & response agents',
    ],
    iconName: 'Sparkles',
  },
  {
    number: '05',
    title: 'SaaS & Business Process Automation',
    description:
      'Design SaaS concepts and automation architectures that transform traditional business operations into scalable digital systems.',
    highlights: [
      'Modular SaaS system architecture',
      'Multi-tenant database & API schemas',
      'Self-service automated business portals',
      'MVP product validation & rapid deployment',
    ],
    iconName: 'Layers',
  },
  {
    number: '06',
    title: 'Web Development',
    description:
      'Build modern, responsive, business-focused web applications and interfaces integrated with automation and AI systems.',
    highlights: [
      'High-performance React web interfaces',
      'Full API & backend webhook integration',
      'Clean enterprise dashboards & client portals',
      'Accessible, mobile-optimized application design',
    ],
    iconName: 'Code',
  },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description:
      'Deploy intelligent operational automations that evaluate unstructured data, make rule-governed decisions, and take immediate business actions.',
    iconName: 'Cpu',
    items: [
      'Intelligent business automation',
      'AI-powered workflows',
      'Document processing',
      'Data automation',
      'Email automation',
      'Lead automation',
      'Customer support automation',
    ],
    deliverables: [
      'Automated intake & parsing workflows',
      'Intelligent triage & escalation engines',
      'Automated reporting & synthesis systems',
      'Centralized process activity logs',
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Agentic AI',
    description:
      'Architect autonomous agents that reason over business objectives, call external tools and APIs, handle edge cases, and complete multi-step objectives.',
    iconName: 'Bot',
    items: [
      'Autonomous AI agents',
      'Multi-step AI workflows',
      'Tool-using agents',
      'Research agents',
      'Customer service agents',
      'Internal business agents',
      'Agent orchestration',
    ],
    deliverables: [
      'Agent system prompts & guardrails',
      'API tool registries & permission policies',
      'Stateful conversation & memory stores',
      'Supervisor-subordinate multi-agent architectures',
    ],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Connect disparate software silos into cohesive, automated operational highways with rock-solid reliability and instant error notification.',
    iconName: 'Workflow',
    items: [
      'n8n automation',
      'API integrations',
      'CRM automation',
      'Email automation',
      'Database workflows',
      'Notification systems',
      'Data synchronization',
    ],
    deliverables: [
      'Production-grade n8n workflow deployments',
      'Webhook receivers with rate limiting & retries',
      'Cross-platform CRM sync (HubSpot, Airtable, etc.)',
      'Slack, Discord, and Email automated alerting',
    ],
  },
  {
    id: 'saas-solutions',
    title: 'SaaS & Business Systems',
    description:
      'Turn repetitive internal operations or innovative digital products into scalable, structured SaaS platforms and modular architectures.',
    iconName: 'Layers',
    items: [
      'SaaS architecture',
      'MVP development',
      'AI SaaS concepts',
      'Backend systems',
      'API architecture',
      'Business process systems',
    ],
    deliverables: [
      'Scalable technical architectures',
      'Production-ready MVP specifications',
      'Secure backend API endpoints',
      'Operational administrative dashboards',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Engineer modern, fast, and accessible digital frontends deeply integrated with AI engines, databases, and automated background jobs.',
    iconName: 'Code',
    items: [
      'Responsive websites',
      'Business websites',
      'Web applications',
      'AI-integrated websites',
      'API-connected applications',
      'Modern frontend development',
    ],
    deliverables: [
      'Responsive, high-contrast user interfaces',
      'Server-connected frontend state management',
      'SEO & accessibility compliance (WCAG AA)',
      'Clean, maintainable TypeScript codebases',
    ],
  },
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'ai-email-assistant',
    title: 'AI Email Inbox Assistant',
    category: 'AI Automation & Workflow',
    badge: 'Enterprise Workflow',
    tagline: 'Context-aware email triage, sentiment assessment, intent extraction, and automated CRM routing.',
    problem:
      'High-volume incoming business inboxes suffered from delays in routing inquiries, missed sales opportunities, and manual effort spent copying details into CRMs.',
    solution:
      'Designed an intelligent multi-agent system that intercepts inbound emails via webhook, applies LLM classification to detect intent and sentiment, extracts structured metadata, and routes into respective business pipelines.',
    technologies: ['LLM Systems', 'n8n', 'REST APIs', 'CRM Integration', 'Webhooks', 'TypeScript'],
    architecture: [
      'Webhook listener triggers on inbound message',
      'LLM reasoning classifies intent (Support, Sales, Billing, Partnership)',
      'Entity extraction produces JSON payload (Sender, Need, Urgency, Budget)',
      'Conditional n8n router drafts tailored response & syncs record to CRM',
      'Notification pushed to designated team channel for high-priority leads',
    ],
    outcome:
      'Designed to reduce manual processing and create a more structured workflow, accelerating response times and eliminating inbox bottlenecks.',
    workflowSteps: [
      { step: '01 Ingestion', description: 'Real-time webhook capture from mail servers' },
      { step: '02 AI Triage', description: 'Zero-shot classification and entity extraction' },
      { step: '03 Routing', description: 'Automated CRM insertion and draft generation' },
      { step: '04 Escalation', description: 'Slack alert for high-value client inquiries' },
    ],
  },
  {
    id: 'website-intelligence-scraper',
    title: 'Intelligent Website Intelligence Scraper',
    category: 'AI Agent & Data Extraction',
    badge: 'Autonomous Analysis',
    tagline: 'Automated deep inspection of target websites extracting stack, infrastructure, security, and content signals.',
    problem:
      'Business analysts and sales development representatives spent hours manually browsing target company websites to inspect their tech stack, CMS, tracking tools, and hosting providers.',
    solution:
      'Architected an autonomous web intelligence system that systematically analyzes target domains, extracts DOM and network fingerprints, and utilizes AI to summarize competitive intelligence into structured tables.',
    technologies: ['Autonomous Agents', 'DOM Parsing', 'LLM Analysis', 'REST APIs', 'Structured Data', 'n8n'],
    architecture: [
      'User or scheduled trigger submits target URL domain',
      'Headless inspection engine gathers headers, script tags, DNS, and CMS markers',
      'AI synthesis layer matches fingerprints against known software registries',
      'Generates executive audit report with detected technologies & security posture',
      'Stores verified records in centralized database for sales team queries',
    ],
    outcome:
      'Designed to reduce manual research hours and convert raw website signals into structured, queryable business intelligence.',
    workflowSteps: [
      { step: '01 URL Trigger', description: 'Batch input of target domains via API or CSV' },
      { step: '02 Deep Scan', description: 'Extraction of scripts, DNS, CMS, and meta tags' },
      { step: '03 AI Synthesis', description: 'Categorization into stack, hosting, analytics' },
      { step: '04 Database Sync', description: 'Populates CRM with enriched account profiles' },
    ],
  },
  {
    id: 'lead-management-automation',
    title: 'AI Lead Management Automation',
    category: 'Business Process Automation',
    badge: 'Pipeline Optimization',
    tagline: 'End-to-end lead qualification, automated enrichment, deduplication, and scheduled follow-up orchestration.',
    problem:
      'Leads acquired from multiple channels (web forms, events, partner referrals) sat unaddressed or lacked proper enrichment before sales outreach, leading to dropped conversions.',
    solution:
      'Built a unified lead processing pipeline that ingests entries from all sources, enriches contact records using external APIs, scores lead relevance using customized AI prompts, and assigns them to relevant representatives.',
    technologies: ['Workflow Automation', 'n8n', 'API Orchestration', 'Database Sync', 'Notification Bots'],
    architecture: [
      'Multi-channel ingestion (Forms, Webhooks, Spreadsheets)',
      'Data normalization & email validation verification',
      'API-driven company enrichment (industry, size, region)',
      'AI score generator ranking purchase readiness',
      'Automated task creation in CRM with enriched context',
    ],
    outcome:
      'Designed to replace manual administrative data entry with an autonomous qualification engine that standardizes lead handling.',
    workflowSteps: [
      { step: '01 Capture', description: 'Normalized ingestion from web forms and landing pages' },
      { step: '02 Validation', description: 'Automated email, company, and phone validation' },
      { step: '03 AI Scoring', description: 'Deterministic criteria & AI intent scoring' },
      { step: '04 Assignment', description: 'Instant routing with tailored briefing summary' },
    ],
  },
  {
    id: 'multilingual-ai-assistant',
    title: 'Multilingual AI Assistant',
    category: 'Agentic AI & LLMs',
    badge: 'Customer Interaction',
    tagline: 'Context-retaining conversational agent capable of real-time multi-language communication and system lookups.',
    problem:
      'International businesses struggled to offer 24/7 technical and commercial support to clients across diverse language markets without maintaining expensive multi-shift localized teams.',
    solution:
      'Developed a conversational AI assistant with dynamic language detection, custom knowledge base retrieval, and tool execution for checking order statuses, booking calls, and answering complex product questions.',
    technologies: ['Agentic Workflows', 'LLM Function Calling', 'RAG Retrieval', 'Vector Context', 'React Interface'],
    architecture: [
      'Client initiates conversation via chat interface or API',
      'Language detection dynamically sets response style and cultural tone',
      'Context retrieval queries verified business knowledge base',
      'Agent invokes authorized backend tools for real-time account data',
      'Delivers fluent, accurate response while logging session metrics',
    ],
    outcome:
      'Designed to provide consistent, multilingual customer interactions and handle routine queries autonomously around the clock.',
    workflowSteps: [
      { step: '01 Message', description: 'Real-time conversational input via web widget' },
      { step: '02 Context Engine', description: 'Semantic search over verified company docs' },
      { step: '03 Tool Execution', description: 'Safe API read-calls for order or status data' },
      { step: '04 Resolution', description: 'Natural answer delivered in client native language' },
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  // AI
  { name: 'Large Language Models', category: 'AI', role: 'Reasoning, text generation, and dynamic problem solving', description: 'Deep experience structuring robust instructions, temperature controls, and structured output formatting.', featured: true },
  { name: 'AI Agents & Tool Calling', category: 'AI', role: 'Autonomous multi-step execution', description: 'Architecting agents that can parse goals, decide tool sequences, and handle unexpected conditions.', featured: true },
  { name: 'Prompt & Context Engineering', category: 'AI', role: 'Precision output steering', description: 'Few-shot examples, dynamic context windows, system personas, and hallucination reduction strategies.', featured: true },
  { name: 'RAG Systems', category: 'AI', role: 'Grounded retrieval over private data', description: 'Semantic chunking, vector embeddings, and citation-backed knowledge base retrieval.', featured: true },
  { name: 'AI APIs', category: 'AI', role: 'Model integration & streaming', description: 'Seamless integration with modern frontier intelligence APIs including Gemini, OpenAI, and Claude.', featured: false },
  { name: 'Agentic Workflows', category: 'AI', role: 'Multi-agent orchestration', description: 'Supervisor-worker patterns, iterative self-correction, and human-in-the-loop review nodes.', featured: false },

  // Automation
  { name: 'n8n Orchestration', category: 'Automation', role: 'Enterprise workflow engine', description: 'Advanced self-hosted and cloud n8n architectures with complex branching, sub-workflows, and error traps.', featured: true },
  { name: 'REST & Webhook APIs', category: 'Automation', role: 'System interconnectivity', description: 'Designing bi-directional event handlers, secure HMAC signature verification, and payload transformations.', featured: true },
  { name: 'API Integrations', category: 'Automation', role: 'Connecting disparate SaaS tools', description: 'Building custom middleware bridges between CRMs, email servers, analytics tools, and internal databases.', featured: true },
  { name: 'Workflow Orchestration', category: 'Automation', role: 'Fault-tolerant job scheduling', description: 'Automated cron triggers, retry strategies, dead-letter queues, and operational execution monitors.', featured: false },

  // Development
  { name: 'TypeScript', category: 'Development', role: 'Type-safe systems engineering', description: 'Clean, maintainable application architecture with strict type enforcement and scalable schemas.', featured: true },
  { name: 'React', category: 'Development', role: 'Interactive user interfaces', description: 'Modern component-driven web applications, dashboards, and client-facing configuration portals.', featured: true },
  { name: 'Modern CSS / Tailwind', category: 'Development', role: 'High-contrast responsive UI', description: 'Pixel-perfect, accessible, and fast design systems built for enterprise clarity.', featured: false },
  { name: 'Backend Integration', category: 'Development', role: 'API endpoints & server logic', description: 'Node.js, Express, and microservice route handlers connecting frontends to automated services.', featured: false },

  // Data
  { name: 'Databases & Schemas', category: 'Data', role: 'Persistent data modeling', description: 'PostgreSQL, NoSQL, and vector storage design optimized for structured query speed.', featured: true },
  { name: 'Structured Data & JSON', category: 'Data', role: 'Universal payload exchange', description: 'Strict JSON schema validation, Zod type enforcement, and automated payload sanitization.', featured: true },
  { name: 'Spreadsheets & Airtable', category: 'Data', role: 'Business-accessible databases', description: 'Connecting automated backend pipelines directly to Airtable, Google Sheets, and Notion for team accessibility.', featured: false },
  { name: 'Data Processing Pipelines', category: 'Data', role: 'ETL and transformation', description: 'Deduplication, normalization, formatting, and batch processing of operational records.', featured: false },

  // SaaS
  { name: 'SaaS Architecture', category: 'SaaS', role: 'Scalable software foundations', description: 'Designing modular multi-tenant systems, permission models, and clean separation of concerns.', featured: true },
  { name: 'MVP Development', category: 'SaaS', role: 'Rapid product execution', description: 'Converting high-level business requirements into working, testable software prototypes.', featured: true },
  { name: 'Business Automation Systems', category: 'SaaS', role: 'Digital operating engines', description: 'Digitizing offline paper-or-spreadsheet processes into unified web platforms.', featured: false },
  { name: 'API-Driven Systems', category: 'SaaS', role: 'Extensible architecture', description: 'Building platforms with public/private API surfaces designed for future integrations.', featured: false },
];

export const BUSINESS_PROBLEMS: BusinessProblem[] = [
  {
    problem: 'Too Much Manual Work',
    impact: 'Teams spend 30-40% of their workday copy-pasting data, downloading files, and typing repetitive emails.',
    solution: 'Automate repetitive operations with custom event-driven workflows that run 24/7 without manual intervention.',
    systemBenefit: 'Frees team focus for revenue-generating work while eliminating human copy-paste errors.',
    iconName: 'Clock',
  },
  {
    problem: 'Slow Lead Processing',
    impact: 'Leads take hours or days to reach sales representatives, causing potential high-value clients to explore competitors.',
    solution: 'Build automated lead qualification, instant data enrichment, and algorithmic routing directly into your CRM.',
    systemBenefit: 'Cuts response times down to minutes and arms sales teams with enriched prospect dossiers.',
    iconName: 'Zap',
  },
  {
    problem: 'Unorganized Emails',
    impact: 'Vital client requests, urgent invoices, and potential deals get buried in crowded group or personal inboxes.',
    solution: 'Deploy intelligent email classification that reads intent, extracts key data, drafts replies, and notifies stakeholders.',
    systemBenefit: 'Categorizes 100% of incoming communications instantly and triggers downstream actions automatically.',
    iconName: 'Mail',
  },
  {
    problem: 'Disconnected Applications',
    impact: 'CRMs, accounting tools, website forms, and chat channels operate in silos with no automated data exchange.',
    solution: 'Connect systems through robust APIs, webhooks, and orchestration tools like n8n for real-time synchronization.',
    systemBenefit: 'A single source of truth across all platforms without dual-entry bookkeeping.',
    iconName: 'Network',
  },
  {
    problem: 'Repetitive Customer Support',
    impact: 'Support agents answer the same 20 basic inquiries every single day, draining morale and driving up overhead.',
    solution: 'Deploy AI-powered support agents grounded in verified documentation to resolve common questions instantly.',
    systemBenefit: '24/7 instant client support with automated human escalation for complex edge cases.',
    iconName: 'MessageSquare',
  },
  {
    problem: 'Data Scattered Across Platforms',
    impact: 'Critical customer details exist partially in emails, partially in spreadsheets, and partially in chat logs.',
    solution: 'Create synchronized workflows and centralized data repositories that aggregate records into structured schemas.',
    systemBenefit: 'Complete visibility into business operations with real-time auditability.',
    iconName: 'Database',
  },
  {
    problem: 'Complex Business Operations',
    impact: 'Multi-step processes involving approvals, document generation, and client notifications stall due to human bottlenecks.',
    solution: 'Convert multi-step processes into intelligent workflows with automated triggers, checks, and progress tracking.',
    systemBenefit: 'Smooth operational throughput with measurable velocity across the entire company.',
    iconName: 'GitMerge',
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep dive into your business, current workflows, operational bottlenecks, team dynamics, and strategic objectives.',
    deliverable: 'Process Mapping & Opportunity Assessment',
    durationEstimate: 'Phase 1',
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'Identify high-friction repetitive tasks, software dependencies, data structures, edge cases, and high-ROI automation targets.',
    deliverable: 'Technical Feasibility & ROI Blueprint',
    durationEstimate: 'Phase 2',
  },
  {
    number: '03',
    title: 'Architect',
    description: 'Design the system architecture: AI models, agent decision loops, API connections, database schemas, and failover mechanisms.',
    deliverable: 'Complete System & Data Architecture Spec',
    durationEstimate: 'Phase 3',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop the automation workflows in n8n, train agent prompts, write custom API integrations, and code web dashboards.',
    deliverable: 'Fully Integrated Staging System',
    durationEstimate: 'Phase 4',
  },
  {
    number: '05',
    title: 'Test & Optimize',
    description: 'Rigorous testing of reliability, unusual edge cases, payload variations, prompt adherence, error handling, and speed.',
    deliverable: 'Quality Assurance & Validation Report',
    durationEstimate: 'Phase 5',
  },
  {
    number: '06',
    title: 'Deploy & Improve',
    description: 'Deploy to live production, monitor operational telemetry, train your internal team, and iterate as your business scales.',
    deliverable: 'Production Handover & Continuous Monitoring',
    durationEstimate: 'Phase 6',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Business-Focused Problem Solving',
    description: 'I begin by dissecting the operational friction and economic outcome, never by imposing arbitrary tech stacks.',
    iconName: 'Target',
  },
  {
    title: 'AI + Automation Expertise',
    description: 'Deep dual-mastery of autonomous AI reasoning and deterministic workflow orchestration (n8n, APIs).',
    iconName: 'Cpu',
  },
  {
    title: 'End-to-End System Thinking',
    description: 'From web interface to API middleware, database schemas, and AI prompts, every component connects cohesively.',
    iconName: 'Share2',
  },
  {
    title: 'Scalable Architecture',
    description: 'Solutions engineered to withstand traffic surges, API rate limits, and evolving business requirements without breaking.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Custom-Built Solutions',
    description: 'No one-size-fits-all templates or brittle hacks. Every automation is tailored to your exact operational parameters.',
    iconName: 'Sliders',
  },
  {
    title: 'Continuous Optimization',
    description: 'Proactive refinement, performance audits, and architecture updates as new frontier AI capabilities emerge.',
    iconName: 'TrendingUp',
  },
];

export const CORE_PHILOSOPHY_STATEMENT =
  'The goal is not to add AI for the sake of AI. The goal is to use AI and automation where they create measurable business value.';

export const INDUSTRIES_APPLICATIONS: IndustryApplication[] = [
  {
    name: 'E-commerce',
    description: 'Automated catalog enrichment, order dispute triage, supplier inventory synchronization, and post-purchase customer flows.',
    useCases: ['Product catalog classification', 'Return request routing', 'Multi-channel inventory updates'],
    iconName: 'ShoppingBag',
  },
  {
    name: 'SaaS',
    description: 'User onboarding automation, feature usage analytics alerts, trial-to-paid nurture sequences, and support ticketing triage.',
    useCases: ['Product-led onboarding triggers', 'Churn risk monitoring', 'API usage tracking'],
    iconName: 'Cloud',
  },
  {
    name: 'Professional Services',
    description: 'Client intake automation, document generation, engagement letter tracking, and meeting transcription synthesis.',
    useCases: ['Automated engagement agreements', 'Briefing note generation', 'Timesheet reconciliation'],
    iconName: 'Briefcase',
  },
  {
    name: 'Agencies',
    description: 'Cross-client reporting aggregation, creative asset approval loops, campaign performance scrapers, and lead assignment.',
    useCases: ['Multi-account metric reports', 'Automated client dashboards', 'Project task dispatch'],
    iconName: 'Sparkles',
  },
  {
    name: 'Real Estate',
    description: 'Inbound property inquiry screening, automated viewing appointment booking, market intelligence gathering, and MLS data sync.',
    useCases: ['Buyer criteria extraction', 'Instant tour scheduling', 'Listing detail syndication'],
    iconName: 'Building',
  },
  {
    name: 'Education & Training',
    description: 'Course enrollment workflows, student FAQ resolution bots, automated certificate issuance, and progress reminder notifications.',
    useCases: ['Interactive student Q&A bot', 'Certificate delivery triggers', 'Feedback collection'],
    iconName: 'GraduationCap',
  },
  {
    name: 'Customer Support',
    description: 'Tier-1 ticket auto-resolution, multi-language translation, sentiment escalation, and post-resolution satisfaction polling.',
    useCases: ['24/7 knowledge base answering', 'Instant SLA breach warnings', 'Ticket tag classification'],
    iconName: 'Headphones',
  },
  {
    name: 'Sales & Marketing',
    description: 'Prospect data enrichment, automated outbound sequence triggers, webinar lead follow-ups, and attribution syncing.',
    useCases: ['Real-time prospect scoring', 'Automated CRM updates', 'Personalized content drafting'],
    iconName: 'BarChart',
  },
  {
    name: 'Operations',
    description: 'Cross-platform inventory reconciliation, expense report extraction, employee onboarding workflows, and SLA monitors.',
    useCases: ['Invoice OCR extraction', 'Employee tool provisioning', 'Vendor contract alerts'],
    iconName: 'Cog',
  },
  {
    name: 'Internal Business Systems',
    description: 'Connecting fragmented ERPs, accounting spreadsheets, HR databases, and team chat environments into unified pipelines.',
    useCases: ['Slack/Teams bot commands', 'Database health monitors', 'Departmental handoffs'],
    iconName: 'Server',
  },
];

export const RESULTS_IMPACT: ImpactMetric[] = [
  {
    title: 'Less Manual Work',
    description: 'Automation reduces repetitive operational tasks that drain valuable employee time and energy.',
    transformation: 'Eliminates repetitive data re-entry and administrative busywork.',
    highlight: 'Operational Efficiency',
  },
  {
    title: 'Faster Workflows',
    description: 'Intelligent systems accelerate processes from hours of delay down to near-instant execution.',
    transformation: 'Near real-time response to customer inquiries and inbound leads.',
    highlight: 'Speed & Responsiveness',
  },
  {
    title: 'Better Organization',
    description: 'Structured automation keeps accurate information flowing reliably between all business systems.',
    transformation: 'Unified source of truth across CRMs, databases, and communication channels.',
    highlight: 'Data Integrity',
  },
  {
    title: 'Scalable Operations',
    description: 'Automated workflows grow with business volume without requiring proportional headcount increases.',
    transformation: 'Handle 10x operational volume with stable, predictable overhead.',
    highlight: 'Sustainable Growth',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    quote:
      'Syed designed an intelligent automation architecture that transformed how our team handles incoming business inquiries. The integration between our email, n8n, and CRM is flawless.',
    role: 'Managing Director',
    context: 'International Professional Services Firm',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    quote:
      'Unlike developers who just write code, Syed analyzed our actual business process first. His agentic AI system reduced our repetitive data handling significantly.',
    role: 'Head of Operations',
    context: 'Technology & SaaS Organization',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    quote:
      'A true systems architect. The custom web intelligence scraper and automated reporting workflows he built deliver clean, reliable data every morning.',
    role: 'Founder & CEO',
    context: 'Digital Agency & Consulting Group',
    isPlaceholder: true,
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    title: 'AI Automation & Agentic AI',
    role: 'Specialist & System Architect',
    period: 'Current Focus',
    focus: 'Designing autonomous multi-step agents, function-calling workflows, and enterprise intelligence systems.',
    keyContributions: [
      'Architecting resilient agentic pipelines with multi-tier tool registries',
      'Implementing RAG architectures over proprietary business knowledge bases',
      'Developing automated evaluation loops to ensure high prompt precision and reliability',
    ],
  },
  {
    title: 'Workflow Automation & Integrations',
    role: 'Workflow Automation Expert',
    period: 'Core Discipline',
    focus: 'Designing intelligent workflows and business automation systems connecting diverse applications and APIs.',
    keyContributions: [
      'Engineered complex multi-branch n8n workflows handling high webhook throughput',
      'Integrated enterprise CRMs, databases, payment gateways, and communications',
      'Structured automated dead-letter queues and error recovery procedures',
    ],
  },
  {
    title: 'AI Agents Development',
    role: 'AI Agents Developer',
    period: 'Specialization',
    focus: 'Developing AI-powered assistants, customer support agents, and autonomous workflow systems.',
    keyContributions: [
      'Constructed context-retaining multilingual customer support assistants',
      'Created automated lead capture and qualification bots with CRM ingestion',
      'Built autonomous research agents that parse and extract web intelligence',
    ],
  },
  {
    title: 'Web & SaaS Engineering',
    role: 'Web Developer & SaaS Specialist',
    period: 'Engineering Foundation',
    focus: 'Building modern web solutions, responsive applications, and SaaS-oriented systems.',
    keyContributions: [
      'Engineered full-stack responsive web applications using React, TypeScript, and Tailwind',
      'Designed clean REST API architectures and microservice webhook endpoints',
      'Built interactive administrative dashboards and data visualization tools',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'AI & Agents',
    question: 'What type of AI automation do you build?',
    answer:
      'I build practical, business-focused AI automation systems. This includes intelligent email triage and drafting, unstructured document and PDF parsing, automated lead qualification, web intelligence extraction, multilingual customer support agents, and end-to-end operational pipelines that connect AI reasoning with your everyday business software.',
  },
  {
    id: 'faq-2',
    category: 'Workflow & n8n',
    question: 'Can you automate an existing business workflow?',
    answer:
      'Yes. In fact, most projects begin with an existing, manual business process. We analyze your current steps, identify bottlenecks and repetitive manual handoffs, and systematically reconstruct them into an automated workflow without disrupting your ongoing operations.',
  },
  {
    id: 'faq-3',
    category: 'Workflow & n8n',
    question: 'Can you connect different applications through APIs?',
    answer:
      'Yes. Connecting disparate applications is a core specialization. Whether your tools have direct webhooks, REST APIs, or need custom middleware built in n8n or Node.js, I bridge CRMs, databases, communication apps, email systems, and billing platforms into a synchronized ecosystem.',
  },
  {
    id: 'faq-4',
    category: 'AI & Agents',
    question: 'Can you build AI agents for businesses?',
    answer:
      'Yes. I build specialized AI agents designed for specific business roles—such as customer inquiry triage, research collection, internal knowledge retrieval, and data verification. These agents are equipped with secure tool-calling capabilities so they can check databases, invoke APIs, and perform actions safely.',
  },
  {
    id: 'faq-5',
    category: 'SaaS & Development',
    question: 'Do you build SaaS products?',
    answer:
      'Yes. I design and develop SaaS architectures, MVPs, and business process software. This includes architecting database schemas, developing backend APIs, implementing authentication, and building modern, responsive React frontends.',
  },
  {
    id: 'faq-6',
    category: 'AI & Agents',
    question: 'Can AI agents work with existing business systems?',
    answer:
      'Yes. AI agents are most valuable when integrated directly with your existing infrastructure—such as your CRM (HubSpot, Salesforce, Pipedrive), internal databases, Google Workspace, Slack, or ticketing systems. The agent acts as an intelligent layer that reads and writes data through secure API channels.',
  },
  {
    id: 'faq-7',
    category: 'Process & Scope',
    question: 'How do you determine what should be automated?',
    answer:
      'We follow a structured discovery process: we evaluate tasks by frequency, time consumption, error risk, and strategic value. High-volume, rule-governed, or repetitive tasks that bottleneck employee productivity are prioritized first to deliver immediate, measurable ROI.',
  },
  {
    id: 'faq-8',
    category: 'SaaS & Development',
    question: 'Can you integrate AI into an existing website or application?',
    answer:
      'Yes. I can integrate AI capabilities—such as intelligent search, conversational agents, automated form enrichment, or content classification—directly into your existing web application or frontend via clean API endpoints.',
  },
  {
    id: 'faq-9',
    category: 'Process & Scope',
    question: 'How does a project normally start?',
    answer:
      'A project begins with an initial conversation to review your current business workflow and objectives. From there, I formulate a clear architecture proposal and roadmap detailing the recommended automation system, technology choices, deliverables, and estimated timeframe.',
  },
];
