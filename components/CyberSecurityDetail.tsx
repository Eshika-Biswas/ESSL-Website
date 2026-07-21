'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Laptop,
  MonitorCheck,
  Layers,
  Headset,
  BarChart2,
  Zap,
  Lock,
  Globe,
  Eye,
  Target,
  AlertTriangle,
  Brain,
  Cloud,
  ArrowRight,
  Search,
  Compass,
  ShieldCheck,
  BadgeCheck,
  ClipboardCheck,
  Workflow,
  AlertCircle,
  CheckSquare,
  Rocket,
  Settings,
} from 'lucide-react';

// ─── Capability Cards ─────────────────────────────────────────────────────────
const capabilities = [
  {
    title: 'Endpoint Protection',
    description:
      'Protect desktops, laptops, and servers against malware, ransomware, and advanced cyber threats using next-generation endpoint security. Ensure continuous protection with centralized management and real-time threat prevention.',
    icon: Laptop,
  },
  {
    title: 'Endpoint Detection & Response (EDR)',
    description:
      'Detect, investigate, and respond to sophisticated endpoint threats through continuous monitoring, behavioral analytics, and automated incident response. Minimize dwell time and accelerate threat remediation.',
    icon: MonitorCheck,
  },
  {
    title: 'Extended Detection & Response (XDR)',
    description:
      'Correlate security data across endpoints, networks, email, cloud, and identity platforms to deliver unified threat detection and faster incident response. Improve visibility while reducing alert fatigue.',
    icon: Layers,
  },
  {
    title: 'Managed Detection & Response (MDR)',
    description:
      'Strengthen your cyber defense with 24×7 expert threat monitoring, threat hunting, incident investigation, and rapid response delivered by experienced security professionals.',
    icon: Headset,
  },
  {
    title: 'Next-Generation SIEM (NG-SIEM)',
    description:
      'Centralize security monitoring by collecting, correlating, and analyzing logs from across your IT environment. Gain actionable insights and accelerate security incident detection and compliance reporting.',
    icon: BarChart2,
  },
  {
    title: 'Security Orchestration, Automation & Response (SOAR)',
    description:
      'Automate repetitive security workflows, streamline incident response, and improve operational efficiency through intelligent orchestration and automated playbooks.',
    icon: Zap,
  },
  {
    title: 'Identity Security',
    description:
      'Protect digital identities with secure authentication, identity governance, and adaptive access controls. Ensure only authorized users can access critical business resources.',
    icon: ShieldCheck,
  },
  {
    title: 'Privileged Access Management (PAM)',
    description:
      'Secure privileged accounts, administrator credentials, and critical systems with centralized privilege management, session monitoring, and least-privilege access controls.',
    icon: Lock,
  },
  {
    title: 'Data Loss Prevention (DLP)',
    description:
      'Protect sensitive business information by monitoring, controlling, and preventing unauthorized data access, sharing, and exfiltration across endpoints, email, and cloud platforms.',
    icon: Lock,
  },
  {
    title: 'Secure Browsing',
    description:
      'Safeguard users against malicious websites, phishing attacks, and web-based threats with intelligent web filtering and secure internet access technologies.',
    icon: Globe,
  },
  {
    title: 'Threat Intelligence',
    description:
      'Leverage real-time global threat intelligence to proactively identify emerging cyber threats, improve security visibility, and strengthen your organization’s cyber resilience.',
    icon: Eye,
  },
  {
    title: 'Attack Surface Management',
    description:
      'Continuously discover, assess, and monitor internet-facing assets to identify vulnerabilities and reduce your organization’s external attack surface.',
    icon: Target,
  },
  {
    title: 'Dark Web Monitoring',
    description:
      'Monitor the dark web for leaked credentials, sensitive business information, and compromised assets to detect potential threats before they impact your organization.',
    icon: AlertTriangle,
  },
  {
    title: 'AI-Driven Detection & Response (AIDR)',
    description:
      'Harness artificial intelligence and machine learning to detect advanced threats, automate investigations, and accelerate incident response with greater accuracy.',
    icon: Brain,
  },
  {
    title: 'Cloud Security',
    description:
      'Protect cloud workloads, applications, identities, and data across public, private, and hybrid cloud environments with comprehensive cloud-native security solutions.',
    icon: Cloud,
  },
];

// ─── Why Choose ESSL (rendered below, matching Network & Security's simplified layout) ────
const whyChooseItems = [
  { title: 'Expert Cyber Security Team', description: 'Experienced analysts and engineers protecting critical operations.', icon: ShieldCheck },
  { title: 'Certified Security Consultants & Solution Architects', description: 'Deep expertise across modern security platforms and frameworks.', icon: BadgeCheck },
  { title: '24×7 Security Operations & Managed Services', description: 'Round-the-clock monitoring, response, and operational resilience.', icon: Headset },
  { title: 'Multi-Vendor Security Expertise', description: 'Flexible design across leading security ecosystems.', icon: Layers },
  { title: 'Zero Trust & Defense-in-Depth Architecture', description: 'Layered controls aligned to business-critical risks.', icon: Lock },
  { title: 'Compliance & Risk Management', description: 'Governance-ready solutions for regulatory and policy requirements.', icon: ClipboardCheck },
  { title: 'End-to-End Security Implementation', description: 'From assessment to deployment and continuous optimization.', icon: Workflow },
  { title: 'Rapid Incident Response & Continuous Optimization', description: 'Focused response and sustained hardening in every engagement.', icon: AlertCircle },
];

