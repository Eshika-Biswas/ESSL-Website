'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Network, Shield, Wifi, Activity, Globe, Lock, Mail, ArrowRight, Search, Compass, Server, ShieldCheck, Headphones } from 'lucide-react';

const capabilities = [
  {
    number: '01',
    title: 'Enterprise Networking',
    category: 'Networking',
    description: 'Campus Network, Branch Networking, Enterprise Routing & Switching, Software Defined Networking (SDN)',
    image: '/images/network-security/enterprise-networking.jpg',
    icon: Network,
  },
  {
    number: '02',
    title: 'Secure Connectivity',
    category: 'Connectivity',
    description: 'SD-WAN, Zero Trust Network Access (ZTNA), Network Access Control (NAC)',
    image: '/images/network-security/secure-connectivity.jpg',
    icon: Shield,
  },
  {
    number: '03',
    title: 'Wireless & Mobility',
    category: 'Wireless',
    description: 'Enterprise Wi-Fi, Wireless Site Survey, Guest Access Solutions',
    image: '/images/network-security/wireless-mobility.webp',
    icon: Wifi,
  },
  {
    number: '04',
    title: 'Network Visibility',
    category: 'Visibility',
    description: 'Network Monitoring, Network Performance Management, DNS & DHCP Solutions',
    image: '/images/network-security/network-visibility.jpg',
    icon: Activity,
  },
  {
    number: '05',
    title: 'Application Delivery',
    category: 'Delivery',
    description: 'Load Balancing, Application Delivery Controller (ADC), WAN Optimization',
    image: '/images/network-security/application-delivery.avif',
    icon: Globe,
  },
  {
    number: '06',
    title: 'Perimeter Security',
    category: 'Security',
    description: 'Next Generation Firewall (NGFW), Secure Web Gateway (SWG), Web Application Firewall (WAF), DDoS Protection, API Security',
    image: '/images/network-security/perimeter-security.avif',
    icon: Lock,
  },
  {
    number: '07',
    title: 'Email Security',
    category: 'Security',
    description: 'Email Security',
    image: '/images/network-security/email-security.png',
    icon: Mail,
  },
];

const steps = [
  {
    title: 'Assess',
    icon: Search,
    description: 'Network audit & requirements gathering',
  },
  {
    title: 'Design',
    icon: Compass,
    description: 'Architecture, topology & SDN blueprints',
  },
  {
    title: 'Deploy',
    icon: Server,
    description: 'Hardware/software provisioning & configuration',
  },
  {
    title: 'Secure & Optimize',
    icon: ShieldCheck,
    description: 'Hardening, testing, performance tuning',
  },
  {
    title: 'Support',
    icon: Headphones,
    description: '24/7 monitoring & knowledge transfer',
  },
];

