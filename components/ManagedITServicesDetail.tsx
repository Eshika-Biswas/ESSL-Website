'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ShieldCheck,
  Cloud,
  BarChart2,
  Users,
  Globe,
  Server,
  Network,
  Monitor,
  Wrench,
  RefreshCw,
  Headphones,
  Layers,
  TrendingUp,
  Lock,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  Settings,
  Headset,
  BadgeCheck,
  Cpu
} from 'lucide-react';

const serviceDomains = [
  {
    number: '01',
    acronym: 'NOC',
    title: 'Network Operations Center (NOC)',
    description: '24×7 monitoring and management of enterprise networks, servers, connectivity, and infrastructure to ensure maximum uptime and performance.',
    icon: Activity,
  },
  {
    number: '02',
    acronym: 'SOC',
    title: 'Security Operations Center (SOC)',
    description: 'Continuous threat monitoring, detection, investigation, and incident response to protect enterprise environments from cyber threats.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    acronym: 'CLOUD OPS',
    title: 'Cloud Operations',
    description: 'Manage, monitor, optimize, and support public, private, and hybrid cloud environments for performance, security, and availability.',
    icon: Cloud,
  },
  {
    number: '04',
    acronym: 'MONITORING',
    title: 'Infrastructure Monitoring',
    description: 'Proactively monitor servers, storage, virtualization, databases, applications, and network devices with real-time alerts and performance analytics.',
    icon: BarChart2,
  },
  {
    number: '05',
    acronym: 'RESIDENT',
    title: 'Resident Engineers',
    description: 'Provide dedicated on-site technical experts for daily IT operations, troubleshooting, maintenance, and infrastructure support.',
    icon: Users,
  },
  {
    number: '06',
    acronym: 'RIM',
    title: 'Remote Infrastructure Management (RIM)',
    description: 'Centrally manage enterprise IT infrastructure through secure remote monitoring, administration, and technical support.',
    icon: Globe,
  },
  {
    number: '07',
    acronym: 'SERVERS',
    title: 'Server & Storage Management',
    description: 'Ensure optimal performance, capacity, patching, health monitoring, and lifecycle management of enterprise servers and storage systems.',
    icon: Server,
  },
  {
    number: '08',
    acronym: 'NETWORKING',
    title: 'Network Management',
    description: 'Monitor, configure, optimize, and maintain LAN, WAN, SD-WAN, Wi-Fi, firewalls, and network security infrastructure.',
    icon: Network,
  },
  {
    number: '09',
    acronym: 'ENDPOINTS',
    title: 'Endpoint Management',
    description: 'Manage desktops, laptops, mobile devices, and endpoints with centralized configuration, patching, compliance, and security policies.',
    icon: Monitor,
  },
  {
    number: '10',
    acronym: 'PATCHING',
    title: 'Patch & Vulnerability Management',
    description: 'Continuously identify vulnerabilities and deploy security patches to reduce cyber risk and maintain compliance.',
    icon: Wrench,
  },
  {
    number: '11',
    acronym: 'BACKUP OPS',
    title: 'Backup Monitoring & Recovery Support',
    description: 'Monitor backup jobs, verify data integrity, and ensure successful recovery of critical business data.',
    icon: RefreshCw,
  },
  {
    number: '12',
    acronym: 'SERVICE DESK',
    title: 'IT Service Desk (L1/L2/L3 Support)',
    description: 'Deliver multi-level technical support, incident resolution, request fulfillment, and end-user assistance through a centralized service desk.',
    icon: Headphones,
  },
  {
    number: '13',
    acronym: 'ASSET MGMT',
    title: 'IT Asset & Configuration Management',
    description: 'Track hardware, software, licenses, and configuration items to improve visibility, governance, and lifecycle management.',
    icon: Layers,
  },
  {
    number: '14',
    acronym: 'CAPACITY',
    title: 'Performance & Capacity Management',
    description: 'Analyze infrastructure performance, forecast capacity requirements, and optimize resource utilization.',
    icon: TrendingUp,
  },
  {
    number: '15',
    acronym: 'MSSP',
    title: 'Managed Security Services',
    description: 'Deliver ongoing security monitoring, threat detection, compliance management, and security operations to strengthen cyber resilience.',
    icon: Lock,
  },
  {
    number: '16',
    acronym: 'SLA REPORTING',
    title: 'SLA-Based Support & Reporting',
    description: 'Ensure predictable service delivery through defined SLAs, regular health reports, KPI dashboards, and continuous service improvement.',
    icon: ClipboardCheck,
  },
];

