'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
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
   Partner card types
   ================================================================ */

interface Partner {
  name: string;
  /** Path to actual logo image in /public/partners/ — use encodeURI for spaces */
  logo?: string;
  /** logo image sizing class, e.g. 'max-h-10 max-w-[120px]' */
  logoScale?: string;
  /** Background colour for the card */
  bgColor: string;
  /** Fallback text shown if no logo supplied */
  isTextPlaceholder?: boolean;
}

/* ================================================================
   Partner data — 3 sections with real logos where available
   ================================================================ */

// ── NETWORKING & SECURITY ──────────────────────────────────────────
const networkingPartners: Partner[] = [
  {
    name: 'Cisco',
    logo: '/partners/cisco.png',
    logoScale: 'max-h-12 max-w-[110px]',
    bgColor: '#F4F6F9',
  },
  {
    name: 'Fortinet',
    logo: '/partners/fortinet-logo.svg',
    logoScale: 'max-h-10 max-w-[110px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Palo Alto Networks',
    logo: '/partners/paloalto.svg',
    logoScale: 'max-h-10 max-w-[120px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Sophos',
    logo: '/partners/sophos.png',
    logoScale: 'max-h-10 max-w-[110px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'F5',
    logo: '/partners/f5.svg',
    logoScale: 'max-h-12 max-w-[80px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Ruckus',
    logo: '/partners/ruckus.svg',
    logoScale: 'max-h-10 max-w-[120px]',
    bgColor: '#FFFFFF',
  },
  {
    // No logo file confirmed — text placeholder
    name: 'Cambium Networks',
    bgColor: '#005A9C',
    isTextPlaceholder: true,
  },
  {
    name: 'CommScope',
    logo: '/partners/cmmscope.svg',
    logoScale: 'max-h-10 max-w-[120px]',
    bgColor: '#FFFFFF',
  },
];

// ── CYBERSECURITY ──────────────────────────────────────────────────
const cyberSecurityPartners: Partner[] = [
  {
    name: 'CrowdStrike',
    logo: '/partners/crowdstrike.svg',
    logoScale: 'max-h-10 max-w-[120px]',
    bgColor: '#0D0D0D',
  },
  {
    name: 'Palo Alto Networks',
    logo: '/partners/paloalto.svg',
    logoScale: 'max-h-10 max-w-[120px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Fortinet',
    logo: '/partners/fortinet-logo.svg',
    logoScale: 'max-h-10 max-w-[110px]',
    bgColor: '#C8102E',
  },
  {
    name: 'Cisco',
    logo: '/partners/cisco.png',
    logoScale: 'max-h-12 max-w-[110px]',
    bgColor: '#F4F6F9',
  },
  {
    // No logo file confirmed — text placeholder
    name: 'Tenable',
    bgColor: '#0A0A0A',
    isTextPlaceholder: true,
  },
  {
    // No logo file confirmed — text placeholder
    name: 'Forescout',
    bgColor: '#00539B',
    isTextPlaceholder: true,
  },
  {
    // No logo file confirmed — text placeholder
    name: 'Forcepoint',
    bgColor: '#00447C',
    isTextPlaceholder: true,
  },
];

// ── DATA CENTER & CLOUD ─────────────────────────────────────────────
const dataCenterPartners: Partner[] = [
  {
    name: 'AWS',
    logo: '/partners/aws.png',
    logoScale: 'max-h-10 max-w-[100px]',
    bgColor: '#141B24',
  },
  {
    name: 'Microsoft Azure',
    logo: '/partners/azure.png',
    logoScale: 'max-h-10 max-w-[110px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Google Cloud',
    logo: '/partners/google-logo.svg',
    logoScale: 'max-h-9 max-w-[110px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Dell',
    logo: '/partners/dell.png',
    logoScale: 'max-h-10 max-w-[100px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'VMware',
    logo: '/partners/vmware-logo-grey.svg',
    logoScale: 'max-h-9 max-w-[120px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Cohesity',
    logo: '/partners/cohesity-logo-black-green.svg',
    logoScale: 'max-h-10 max-w-[120px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'NetApp',
    logo: '/partners/netapp.avif',
    logoScale: 'max-h-9 max-w-[110px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Veeam',
    logo: '/partners/veem.webp',
    logoScale: 'max-h-9 max-w-[110px]',
    bgColor: '#FFFFFF',
  },
  {
    name: 'Red Hat',
    // Filename has space — use encodeURIComponent handled via encodeURI below
    logo: '/partners/red hat.png',
    logoScale: 'max-h-10 max-w-[110px]',
    bgColor: '#FFFFFF',
  },
];

/* Helper: split array into rows of n */
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