export default function NetworkSecurityDetail() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);

  // Methodology Timeline states
  const [activeSteps, setActiveSteps] = useState(0);
  const journeyRef = useRef<HTMLElement>(null);
  const [journeyVisible, setJourneyVisible] = useState(false);

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

    return () => {
      clearTimeout(timer);
      if (currentGridRef) {
        gridObserver.disconnect();
      }
      if (currentJourneyRef) {
        journeyObserver.disconnect();
      }
    };
  }, []);

  // Sequential transition trigger for methodology steps
  useEffect(() => {
    if (journeyVisible && activeSteps < 5) {
      const interval = setInterval(() => {
        setActiveSteps((prev) => {
          if (prev >= 5) {
            clearInterval(interval);
            return 5;
          }
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
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            fetchPriority="high"
            poster="/images/network-security-poster.png"
            className="w-full h-full object-cover opacity-65"
          >
            <source src="/videos/network-security-hero-v2.mp4" type="video/mp4" />
          </video>
          
          {/* Directional gradient overlay to ensure text contrast on the left, and vivid video on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1420]/95 via-[#0f1420]/70 to-[#0f1420]/15 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1420]/60 via-transparent to-[#0f1420]/80 z-[1]" />
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
                  Business Unit
                </span>
              </div>

              {/* Title */}
              <h1 
                className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-white">Network &amp; </span>
                <span className="text-[rgb(20,109,174)]">Security</span>
              </h1>

              {/* Description */}
              <p 
                className={`text-lg sm:text-xl text-slate-350 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                High-performance networking solutions for a connected enterprise.
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
              WHAT WE DELIVER
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" 
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Capabilities &amp; Approach
            </h2>
            <p className="text-slate-650 text-lg max-w-2xl mx-auto">
              Comprehensive and highly secure networking solutions built to scale with your enterprise.
            </p>
          </div>

          {/* Cards Grid (7 Cards, responsive with centered 7th card on large view) */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((card, index) => (
              <div
                key={card.number}
                className={`group relative rounded-2xl bg-white border border-slate-200/80 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1.5 transition-all duration-500 z-10 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${(index % 3) * 100}ms`,
                }}
              >
                {/* Top portion of the card: capability's image with rounded top corners */}
                <div className="h-56 relative w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  {/* Soft overlay (slightly light at the bottom) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                  
                  {/* Category Pill Tag overlaid on the top-left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[11px] font-semibold rounded-full border border-white/20 bg-slate-950/75 text-white backdrop-blur-sm">
                      {card.category}
                    </span>
                  </div>

                  {/* Number label as a small badge on the top-right */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-mono font-bold text-slate-700 bg-white/90 border border-slate-200 rounded-md px-2 py-0.5 shadow-sm">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Bottom portion: Content */}
                <div className="p-6 bg-white flex flex-col flex-grow relative z-10">
                  {/* Headline & Icon row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors duration-300 leading-snug">
                      {card.title}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-[rgb(20,109,174)]/10 flex items-center justify-center group-hover:bg-[rgb(20,109,174)]/20 transition-colors shrink-0">
                      <card.icon className="w-4 h-4 text-[rgb(20,109,174)]" />
                    </div>
                  </div>

                  {/* Description / Sub-solutions */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
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
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A structured, client-centric engineering path to secure, high-performance network integration.
            </p>
          </div>

          {/* Timeline Component */}
          <div className="relative mt-16 max-w-6xl mx-auto px-6">
            
            {/* Connecting Line (Horizontal on Desktop) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-200 hidden md:block z-0">
              <div 
                className="h-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out"
                style={{ width: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * 25}%` }}
              />
            </div>

            {/* Connecting Line (Vertical on Mobile) */}
            <div className="absolute top-[28px] bottom-[28px] left-[52px] md:left-[28px] w-[3px] bg-slate-200 md:hidden z-0">
              <div 
                className="w-full bg-[rgb(20,109,174)] shadow-[0_0_8px_rgba(20,109,174,0.4)] transition-all duration-700 ease-out"
                style={{ height: `${activeSteps <= 1 ? 0 : (activeSteps - 1) * 25}%` }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 lg:gap-6 relative z-10">
              {steps.map((step, index) => {
                const stepNum = index + 1;
                const isActive = activeSteps >= stepNum;
                
                return (
                  <div 
                    key={step.title}
                    className={`flex md:flex-col items-start md:items-center gap-6 md:gap-6 transition-all duration-700 ${
                      journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Circle icon badge */}
                    <div className="relative shrink-0 z-10">
                      <div 
                        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-500 ${
                          isActive 
                            ? 'border-[rgb(20,109,174)] bg-[rgb(20,109,174)]/5 text-[rgb(20,109,174)] shadow-[0_0_15px_rgba(20,109,174,0.25)] scale-110' 
                            : 'border-slate-200 bg-white text-slate-450'
                        }`}
                      >
                        <step.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-0 scale-100' : '-rotate-12 scale-90'}`} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col md:items-center md:text-center pt-2 md:pt-0">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5 transition-colors duration-500 ${
                        isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400'
                      }`}>
                        Step 0{stepNum}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] md:mx-auto">
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

    </div>
  );
}