const servicePillars = [
  {
    icon: Activity,
    title: 'NOC & SOC 24×7 Operations',
    description: 'Integrated Network & Security Operations Centers providing round-the-clock proactive monitoring, incident triage, and rapid response.',
  },
  {
    icon: Server,
    title: 'Infrastructure & Endpoint Management',
    description: 'Full-lifecycle administration, automated patching, configuration governance, and performance tuning for enterprise IT assets.',
  },
  {
    icon: Headphones,
    title: 'Service Desk (L1–L3 Support)',
    description: 'Tiered technical helpdesk providing fast first-contact resolution, ITIL-aligned ticketing, and dedicated end-user assistance.',
  },
  {
    icon: ClipboardCheck,
    title: 'SLA-Based Reporting & Governance',
    description: 'Strict Service Level Agreements with transparent monthly KPI reporting, executive dashboards, and continuous service optimization.',
  },
];

const whyChooseItems = [
  {
    number: '01',
    title: 'Round-the-Clock NOC & SOC Coverage',
    description: '24×7×365 active monitoring and expert triage eliminating blind spots across networks, servers, clouds, and security perimeters.',
    icon: Headset,
  },
  {
    number: '02',
    title: 'Hybrid Delivery: Resident Engineers & RIM',
    description: 'Flexible engagement model combining dedicated on-site resident engineers with secure Remote Infrastructure Management.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Predictable SLA-Backed Delivery & KPI Transparency',
    description: 'Guaranteed response and resolution SLAs backed by executive dashboards, monthly health reviews, and service level credits.',
    icon: BadgeCheck,
  },
  {
    number: '04',
    title: 'Proactive Vulnerability & Health Management',
    description: 'Automated vulnerability scanning, proactive patch deployment, and predictive capacity planning before failures occur.',
    icon: Wrench,
  },
];

export default function ManagedITServicesDetail() {
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
                <span className="text-white">Managed IT Services </span>
                <br className="hidden sm:inline" />
                <span className="text-[rgb(20,109,174)]">Built to Run Around the Clock.</span>
              </h1>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Deliver 24×7 proactive monitoring, management, and expert support to ensure the availability, performance, security, and reliability of critical IT infrastructure and business applications.
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
                  href="#service-domains"
                  className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold transition-all inline-flex items-center gap-2 text-base"
                >
                  Explore Service Domains
                </Link>
              </div>

              {/* Quick Feature Checklist */}
              <div className="pt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>24×7 NOC/SOC Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Proactive Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Multi-Level Service Desk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>SLA-Backed Delivery</span>
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
                      src="/Solutions/Managed IT Services.png"
                      alt="Managed IT Services Operations Center"
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
                      src="/Solutions/Managed IT Services 2.png"
                      alt="Managed IT Services Help Desk & NOC Monitoring"
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
          PART 2 — SERVICE DOMAINS (CARDS GRID SECTION)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="service-domains"
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
              SERVICE DOMAINS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our Managed IT Services approach integrates 16 core capabilities to keep critical infrastructure and applications running reliably around the clock.
            </p>
          </div>

          {/* 16 Cards Grid (4-col desktop, 2-col tablet, 1-col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {serviceDomains.map((card, index) => {
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
          PART 3 — FOUR PILLARS OF MANAGED IT
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
              The Four Pillars of Managed IT
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Unifying 24x7 NOC/SOC operations, hybrid infrastructure management, multi-level service desk support, and SLA-backed governance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicePillars.map((pillar) => {
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
          PART 4 — "WHY CHOOSE ESSL FOR MANAGED IT SERVICES" SECTION
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
                Why Choose ESSL for Managed IT Services
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We ensure non-stop availability for enterprise IT through round-the-clock SOC/NOC operations, dedicated on-site experts, and strict SLA guarantees.
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
            24×7 MANAGED OPERATIONS
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready for IT Infrastructure That Never Sleeps?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a technical consultation with ESSL's managed services team to optimize your operations and ensure 24×7 reliability.
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
