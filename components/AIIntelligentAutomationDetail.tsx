'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Bot,
  Cpu,
  FileText,
  MessageSquare,
  TrendingUp,
  Zap,
  Sparkles,
  Database,
  Eye,
  Network,
  MessageCircle,
  Target,
  Layers,
  ShieldCheck,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Settings,
  Workflow,
  BadgeCheck,
  Globe,
  Brain
} from 'lucide-react';

const aiDomains = [
  {
    number: '01',
    acronym: 'AI AGENTS',
    title: 'AI Agents',
    description: 'Deploy autonomous AI agents that automate complex business tasks, interact with enterprise systems, and support intelligent decision-making.',
    icon: Bot,
  },
  {
    number: '02',
    acronym: 'ENTERPRISE AI',
    title: 'Enterprise AI',
    description: 'Integrate AI capabilities across business functions to improve productivity, operational efficiency, and customer engagement.',
    icon: Cpu,
  },
  {
    number: '03',
    acronym: 'DOC INTEL',
    title: 'Document Intelligence',
    description: 'Extract, classify, validate, and process information from invoices, contracts, forms, and other business documents using AI.',
    icon: FileText,
  },
  {
    number: '04',
    acronym: 'CHATBOTS',
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Deliver intelligent, 24×7 conversational experiences for customer support, employee assistance, and service automation.',
    icon: MessageSquare,
  },
  {
    number: '05',
    acronym: 'PREDICTIVE',
    title: 'Predictive Analytics',
    description: 'Leverage machine learning to forecast trends, optimize operations, detect risks, and support data-driven business decisions.',
    icon: TrendingUp,
  },
  {
    number: '06',
    acronym: 'WORKFLOW AI',
    title: 'AI Workflow Automation',
    description: 'Automate repetitive business processes using AI-powered decision-making, orchestration, and intelligent workflows.',
    icon: Zap,
  },
  {
    number: '07',
    acronym: 'GENAI / LLM',
    title: 'Generative AI Solutions',
    description: 'Build AI-powered copilots, knowledge assistants, content generation, and enterprise search using Large Language Models (LLMs).',
    icon: Sparkles,
  },
  {
    number: '08',
    acronym: 'RAG',
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Enable AI applications to deliver accurate, context-aware responses by combining LLMs with enterprise knowledge bases.',
    icon: Database,
  },
  {
    number: '09',
    acronym: 'COMPUTER VISION',
    title: 'Computer Vision',
    description: 'Analyze images and videos for quality inspection, object detection, facial recognition, OCR, and intelligent surveillance.',
    icon: Eye,
  },
  {
    number: '10',
    acronym: 'MACHINE LEARNING',
    title: 'Machine Learning Solutions',
    description: 'Develop custom ML models for classification, recommendation, forecasting, anomaly detection, and business optimization.',
    icon: Network,
  },
  {
    number: '11',
    acronym: 'NLP',
    title: 'Natural Language Processing (NLP)',
    description: 'Extract insights from text, perform sentiment analysis, document classification, translation, and language understanding.',
    icon: MessageCircle,
  },
  {
    number: '12',
    acronym: 'DECISION INTEL',
    title: 'AI Decision Intelligence',
    description: 'Combine AI, analytics, and business rules to automate complex decision-making and optimize operational outcomes.',
    icon: Target,
  },
  {
    number: '13',
    acronym: 'MLOPS',
    title: 'AI Model Deployment (MLOps)',
    description: 'Deploy, monitor, secure, and continuously improve AI models with scalable MLOps practices.',
    icon: Layers,
  },
  {
    number: '14',
    acronym: 'AI GOVERNANCE',
    title: 'Responsible AI & AI Governance',
    description: 'Establish AI governance, security, compliance, explainability, and ethical AI practices for enterprise adoption.',
    icon: ShieldCheck,
  },
  {
    number: '15',
    acronym: 'AI STRATEGY',
    title: 'AI Consulting & Strategy',
    description: 'Define AI roadmaps, identify high-value use cases, and guide organizations through successful AI transformation initiatives.',
    icon: Lightbulb,
  },
];

const aiPillars = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents & Enterprise AI',
    description: 'Intelligent multi-agent systems and enterprise-wide AI capabilities designed to perform complex business workflows autonomously.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI & RAG Knowledge Systems',
    description: 'Custom LLM copilots and Retrieval-Augmented Generation linking enterprise data with conversational intelligence.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics & Computer Vision',
    description: 'Machine learning forecasting models combined with computer vision for automated visual inspection and operational foresight.',
  },
  {
    icon: Layers,
    title: 'MLOps & Responsible AI Governance',
    description: 'Scalable model lifecycle management, continuous drift monitoring, and ethical AI compliance frameworks.',
  },
];

const whyChooseItems = [
  {
    number: '01',
    title: 'End-to-End AI Strategy-to-Deployment',
    description: 'Full-spectrum guidance from high-impact use case identification and PoC prototyping to enterprise production deployment.',
    icon: Workflow,
  },
  {
    number: '02',
    title: 'Deep Integration with Enterprise Data & Systems',
    description: 'Seamless API and RAG pipelines connecting AI models directly to your ERP, CRM, databases, and cloud data lakes.',
    icon: Network,
  },
  {
    number: '03',
    title: 'Enterprise-Grade Responsible & Governed AI',
    description: 'Strict data privacy controls, RBAC access policies, model explainability, and zero-data-retention security protocols.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Measurable ROI & Operational Efficiency',
    description: 'Focus on high-value business outcomes that reduce manual processing times, enhance decision speed, and lower operational overhead.',
    icon: BadgeCheck,
  },
];

