'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Network,
  Shield,
  Server,
  Cloud,
  Activity,
  HardDriveDownload,
  RefreshCw,
  Headset,
  Stethoscope,
  UserCheck,
  ArrowRight,
  Monitor,
  Search,
  Zap,
  Wrench,
  CheckCircle2,
  BarChart2,
  Settings,
  BadgeCheck,
  Eye,
  ShieldCheck,
  Cpu,
  TrendingUp,
} from 'lucide-react';

// ─── Capability Cards ─────────────────────────────────────────────────────────
const capabilities = [
  {
    number: '01',
    title: 'Network Managed Services',
    description: 'Ensure optimal network availability, performance, and reliability through 24×7 monitoring, proactive maintenance, configuration management, and incident resolution.',
    icon: Network,
  },
  {
    number: '02',
    title: 'Cyber Security Managed Services',
    description: 'Protect your organization with continuous security monitoring, threat detection, incident response, vulnerability management, and expert security operations.',
    icon: Shield,
  },
  {
    number: '03',
    title: 'Data Center Managed Services',
    description: 'Optimize server, storage, virtualization, backup, and infrastructure operations with proactive monitoring, health checks, and lifecycle management.',
    icon: Server,
  },
  {
    number: '04',
    title: 'Cloud Managed Services',
    description: 'Manage public, private, and hybrid cloud environments with continuous monitoring, performance optimization, security management, and cost control.',
    icon: Cloud,
  },
  {
    number: '05',
    title: 'Infrastructure Monitoring',
    description: 'Gain real-time visibility into your critical IT infrastructure through intelligent monitoring, automated alerting, performance analytics, and predictive maintenance.',
    icon: Activity,
  },
  {
    number: '06',
    title: 'Backup & Disaster Recovery Management',
    description: 'Ensure business continuity through managed backup verification, disaster recovery readiness, recovery testing, and rapid data restoration.',
    icon: HardDriveDownload,
  },
  {
    number: '07',
    title: 'Patch & Lifecycle Management',
    description: 'Keep systems secure and compliant with automated patch management, firmware updates, operating system maintenance, and lifecycle planning.',
    icon: RefreshCw,
  },
  {
    number: '08',
    title: 'Help Desk & Technical Support',
    description: 'Deliver responsive technical assistance through centralized service desk operations, remote support, incident management, and SLA-driven service delivery.',
    icon: Headset,
  },
  {
    number: '09',
    title: 'Preventive Health Check',
    description: 'Reduce operational risks with scheduled infrastructure assessments, performance tuning, security reviews, and proactive maintenance services.',
    icon: Stethoscope,
  },
  {
    number: '10',
    title: 'Resident Engineer Services',
    description: 'Provide dedicated on-site or remote technical experts to manage, maintain, and support your enterprise IT environment based on your operational requirements.',
    icon: UserCheck,
  },
];

// ─── Why Choose ESS ───────────────────────────────────────────────────────────
const whyChooseItems = [
  { title: '24×7 Network Operations & Support', description: 'Round-the-clock coverage keeping your systems monitored and supported at all times.', icon: Headset },
  { title: 'Certified Managed Services Engineers', description: 'A certified team delivering standards-based operations and support.', icon: BadgeCheck },
  { title: 'Proactive Monitoring & Incident Response', description: 'Issues caught and addressed before they impact your business.', icon: Eye },
  { title: 'Predictive Maintenance & Health Checks', description: 'Scheduled assessments and analytics that prevent problems before they start.', icon: Activity },
  { title: 'Guaranteed SLA-Based Service Delivery', description: 'Service commitments backed by measurable, guaranteed response times.', icon: ShieldCheck },
  { title: 'Multi-Vendor Infrastructure Expertise', description: 'Deep experience managing environments across leading technology platforms.', icon: Cpu },
  { title: 'Scalable Managed Service Plans', description: 'Flexible service tiers that grow alongside your business needs.', icon: TrendingUp },
  { title: 'Continuous Optimization & Business Continuity', description: 'Ongoing tuning and resilience planning to keep operations running smoothly.', icon: Settings },
];

