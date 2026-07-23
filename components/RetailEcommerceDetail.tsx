'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Server,
  Cpu,
  Lock,
  Wifi,
  Eye,
  Cloud,
  Headphones,
  Network,
  RefreshCw,
  CreditCard,
  ShoppingCart,
  Boxes,
} from 'lucide-react';

const leftSolutions = [
  {
    title: 'Store Network & SD-WAN',
    description: 'High-speed SD-WAN connecting retail store branches with automatic multi-path failover.',
    icon: Network,
  },
  {
    title: 'Enterprise Wi-Fi',
    description: 'High-capacity store operational Wi-Fi and guest access for modern retail outlets.',
    icon: Wifi,
  },
  {
    title: 'Point-of-Sale (POS) Infrastructure',
    description: 'Low-latency, secure POS network terminals engineered for 100% transaction uptime.',
    icon: CreditCard,
  },
  {
    title: 'Omnichannel Retail Connectivity',
    description: 'Real-time inventory and order sync connecting physical stores with e-commerce storefronts.',
    icon: ShoppingCart,
  },
  {
    title: 'Warehouse & Distribution Network',
    description: 'Fulfillment center network backbones supporting barcode scanners, RFID, and logistics.',
    icon: Boxes,
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable multi-cloud hosting engineered for high transaction volume during flash sales.',
    icon: Cloud,
  },
];

const rightSolutions = [
  {
    title: 'Cyber Security',
    description: 'PCI-DSS compliant payment security, encryption, and Zero Trust retail network isolation.',
    icon: Lock,
  },
  {
    title: 'IP Surveillance & Smart Security',
    description: 'Integrated loss prevention cameras, store heatmapping, and AI foot-traffic analytics.',
    icon: Eye,
  },
  {
    title: 'Business Continuity & Disaster Recovery',
    description: 'Automated failover and offsite database backups ensuring uninterrupted checkout operations.',
    icon: RefreshCw,
  },
  {
    title: 'Managed IT Services',
    description: '24/7 store IT support, POS terminal maintenance, and rapid store dispatch response.',
    icon: Headphones,
  },
  {
    title: 'AI-Powered Retail Analytics',
    description: 'Computer vision customer demography, heatmaps, and AI stock recommendation tools.',
    icon: Cpu,
  },
];

interface ClientItem {
  name: string;
  type: string;
  initials: string;
}

const retailClients: ClientItem[] = [
  { name: 'Aarong', type: 'Retail Chain', initials: 'ARG' },
  { name: 'Singer Bangladesh', type: 'Electronics Retail', initials: 'SNG' },
  { name: 'Apex Footwear', type: 'Retail Chain', initials: 'APX' },
  { name: 'Shwapno', type: 'Supermarket Chain', initials: 'SHW' },
  { name: 'Walton', type: 'Electronics & Tech', initials: 'WLT' },
  { name: 'Bata Bangladesh', type: 'Footwear Retail', initials: 'BAT' },
  { name: 'Foodpanda BD', type: 'E-Commerce & Delivery', initials: 'FPD' },
  { name: 'Daraz Bangladesh', type: 'E-Commerce Marketplace', initials: 'DRZ' },
  { name: 'Chaldal', type: 'Grocery E-Commerce', initials: 'CHL' },
  { name: 'Star Tech', type: 'Tech & Electronics', initials: 'STT' },
  { name: 'Sailor', type: 'Fashion Retail', initials: 'SLR' },
  { name: 'Yellow', type: 'Fashion & Apparel', initials: 'YLW' },
];

export default function RetailEcommerceDetail() {
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
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] flex items-center overflow-hidden py-20 sm:py-28 border-b border-slate-200">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/industries/retail-ecommerce.png"
            alt="Retail & E-Commerce Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-right sm:object-center"
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
              Retail &{' '}
              <span className="text-[rgb(20,109,174)]">
                E-Commerce
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl font-normal">
              Empower connected retail with secure, intelligent, and scalable technology solutions.
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

      {/* ─── 2. Industry Solutions Section (11-Item Hub & Spoke) ─────────────── */}
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
              Omnichannel <span className="text-[rgb(20,109,174)]">Retail & Digital Infrastructure</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive store networks, POS reliability, cloud scaling, and AI analytics for modern retail brands.
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

            {/* SVG Connector Lines tailored for 6 left / 5 right items */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
              {/* Left 6 connector lines */}
              <line x1="50%" y1="50%" x2="41%" y2="8%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="25%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="42%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="58%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="75%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="92%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />

              {/* Right 5 connector lines */}
              <line x1="50%" y1="50%" x2="59%" y2="10%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="30%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="50%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="70%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="90%" stroke="rgb(20, 109, 174)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column (6 Solutions) */}
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

              {/* Center Hub Badge */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center my-6 lg:my-0 z-20">
                <div className="relative flex flex-col items-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0f1420] to-[rgb(14,76,122)] border-4 border-white shadow-xl flex flex-col items-center justify-center p-3 text-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-3 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-center">
                    <span className="text-xs font-bold text-slate-900 tracking-tight block">
                      Retail & E-Commerce
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 Solutions) */}
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
              Trusted by Premier <span className="text-[rgb(20,109,174)]">Retail & E-Commerce Brands</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Empowering leading retail store chains, e-commerce marketplaces, and consumer brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {retailClients.map((client) => (
              <div
                key={client.name}
                className="group relative p-4 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/80 hover:border-[rgb(20,109,174)]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] flex items-center justify-center font-black text-sm mb-2 group-hover:bg-[rgb(20,109,174)] group-hover:text-white transition-colors">
                  {client.initials}
                </div>
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
            Scale Your <span className="text-sky-300">Retail & E-Commerce Tech</span>
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our retail technology experts to deploy high-availability store SD-WAN, PCI-compliant POS security, and omnichannel cloud scaling.
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
