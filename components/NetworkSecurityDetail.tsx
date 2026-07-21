'use client';
 
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Network, Shield, Wifi, Globe, Lock, Mail, ArrowRight, Search, Compass, Server, ShieldCheck, Headphones, Cpu, GitBranch, UserCheck, ShieldAlert, BarChart2, CheckSquare, Rocket, Settings, Eye, Zap } from 'lucide-react';
 
const capabilities = [
  {
    number: '01',
    title: 'Campus Network',
    description: 'Build secure, scalable, and high-performance campus networks that deliver seamless connectivity across enterprise offices, educational institutions, healthcare facilities, and industrial environments.',
    icon: Network,
  },
  {
    number: '02',
    title: 'SD-WAN',
    description: 'Transform branch networking with intelligent SD-WAN that enhances application performance, simplifies WAN management, improves security, and reduces operational costs.',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'Software-Defined Networking (SDN)',
    description: 'Modernize network operations through centralized automation, intelligent traffic control, and software-driven infrastructure that increases agility and scalability.',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Zero Trust Network Access (ZTNA)',
    description: 'Provide secure, identity-driven access to enterprise applications by verifying every user, device, and connection—regardless of location.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Network Access Control (NAC)',
    description: 'Gain complete visibility and control over every connected device with policy-based access, automated compliance enforcement, and secure onboarding.',
    icon: UserCheck,
  },
  {
    number: '06',
    title: 'Enterprise Wi-Fi',
    description: 'Deliver secure, high-speed wireless connectivity with centralized management, seamless roaming, and optimized user experiences for modern digital workplaces.',
    icon: Wifi,
  },
  {
    number: '07',
    title: 'Network Performance Management',
    description: 'Monitor network health in real time, proactively identify performance issues, and optimize critical business applications before users are impacted.',
    icon: BarChart2,
  },
  {
    number: '08',
    title: 'Application Delivery Controller (ADC)',
    description: 'Ensure fast, secure, and highly available application delivery through intelligent load balancing, SSL offloading, traffic optimization, and application acceleration.',
    icon: Server,
  },
  {
    number: '09',
    title: 'Next-Generation Firewall (NGFW)',
    description: 'Protect enterprise infrastructure with advanced threat prevention, intrusion prevention, application awareness, SSL inspection, and intelligent security policies.',
    icon: Shield,
  },
  {
    number: '10',
    title: 'Web Application Firewall (WAF)',
    description: 'Safeguard web applications and APIs against OWASP Top 10 vulnerabilities, bots, malicious traffic, and sophisticated application-layer attacks.',
    icon: Lock,
  },
  {
    number: '11',
    title: 'DDoS Protection',
    description: 'Maintain uninterrupted business operations with intelligent detection and mitigation of volumetric, protocol, and application-layer DDoS attacks.',
    icon: ShieldAlert,
  },
  {
    number: '12',
    title: 'Email Security',
    description: 'Secure business communications against phishing, ransomware, malware, spam, business email compromise (BEC), and advanced email threats.',
    icon: Mail,
  },
];
 
const whyChooseItems = [
  {
    number: '01',
    title: 'Enterprise Architecture',
    description: 'Designing scalable, future-ready network infrastructures aligned with your business objectives.',
    icon: Network,
  },
  {
    number: '02',
    title: 'End-to-End Delivery',
    description: 'From consulting and solution design to deployment, optimization, and managed services.',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'Multi-Vendor Expertise',
    description: 'Certified professionals across Cisco, Fortinet, Palo Alto, Sophos, F5, Ruckus, Cambium, CommScope, and other leading platforms.',
    icon: Cpu,
  },
  {
    number: '04',
    title: '24×7 Support & Managed Services',
    description: 'Proactive monitoring, incident response, and continuous optimization to maximize uptime and business continuity.',
    icon: Headphones,
  },
  {
    number: '05',
    title: 'Industry Experience',
    description: 'Proven success across Banking & Financial Services, Government, Healthcare, Manufacturing, Education, NGOs, and Enterprise organizations.',
    icon: Globe,
  },
];
 
const steps = [
  { title: 'Discover', icon: Search, description: 'Network audit & business goal mapping' },
  { title: 'Assess', icon: BarChart2, description: 'Posture assessment & gap analysis' },
  { title: 'Design', icon: Compass, description: 'Architecture & technical topology blueprints' },
  { title: 'Validate', icon: CheckSquare, description: 'Solution validation & design verification' },
  { title: 'Deploy', icon: Rocket, description: 'Hardware provisioning & configuration' },
  { title: 'Monitor', icon: Eye, description: 'Continuous monitoring and service oversight' },
  { title: 'Respond', icon: Zap, description: 'Rapid incident response and containment' },
  { title: 'Optimize', icon: Settings, description: 'Continuous tuning & capacity audits' },
];
 
