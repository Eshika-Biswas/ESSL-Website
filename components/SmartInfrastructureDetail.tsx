'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Network,
  Zap,
  Video,
  Volume2,
  Thermometer,
  Server,
  Lock,
  Plug,
  Flame,
  Building,
  Radio,
  HardDrive,
  Activity,
  Bell,
  ArrowRight,
  CheckCircle,
  Layers,
  Settings,
  ShieldCheck,
  BadgeCheck,
  Cpu
} from 'lucide-react';

const facilityDomains = [
  {
    number: '01',
    acronym: 'CABLING',
    title: 'Structured Cabling',
    description: 'Design and deploy high-performance copper and fiber-optic cabling systems that provide a reliable foundation for enterprise networks and data centers.',
    icon: Network,
  },
  {
    number: '02',
    acronym: 'UPS POWER',
    title: 'Uninterruptible Power Supply (UPS)',
    description: 'Ensure continuous power availability and protect critical IT infrastructure from power outages, voltage fluctuations, and electrical disturbances.',
    icon: Zap,
  },
  {
    number: '03',
    acronym: 'CCTV',
    title: 'IP Surveillance (CCTV)',
    description: 'Enhance physical security with intelligent IP-based video surveillance, centralized monitoring, remote access, and AI-powered video analytics.',
    icon: Video,
  },
  {
    number: '04',
    acronym: 'PA SYSTEM',
    title: 'Public Address (PA) System',
    description: 'Enable clear, reliable voice announcements and emergency communications across offices, campuses, factories, and public facilities.',
    icon: Volume2,
  },
  {
    number: '05',
    acronym: 'ENV MONITORING',
    title: 'Environmental Monitoring',
    description: 'Continuously monitor temperature, humidity, water leakage, smoke, airflow, and other environmental conditions to safeguard critical infrastructure.',
    icon: Thermometer,
  },
  {
    number: '06',
    acronym: 'RACKS & CABS',
    title: 'Rack & Cabinet Solutions',
    description: 'Optimize equipment organization, airflow, cable management, and physical security with enterprise-grade rack and enclosure systems.',
    icon: Server,
  },
  {
    number: '07',
    acronym: 'ACCESS CONTROL',
    title: 'Access Control System',
    description: 'Secure facilities using card-based, biometric, and mobile access technologies with centralized identity and visitor management.',
    icon: Lock,
  },
  {
    number: '08',
    acronym: 'POWER PDU',
    title: 'Data Center Power Distribution',
    description: 'Deliver efficient and reliable power distribution through PDUs, intelligent power monitoring, and redundant electrical infrastructure.',
    icon: Plug,
  },
  {
    number: '09',
    acronym: 'FIRE DEFENSE',
    title: 'Fire Detection & Suppression',
    description: 'Protect critical facilities with early fire detection and automatic fire suppression systems designed for data centers and mission-critical environments.',
    icon: Flame,
  },
  {
    number: '10',
    acronym: 'BMS',
    title: 'Building Management System (BMS) Integration',
    description: 'Centralize monitoring and control of power, cooling, security, lighting, and environmental systems for intelligent facility management.',
    icon: Building,
  },
  {
    number: '11',
    acronym: 'IOT SENSORS',
    title: 'Smart IoT Sensors',
    description: 'Deploy connected sensors for real-time monitoring of assets, occupancy, environmental conditions, and operational performance.',
    icon: Radio,
  },
  {
    number: '12',
    acronym: 'CABINETS',
    title: 'Network & Equipment Cabinets',
    description: 'Provide secure, scalable enclosures for networking, telecommunications, and server equipment in enterprise environments.',
    icon: HardDrive,
  },
  {
    number: '13',
    acronym: 'ENERGY',
    title: 'Power Quality & Energy Monitoring',
    description: 'Monitor energy consumption, power quality, and electrical performance to improve efficiency and operational reliability.',
    icon: Activity,
  },
  {
    number: '14',
    acronym: 'ALERTING',
    title: 'Infrastructure Monitoring & Alerting',
    description: 'Gain real-time visibility into facility infrastructure with automated alerts, dashboards, and proactive maintenance insights.',
    icon: Bell,
  },
];

