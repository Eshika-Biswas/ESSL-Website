'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Factory,
  ArrowRight,
  ShieldCheck,
  Server,
  Cpu,
  Wifi,
  Eye,
  RefreshCw,
  Headphones,
  Network,
  Radio,
  Boxes,
} from 'lucide-react';

const leftSolutions = [
  {
    title: 'Factory Network',
    description: 'High-availability industrial-grade network backbones connecting plant floors and machinery.',
    icon: Network,
  },
  {
    title: 'Industrial Wi-Fi',
    description: 'Low-latency, high-density wireless coverage engineered for rugged manufacturing environments.',
    icon: Wifi,
  },
  {
    title: 'OT Security',
    description: 'Operational technology defense isolating critical SCADA and plant automation systems.',
    icon: ShieldCheck,
  },
  {
    title: 'Smart Surveillance',
    description: 'High-definition thermal and optical camera monitoring across production facilities.',
    icon: Eye,
  },
  {
    title: 'AI Video Analytics',
    description: 'Real-time automated defect detection, PPE compliance checking, and perimeter safety alerts.',
    icon: Cpu,
  },
];

const rightSolutions = [
  {
    title: 'Data Center',
    description: 'On-premise and edge micro data centers built for continuous 24/7 plant operations.',
    icon: Server,
  },
  {
    title: 'Backup & DR',
    description: 'Automated disaster recovery protecting ERP data, production schedules, and inventory logs.',
    icon: RefreshCw,
  },
  {
    title: 'Industrial IoT Infrastructure',
    description: 'Sensor network backplanes enabling real-time equipment telemetry and predictive maintenance.',
    icon: Radio,
  },
  {
    title: 'Smart Warehouse',
    description: 'Automated inventory tracking, RFID reader connectivity, and logistics coordination.',
    icon: Boxes,
  },
  {
    title: 'Managed Operations',
    description: '24/7 proactive IT/OT monitoring and rapid response services for industrial operations.',
    icon: Headphones,
  },
];

interface ClientItem {
  name: string;
  type: string;
  initials: string;
  logo?: string;
}

const manufacturingClients: ClientItem[] = [
  { name: 'AKIJ Insaf', type: 'Industrial Conglomerate', initials: 'AIL', logo: '/logos/Akij-Insaf-logo.472a84eedbb63231b165.png' },
  { name: 'Navana Group', type: 'Manufacturing & Automotive', initials: 'NAV', logo: '/logos/navana_logo-1.svg' },
  { name: 'Rahimafrooz', type: 'Energy & Industrial', initials: 'RFL', logo: '/logos/rahimafrooz.png' },
  { name: 'Snowtex', type: 'Apparel Manufacturing', initials: 'STX', logo: '/logos/snowtex.png' },
  { name: 'United Group', type: 'Infrastructure & Power', initials: 'UGL', logo: '/logos/united.png' },
  { name: 'TK Group', type: 'Industrial Conglomerate', initials: 'TKG', logo: '/logos/TK-Group-1-2.png' },
  { name: 'Masco Group', type: 'Textile & Apparel', initials: 'MSG', logo: '/logos/masco.png' },
  { name: 'Partex Star Group', type: 'Manufacturing', initials: 'PSG', logo: '/logos/partex-star.png' },
  { name: 'Crown Cement', type: 'Heavy Industry', initials: 'CCL' },
  { name: 'City Group', type: 'Consumer Goods & Mfg', initials: 'CGL' },
  { name: 'Anwar Group', type: 'Industrial Conglomerate', initials: 'AGL' },
  { name: 'INSEE Cement', type: 'Heavy Industry', initials: 'INC' },
];

