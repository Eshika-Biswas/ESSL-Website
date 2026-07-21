'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Server,
  Layers,
  RefreshCw,
  Cloud,
  Package,
  ArrowRight,
  Search,
  Compass,
  BarChart2,
  CheckSquare,
  Globe,
  Settings,
  Box,
  Cpu,
  HardDrive,
  Shield,
  ShieldCheck,
  HardDriveDownload,
  Lock,
  CloudUpload,
  Grid,
  GitBranch,
  BadgeCheck,
  Users,
  Workflow,
  Headset,
} from 'lucide-react';

// ─── Capability Cards ─────────────────────────────────────────────────────────
const capabilities = [
  {
    title: 'Enterprise Servers',
    description: 'Deploy enterprise-grade server platforms designed to power mission-critical applications with exceptional performance, reliability, and scalability. Build a secure foundation for your digital infrastructure.',
    icon: Server,
  },
  {
    title: 'Hyper-Converged Infrastructure (HCI)',
    description: 'Simplify data center operations by integrating compute, storage, virtualization, and networking into a single intelligent platform. Reduce complexity while improving agility and operational efficiency.',
    icon: Box,
  },
  {
    title: 'GPU Infrastructure',
    description: 'Accelerate AI, machine learning, analytics, visualization, and high-performance computing with enterprise GPU infrastructure designed for demanding modern workloads.',
    icon: Cpu,
  },
  {
    title: 'SAN Storage',
    description: 'Deliver secure, high-performance, and highly available enterprise storage solutions that protect critical business data while supporting future capacity growth.',
    icon: HardDrive,
  },
  {
    title: 'Server Virtualization',
    description: 'Maximize infrastructure utilization through server virtualization that improves flexibility, reduces operational costs, and simplifies workload management.',
    icon: Layers,
  },
  {
    title: 'Private Cloud',
    description: 'Build secure and scalable private cloud environments that provide greater control, automation, and resource efficiency while supporting business-critical applications.',
    icon: Shield,
  },
  {
    title: 'Backup Solutions',
    description: 'Protect business-critical data with automated backup solutions that ensure fast recovery, operational continuity, and protection against accidental loss or cyber threats.',
    icon: HardDriveDownload,
  },
  {
    title: 'Business Continuity',
    description: 'Minimize operational disruption through resilient disaster recovery and business continuity solutions that keep your critical services available when they matter most.',
    icon: ShieldCheck,
  },
  {
    title: 'Immutable Backup',
    description: 'Strengthen cyber resilience with immutable backup technology that safeguards data from ransomware, malicious modification, and accidental deletion.',
    icon: Lock,
  },
  {
    title: 'Cloud Migration',
    description: 'Seamlessly migrate applications, workloads, and data to cloud environments with minimal business disruption while maximizing performance, security, and cost efficiency.',
    icon: CloudUpload,
  },
  {
    title: 'Cloud Solutions',
    description: 'Accelerate digital transformation with secure public, private, hybrid, and multi-cloud solutions designed for agility, scalability, and operational excellence.',
    icon: Cloud,
  },
  {
    title: 'Container Platform',
    description: 'Modernize application deployment using enterprise container platforms that enable portability, automation, and efficient application lifecycle management.',
    icon: Package,
  },
  {
    title: 'Kubernetes Platform',
    description: 'Deploy and manage containerized applications at scale using Kubernetes for automated orchestration, resilience, scalability, and cloud-native operations.',
    icon: Grid,
  },
  {
    title: 'Cloud Native Infrastructure',
    description: 'Build modern cloud-native platforms using microservices, automation, containers, and DevOps practices to accelerate innovation and business agility.',
    icon: GitBranch,
  },
];

// ─── Why Choose ESSL ──────────────────────────────────────────────────────────
const whyChooseItems = [
  { title: 'Expert Data Center & Cloud Architects', description: 'Deep technical expertise designing infrastructure that scales with your business.', icon: Users },
  { title: 'Cloud & Infrastructure Consulting', description: 'Strategic guidance to align infrastructure investment with business objectives.', icon: Compass },
  { title: 'Enterprise Solution Design', description: 'Tailored architectures built for performance, resilience, and growth.', icon: Server },
  { title: 'Certified Implementation Specialists', description: 'Certified engineers delivering proven, standards-based deployments.', icon: BadgeCheck },
  { title: 'Hybrid & Multi-Cloud Expertise', description: 'Flexible design across public, private, and multi-cloud environments.', icon: Cloud },
  { title: 'Business Continuity & Cyber Resilience', description: 'Resilient architectures that keep critical services running.', icon: ShieldCheck },
  { title: 'End-to-End Project Delivery', description: 'From consulting and design to deployment and optimization.', icon: Workflow },
  { title: '24×7 Managed Infrastructure Services', description: 'Round-the-clock monitoring and support for continuous uptime.', icon: Headset },
];