// ─── Methodology Steps ────────────────────────────────────────────────────────
const steps = [
  { title: 'Monitor', icon: Monitor, description: 'Continuous 24×7 monitoring of critical systems' },
  { title: 'Detect', icon: Search, description: 'Early detection of anomalies and emerging issues' },
  { title: 'Respond', icon: Zap, description: 'Rapid, coordinated incident response' },
  { title: 'Resolve', icon: Wrench, description: 'Root-cause resolution and remediation' },
  { title: 'Validate', icon: CheckCircle2, description: 'Verification that services are fully restored' },
  { title: 'Report', icon: BarChart2, description: 'Transparent reporting on incidents and performance' },
  { title: 'Optimize', icon: Settings, description: 'Tuning systems for reliability and efficiency' },
  { title: 'Improve', icon: RefreshCw, description: 'Continuous improvement of processes and outcomes' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ManagedServicesDetail() {
  const [heroVisible,      setHeroVisible]      = useState(false);
  const [gridVisible,      setGridVisible]      = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
  const [journeyVisible,   setJourneyVisible]   = useState(false);
  const [activeSteps,      setActiveSteps]      = useState(0);

  const heroRef      = useRef<HTMLElement>(null);
  const gridRef      = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const journeyRef   = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 50);

    const makeObserver = (setter: (v: boolean) => void, threshold = 0.1) =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, { threshold });

    const gridObs      = makeObserver(setGridVisible,      0.05);
    const whyChooseObs = makeObserver(setWhyChooseVisible, 0.05);
    const journeyObs   = makeObserver(setJourneyVisible,   0.15);

    const refs = [
      { obs: gridObs,      ref: gridRef.current      },
      { obs: whyChooseObs, ref: whyChooseRef.current },
      { obs: journeyObs,   ref: journeyRef.current   },
    ];
    refs.forEach(({ obs, ref }) => { if (ref) obs.observe(ref); });

    return () => {
      clearTimeout(timer);
      refs.forEach(({ obs }) => obs.disconnect());
    };
  }, []);

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

      {/* ─── PART 1 — HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[#0a0e17]">
          <Image
            src="/images/noc-bg.png"
            alt="Managed Services hero backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060f1c]/90 via-[#060f1c]/45 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060f1c]/30 via-transparent to-[#060f1c]/50 z-[1]" />
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
                <span className="text-white">Managed </span>
                <span className="text-[rgb(20,109,174)]">Services</span>
              </h1>

              <p className={`text-lg sm:text-xl text-slate-350 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                24×7 monitoring and management for your critical business systems.
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
              SERVICE DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our managed services capabilities span every critical domain — ensuring nothing is missed.
            </p>
          </div>

          {/* 10 cards — 4-column on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {capabilities.map((card, index) => (
              <div
                key={card.number}
                className={`group relative rounded-2xl bg-white border border-slate-200/60 p-8 sm:p-10 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1.5 transition-all duration-500 z-10 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
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

      {/* ─── PART 3 — WHY CHOOSE ESS ────────────────────────────────────────── */}
      <section
        ref={whyChooseRef}
        id="why-choose-ess"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200"
      >
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
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            <div className={`w-full md:w-2/5 shrink-0 transition-all duration-700 ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#1B6BA8] border border-[#1B6BA8]/20 bg-[#1B6BA8]/5 mb-6">
                ESS STRENGTH
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Why Organizations Choose ESS
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Maximizing uptime, strengthening security, and reducing operational complexity through proactive, expert-led management.
              </p>
            </div>

            <div className="w-full md:w-3/5 space-y-8">
              {whyChooseItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-5 transition-all duration-700 ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[rgb(20,109,174)]/10 flex items-center justify-center shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-[rgb(20,109,174)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ─── PART 4 — DEPLOYMENT JOURNEY ───────────────────────────────────── */}
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
              A structured, client-centric operational path to secure, resilient, always-on service.
            </p>
          </div>

          <div className="relative mt-16 max-w-6xl mx-auto px-6">
            {/* Horizontal line (desktop) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-200 hidden md:block z-0">
              <div className="h-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out" style={{ width: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * (100 / 7)}%` }} />
            </div>
            {/* Vertical line (mobile) */}
            <div className="absolute top-[28px] bottom-[28px] left-[52px] md:left-[28px] w-[3px] bg-slate-200 md:hidden z-0">
              <div className="w-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out" style={{ height: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * (100 / 7)}%` }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-8 gap-12 md:gap-2 lg:gap-4 relative z-10">
              {steps.map((step, index) => {
                const stepNum = index + 1;
                const isActive = activeSteps >= stepNum;
                return (
                  <div
                    key={step.title}
                    className={`flex md:flex-col items-start md:items-center gap-6 transition-all duration-700 ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative shrink-0 z-10">
                      <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-500 ${isActive ? 'border-[rgb(20,109,174)] bg-[rgb(20,109,174)]/5 text-[rgb(20,109,174)] shadow-[0_0_15px_rgba(20,109,174,0.25)] scale-110' : 'border-slate-200 bg-white text-slate-400'}`}>
                        <step.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-0 scale-100' : '-rotate-12 scale-90'}`} />
                      </div>
                    </div>
                    <div className="flex flex-col md:items-center md:text-center pt-2 md:pt-0">
                      <span className={`text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest mb-1 transition-colors duration-500 ${isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400'}`}>Step 0{stepNum}</span>
                      <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1.5 leading-tight">{step.title}</h4>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-[150px] md:mx-auto">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PART 5 — CLOSING CTA ───────────────────────────────────────────── */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgb(26,138,220) 0%, rgb(14,76,122) 45%, rgb(8,42,72) 100%)' }} />
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,42,72,0.6)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Ready for Worry-Free Operations?
          </h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a structured consultation. Understand your environment. Build a roadmap grounded in operational reality.
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