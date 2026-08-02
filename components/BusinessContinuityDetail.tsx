'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RefreshCw,
  Lock,
  RotateCcw,
  Repeat,
  ClipboardCheck,
  ShieldAlert,
  Cloud,
  Server,
  Workflow,
  CheckSquare,
  Archive,
  ShieldCheck,
  Headset,
  ArrowRight,
  CheckCircle,
  Database,
  Layers,
  Settings,
  BadgeCheck,
  Globe
} from 'lucide-react';

const resilienceDomains = [
  {
    number: '01',
    acronym: 'BACKUP',
    title: 'Enterprise Backup',
    description: 'Protect critical business data with automated, policy-based backup for physical, virtual, cloud, and SaaS workloads.',
    icon: RefreshCw,
  },
  {
    number: '02',
    acronym: 'IMMUTABLE',
    title: 'Immutable Backup',
    description: 'Safeguard backup data against ransomware, accidental deletion, and unauthorized modification with tamper-proof immutable storage.',
    icon: Lock,
  },
  {
    number: '03',
    acronym: 'DISASTER RECOVERY',
    title: 'Disaster Recovery (DR)',
    description: 'Rapidly restore applications, systems, and data after outages or cyber incidents to minimize downtime and business disruption.',
    icon: RotateCcw,
  },
  {
    number: '04',
    acronym: 'REPLICATION',
    title: 'Replication',
    description: 'Enable real-time or scheduled replication of data and workloads across on-premises and cloud environments for high availability.',
    icon: Repeat,
  },
  {
    number: '05',
    acronym: 'BCP',
    title: 'Business Continuity Planning (BCP)',
    description: 'Develop comprehensive continuity strategies, recovery procedures, and governance to maintain essential business operations during disruptions.',
    icon: ClipboardCheck,
  },
  {
    number: '06',
    acronym: 'CYBER RECOVERY',
    title: 'Cyber Recovery',
    description: 'Recover clean, uncompromised data and applications following ransomware attacks or other cyber incidents.',
    icon: ShieldAlert,
  },
  {
    number: '07',
    acronym: 'DRAAS',
    title: 'Disaster Recovery as a Service (DRaaS)',
    description: 'Leverage cloud-based disaster recovery solutions for cost-effective failover, recovery, and business resilience.',
    icon: Cloud,
  },
  {
    number: '08',
    acronym: 'HIGH AVAILABILITY',
    title: 'High Availability (HA)',
    description: 'Eliminate single points of failure with clustering, redundancy, and automated failover for mission-critical systems.',
    icon: Server,
  },
  {
    number: '09',
    acronym: 'ORCHESTRATION',
    title: 'Recovery Orchestration & Automation',
    description: 'Automate failover, failback, and recovery workflows to reduce recovery time and operational complexity.',
    icon: Workflow,
  },
  {
    number: '10',
    acronym: 'TESTING & VALIDATION',
    title: 'Recovery Testing & Validation',
    description: 'Regularly test disaster recovery plans and recovery processes to ensure business readiness and compliance.',
    icon: CheckSquare,
  },
  {
    number: '11',
    acronym: 'ARCHIVING',
    title: 'Data Archiving & Long-Term Retention',
    description: 'Securely retain business-critical data for compliance, governance, and long-term recovery requirements.',
    icon: Archive,
  },
  {
    number: '12',
    acronym: 'RANSOMWARE DEFENSE',
    title: 'Ransomware Protection & Recovery',
    description: 'Strengthen cyber resilience with ransomware detection, isolated recovery environments, and rapid data restoration.',
    icon: ShieldCheck,
  },
  {
    number: '13',
    acronym: 'CLOUD BACKUP',
    title: 'Cloud Backup & Recovery',
    description: 'Protect cloud-native workloads, virtual machines, databases, and SaaS applications with secure cloud backup and recovery.',
    icon: Database,
  },
  {
    number: '14',
    acronym: '24×7 SUPPORT',
    title: '24×7 Monitoring & Recovery Support',
    description: 'Continuously monitor backup and disaster recovery environments with expert support to ensure operational readiness.',
    icon: Headset,
  },
];