/* ================================================================
   PartnerCard — renders a single partner square with real logo
   or text placeholder fallback
   ================================================================ */

function PartnerCard({ partner, visible, delayMs }: { partner: Partner; visible: boolean; delayMs: number }) {
  return (
    <div
      className="w-full h-full"
      style={{
        opacity: visible ? 1 : 0,
        transitionProperty: 'opacity, transform',
        transition: visible
          ? `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`
          : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        willChange: 'opacity, transform',
      }}
    >
      <div
        className="relative w-full aspect-square flex items-center justify-center rounded-none shadow-sm hover:scale-105 transition-transform duration-300 group cursor-pointer p-6"
        style={{ background: partner.bgColor }}
      >
        <div className="flex items-center justify-center w-full h-full transition-all duration-300 group-hover:brightness-110">
          {partner.logo && !partner.isTextPlaceholder ? (
            <Image
              src={encodeURI(partner.logo)}
              alt={`${partner.name} logo`}
              width={160}
              height={80}
              className={`w-auto object-contain ${partner.logoScale ?? 'max-h-10 max-w-[120px]'}`}
            />
          ) : (
            <div className="text-center px-2">
              <span className="block text-base sm:text-lg lg:text-xl font-bold tracking-wider font-mono text-white leading-tight select-none">
                {partner.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   PartnersRow — scroll-reveal triggered row
   ================================================================ */

function PartnersRow({ rowItems, staggerMs = 90 }: { rowItems: Partner[]; staggerMs?: number }) {
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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full justify-items-start"
    >
      {rowItems.map((partner, index) => (
        <PartnerCard
          key={partner.name}
          partner={partner}
          visible={visible}
          delayMs={index * staggerMs}
        />
      ))}
    </div>
  );
}

/* ================================================================
   Main PartnersSection Component
   ================================================================ */

export default function PartnersSection() {
  const networkingRows = chunkArray(networkingPartners, 4);
  const cyberSecurityRows = chunkArray(cyberSecurityPartners, 4);
  const dataCenterRows = chunkArray(dataCenterPartners, 4);

  // Shared blue-background style matching /clients page
  const blueBg = {
    backgroundColor: 'rgb(22, 120, 191)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M0 0H48M0 0V48' fill='none' stroke='rgba(255,255,255,0.10)' stroke-width='0.75'/%3E%3C/svg%3E")`,
    backgroundSize: '48px 48px',
    backgroundRepeat: 'repeat',
  };

  return (
    <div className="relative w-full" style={blueBg}>

      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Hero
         ───────────────────────────────────────────────────────── */}
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

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Partner grids
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Networking & Security */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-12 font-mono text-white/90"
                style={{ letterSpacing: '0.08em' }}
              >
                NETWORK &amp; SECURITY SOLUTIONS
              </h2>
            </Reveal>
            <div className="flex flex-col gap-3 w-full">
              {networkingRows.map((rowItems, rowIndex) => (
                <PartnersRow key={`networking-${rowIndex}`} rowItems={rowItems} staggerMs={90} />
              ))}
            </div>
          </div>

          <div className="border-t border-dashed border-white/20 w-full my-20" />

          {/* Cybersecurity */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-12 font-mono text-white/90"
                style={{ letterSpacing: '0.08em' }}
              >
                CYBER SECURITY SOLUTIONS
              </h2>
            </Reveal>
            <div className="flex flex-col gap-3 w-full">
              {cyberSecurityRows.map((rowItems, rowIndex) => (
                <PartnersRow key={`cybersecurity-${rowIndex}`} rowItems={rowItems} staggerMs={90} />
              ))}
            </div>
          </div>

          <div className="border-t border-dashed border-white/20 w-full my-20" />

          {/* Data Center & Cloud */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-12 font-mono text-white/90"
                style={{ letterSpacing: '0.08em' }}
              >
                DATA CENTER &amp; CLOUD
              </h2>
            </Reveal>
            <div className="flex flex-col gap-3 w-full">
              {dataCenterRows.map((rowItems, rowIndex) => (
                <PartnersRow key={`datacenter-${rowIndex}`} rowItems={rowItems} staggerMs={90} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 3 — CTA
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-28 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 shadow-sm border border-white/20 bg-white/10 text-center">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h3
                className="text-xl sm:text-2xl font-bold tracking-widest text-white uppercase font-mono mb-4"
                style={{ letterSpacing: '0.08em' }}
              >
                COLLABORATE WITH US
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/75 mb-8 max-w-xl">
                We&apos;re always looking for new technology and channel partnerships.
                Get in touch to discuss how we can work together to deliver better outcomes for our clients.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-xs font-bold tracking-widest text-[rgb(22,120,191)] bg-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
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
