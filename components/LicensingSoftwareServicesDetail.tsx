'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Cloud,
  ShieldCheck,
  Database,
  Users,
  Cpu,
  CheckCircle,
  ArrowRight,
  Sparkles,
  FileCheck,
  RefreshCw,
  Layers,
  DollarSign
} from 'lucide-react';

const categories = [
  {
    number: '01',
    acronym: 'CLOUD & PRODUCTIVITY',
    title: 'Cloud & Productivity Licensing',
    icon: Cloud,
    items: [
      'Microsoft 365 & Windows Server licensing',
      'Microsoft Azure cloud subscriptions',
      'Autodesk AutoCAD licensing',
      'Adobe Creative Cloud licensing',
      'Google Workspace licensing',
    ],
  },
  {
    number: '02',
    acronym: 'CYBERSECURITY',
    title: 'Security Software Subscriptions',
    icon: ShieldCheck,
    items: [
      'CrowdStrike EDR & endpoint protection licensing',
      'Sophos endpoint security licensing',
      'Fortinet & Palo Alto Networks firewall threat-intelligence licensing',
      'Tenable vulnerability management licensing',
      'Proofpoint & Barracuda email security licensing',
      'SafeNet authentication licensing',
    ],
  },
  {
    number: '03',
    acronym: 'BACKUP & INFRASTRUCTURE',
    title: 'Backup & Infrastructure Software',
    icon: Database,
    items: [
      'Veritas, Veeam & Cohesity backup software licensing',
      'VMware virtualization licensing',
      'Red Hat enterprise support subscriptions',
    ],
  },
  {
    number: '04',
    acronym: 'COLLABORATION & REMOTE',
    title: 'Collaboration & Remote Access Software',
    icon: Users,
    items: [
      'AnyDesk & TeamViewer remote access licensing',
      'Zoom collaboration licensing',
    ],
  },
  {
    number: '05',
    acronym: 'HARDWARE-ATTACHED',
    title: 'Hardware-Attached Software & Support',
    icon: Cpu,
    items: [
      'Firewall & router firmware / support contract licensing',
      'CCTV Video Management Software (VMS) licensing',
      'UPS & environmental power monitoring software licensing',
    ],
  },
];

const valueProps = [
  {
    icon: FileCheck,
    title: 'Single Point of Contact',
    description: 'Procure, consolidate, and manage software licenses across multiple global technology vendors under one roof.',
  },
  {
    icon: RefreshCw,
    title: 'Proactive Renewal Tracking',
    description: 'Automated tracking and timely renewal alerts so critical licenses and support contracts never expire unnoticed.',
  },
  {
    icon: Layers,
    title: 'Hardware & Software Bundling',
    description: 'Unified procurement packages combining server, network, and storage hardware with required software licenses.',
  },
  {
    icon: DollarSign,
    title: 'License Cost Optimization',
    description: 'Expert advice on tier selection, enterprise agreements, and volume licensing to eliminate unnecessary software spend.',
  },
];

export default function LicensingSoftwareServicesDetail() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [roleVisible, setRoleVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const roleRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) setHeroVisible(true);
          if (entry.target === categoriesRef.current && entry.isIntersecting) setCategoriesVisible(true);
          if (entry.target === roleRef.current && entry.isIntersecting) setRoleVisible(true);
          if (entry.target === whyRef.current && entry.isIntersecting) setWhyVisible(true);
        });
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (roleRef.current) observer.observe(roleRef.current);
    if (whyRef.current) observer.observe(whyRef.current);

    return () => observer.disconnect();
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
    <div className="relative w-full overflow-hidden bg-[#f8fafc] text-slate-900">
      
      {/* ─────────────────────────────────────────────────────────
          HERO SECTION (dark bg #0f1420)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full pt-36 pb-20 lg:pt-40 lg:pb-28 bg-[#0f1420] text-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(20,109,174,0.25),transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className={`lg:col-span-7 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/30 bg-[rgb(20,109,174)]/10 mb-6">
                SOLUTION ARCHITECTURE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-[family-name:var(--font-display)] leading-tight">
                Licensing &amp; Software Services <br />
                <span className="text-[rgb(20,109,174)] font-extrabold">Every License, Properly Managed.</span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Beyond hardware and infrastructure, ESSL helps enterprises procure, manage, and renew the software licenses and subscriptions that keep their systems running — from cloud platforms to security software to backup solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="bg-[#F5A623] hover:bg-[#e0951a] text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
                >
                  Schedule a Call
                </Link>
                <a
                  href="#licensing-categories"
                  className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                >
                  Explore Licensing Categories
                </a>
              </div>

              {/* Quick Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {[
                  'Proactive Renewals',
                  'Compliance Auditing',
                  'Multi-Vendor Bundling',
                  'Cost Optimization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Visual */}
            <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  {/* TODO: replace with a dedicated Licensing & Software Services image — currently reusing AI Automation's image by mistake */}
                  <Image
                    src="/Solutions/ai-and-intelligent-automation.png"
                    alt="Licensing & Software Services"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CARD GRID SECTION — 5 Categories (light #f8fafc)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={categoriesRef}
        id="licensing-categories"
        className="relative w-full py-24 overflow-hidden border-t border-slate-200"
        style={gridBgStyle}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className={`text-center mb-16 transition-all duration-700 ${categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              SOFTWARE DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              End-to-End Enterprise Software &amp; Licensing Portfolio
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Streamline your software procurement, maintenance, and subscription lifecycles across leading enterprise vendors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.title}
                  className={`group relative rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[rgb(20,109,174)]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                    categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                        {cat.acronym}
                      </span>
                      <span className="text-xs font-mono font-bold text-[rgb(20,109,174)]">
                        {cat.number}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[rgb(20,109,174)] transition-colors">
                      {cat.title}
                    </h3>

                    <ul className="space-y-2.5">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-snug">
                          <CheckCircle className="w-4 h-4 text-[rgb(20,109,174)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[rgb(20,109,174)] group-hover:text-slate-900 transition-colors"
                    >
                      Procure or Renew
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          ESSL'S ROLE SECTION (white bg #ffffff)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={roleRef}
        className="relative w-full py-20 bg-white border-t border-slate-200"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${roleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ESSL MANAGED SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)]">
              Seamless Software Lifecycle Management
            </h2>
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
              &ldquo;We handle procurement, renewal tracking, and license compliance for your enterprise software stack — so your team never loses access to critical tools due to an expired subscription.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          WHY CHOOSE ESSL SECTION (light #f8fafc)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={whyRef}
        className="relative w-full py-24 bg-[#f8fafc] border-t border-slate-200"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className={`text-center mb-16 transition-all duration-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              THE ESSL ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              Why Choose ESSL for Software Licensing
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Eliminate vendor sprawl and governance complexity with structured enterprise software lifecycle services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <div
                  key={prop.title}
                  className={`rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${
                    whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CLOSING CTA BANNER (dark blue gradient)
         ───────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgb(26,138,220) 0%, rgb(14,76,122) 45%, rgb(8,42,72) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,42,72,0.6)_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
            Ready to Simplify Your Software Licensing?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Get in touch with ESSL&apos;s licensing specialists for competitive quotes, renewal audits, and consolidated multi-vendor management.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[rgb(14,76,122)] font-bold text-base px-10 py-4 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
