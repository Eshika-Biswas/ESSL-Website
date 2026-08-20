'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  ArrowRight,
  ShieldCheck,
  Server,
  Cpu,
  Lock,
  Cloud,
  Monitor,
  Headphones,
  GitBranch,
  RefreshCw,
} from 'lucide-react';

// ─── 10 Industry Solutions ───────────────────────────────────────────────────
const leftSolutions = [
  {
    title: 'Cloud Transformation',
    description: 'Migrate and modernize infrastructure on secure, scalable cloud platforms.',
    icon: Cloud,
  },
  {
    title: 'Managed IT Services',
    description: '24×7 NOC/SOC coverage so internal teams can focus on product, not infrastructure.',
    icon: Headphones,
  },
  {
    title: 'Modern Data Center',
    description: 'Scalable compute and storage for demanding development and hosting workloads.',
    icon: Server,
  },
  {
    title: 'Cyber Security',
    description: 'Protect source code, client data, and production environments from evolving threats.',
    icon: ShieldCheck,
  },
  {
    title: 'DevSecOps & CI/CD Enablement',
    description: 'Secure, automated build and deployment pipelines.',
    icon: GitBranch,
  },
];

const rightSolutions = [
  {
    title: 'Digital Workplace',
    description: 'Secure remote/hybrid collaboration for distributed engineering teams.',
    icon: Monitor,
  },
  {
    title: 'Enterprise Software & API Integration',
    description: 'Connect internal tools, client systems, and third-party platforms.',
    icon: Code2,
  },
  {
    title: 'AI & Intelligent Automation',
    description: 'Embed AI capabilities into products and internal operations.',
    icon: Cpu,
  },
  {
    title: 'Business Continuity & Disaster Recovery',
    description: 'Protect client-facing SLAs with resilient backup and failover.',
    icon: RefreshCw,
  },
  {
    title: 'Network & Security Infrastructure',
    description: 'Reliable connectivity and Zero Trust access for hybrid dev/office environments.',
    icon: Lock,
  },
];

// ─── 5 IT & Software Clients ─────────────────────────────────────────────────
interface ClientLogo {
  name: string;
  type: string;
  logo: string;
  initials: string;
  scale?: string;
}

const itSoftwareClients: ClientLogo[] = [
  { name: 'Brain Station 23', type: 'Software Exporter', logo: '/logos/brain-station.webp', initials: 'BS23', scale: 'max-h-10 scale-105' },
  { name: 'TechnoNext', type: 'Software & Cloud Solutions', logo: '/logos/technonext.webp', initials: 'TN', scale: 'max-h-10 scale-105' },
  { name: 'IT Consultants Ltd', type: 'Fintech & Payment Systems', logo: '/logos/itcl-logo-new.png', initials: 'ITCL', scale: 'max-h-12 scale-125' },
  { name: 'SouthTech Group', type: 'Enterprise Software', logo: '/logos/southtech-logo.svg', initials: 'ST', scale: 'max-h-9 scale-110' },
  { name: 'Next Ventures', type: 'Fintech & Tech Venture', logo: '/logos/next-ventures.png', initials: 'NV', scale: 'max-h-9 scale-105' },
];

