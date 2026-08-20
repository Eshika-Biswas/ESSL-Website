'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Cloud,
  Globe,
  Network,
  Rocket,
  RefreshCw,
  Layers,
  Package,
  Boxes,
  GitBranch,
  Code,
  Shield,
  RotateCcw,
  Activity,
  TrendingUp,
  Headset,
  ArrowRight,
  CheckCircle,
  Workflow,
  BadgeCheck,
  Settings,
  DollarSign
} from 'lucide-react';

const cloudDomains = [
  {
    number: '01',
    acronym: 'PRIVATE',
    title: 'Private Cloud',
    description: 'Build secure, dedicated cloud environments that provide enterprise-grade control, performance, compliance, and resource optimization.',
    icon: Cloud,
  },
  {
    number: '02',
    acronym: 'PUBLIC',
    title: 'Public Cloud',
    description: 'Leverage leading cloud platforms to rapidly deploy, scale, and manage applications with high availability and pay-as-you-go flexibility.',
    icon: Globe,
  },
  {
    number: '03',
    acronym: 'HYBRID',
    title: 'Hybrid Cloud',
    description: 'Seamlessly integrate on-premises infrastructure with public cloud services for greater agility, workload portability, and business resilience.',
    icon: Network,
  },
  {
    number: '04',
    acronym: 'MIGRATION',
    title: 'Cloud Migration',
    description: 'Plan and execute secure migration of applications, databases, and workloads to cloud platforms with minimal disruption.',
    icon: Rocket,
  },
  {
    number: '05',
    acronym: 'MODERNIZATION',
    title: 'Cloud Modernization',
    description: 'Modernize legacy applications and infrastructure using cloud-native architectures to improve scalability, performance, and operational efficiency.',
    icon: RefreshCw,
  },
  {
    number: '06',
    acronym: 'CLOUD-NATIVE',
    title: 'Cloud-Native Infrastructure',
    description: 'Build resilient, automated infrastructure using Infrastructure as Code (IaC), microservices, and cloud-native design principles.',
    icon: Layers,
  },
  {
    number: '07',
    acronym: 'CONTAINERS',
    title: 'Container Platform',
    description: 'Package and manage applications using container technologies for consistent deployment across development and production environments.',
    icon: Package,
  },
  {
    number: '08',
    acronym: 'KUBERNETES',
    title: 'Kubernetes',
    description: 'Automate container orchestration, scaling, deployment, and lifecycle management for cloud-native applications.',
    icon: Boxes,
  },
  {
    number: '09',
    acronym: 'DEVSECOPS',
    title: 'DevSecOps & CI/CD',
    description: 'Accelerate software delivery through automated build, testing, deployment, and integrated security throughout the development lifecycle.',
    icon: GitBranch,
  },
  {
    number: '10',
    acronym: 'IAC',
    title: 'Infrastructure as Code (IaC)',
    description: 'Automate infrastructure provisioning and configuration using code for consistent, repeatable, and scalable deployments.',
    icon: Code,
  },
  {
    number: '11',
    acronym: 'SECURITY',
    title: 'Cloud Security',
    description: 'Protect cloud workloads, identities, applications, and data with comprehensive security controls, governance, and compliance.',
    icon: Shield,
  },
  {
    number: '12',
    acronym: 'BACKUP & DR',
    title: 'Cloud Backup & Disaster Recovery',
    description: 'Ensure business continuity with automated cloud backup, replication, disaster recovery, and rapid workload restoration.',
    icon: RotateCcw,
  },
  {
    number: '13',
    acronym: 'OBSERVABILITY',
    title: 'Cloud Monitoring & Observability',
    description: 'Gain real-time visibility into cloud infrastructure, applications, and services through monitoring, logging, and performance analytics.',
    icon: Activity,
  },
  {
    number: '14',
    acronym: 'FINOPS',
    title: 'Cloud Cost Optimization (FinOps)',
    description: 'Optimize cloud spending through resource right-sizing, usage analytics, budgeting, and cost governance.',
    icon: TrendingUp,
  },
  {
    number: '15',
    acronym: 'MANAGED CLOUD',
    title: 'Managed Cloud Services',
    description: 'Provide 24×7 monitoring, management, optimization, patching, and operational support for cloud environments.',
    icon: Headset,
  },
];

