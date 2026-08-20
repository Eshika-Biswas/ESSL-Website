'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ================================================================
   Reveal - reusable IntersectionObserver scroll-reveal wrapper
   ================================================================ */

interface RevealProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  duration?: number;
  className?: string;
}

import { useEffect, useRef, useState } from 'react';

function Reveal({
  children,
  delay = 0,
  threshold = 0.2,
  duration = 600,
  className = '',
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

/* ================================================================
   Partner interface
   ================================================================ */

interface Partner {
  name: string;
  type: string;
  logo: string;
  logoScale?: string;
  href?: string;
}

/* ================================================================
   Partner lists with real logos only (no text fallbacks)
   ================================================================ */

// ── NETWORKING & SECURITY ──────────────────────────────────────────
const networkingPartners: Partner[] = [
  {
    name: 'Cisco',
    type: 'Networking & Security',
    logo: '/partners/cisco.png',
    logoScale: 'max-h-8',
    href: 'https://locatr.cloudapps.cisco.com/WWChannels/LOCATR/pf/index.jsp#/NjUyMTI3@MTM2NTYxMDUw@RU4=',
  },
  {
    name: 'Fortinet',
    type: 'Network Security',
    logo: '/partners/fortinet-logo.svg',
    logoScale: 'max-h-7',
    href: 'https://partnerportal.fortinet.com/directory/search?loe=Advanced&l=Bangladesh&q=ensure+support+services',
  },
  {
    name: 'Palo Alto Networks',
    type: 'Network Security',
    logo: '/partners/paloalto.svg',
    logoScale: 'max-h-7',
    href: 'https://paloaltonetworks.my.site.com/NextWavePartnerProgram/s/partnerlocator?c__pageDetails=RecordView&c__key=2Smer%2FK0VxCnaeqoa617j8Fo%2FxiWsRYO6Pns%2FGdvAhOoGgnXqPzIs%2BrcB%2B0bbi2%2B',
  },
  {
    name: 'Sophos',
    type: 'Endpoint Security',
    logo: '/partners/sophos.png',
    logoScale: 'max-h-7',
  },
  {
    name: 'F5',
    type: 'Application Delivery',
    logo: '/partners/f5.svg',
    logoScale: 'max-h-8',
  },
  {
    name: 'Ruckus',
    type: 'Wireless Networking',
    logo: '/partners/ruckus.svg',
    logoScale: 'max-h-7',
  },
  {
    name: 'CommScope',
    type: 'Network Infrastructure',
    logo: '/partners/cmmscope.svg',
    logoScale: 'max-h-7',
  },
];

// ── CYBERSECURITY ──────────────────────────────────────────────────
const cyberSecurityPartners: Partner[] = [
  {
    name: 'CrowdStrike',
    type: 'EDR & Cybersecurity',
    logo: '/partners/crowdstrike.svg',
    logoScale: 'max-h-6',
  },
  {
    name: 'Palo Alto Networks',
    type: 'Network Security',
    logo: '/partners/paloalto.svg',
    logoScale: 'max-h-7',
    href: 'https://paloaltonetworks.my.site.com/NextWavePartnerProgram/s/partnerlocator?c__pageDetails=RecordView&c__key=2Smer%2FK0VxCnaeqoa617j8Fo%2FxiWsRYO6Pns%2FGdvAhOoGgnXqPzIs%2BrcB%2B0bbi2%2B',
  },
  {
    name: 'Fortinet',
    type: 'Network Security',
    logo: '/partners/fortinet-logo.svg',
    logoScale: 'max-h-7',
    href: 'https://partnerportal.fortinet.com/directory/search?loe=Advanced&l=Bangladesh&q=ensure+support+services',
  },
  {
    name: 'Cisco',
    type: 'Networking & Security',
    logo: '/partners/cisco.png',
    logoScale: 'max-h-8',
    href: 'https://locatr.cloudapps.cisco.com/WWChannels/LOCATR/pf/index.jsp#/NjUyMTI3@MTM2NTYxMDUw@RU4=',
  },
  {
    name: 'Sophos',
    type: 'Endpoint Security',
    logo: '/partners/sophos.png',
    logoScale: 'max-h-8',
  },
  {
    name: 'Barracuda',
    type: 'Email Security',
    logo: '/partners/logo-barracuda-fins-only-mar2025.svg',
    logoScale: 'max-h-7',
  },
  {
    name: 'Netwrix',
    type: 'Data Security & Compliance',
    logo: '/partners/netwrix.avif',
    logoScale: 'max-h-7',
  },
  {
    name: 'Tenable',
    type: 'Vulnerability Management',
    logo: '/partners/tenable.png',
    logoScale: 'max-h-8',
  },
];

// ── DATA CENTER & CLOUD ─────────────────────────────────────────────
const dataCenterPartners: Partner[] = [
  {
    name: 'AWS',
    type: 'Cloud Infrastructure',
    logo: '/partners/aws2.png',
    logoScale: 'max-h-8',
  },
  {
    name: 'Microsoft Azure',
    type: 'Cloud Infrastructure',
    logo: '/partners/azure.png',
    logoScale: 'max-h-8',
  },
  {
    name: 'Google Cloud',
    type: 'Cloud Infrastructure',
    logo: '/partners/google-logo.svg',
    logoScale: 'max-h-7',
  },
  {
    name: 'Dell',
    type: 'Server & Storage',
    logo: '/partners/dell-logo-png-svg.webp',
    logoScale: 'max-h-8',
  },
  {
    name: 'VMware',
    type: 'Virtualization & Cloud',
    logo: '/partners/vmware-logo-grey.svg',
    logoScale: 'max-h-7',
    href: 'https://www.broadcom.com/how-to-buy/partner-distributor-lookup?tagId=0&tagId=16&value=bangladesh&value=Reseller%20%28VMware%29&isfiltertag=False&isfiltertag=True'
  },
  {
    name: 'Cohesity',
    type: 'Data Management & Backup',
    logo: '/partners/cohesity-logo-black-green.svg',
    logoScale: 'max-h-7',
  },
  {
    name: 'NetApp',
    type: 'Hybrid Cloud Storage',
    logo: '/partners/netapp.avif',
    logoScale: 'max-h-7',
  },
  {
    name: 'Veeam',
    type: 'Data Backup & Recovery',
    logo: '/partners/veem.webp',
    logoScale: 'max-h-7',
  },
  {
    name: 'Red Hat',
    type: 'Enterprise Open Source',
    logo: '/partners/red-hat.png',
    logoScale: 'max-h-8',
  },
];

/* ================================================================
   PartnerCard — matches ClientCard exactly
   ================================================================ */

function PartnerCard({ partner }: { partner: Partner }) {
  const card = (
    <div
      className={`group relative p-4 rounded-2xl border border-white/30 bg-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center text-center h-32${partner.href ? ' cursor-pointer hover:scale-[1.03] hover:border-[rgb(20,109,174)]/40' : ''
        }`}
    >
      <div className="h-14 flex items-center justify-center mb-2 w-full px-2">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={140}
          height={48}
          className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${partner.logoScale || 'max-h-10'}`}
        />
      </div>
      <span
        className="text-xs font-bold text-slate-800 leading-tight transition-colors group-hover:text-[rgb(20,109,174)]"
      >
        {partner.name}
      </span>
      <span className="text-[10px] font-medium text-slate-500 mt-0.5">{partner.type}</span>
      {partner.href && (
        <span className="text-[9px] font-semibold text-[rgb(20,109,174)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider uppercase">
          Find Us ↗
        </span>
      )}
    </div>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${partner.name} partner locator (opens in new tab)`}
      >
        {card}
      </a>
    );
  }

  return card;
}