const resiliencePillars = [
  {
    icon: Lock,
    title: 'Immutable Backup & Ransomware Protection',
    description: 'Tamper-proof storage vaults and isolated recovery environments ensuring data cannot be encrypted or deleted by malware.',
  },
  {
    icon: RotateCcw,
    title: 'DR & DRaaS Automated Failover',
    description: 'Cloud and on-premises disaster recovery with automated failover and failback orchestration for near-zero RTO.',
  },
  {
    icon: ClipboardCheck,
    title: 'Business Continuity Planning & Governance',
    description: 'Comprehensive risk assessments, BIA modeling, and standardized recovery runbooks aligned with ISO 22301 standards.',
  },
  {
    icon: CheckSquare,
    title: 'Recovery Testing & 24×7 Monitoring',
    description: 'Automated non-disruptive disaster recovery testing and continuous SOC/NOC monitoring for guaranteed recovery readiness.',
  },
];

const whyChooseItems = [
  {
    number: '01',
    title: 'Multi-Vendor BCDR Ecosystem Mastery',
    description: 'Deep certified engineering across Veeam, Cohesity, Commvault, Rubrik, and Veritas enterprise recovery platforms.',
    icon: Layers,
  },
  {
    number: '02',
    title: 'Aggressive RPO & RTO Recovery Objectives',
    description: 'Architecting near-zero Recovery Point Objectives (RPO) and rapid Recovery Time Objectives (RTO) for mission-critical applications.',
    icon: Repeat,
  },
  {
    number: '03',
    title: 'Ransomware-Resilient Cyber Recovery Architecture',
    description: 'Isolated air-gapped vaults, automated malware scanning during recovery, and clean-state data restoration workflows.',
    icon: ShieldAlert,
  },
  {
    number: '04',
    title: 'Continuous Recovery Testing & Operational Readiness',
    description: 'Scheduled dry-run failovers, automated compliance reporting, and 24×7 expert recovery support whenever disruption strikes.',
    icon: Headset,
  },
];

export default function BusinessContinuityDetail() {
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
                <span className="text-white">Business Continuity </span>
                <br className="hidden sm:inline" />
                <span className="text-[rgb(20,109,174)]">Built to Survive Anything.</span>
              </h1>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Ensure uninterrupted business operations with resilient backup, disaster recovery, cyber recovery, and business continuity solutions that minimize downtime and protect critical data.
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
                  href="#resilience-domains"
                  className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold transition-all inline-flex items-center gap-2 text-base"
                >
                  Explore Resilience Domains
                </Link>
              </div>

              {/* Quick Feature Checklist */}
              <div className="pt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Ransomware Recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Automated Failover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Immutable Backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>24×7 Recovery Support</span>
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
                      src="/Solutions/Business Continuity & Disaster Recovery.png"
                      alt="Business Continuity Data Center Architecture"
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
                      src="/Solutions/Business Continuity & Disaster Recovery 2.png"
                      alt="Disaster Recovery Dashboard"
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
          PART 2 — RESILIENCE DOMAINS (CARDS GRID SECTION)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="resilience-domains"
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
              RESILIENCE DOMAINS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our Business Continuity & Disaster Recovery approach integrates 14 core capabilities to keep critical operations running through any disruption.
            </p>
          </div>

          {/* 14 Cards Grid (4-col desktop, 2-col tablet, 1-col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {resilienceDomains.map((card, index) => {
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
          PART 3 — FOUR PILLARS OF BUSINESS RESILIENCE
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
              The Four Pillars of Business Resilience
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Unifying tamper-proof backup, rapid DR failover, BCP governance, and continuous recovery validation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {resiliencePillars.map((pillar) => {
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
          PART 4 — "WHY CHOOSE ESSL FOR BCDR" SECTION
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
                Why Choose ESSL for Business Continuity & Disaster Recovery
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We protect enterprise operations against ransomware, hardware failures, and disasters with proven recovery frameworks and leading BCDR technology partnerships.
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
            BUSINESS RESILIENCE
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Protect Your Business from Downtime?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a technical consultation with ESSL's resilience architects to evaluate your backup and disaster recovery posture and eliminate operational risk.
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
