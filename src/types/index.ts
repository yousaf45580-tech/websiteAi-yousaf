export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseCard {
  number: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
  deliverables: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  architecture: string[];
  outcome: string;
  metricsLabel?: string;
  workflowSteps: {
    step: string;
    description: string;
  }[];
}

export interface TechItem {
  name: string;
  category: 'AI' | 'Automation' | 'Development' | 'Data' | 'SaaS';
  description: string;
  role: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  durationEstimate: string;
}

export interface BusinessProblem {
  problem: string;
  impact: string;
  solution: string;
  systemBenefit: string;
  iconName: string;
}

export interface IndustryApplication {
  name: string;
  description: string;
  useCases: string[];
  iconName: string;
}

export interface ImpactMetric {
  title: string;
  description: string;
  transformation: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  role: string;
  context: string;
  isPlaceholder: boolean;
}

export interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  focus: string;
  keyContributions: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'AI & Agents' | 'Workflow & n8n' | 'SaaS & Development' | 'Process & Scope';
}