export default function ManufacturingIndustrialDetail() {
  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="w-full overflow-hidden bg-slate-50">
      
      {/* ─── 1. Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[560px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] 2xl:min-h-[880px] flex items-center overflow-hidden py-20 sm:py-28 lg:py-32 border-b border-slate-200">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/industries/manufacturing-industrial.png"
            alt="Manufacturing & Industrial Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-top sm:object-[center_top] lg:object-[right_top]"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgb(20,109,174)]/30 bg-[rgb(20,109,174)]/10 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[rgb(20,109,174)] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-[rgb(20,109,174)] font-mono">
                Industry
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#0f1420]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Manufacturing &{' '}
              <span className="text-[rgb(20,109,174)]">
                Industrial
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl font-normal">
              Power smart manufacturing with reliable, secure, and connected infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-[rgb(20,109,174)] hover:bg-[rgb(14,76,122)] text-white shadow-md shadow-[rgb(20,109,174)]/20 transition-all cursor-pointer"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-[#0f1420] hover:bg-slate-800 text-white transition-all shadow-md cursor-pointer"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Industry Solutions Section (Hub & Spoke) ────────────────────── */}
      <section id="solutions" className="relative py-24 border-b border-slate-200" style={gridBgStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-4 font-mono">
              Industry Solutions
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Smart <span className="text-[rgb(20,109,174)]">Factory & OT Infrastructure</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Next-generation IT/OT convergence designed for uninterrupted plant operations, real-time analytics, and OT cyber defense.
            </p>
          </div>

          <div className="relative my-8">
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes dashFlow {
                from { stroke-dashoffset: 20; }
                to { stroke-dashoffset: 0; }
              }
              .animate-dash-flow {
                animation: dashFlow 2.5s linear infinite;
              }
            `}} />

            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
              <line x1="50%" y1="50%" x2="41%" y2="10%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="30%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="50%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="70%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="90%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />

              <line x1="50%" y1="50%" x2="59%" y2="10%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="30%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="50%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="70%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="90%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-3 z-10">
                {leftSolutions.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group relative p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[rgb(20,109,174)]/40 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)]/10 group-hover:bg-[rgb(20,109,174)] group-hover:text-white text-[rgb(20,109,174)] flex items-center justify-center shrink-0 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 leading-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-2 flex flex-col items-center justify-center my-6 lg:my-0 z-20">
                <div className="relative flex flex-col items-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0f1420] to-[rgb(14,76,122)] border-4 border-white shadow-xl flex flex-col items-center justify-center p-3 text-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300">
                      <Factory className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-3 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-center">
                    <span className="text-xs font-bold text-slate-900 tracking-tight block">
                      Manufacturing & Industrial
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3 z-10">
                {rightSolutions.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group relative p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[rgb(20,109,174)]/40 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)]/10 group-hover:bg-[rgb(20,109,174)] group-hover:text-white text-[rgb(20,109,174)] flex items-center justify-center shrink-0 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 leading-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Clients Section ─────────────────────────────────────────────── */}
      <section className="relative py-20 bg-[#f1f5f9] border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/solutions-bg.png"
            alt="Client Section Backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9]/40 via-transparent to-[#f1f5f9]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-200 bg-slate-100 mb-3 font-mono">
              Customers
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Trusted by Premier <span className="text-[rgb(20,109,174)]">Manufacturing & Industrial</span> Leaders
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Empowering Bangladesh&apos;s leading industrial conglomerates, apparel giants, and manufacturing enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {manufacturingClients.map((client) => (
              <div
                key={client.name}
                className="group relative p-4 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/80 hover:border-[rgb(20,109,174)]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
              >
                {client.logo ? (
                  <div className="h-12 flex items-center justify-center mb-2">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={110}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] flex items-center justify-center font-black text-sm mb-2 group-hover:bg-[rgb(20,109,174)] group-hover:text-white transition-colors">
                    {client.initials}
                  </div>
                )}
                <span className="text-xs font-bold text-slate-800 group-hover:text-[rgb(20,109,174)] transition-colors leading-tight">
                  {client.name}
                </span>
                <span className="text-[10px] font-medium text-slate-400 mt-0.5">
                  {client.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Closing CTA Section ────────────────────────────────────────── */}
      <section className="relative py-20 bg-gradient-to-br from-[#0f1420] via-[rgb(14,76,122)] to-[#0f1420] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Build Your <span className="text-sky-300">Smart Factory Ecosystem</span>?
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Consult with our industrial IT experts to deploy secure, connected, and resilient manufacturing infrastructure.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl bg-white text-[rgb(14,76,122)] hover:bg-slate-100 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