const cloudPillars = [
  {
    icon: Network,
    title: 'Hybrid & Multi-Cloud Agility',
    description: 'Architecting flexible private, public, and hybrid environments across AWS, Azure, GCP, and Red Hat OpenShift without vendor lock-in.',
  },
  {
    icon: Rocket,
    title: 'Migration & Application Modernization',
    description: 'Phased workload migration, re-platforming, and refactoring to transform legacy applications into cloud-native microservices.',
  },
  {
    icon: GitBranch,
    title: 'DevSecOps, Kubernetes & IaC Automation',
    description: 'Continuous integration and automated Infrastructure as Code with embedded security controls across the software lifecycle.',
  },
  {
    icon: TrendingUp,
    title: 'FinOps & Cloud Cost Governance',
    description: 'Proactive cost modeling, automated right-sizing, and continuous budget oversight to eliminate wasted cloud spend.',
  },
];

const whyChooseItems = [
  {
    number: '01',
    title: 'Hyperscaler & Multi-Cloud Partnerships',
    description: 'Certified cloud engineering and official technology partnerships across AWS, Microsoft Azure, Google Cloud, Red Hat, and VMware Cloud Foundation.',
    icon: Globe,
  },
  {
    number: '02',
    title: 'Full-Lifecycle Migration-to-Modernization',
    description: 'End-to-end guidance from initial cloud readiness assessment and landing zone design to workload migration, refactoring, and day-2 operations.',
    icon: Workflow,
  },
  {
    number: '03',
    title: 'Embedded Cloud Security & Governance',
    description: 'Zero Trust architecture, automated compliance policies, IAM hardening, and continuous threat monitoring built into every cloud deployment.',
    icon: Shield,
  },
  {
    number: '04',
    title: '24×7 Managed Cloud Operations',
    description: 'Round-the-clock proactive monitoring, incident management, automated patching, and continuous FinOps cost optimization.',
    icon: Headset,
  },
];

export default function CloudTransformationDetail() {
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
                <span className="text-white">Cloud Transformation </span>
                <br className="hidden sm:inline" />
                <span className="text-[rgb(20,109,174)]">Built for Speed and Scale.</span>
              </h1>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Accelerate digital transformation by modernizing infrastructure, migrating workloads, and adopting secure, scalable, cloud-native technologies across private, public, and hybrid cloud environments.
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
                  href="#cloud-domains"
                  className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold transition-all inline-flex items-center gap-2 text-base"
                >
                  Explore Cloud Domains
                </Link>
              </div>

              {/* Quick Feature Checklist */}
              <div className="pt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Multi-Cloud Migration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>DevSecOps & CI/CD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Cloud-Native Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)]" />
                  <span>Cost-Optimized Scaling</span>
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
                      src="/Solutions/cloud-transformation.png"
                      alt="Cloud Transformation Architecture"
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
                      src="/Solutions/cloud-transformation-2.png"
                      alt="Cloud Management & Observability Dashboard"
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
          PART 2 — CLOUD DOMAINS (CARDS GRID SECTION)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="cloud-domains"
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
              CLOUD DOMAINS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Complete Coverage Across Every Domain
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our Cloud Transformation approach integrates 15 core capabilities to modernize infrastructure and accelerate cloud-native adoption.
            </p>
          </div>

          {/* 15 Cards Grid (4-col desktop, 2-col tablet, 1-col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cloudDomains.map((card, index) => {
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
          PART 3 — FOUR PILLARS OF CLOUD TRANSFORMATION
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
              The Four Pillars of Cloud Transformation
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Unifying multi-cloud agility, seamless migration, automated DevSecOps, and FinOps governance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cloudPillars.map((pillar) => {
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
          PART 4 — "WHY CHOOSE ESSL FOR CLOUD TRANSFORMATION" SECTION
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
                Why Choose ESSL for Cloud Transformation
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We guide enterprise organizations through every step of their cloud journey with certified expertise across AWS, Azure, GCP, and hybrid cloud architectures.
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
            CLOUD-NATIVE TRANSFORMATION
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Accelerate Your Cloud Transformation?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a technical consultation with ESSL's cloud architects to evaluate your multi-cloud readiness and accelerate your modernization roadmap.
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