// ─── Methodology Steps ────────────────────────────────────────────────────────
const steps = [
  { title: 'Discover', icon: Search, description: 'Discovery workshops and business goal mapping' },
  { title: 'Assess', icon: BarChart2, description: 'Current-state assessment and gap analysis' },
  { title: 'Design', icon: Compass, description: 'Architecture and technical topology blueprints' },
  { title: 'Validate', icon: CheckSquare, description: 'Solution validation and design verification' },
  { title: 'Deploy', icon: Server, description: 'Implementation, provisioning, and configuration' },
  { title: 'Migrate', icon: RefreshCw, description: 'Workload and data migration with minimal disruption' },
  { title: 'Go Live', icon: Globe, description: 'Production transition and service cutover' },
  { title: 'Optimize & Manage', icon: Settings, description: 'Continuous tuning, monitoring, and capacity management' },
];

// ─── Partner Logos ────────────────────────────────────────────────────────────
const partners = [
  { name: 'AWS', src: '/logos/partners/aws.svg' },
  { name: 'Microsoft Azure', src: '/logos/partners/azure.svg' },
  { name: 'Dell', src: '/logos/partners/dell.svg' },
  { name: 'VMware', src: '/logos/partners/vmware.svg' },
  { name: 'Cohesity', src: '/logos/partners/cohesity.svg' },
  { name: 'NetApp', src: '/logos/partners/netapp.svg' },
  { name: 'Veeam', src: '/logos/partners/veeam.svg' },
  { name: 'Red Hat', src: '/logos/partners/redhat.svg' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function DataCenterCloudDetail() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [ecosystemVisible, setEcosystemVisible] = useState(false);
  const [activeSteps, setActiveSteps] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const ecosystemRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 50);

    const makeObserver = (setter: (v: boolean) => void, threshold = 0.1) =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, { threshold });

    const gridObs = makeObserver(setGridVisible, 0.05);
    const whyChooseObs = makeObserver(setWhyChooseVisible, 0.05);
    const journeyObs = makeObserver(setJourneyVisible, 0.15);
    const ecosystemObs = makeObserver(setEcosystemVisible, 0.1);

    const refs = [
      { obs: gridObs, ref: gridRef.current },
      { obs: whyChooseObs, ref: whyChooseRef.current },
      { obs: journeyObs, ref: journeyRef.current },
      { obs: ecosystemObs, ref: ecosystemRef.current },
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
            src="/images/cloud-card.png"
            alt="Data Center & Cloud hero backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05101a]/90 via-[#05101a]/45 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05101a]/30 via-transparent to-[#05101a]/50 z-[1]" />
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
                <span className="text-white">Data Center </span>
                <span className="text-[rgb(20,109,174)]">&amp; Cloud</span>
              </h1>

              <p className={`text-lg sm:text-xl text-slate-350 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Modernize your data center and accelerate your journey to cloud.
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
              INFRASTRUCTURE DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our data center and cloud capabilities span every critical domain — ensuring nothing is missed.
            </p>
          </div>

          {/* 14 cards — 3-column × 5-row (14 cards: 3+3+3+3+2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((card, index) => (
              <div
                key={card.title}
                className={`group relative rounded-2xl bg-white border border-slate-200/60 p-8 sm:p-10 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1.5 transition-all duration-500 z-10 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
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

      {/* ─── NEW PART — "WHY CHOOSE ESSL" LIGHTWEIGHT SECTION ──────────────── */}
      <section
        ref={whyChooseRef}
        id="why-choose-essl"
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
                ESSL STRENGTH
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Why Organizations Choose ESSL
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Modernizing data center and cloud infrastructure with proven expertise, certified delivery, and round-the-clock reliability.
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

      {/* ─── PART 4 — TECHNOLOGY ECOSYSTEM ─────────────────────────────────── */}
      <section
        ref={ecosystemRef}
        id="ecosystem"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200 animate-grid-drift"
        style={gridBgStyle}
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(20,109,174,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Powered by Industry-Leading Partners
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Deployed and certified across every leading data center and cloud technology partner — ensuring the right fit for your infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`group flex items-center justify-center bg-white rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.10)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1 p-8 h-28 sm:h-32 transition-all duration-500 ${ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index % 4) * 80}ms` }}
              >
                <Image src={partner.src} alt={`${partner.name} logo`} width={160} height={60} className="object-contain max-h-10 w-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
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
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a structured assessment. Understand your environment. Build a roadmap grounded in operational reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[rgb(14,76,122)] font-semibold text-base px-8 py-4 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Book Architecture Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
