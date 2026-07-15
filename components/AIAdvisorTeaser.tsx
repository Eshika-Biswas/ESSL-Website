'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

const prompts = [
  "What's the fastest path to ransomware protection?",
  "How do I secure a hybrid cloud environment?",
  "Can ESSL help with a Fortinet deployment?",
  "What does 24x7 managed security support include?",
];

export default function AIAdvisorTeaser() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePrompt, setActivePrompt] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden">
      {/* Background Image at full natural brightness */}
      <div className="absolute inset-0 z-0 bg-[#f8fafc]">
        <Image
          src="/images/ai-advisor-bg.jpg"
          alt="AI Advisor Mesh Background"
          fill
          sizes="100vw"
          className="object-cover opacity-100"
          loading="lazy"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-2/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Ask Our{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Advisor
              </span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Get instant, intelligent answers about cybersecurity solutions, infrastructure design,
              and managed services — powered by ESSL&apos;s real service and product knowledge base.
            </p>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Available 24/7
              </div>
              <div className="w-px h-4 bg-slate-300/85" />
              <div>Trained on ESSL&apos;s knowledge base</div>
            </div>
          </div>

          {/* Right — Chat Preview */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-2xl glass-card overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-medium text-white">ESSL AI Advisor</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span className="text-xs text-slate-400">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-slate-400 mb-4">Try asking:</p>
                {prompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePrompt(index)}
                    className={`w-full text-left flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-300 group ${activePrompt === index
                        ? 'border-primary/40 bg-primary/5 text-primary'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.06] text-slate-300'
                      }`}
                  >
                    <MessageSquare className={`w-4 h-4 flex-shrink-0 ${activePrompt === index ? 'text-primary' : 'text-slate-400 group-hover:text-slate-200'} transition-colors`} />
                    <span className="text-sm transition-colors">
                      {prompt}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all ${activePrompt === index ? '!opacity-100 text-primary' : 'text-slate-400'}`} />
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-slate-450 outline-none"
                    readOnly
                  />
                  <button className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-accent-2/20 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