export default function NetworkSecurityDetail() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
 
  // Why Choose ESSL states
  const whyChooseRef = useRef<HTMLElement>(null);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
 
  // Methodology Timeline states
  const [activeSteps, setActiveSteps] = useState(0);
  const journeyRef = useRef<HTMLElement>(null);
  const [journeyVisible, setJourneyVisible] = useState(false);
 
  // Technology Ecosystem section
  const ecosystemRef = useRef<HTMLElement>(null);
  const [ecosystemVisible, setEcosystemVisible] = useState(false);
 
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Cinematic half-speed for background video readability
    }
  }, []);
 
  useEffect(() => {
    // Quick delay for hero fade-in on mount
    const timer = setTimeout(() => setHeroVisible(true), 50);
 
    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
        }
      },
      { threshold: 0.05 }
    );
 
    const currentGridRef = gridRef.current;
    if (currentGridRef) {
      gridObserver.observe(currentGridRef);
    }
 
    // Why Choose ESSL observer
    const whyChooseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyChooseVisible(true);
        }
      },
      { threshold: 0.05 }
    );
 
    const currentWhyChooseRef = whyChooseRef.current;
    if (currentWhyChooseRef) {
      whyChooseObserver.observe(currentWhyChooseRef);
    }
 
    // Timeline observer
    const journeyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setJourneyVisible(true);
        }
      },
      { threshold: 0.15 }
    );
 
    const currentJourneyRef = journeyRef.current;
    if (currentJourneyRef) {
      journeyObserver.observe(currentJourneyRef);
    }
 
    // Ecosystem observer
    const ecosystemObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEcosystemVisible(true);
        }
      },
      { threshold: 0.1 }
    );
 
    const currentEcosystemRef = ecosystemRef.current;
    if (currentEcosystemRef) {
      ecosystemObserver.observe(currentEcosystemRef);
    }
 
    return () => {
      clearTimeout(timer);
      if (currentGridRef) {
        gridObserver.disconnect();
      }
      if (currentWhyChooseRef) {
        whyChooseObserver.disconnect();
      }
      if (currentJourneyRef) {
        journeyObserver.disconnect();
      }
      if (currentEcosystemRef) {
        ecosystemObserver.disconnect();
      }
    };
  }, []);
 
  // Sequential transition trigger for methodology steps
  useEffect(() => {
    if (journeyVisible && activeSteps < 8) {
      const interval = setInterval(() => {
        setActiveSteps((prev) => {
          if (prev >= 8) {
            clearInterval(interval);
            return 8;
          }
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
        {/* Background Video element */}
        <div className="absolute inset-0 z-0 bg-[#0a0e17]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/network-security-poster.png"
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/videos/network-security-hero-v2.mp4" type="video/mp4" />
          </video>
 
          {/* Directional gradient overlay to ensure text contrast on the left, and vivid video on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d]/90 via-[#0a0f1d]/45 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/30 via-transparent to-[#0a0f1d]/50 z-[1]" />
        </div>
 
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <div className="w-2 h-2 rounded-full bg-[rgb(20,109,174)] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-primary-light font-semibold">
                  Capability
                </span>
              </div>
 
              {/* Title */}
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-white">Network &amp; </span>
                <span className="text-[rgb(20,109,174)]">Security</span>
              </h1>
 
              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-slate-350 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
              >
                High-performance networking solutions for a connected enterprise.
              </p>
 
              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
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
          PART 2 — "CAPABILITIES & APPROACH" SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        id="capabilities"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200 animate-grid-drift"
        style={gridBgStyle}
      >
        {/* Subtle decorative glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(20,109,174,0.04)_0%,transparent_70%)] pointer-events-none" />
 
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
          {/* Section Headers */}
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
            <p className="text-slate-655 text-lg max-w-2xl mx-auto">
              Our network and security capabilities span every critical domain — ensuring nothing is missed.
            </p>
          </div>
 
          {/* Cards Grid (12 Cards — 4×3 on desktop, 2-col on tablet, 1-col on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {capabilities.map((card, index) => (
              <div
                key={card.number}
                className={`group relative rounded-2xl bg-white border border-slate-200/60 p-8 sm:p-10 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1.5 transition-all duration-500 z-10 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{
                  transitionDelay: `${(index % 3) * 100}ms`,
                }}
              >
                {/* Icon top-left in brand blue */}
                <card.icon className="w-8 h-8 text-[rgb(20,109,174)] mb-4 shrink-0" />
 
                {/* Headline below number */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors duration-300 leading-snug mb-3">
                  {card.title}
                </h3>
 
                {/* Description below headline */}
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
                Why Choose ESSL for Network & Security
              </h2>
              <p className="text-slate-655 text-base sm:text-lg leading-relaxed">
                Building secure, resilient, and enterprise-grade networking solutions grounded in operational reality and proven technical excellence.
              </p>
            </div>
 
            {/* Right: Stacked icon list */}
            <div className="w-full md:w-3/5 space-y-8">
              {whyChooseItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
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
          PART 3 — "DEPLOYMENT JOURNEY" METHODOLOGY SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={journeyRef}
        id="methodology"
        className="relative w-full py-24 bg-[#f1f5f9] border-t border-slate-200 overflow-hidden"
      >
        {/* Background Image backdrop (Solutions BG) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/solutions-bg.png"
            alt="Methodology Network Backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.08]"
          />
          {/* Soft light-radial glow overlay for richness */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9]/40 via-transparent to-[#f1f5f9]/60" />
        </div>
 
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
          {/* Section Headers */}
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
            <p className="text-slate-655 text-lg max-w-2xl mx-auto">
              A structured, client-centric engineering path to secure, high-performance network integration.
            </p>
          </div>
 
          {/* Timeline Component */}
          <div className="relative mt-16 max-w-6xl mx-auto px-6">
 
            {/* Connecting Line (Horizontal on Desktop) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-200 hidden md:block z-0">
              <div
                className="h-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out"
                style={{ width: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * (100 / 7)}%` }}
              />
            </div>
 
            {/* Connecting Line (Vertical on Mobile) */}
            <div className="absolute top-[28px] bottom-[28px] left-[52px] md:left-[28px] w-[3px] bg-slate-200 md:hidden z-0">
              <div
                className="w-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out"
                style={{ height: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * (100 / 7)}%` }}
              />
            </div>
 
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-12 md:gap-2 lg:gap-4 relative z-10">
              {steps.map((step, index) => {
                const stepNum = index + 1;
                const isActive = activeSteps >= stepNum;
 
                return (
                  <div
                    key={step.title}
                    className={`flex md:flex-col items-start md:items-center gap-6 md:gap-6 transition-all duration-700 ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Circle icon badge */}
                    <div className="relative shrink-0 z-10">
                      <div
                        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-500 ${isActive
                          ? 'border-[rgb(20,109,174)] bg-[rgb(20,109,174)]/5 text-[rgb(20,109,174)] shadow-[0_0_15px_rgba(20,109,174,0.25)] scale-110'
                          : 'border-slate-200 bg-white text-slate-450'
                          }`}
                      >
                        <step.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-0 scale-100' : '-rotate-12 scale-90'}`} />
                      </div>
                    </div>
 
                    {/* Text Content */}
                    <div className="flex flex-col md:items-center md:text-center pt-2 md:pt-0">
                      <span className={`text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest mb-1 transition-colors duration-500 ${isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400'
                        }`}>
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
          PART 4 — "TECHNOLOGY ECOSYSTEM" PARTNER LOGOS SECTION
         ───────────────────────────────────────────────────────── */}
      <section
        ref={ecosystemRef}
        id="ecosystem"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200 animate-grid-drift"
        style={gridBgStyle}
      >
        {/* Decorative glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(20,109,174,0.04)_0%,transparent_70%)] pointer-events-none" />
 
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
          {/* Section Header */}
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
              Deployed and certified across every leading network and security technology partner — ensuring the right fit for your infrastructure.
            </p>
          </div>
 
          {/* Logo Grid — 4 columns × 2 rows */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Cisco', src: '/logos/partners/cisco.svg' },
              { name: 'Fortinet', src: '/logos/partners/fortinet.svg' },
              { name: 'Palo Alto', src: '/logos/partners/palo-alto.svg' },
              { name: 'Sophos', src: '/logos/partners/sophos.svg' },
              { name: 'F5', src: '/logos/partners/f5.svg' },
              { name: 'Ruckus', src: '/logos/partners/ruckus.svg' },
              { name: 'Cambium', src: '/logos/partners/cambium.svg' },
              { name: 'CommScope', src: '/logos/partners/commscope.svg' },
            ].map((partner, index) => (
              <div
                key={partner.name}
                className={`group flex items-center justify-center bg-white rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.10)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1 transition-all duration-400 p-8 h-28 sm:h-32 transition-all duration-500 ${ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
 
        {/* Subtle dot-grid texture overlay (white dots on blue) */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
 
        {/* Corner vignette to fade grid at edges */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,42,72,0.6)_100%)]" />
 
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Deploy with Confidence?
          </h2>
 
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a structured consultation. Understand your exposure. Build a roadmap grounded in operational reality.
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
 