// ─── Methodology Steps ────────────────────────────────────────────────────────
const steps = [
  { title: 'Discover', icon: Search, description: 'Discovery workshops and business goal mapping' },
  { title: 'Assess', icon: BarChart2, description: 'Current-state assessment and gap analysis' },
  { title: 'Design', icon: Compass, description: 'Security architecture and control blueprints' },
  { title: 'Validate', icon: CheckSquare, description: 'Design verification and control validation' },
  { title: 'Deploy', icon: Rocket, description: 'Tool provisioning, integration and configuration' },
  { title: 'Monitor', icon: Eye, description: 'Continuous monitoring and service oversight' },
  { title: 'Respond', icon: Zap, description: 'Rapid incident response and containment' },
  { title: 'Optimize', icon: Settings, description: 'Ongoing tuning and operational improvement' },
];

// ─── Partner Logos ────────────────────────────────────────────────────────────
const partners = [
  { name: 'CrowdStrike', src: '/logos/partners/crowdstrike.svg' },
  { name: 'Palo Alto',   src: '/logos/partners/palo-alto.svg'   },
  { name: 'Fortinet',    src: '/logos/partners/fortinet.svg'     },
  { name: 'Cisco',       src: '/logos/partners/cisco.svg'        },
  { name: 'Tenable',     src: '/logos/partners/tenable.svg'      },
  { name: 'Forescout',   src: '/logos/partners/forescout.svg'    },
  { name: 'Forcepoint',  src: '/logos/partners/forcepoint.svg'   },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function CyberSecurityDetail() {
  const [heroVisible,      setHeroVisible]      = useState(false);
  const [gridVisible,      setGridVisible]      = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
  const [journeyVisible,   setJourneyVisible]   = useState(false);
  const [ecosystemVisible, setEcosystemVisible] = useState(false);
  const [activeSteps,      setActiveSteps]      = useState(0);

  const heroRef      = useRef<HTMLElement>(null);
  const gridRef      = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const journeyRef   = useRef<HTMLElement>(null);
  const ecosystemRef = useRef<HTMLElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 50);

    const makeObserver = (
      setter: (v: boolean) => void,
      threshold = 0.1
    ) =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, { threshold });

    const gridObs      = makeObserver(setGridVisible,      0.05);
    const whyChooseObs = makeObserver(setWhyChooseVisible, 0.05);
    const journeyObs   = makeObserver(setJourneyVisible,   0.15);
    const ecosystemObs = makeObserver(setEcosystemVisible, 0.1);

    const refs = [
      { obs: gridObs,      ref: gridRef.current      },
      { obs: whyChooseObs, ref: whyChooseRef.current },
      { obs: journeyObs,   ref: journeyRef.current   },
      { obs: ecosystemObs, ref: ecosystemRef.current },
    ];

    refs.forEach(({ obs, ref }) => { if (ref) obs.observe(ref); });

    return () => {
      clearTimeout(timer);
      refs.forEach(({ obs }) => obs.disconnect());
    };
  }, []);

  // Sequential step activation
  useEffect(() => {
    if (journeyVisible && activeSteps < 8) {
      const interval = setInterval(() => {
        setActiveSteps((prev) => {
          if (prev >= 8) { clearInterval(interval); return 8; }
          return prev + 1;
        });
      }, 350);
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

      {/* ─────────────────────────────────────────────────────────
          PART 1 — HERO SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        {/* Background — static image placeholder (swap for video when asset is available) */}
        <div className="absolute inset-0 z-0 bg-[#0a0e17]">
          <Image
            src="/images/cyber-security-1.png"
            alt="Cyber Security hero backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            priority
          />
          {/* Directional gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b091a]/90 via-[#0b091a]/45 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b091a]/30 via-transparent to-[#0b091a]/50 z-[1]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">

              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-8 transition-all duration-700 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-[rgb(20,109,174)] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-primary-light font-semibold">
                  Capability
                </span>
              </div>

              {/* Title */}
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-white">Cyber </span>
                <span className="text-[rgb(20,109,174)]">Security</span>
              </h1>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-slate-350 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Protect what matters most with advanced solutions and services.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="#capabilities"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
                >
                  Explore Our Capabilities
                </Link>
              </div>
            </div>

            {/* Decorative layout spacer */}
            <div className="hidden lg:block lg:col-span-5" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 2 — CAPABILITIES SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="capabilities"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200 animate-grid-drift"
        style={gridBgStyle}
      >
        {/* Decorative glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(20,109,174,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              SECURITY DOMAINS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our cybersecurity capabilities span every critical domain — ensuring nothing is missed.
            </p>
          </div>

          {/* 15-card grid — 3 cols; 15th card completes the last row evenly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((card, index) => (
              <div
                key={card.title}
                className={`group relative rounded-2xl bg-white border border-slate-200/60 p-8 sm:p-10 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1.5 transition-all duration-500 z-10 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Icon */}
                <card.icon className="w-8 h-8 text-[rgb(20,109,174)] mb-4 shrink-0" />
                {/* Headline */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors duration-300 leading-snug mb-3">
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          NEW PART — "WHY CHOOSE ESSL" LIGHTWEIGHT SECTION
          (matches Network & Security's simplified, icon-led layout)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={whyChooseRef}
        id="why-choose-essl"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200"
      >
        {/* Soft, subtle light backdrop pattern */}
        <div className="absolute inset-0 z-0 bg-[#f8fafc]">
          <Image
            src="/images/end-to-end-tech-bg.png"
            alt="Strength Backdrop Grid"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60 pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/30 via-transparent to-[#f8fafc]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Side-by-side layout: left = header (vertically centered), right = stacked list */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Section header — left-aligned text, vertically centered via items-center on parent */}
            <div className={`w-full md:w-2/5 shrink-0 transition-all duration-700 ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#1B6BA8] border border-[#1B6BA8]/20 bg-[#1B6BA8]/5 mb-6">
                ESSL STRENGTH
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Why Choose ESSL for Cyber Security
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Protecting your business with certified expertise, round-the-clock operations, and a security posture built to last.
              </p>
            </div>

            {/* Right: Stacked icon list */}
            <div className="w-full md:w-3/5 space-y-8">
              {whyChooseItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-5 transition-all duration-700 ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Icon badge */}
                    <div className="w-10 h-10 rounded-xl bg-[rgb(20,109,174)]/10 flex items-center justify-center shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-[rgb(20,109,174)]" />
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 3 — DEPLOYMENT JOURNEY SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={journeyRef}
        id="methodology"
        className="relative w-full py-24 bg-[#f1f5f9] border-t border-slate-200 overflow-hidden"
      >
        {/* Background image backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/solutions-bg.png"
            alt="Methodology backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9]/40 via-transparent to-[#f1f5f9]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-700 ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              OUR METHODOLOGY
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Deployment Journey
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A structured, client-centric path to a resilient and compliant security posture.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-16 max-w-6xl mx-auto px-6">

            {/* Horizontal connector (desktop) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-200 hidden md:block z-0">
              <div
                className="h-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out"
                style={{ width: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * (100 / 7)}%` }}
              />
            </div>

            {/* Vertical connector (mobile) */}
            <div className="absolute top-[28px] bottom-[28px] left-[52px] md:left-[28px] w-[3px] bg-slate-200 md:hidden z-0">
              <div
                className="w-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out"
                style={{ height: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * (100 / 7)}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-12 md:gap-2 lg:gap-4 relative z-10">
              {steps.map((step, index) => {
                const stepNum = index + 1;
                const isActive = activeSteps >= stepNum;
                return (
                  <div
                    key={step.title}
                    className={`flex md:flex-col items-start md:items-center gap-6 md:gap-6 transition-all duration-700 ${
                      journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Circle badge */}
                    <div className="relative shrink-0 z-10">
                      <div
                        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-500 ${
                          isActive
                            ? 'border-[rgb(20,109,174)] bg-[rgb(20,109,174)]/5 text-[rgb(20,109,174)] shadow-[0_0_15px_rgba(20,109,174,0.25)] scale-110'
                            : 'border-slate-200 bg-white text-slate-400'
                        }`}
                      >
                        <step.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-0 scale-100' : '-rotate-12 scale-90'}`} />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col md:items-center md:text-center pt-2 md:pt-0">
                      <span className={`text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest mb-1 transition-colors duration-500 ${isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400'}`}>
                        Step 0{stepNum}
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1.5 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-[150px] md:mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 4 — TECHNOLOGY ECOSYSTEM SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={ecosystemRef}
        id="ecosystem"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200 animate-grid-drift"
        style={gridBgStyle}
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(20,109,174,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Powered by Industry-Leading Partners
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Deployed and certified across every leading cybersecurity technology partner — ensuring the right fit for your infrastructure.
            </p>
          </div>

          {/* 7 logos — 4+3 responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`group flex items-center justify-center bg-white rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.10)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1 p-8 h-28 sm:h-32 transition-all duration-500 ${
                  ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index % 4) * 80}ms` }}
              >
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={60}
                  className="object-contain max-h-10 w-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          PART 5 — CLOSING CTA SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">

        {/* Blue gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgb(26,138,220) 0%, rgb(14,76,122) 45%, rgb(8,42,72) 100%)',
          }}
        />

        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Edge vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,42,72,0.6)_100%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a structured assessment. Understand your exposure. Build a roadmap grounded in operational reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[rgb(14,76,122)] font-semibold text-base px-8 py-4 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Book Security Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}