export default function AIIntelligentAutomationDetail() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 50);

    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setGridVisible(true);
      },
      { threshold: 0.05 }
    );
    if (gridRef.current) gridObserver.observe(gridRef.current);

    const whyChooseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWhyChooseVisible(true);
      },
      { threshold: 0.05 }
    );
    if (whyChooseRef.current) whyChooseObserver.observe(whyChooseRef.current);

    return () => {
      clearTimeout(timer);
      gridObserver.disconnect();
      whyChooseObserver.disconnect();
    };
  }, []);

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
      {/* ─────────────────────────────────────────────────────────
          PART 1 — HERO SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f1420]"
      >
        {/* Background Overlay Easing */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0b1426] via-[#0f1420] to-[#070b12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,109,174,0.15),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Eyebrow Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(20,109,174)]/30 bg-[rgb(20,109,174)]/10 transition-all duration-700 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-[rgb(20,109,174)] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-[#3f94cf] font-semibold">
                  SOLUTION ARCHITECTURE
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-white">AI & Intelligent Automation </span>
                <br className="hidden sm:inline" />
                <span className="text-[rgb(20,109,174)]">Built to Think and Act Faster.</span>
              </h1>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Harness Artificial Intelligence, Machine Learning, and Intelligent Automation to streamline business processes, enhance decision-making, improve customer experiences, and accelerate digital transformation.
              </p>

              {/* CTA Buttons */}
              <div
                className={`pt-2 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <Link
                  href="/contact"
                  className="bg-[#F5A623] hover:bg-[#e0951d] text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 inline-flex items-center gap-2 text-base"
                >
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#ai-domains"
                  className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold transition-all inline-flex items-center gap-2 text-base"
                >
                  Explore AI Domains
                </Link>
              </div>

              {/* Quick Feature Checklist */}
              <div className="pt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Generative AI Copilots</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Predictive Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>AI Workflow Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Responsible AI Governance</span>
                </div>
              </div>
            </div>

            {/* Right Images (Two images displayed side-by-side / offset) */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-none grid grid-cols-12 gap-4 items-center">
                {/* 1st Hero Image (Main left/offset card) */}
                <div className="col-span-8 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3] w-full bg-slate-900">
                    <Image
                      src="/Solutions/AI & Intelligent Automation.png"
                      alt="AI & Intelligent Automation Enterprise Neural Network"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420]/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* 2nd Hero Image (Offset right/overlapping card) */}
                <div className="col-span-7 -ml-16 sm:-ml-20 col-start-6 relative z-10 rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/70 group transform translate-y-8 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3] w-full bg-slate-900">
                    <Image
                      src="/Solutions/AI & Intelligent Automation 2.png"
                      alt="AI Dashboard & Automation Analytics"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420]/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 2 — AI DOMAINS (CARDS GRID SECTION)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="ai-domains"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200"
        style={gridBgStyle}
      >
        {/* Decorative ambient background glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(20,109,174,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Headers */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-4">
              AI DOMAINS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our AI & Intelligent Automation approach integrates 15 core capabilities to streamline operations and accelerate enterprise-wide AI adoption.
            </p>
          </div>

          {/* 15 Cards Grid (4-col desktop, 2-col tablet, 1-col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aiDomains.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.number}
                  className={`group relative rounded-2xl bg-white border border-slate-200/80 p-8 sm:p-9 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[rgb(20,109,174)]/30 hover:-translate-y-1.5 transition-all duration-500 z-10 ${
                    gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${(index % 4) * 80}ms`,
                  }}
                >
                  {/* Top Bar with Acronym Badge and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] group-hover:bg-[rgb(20,109,174)] group-hover:text-white transition-colors duration-300">
                      {card.acronym}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-350">
                      {card.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <IconComponent className="w-8 h-8 text-[rgb(20,109,174)] mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors duration-300 leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Plain-Language Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mt-auto">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 3 — FOUR PILLARS OF ENTERPRISE AI
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#1B6BA8] border border-[#1B6BA8]/20 bg-[#1B6BA8]/5 mb-4">
              CORE CAPABILITIES
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Four Pillars of Enterprise AI
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Unifying autonomous AI agents, generative AI & RAG knowledge systems, predictive analytics, and responsible MLOps governance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aiPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 4 — "WHY CHOOSE ESSL FOR AI & INTELLIGENT AUTOMATION" SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={whyChooseRef}
        className="relative w-full py-24 overflow-hidden border-t border-slate-200 bg-[#f8fafc]"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Left Header */}
            <div
              className={`w-full md:w-2/5 shrink-0 transition-all duration-700 ${
                whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#1B6BA8] border border-[#1B6BA8]/20 bg-[#1B6BA8]/5 mb-6">
                ESSL ADVANTAGE
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Why Choose ESSL for AI & Intelligent Automation
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We deliver pragmatic, enterprise-ready AI solutions engineered for security, seamless system integration, and measurable ROI.
              </p>
            </div>

            {/* Right Stacked List */}
            <div className="w-full md:w-3/5 space-y-6">
              {whyChooseItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-slate-400">{item.number}</span>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 5 — CLOSING CTA BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 bg-gradient-to-br from-[#0f1420] via-[rgb(14,76,122)] to-[#0f1420] text-white overflow-hidden border-t border-slate-800">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3f94cf] border border-[rgb(20,109,174)]/30 bg-[rgb(20,109,174)]/10">
            ENTERPRISE AI ADOPTION
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Put AI to Work in Your Enterprise?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a technical consultation with ESSL's AI & automation architects to evaluate high-value use cases and build a scalable AI foundation.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#F5A623] hover:bg-[#e0951d] text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 inline-flex items-center gap-2 text-base"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