const facilityPillars = [
  {
    icon: Zap,
    title: 'UPS & Power Distribution Reliability',
    description: 'Uninterruptible power protection and redundant electrical distribution safeguarding equipment against spikes, brownouts, and outages.',
  },
  {
    icon: Video,
    title: 'IP Surveillance & Access Control Security',
    description: 'Biometric and smart-card perimeter security coupled with AI-driven IP surveillance for total physical facility protection.',
  },
  {
    icon: Thermometer,
    title: 'Environmental & Fire Suppression Safeguards',
    description: 'Precision temperature, humidity, water leak detection, and gas-based fire suppression for mission-critical server rooms.',
  },
  {
    icon: Building,
    title: 'BMS & Smart IoT Centralized Intelligence',
    description: 'Unified building automation and smart sensor telemetries providing real-time facility visibility and energy optimization.',
  },
];

const whyChooseItems = [
  {
    number: '01',
    title: 'Leading Multi-Vendor Infrastructure Ecosystem',
    description: 'Strategic partnerships with global leaders including Schneider Electric, Vertiv, APC, Panduit, CommScope, Hikvision, Axis, and Johnson Controls.',
    icon: Settings,
  },
  {
    number: '02',
    title: 'End-to-End Turnkey Facility Lifecycle',
    description: 'Complete engineering services spanning initial site survey and architectural design to procurement, installation, and ongoing maintenance.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'High-Availability & Redundancy Engineering',
    description: 'Tier-compliant electrical, cooling, and cable pathway design guaranteeing maximum operational uptime for mission-critical facilities.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Centralized & Intelligent Facility Management',
    description: 'Single-pane-of-glass BMS monitoring with automated threshold alerts, telemetry dashboards, and energy efficiency analytics.',
    icon: BadgeCheck,
  },
];

export default function SmartInfrastructureDetail() {
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
                <span className="text-white">Smart Infrastructure </span>
                <br className="hidden sm:inline" />
                <span className="text-[rgb(20,109,174)]">Built to Power Every Facility.</span>
              </h1>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Build intelligent, secure, and resilient physical infrastructure that powers modern enterprises through reliable connectivity, power protection, security, and environmental monitoring.
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
                  href="#facility-domains"
                  className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold transition-all inline-flex items-center gap-2 text-base"
                >
                  Explore Infrastructure Domains
                </Link>
              </div>

              {/* Quick Feature Checklist */}
              <div className="pt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Redundant Power Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Intelligent Surveillance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Environmental Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Centralized Facility Control</span>
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
                      src="/Solutions/Smart Infrastructure.png"
                      alt="Smart Infrastructure Physical Cabling & Power Systems"
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
                      src="/Solutions/Smart Infrastructure 2.png"
                      alt="Smart Infrastructure Monitoring Dashboard"
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
          PART 2 — FACILITY DOMAINS (CARDS GRID SECTION)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="facility-domains"
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
              FACILITY DOMAINS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our Smart Infrastructure approach integrates 14 core capabilities to protect and power modern enterprise facilities.
            </p>
          </div>

          {/* 14 Cards Grid (4-col desktop, 2-col tablet, 1-col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {facilityDomains.map((card, index) => {
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
          PART 3 — FOUR PILLARS OF SMART INFRASTRUCTURE
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
              The Four Pillars of Smart Infrastructure
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Unifying power protection, physical security, environmental safeguards, and centralized facility intelligence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {facilityPillars.map((pillar) => {
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
          PART 4 — "WHY CHOOSE ESSL FOR SMART INFRASTRUCTURE" SECTION
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
                Why Choose ESSL for Smart Infrastructure
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We engineer resilient physical facility systems with industry-leading vendor partnerships, turnkey design-to-maintenance lifecycle services, and high-availability standards.
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
            FACILITY MODERNIZATION
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Build a Smarter, More Resilient Facility?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a technical consultation with ESSL's infrastructure engineers to assess your physical facility infrastructure and design a smart, resilient environment.
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