export default function ITSoftwareDetail() {
  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(99,102,241,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="w-full overflow-hidden bg-slate-50">
      
      {/* ─── 1. Hero Section (Full-Bleed Light Background Illustration) ───────────── */}
      <section className="relative w-full min-h-[520px] sm:min-h-[620px] md:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] 2xl:min-h-[880px] flex items-center overflow-hidden border-b border-slate-200 bg-[#f8fafc]">
        
        {/* Full-width, full-height background image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/industries/it-software.png"
            alt="IT & Software Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-[85%_center] sm:object-[right_center] md:object-[right_center] lg:object-[right_center]"
            priority
          />
        </div>

        {/* Content Overlay sitting over the empty left negative space */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
          <div className="max-w-2xl text-left space-y-6">
            
            {/* Badge Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 font-mono">
                Industry
              </span>
            </div>

            {/* Main Heading in Dark Navy with Indigo Accent */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#0f1420]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              IT &{' '}
              <span className="text-indigo-600">
                Software
              </span>
            </h1>

            {/* Description in Dark Slate */}
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl font-normal">
              Enterprise-grade infrastructure, security, and managed services purpose-built for IT and software companies — supporting the platforms, teams, and clients that power Bangladesh&apos;s growing tech sector.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl border-2 border-[#0f1420] text-[#0f1420] hover:bg-[#0f1420] hover:text-white transition-all shadow-sm cursor-pointer"
              >
                Explore Solutions
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. Industry Solutions Section (Hub & Spoke Ecosystem Diagram) ──────── */}
      <section id="solutions" className="relative py-24 border-b border-slate-200" style={gridBgStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-600 border border-indigo-600/20 bg-indigo-600/5 mb-4 font-mono">
              Industry Solutions
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Industry Solutions <span className="text-indigo-600">Ecosystem</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end technology capabilities engineered to meet strict regulatory standards and deliver mission-critical reliability for software enterprises.
            </p>
          </div>

          {/* Hub and Spoke Interactive Layout */}
          <div className="relative my-8">
            
            {/* Embedded CSS for smooth, hardware-accelerated dash flow animation */}
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes dashFlow {
                from {
                  stroke-dashoffset: 20;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
              .animate-dash-flow {
                animation: dashFlow 2.5s linear infinite;
              }
            `}} />

            {/* SVG Dashed Connector Lines (visible on lg screens and up) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
              {/* Left 5 dashed connector lines radiating from center (50%, 50%) to left cards */}
              <line x1="50%" y1="50%" x2="41%" y2="10%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="30%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="50%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="70%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="41%" y2="90%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />

              {/* Right 5 dashed connector lines radiating from center (50%, 50%) to right cards */}
              <line x1="50%" y1="50%" x2="59%" y2="10%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="30%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="50%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="70%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="59%" y2="90%" stroke="rgb(99, 102, 241)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash-flow" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column (5 Solutions) */}
              <div className="lg:col-span-5 space-y-3 z-10">
                {leftSolutions.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group relative p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-indigo-500/40 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 flex items-center justify-center shrink-0 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
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
                  
                  {/* Central Hub Circular Badge */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0f1420] to-indigo-900 border-4 border-white shadow-xl flex flex-col items-center justify-center p-3 text-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-indigo-300">
                      <Code2 className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Hub Label */}
                  <div className="mt-3 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-center">
                    <span className="text-xs font-bold text-slate-900 tracking-tight block">
                      IT & Software
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
                      className="group relative p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-indigo-500/40 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 flex items-center justify-center shrink-0 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
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

      {/* ─── 3. Clients Section ("Customers") ───────────────────────────────────── */}
      <section className="relative py-20 bg-[#f1f5f9] border-b border-slate-200 overflow-hidden">
        {/* Background Image backdrop (Solutions BG) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/solutions-bg.png"
            alt="Client Section Backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.08]"
          />
          {/* Soft light-radial glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9]/40 via-transparent to-[#f1f5f9]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-200 bg-slate-100 mb-3 font-mono">
              Customers
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Trusted by Leading <span className="text-indigo-600">IT & Software Companies</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Empowering Bangladesh&apos;s premier software exporters, fintech pioneers, and tech enterprises.
            </p>
          </div>

          {/* 5 IT & Software Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {itSoftwareClients.map((client) => (
              <div
                key={client.name}
                className="group relative p-4 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/80 hover:border-indigo-500/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
              >
                {client.logo ? (
                  <div className="h-14 flex items-center justify-center mb-2 w-full px-2">
                    <Image
                      src={encodeURI(client.logo)}
                      alt={`${client.name} logo`}
                      width={140}
                      height={48}
                      className={`w-auto object-contain transition-transform duration-300 ${
                        client.scale || 'max-h-10 scale-100'
                      }`}
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-black text-sm mb-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {client.initials}
                  </div>
                )}
                
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-tight">
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

      {/* ─── 4. Closing CTA Section ────────────────────────────────────────────── */}
      <section className="relative py-20 bg-gradient-to-br from-[#0f1420] via-indigo-950 to-[#0f1420] text-white overflow-hidden">
        {/* Background grid accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Scale Your <span className="text-indigo-300">Software & IT Operations</span>?
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our IT infrastructure specialists to architect a compliant, resilient, and future-proof digital ecosystem.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl bg-white text-indigo-900 hover:bg-slate-100 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
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
