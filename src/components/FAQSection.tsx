import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/portfolioData';
import { FAQItem } from '../types';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQSectionProps {
  onContactClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'AI & Agents', 'Workflow & n8n', 'SaaS & Development', 'Process & Scope'];

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesCategory = selectedCategory === 'ALL' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
              Frequently Asked Questions
            </span>
            <span className="h-px w-6 bg-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Clarity on Engagement & Implementation
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct answers on capabilities, integration processes, security standards, and workflow scope.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword (e.g. n8n, agents, CRM, APIs)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                    : 'bg-white/[0.02] text-slate-400 border border-white/[0.06] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-sm text-slate-400">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
                className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-[#0a0a0c] border-cyan-400/40 shadow-lg shadow-cyan-950/20'
                      : 'bg-[#08080a] border-white/[0.08] hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg border transition-transform duration-200 shrink-0 ${
                        isOpen
                          ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-400 rotate-180'
                          : 'bg-white/[0.04] border-white/[0.08] text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-cyan-300/80 border border-white/[0.06]">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Have a project requirement not covered here?
          </p>
          <button
            onClick={onContactClick}
            className="mt-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ask a specific technical question directly</span>
            <span>&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};
