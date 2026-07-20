'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MessageCircle,
  Zap,
  Bot,
  ArrowRight,
  Search,
  Compass,
  Server,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

// ─── Capability Cards ─────────────────────────────────────────────────────────
const capabilities = [
  {
    number: '01',
    title: 'Conversational AI',
    description: 'AI Chatbot, AI Knowledge Base, AI Sales Assistant, AI Service Desk',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Intelligent Process Automation',
    description: 'AI Proposal Generator, AI Document Processing, AI Workflow Automation',
    icon: Zap,
  },
  {
    number: '03',
    title: 'AI Insights & Agents',
    description: 'AI Analytics, AI Copilot, AI Agents',
    icon: Bot,
  },
];

// ─── Methodology Steps ────────────────────────────────────────────────────────
const steps = [
  { title: 'Assess',            icon: Search,      description: 'Infrastructure audit & requirements gathering' },
  { title: 'Design',            icon: Compass,     description: 'Architecture, topology & physical blueprints' },
  { title: 'Deploy',            icon: Server,      description: 'Hardware/software provisioning & configuration' },
  { title: 'Secure & Optimize', icon: ShieldCheck, description: 'Hardening, testing, performance tuning' },
  { title: 'Support',           icon: Headphones,  description: '24/7 monitoring & knowledge transfer' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AIAutomationDetail() {
  const [heroVisible,    setHeroVisible]    = useState(false);
  const [gridVisible,    setGridVisible]    = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [activeSteps,    setActiveSteps]    = useState(0);

  const heroRef    = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 50);

    const makeObserver = (setter: (v: boolean) => void, threshold = 0.1) =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, { threshold });

    const gridObs    = makeObserver(setGridVisible,    0.05);
    const journeyObs = makeObserver(setJourneyVisible, 0.15);

    const refs = [
      { obs: gridObs,    ref: gridRef.current    },
      { obs: journeyObs, ref: journeyRef.current },
    ];
    refs.forEach(({ obs, ref }) => { if (ref) obs.observe(ref); });

    return () => {
      clearTimeout(timer);
      refs.forEach(({ obs }) => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    if (journeyVisible && activeSteps < 5) {
      const interval = setInterval(() => {
        setActiveSteps((prev) => {
          if (prev >= 5) { clearInterval(interval); return 5; }
          return prev + 1;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [journeyVisible, activeSteps]);

  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="w-full bg-[#0f1420] text-slate-100 min-h-screen">

      {/* ─── PART 1 — HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        {/* Background video placeholder — static image fallback */}
        {/* NOTE: Swap image for relevant AI & Automation loop video when asset becomes available */}
        <div className="absolute inset-0 z-0 bg-[#0a0e17]">
          <Image
            src="/images/ai.jpg"
            alt="AI & Automation hero backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0818]/90 via-[#0d0818]/45 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0818]/30 via-transparent to-[#0d0818]/50 z-[1]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">

              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="w-2 h-2 rounded-full bg-[rgb(20,109,174)] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-primary-light font-semibold">Capability</span>
              </div>

              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-white">AI & </span>
                <span className="text-[rgb(20,109,174)]">Automation</span>
              </h1>

              <p className={`text-lg sm:text-xl text-slate-350 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Intelligent automation and AI-driven solutions that transform how you work.
              </p>

              <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                  Schedule a Consultation
                </Link>
                <Link href="#capabilities" className="btn-secondary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                  Explore Our Capabilities
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-5" />
          </div>
        </div>
      </section>

      {/* ─── PART 2 — CAPABILITIES ─────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="capabilities"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200 animate-grid-drift"
        style={gridBgStyle}
      >
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(20,109,174,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              AUTOMATION DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our AI and automation capabilities span every critical domain — ensuring nothing is missed.
            </p>
          </div>

          {/* 3 cards grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((card, index) => (
              <div
                key={card.title}
                className={`group relative rounded-2xl bg-white border border-slate-200/60 p-8 sm:p-10 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1.5 transition-all duration-500 z-10 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Numbered badge top-right */}
                <div className="absolute top-8 right-8 text-xs font-mono font-bold text-slate-400 group-hover:text-[rgb(20,109,174)]/45 transition-colors duration-300">
                  {card.number}
                </div>

                <card.icon className="w-8 h-8 text-[rgb(20,109,174)] mb-4 shrink-0" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors duration-300 leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PART 3 — DEPLOYMENT JOURNEY ───────────────────────────────────── */}
      <section
        ref={journeyRef}
        id="methodology"
        className="relative w-full py-24 bg-[#f1f5f9] border-t border-slate-200 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/images/solutions-bg.png" alt="Methodology backdrop" fill sizes="100vw" className="object-cover opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9]/40 via-transparent to-[#f1f5f9]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-700 ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Deployment Journey
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A structured, client-centric engineering path to modern, resilient infrastructure.
            </p>
          </div>

          <div className="relative mt-16 max-w-6xl mx-auto px-6">
            {/* Horizontal line (desktop) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-200 hidden md:block z-0">
              <div className="h-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out" style={{ width: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * 25}%` }} />
            </div>
            {/* Vertical line (mobile) */}
            <div className="absolute top-[28px] bottom-[28px] left-[52px] md:left-[28px] w-[3px] bg-slate-200 md:hidden z-0">
              <div className="w-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out" style={{ height: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * 25}%` }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 lg:gap-6 relative z-10">
              {steps.map((step, index) => {
                const stepNum = index + 1;
                const isActive = activeSteps >= stepNum;
                return (
                  <div
                    key={step.title}
                    className={`flex md:flex-col items-start md:items-center gap-6 transition-all duration-700 ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative shrink-0 z-10">
                      <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-500 ${isActive ? 'border-[rgb(20,109,174)] bg-[rgb(20,109,174)]/5 text-[rgb(20,109,174)] shadow-[0_0_15px_rgba(20,109,174,0.25)] scale-110' : 'border-slate-200 bg-white text-slate-400'}`}>
                        <step.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-0 scale-100' : '-rotate-12 scale-90'}`} />
                      </div>
                    </div>
                    <div className="flex flex-col md:items-center md:text-center pt-2 md:pt-0">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5 transition-colors duration-500 ${isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400'}`}>Step 0{stepNum}</span>
                      <h4 className="text-base font-bold text-slate-900 mb-2 leading-tight">{step.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] md:mx-auto">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PART 4 — CLOSING CTA ───────────────────────────────────────────── */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgb(26,138,220) 0%, rgb(14,76,122) 45%, rgb(8,42,72) 100%)' }} />
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,42,72,0.6)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Automate with Intelligence?
          </h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a structured consultation. Understand your workflows. Build a roadmap grounded in operational reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[rgb(14,76,122)] font-semibold text-base px-8 py-4 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
