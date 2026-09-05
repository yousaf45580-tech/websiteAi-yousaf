import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { CoreExpertise } from './components/CoreExpertise';
import { ServicesSection } from './components/ServicesSection';
import { ArchitectureVisual } from './components/ArchitectureVisual';
import { TechStack } from './components/TechStack';
import { ProblemsSolved } from './components/ProblemsSolved';
import { ProcessSection } from './components/ProcessSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ProjectsSection } from './components/ProjectsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { GlobalExperience } from './components/GlobalExperience';
import { ResultsImpact } from './components/ResultsImpact';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExpertise = () => {
    const el = document.getElementById('expertise');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-cyan-400/25 selection:text-cyan-200 font-sans antialiased overflow-x-hidden">
      {/* Top Sticky Navigation */}
      <Navbar onContactClick={scrollToContact} />

      <main>
        {/* 01. Hero Section */}
        <Hero
          onExploreWork={scrollToProjects}
          onBookConsultation={scrollToContact}
        />

        {/* 02. Infinite Trust & Expertise Strip */}
        <TrustStrip />

        {/* 03. About Syed Muhammad Yousaf */}
        <AboutSection onContactClick={scrollToContact} />

        {/* 04. Core Specializations / Expertise */}
        <CoreExpertise
          onSelectService={() => {}}
          onContactClick={scrollToContact}
        />

        {/* 05. Services Section */}
        <ServicesSection onContactClick={scrollToContact} />

        {/* 06. Interactive Automation Architecture Visual */}
        <ArchitectureVisual />

        {/* 07. Featured Projects & Case Studies */}
        <ProjectsSection onContactClick={scrollToContact} />

        {/* 08. Technology Stack */}
        <TechStack />

        {/* 09. Business Problems I Solve */}
        <ProblemsSolved onContactClick={scrollToContact} />

        {/* 10. Working Process (6-step lifecycle) */}
        <ProcessSection />

        {/* 11. Why Work With Me (Business-First Mindset) */}
        <WhyWorkWithMe onContactClick={scrollToContact} />

        {/* 12. Market Applications / Industries */}
        <IndustriesSection onContactClick={scrollToContact} />

        {/* 13. Global Experience (UK, Spain, Germany) */}
        <GlobalExperience />

        {/* 14. Measurable Results & Impact */}
        <ResultsImpact onContactClick={scrollToContact} />

        {/* 15. Client Testimonials & Endorsements */}
        <TestimonialsSection />

        {/* 16. Professional Experience & Focus */}
        <ExperienceSection />

        {/* 17. Frequently Asked Questions */}
        <FAQSection onContactClick={scrollToContact} />

        {/* 18. Dramatic Final Call To Action */}
        <CTASection
          onStartConversation={scrollToContact}
          onViewExpertise={scrollToExpertise}
        />

        {/* 19. Contact Form & Channel Access */}
        <ContactSection />
      </main>

      {/* 20. Comprehensive Professional Footer */}
      <Footer />
    </div>
  );
}