/* ================================================================
   Main PartnersSection Component
   ================================================================ */

export default function PartnersSection() {
  // Shared blue-background style matching /clients page
  const blueBg = {
    backgroundColor: 'rgb(22, 120, 191)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M0 0H48M0 0V48' fill='none' stroke='rgba(255,255,255,0.10)' stroke-width='0.75'/%3E%3C/svg%3E")`,
    backgroundSize: '48px 48px',
    backgroundRepeat: 'repeat',
  };

  return (
    <div className="relative w-full" style={blueBg}>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
          <Reveal delay={0} threshold={0.1} duration={700}>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-wider uppercase mb-8 font-mono text-white drop-shadow-sm"
              style={{ letterSpacing: '0.08em' }}
            >
              OUR PARTNERS
            </h1>
          </Reveal>

          <Reveal delay={150} threshold={0.1} duration={700}>
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-white/80">
              We partner with leading enterprise technology vendors to provide our customers with
              a range of platform-specific and workflow-based integration options.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-10 text-white/80">
              ESSL&apos;s partnerships span networking, security, cloud, and infrastructure —
              enabling us to deliver best-in-class solutions tailored to each client&apos;s environment.
            </p>
          </Reveal>

          <Reveal delay={300} threshold={0.1} duration={700}>
            <div className="flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-xs font-bold tracking-widest text-[rgb(22,120,191)] bg-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
                style={{ letterSpacing: '0.08em' }}
              >
                CONTACT US
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid of Partners */}
      <section className="relative w-full py-24 overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Networking & Security */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-8 font-mono text-white/90"
                style={{ letterSpacing: '0.08em' }}
              >
                NETWORK &amp; SECURITY SOLUTIONS
              </h2>
            </Reveal>
            <Reveal delay={100} threshold={0.1} duration={700}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {networkingPartners.map((partner) => (
                  <PartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="border-t border-dashed border-white/20 w-full my-20" />

          {/* Cybersecurity */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-8 font-mono text-white/90"
                style={{ letterSpacing: '0.08em' }}
              >
                CYBER SECURITY SOLUTIONS
              </h2>
            </Reveal>
            <Reveal delay={100} threshold={0.1} duration={700}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl">
                {cyberSecurityPartners.map((partner) => (
                  <PartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="border-t border-dashed border-white/20 w-full my-20" />

          {/* Data Center & Cloud */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-8 font-mono text-white/90"
                style={{ letterSpacing: '0.08em' }}
              >
                DATA CENTER &amp; CLOUD
              </h2>
            </Reveal>
            <Reveal delay={100} threshold={0.1} duration={700}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {dataCenterPartners.map((partner) => (
                  <PartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Collaborate CTA Section */}
      <section className="relative w-full py-28 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 bg-white text-center">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h3
                className="text-xl sm:text-2xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-4"
                style={{ letterSpacing: '0.08em' }}
              >
                COLLABORATE WITH US
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-8 max-w-xl">
                We&apos;re always looking for new technology and channel partnerships.
                Get in touch to discuss how we can work together to deliver better outcomes for our clients.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-xs font-bold tracking-widest text-white bg-[rgb(20,109,174)] font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ letterSpacing: '0.08em' }}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
