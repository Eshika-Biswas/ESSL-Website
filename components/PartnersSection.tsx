'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Link from 'next/link';

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
   Partners data and clean SVGs / Text Placeholders
   ================================================================ */

interface Partner {
  name: string;
  bgColor: string;
  isTextPlaceholder?: boolean;
  svg?: ReactNode;
}

const dataCenterPartners: Partner[] = [
  {
    name: 'VMware',
    bgColor: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 160 50" className="w-20 h-20 sm:w-24 sm:h-24">
        <rect x="15" y="10" width="8" height="30" fill="#0095D9" />
        <rect x="26" y="14" width="8" height="26" fill="#0095D9" />
        <rect x="37" y="18" width="8" height="22" fill="#0095D9" />
        <text x="52" y="31" fill="#0095D9" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="17" letterSpacing="0.5">vmware</text>
      </svg>
    ),
  },
  {
    name: 'Dell Technologies',
    bgColor: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 100 60" className="w-14 h-14 sm:w-18 sm:h-18">
        <circle cx="50" cy="30" r="20" fill="none" stroke="#007DB8" strokeWidth="3" />
        <text x="50" y="36" fill="#007DB8" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle" letterSpacing="-0.5">DELL</text>
      </svg>
    ),
  },
  {
    name: 'HPE',
    bgColor: '#00B388',
    isTextPlaceholder: true,
  },
  {
    name: 'Cohesity',
    bgColor: '#009F3C',
    isTextPlaceholder: true,
  },
  {
    name: 'AWS',
    bgColor: '#141B24',
    svg: (
      <svg viewBox="0 0 100 60" className="w-14 h-14 sm:w-18 sm:h-18">
        <text x="50" y="35" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="24" textAnchor="middle">aws</text>
        <path d="M28,41 Q50,49 72,41" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M69,38 L74,42 L69,46" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: 'Hewlett Packard',
    bgColor: '#002561',
    isTextPlaceholder: true,
  },
  {
    name: 'Adobe',
    bgColor: '#FF0000',
    isTextPlaceholder: true,
  },
  {
    name: 'Linux',
    bgColor: '#222222',
    isTextPlaceholder: true,
  },
];

const cyberSecurityPartners: Partner[] = [
  {
    name: 'CrowdStrike',
    bgColor: '#0D0D0D',
    svg: (
      <svg viewBox="0 0 160 50" className="w-20 h-20 sm:w-24 sm:h-24">
        <path d="M12,25 C12,16 20,13 28,18 C24,21 20,24 17,28 C22,26 27,29 25,34 C17,32 12,28 12,25 Z" fill="#FC0000" />
        <text x="36" y="30" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="14" letterSpacing="0.8">CROWDSTRIKE</text>
      </svg>
    ),
  },
  {
    name: 'Fortinet',
    bgColor: '#C8102E',
    svg: (
      <svg viewBox="0 0 160 50" className="w-20 h-20 sm:w-24 sm:h-24">
        <path d="M15,14 H32 V24 H23 V34 H15 Z" fill="#FFFFFF" />
        <path d="M28,14 H40 V20 H28 Z" fill="#FFFFFF" />
        <text x="46" y="32" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="16" letterSpacing="0.5">FORTINET</text>
      </svg>
    ),
  },
  {
    name: 'Palo Alto Networks',
    bgColor: '#0F0F0F',
    svg: (
      <svg viewBox="0 0 160 55" className="w-20 h-20 sm:w-24 sm:h-24">
        <circle cx="25" cy="27" r="10" fill="none" stroke="#EA2D3F" strokeWidth="3.5" />
        <line x1="25" y1="17" x2="41" y2="33" stroke="#EA2D3F" strokeWidth="3.5" />
        <text x="46" y="33" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="16" letterSpacing="-0.5">paloalto</text>
      </svg>
    ),
  },
  {
    name: 'Sophos',
    bgColor: '#003882',
    svg: (
      <svg viewBox="0 0 160 50" className="w-20 h-20 sm:w-24 sm:h-24">
        <text x="15" y="34" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="25" letterSpacing="-0.5">SOPHOS</text>
      </svg>
    ),
  },
  {
    name: 'Proofpoint',
    bgColor: '#00539B',
    isTextPlaceholder: true,
  },
  {
    name: 'Barracuda Networks',
    bgColor: '#004F9E',
    isTextPlaceholder: true,
  },
  {
    name: 'Tenable',
    bgColor: '#0A0A0A',
    isTextPlaceholder: true,
  },
  {
    name: 'Veritas',
    bgColor: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 160 50" className="w-20 h-20 sm:w-24 sm:h-24">
        <path d="M15,20 L25,33 L42,14" fill="none" stroke="#D81E05" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="48" y="31" fill="#D81E05" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="17" letterSpacing="0.8">VERITAS</text>
      </svg>
    ),
  },
  {
    name: 'SafeNet',
    bgColor: '#D9251B',
    isTextPlaceholder: true,
  },
  {
    name: 'AnyDesk',
    bgColor: '#EF443B',
    isTextPlaceholder: true,
  },
  {
    name: 'Zoom',
    bgColor: '#2D8CFF',
    isTextPlaceholder: true,
  },
];

const networkSecurityPartners: Partner[] = [
  {
    name: 'Cisco',
    bgColor: '#F4F6F9',
    svg: (
      <svg viewBox="0 0 100 60" className="w-16 h-16 sm:w-20 sm:h-20" fill="#00B0ED">
        <rect x="10" y="30" width="4" height="20" rx="2" />
        <rect x="20" y="20" width="4" height="30" rx="2" />
        <rect x="30" y="10" width="4" height="40" rx="2" />
        <rect x="40" y="20" width="4" height="30" rx="2" />
        <rect x="50" y="10" width="4" height="40" rx="2" />
        <rect x="60" y="20" width="4" height="30" rx="2" />
        <rect x="70" y="10" width="4" height="40" rx="2" />
        <rect x="80" y="20" width="4" height="30" rx="2" />
        <rect x="90" y="30" width="4" height="20" rx="2" />
        <text x="50" y="58" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="13" textAnchor="middle" letterSpacing="0.8">CISCO</text>
      </svg>
    ),
  },
  {
    name: 'SolarWinds',
    bgColor: '#1D2735',
    svg: (
      <svg viewBox="0 0 160 50" className="w-20 h-20 sm:w-24 sm:h-24">
        <path d="M12,12 L24,25 L12,38" fill="none" stroke="#FF7900" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22,17 L30,25 L22,33" fill="none" stroke="#FF7900" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="38" y="31" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="17" letterSpacing="0.5">solarwinds</text>
      </svg>
    ),
  },
  {
    name: 'Ruckus (CommScope)',
    bgColor: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 160 55" className="w-20 h-20 sm:w-24 sm:h-24">
        <text x="15" y="38" fill="#F37021" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="26" letterSpacing="-1">Ruckus</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    bgColor: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 23 23" className="w-12 h-12 sm:w-16 sm:h-16">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
        <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
        <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: 'Mikrotik',
    bgColor: '#1B365D',
    isTextPlaceholder: true,
  },
  {
    name: 'Cambium Networks',
    bgColor: '#005A9C',
    isTextPlaceholder: true,
  },
  {
    name: 'Rosenberger',
    bgColor: '#009EE3',
    isTextPlaceholder: true,
  },
  {
    name: 'Grandstream',
    bgColor: '#005C9E',
    isTextPlaceholder: true,
  },
  {
    name: 'Prosw',
    bgColor: '#2C3E50',
    isTextPlaceholder: true,
  },
];

/* Helper to split array into chunks of a given size */
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

/* ================================================================
   PartnersRow — independently scroll-reveal triggered row component
   ================================================================ */

function PartnersRow({
  rowItems,
  staggerMs = 90,
}: {
  rowItems: Partner[];
  staggerMs?: number;
}) {
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
        <div
          key={partner.name}
          className="w-full h-full"
          style={{
            opacity: visible ? 1 : 0,
            transitionProperty: 'opacity, transform',
            transition: visible 
              ? `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerMs}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerMs}ms`
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
              {partner.isTextPlaceholder ? (
                <div className="text-center px-2">
                  <span className="block text-base sm:text-lg lg:text-xl font-bold tracking-wider font-mono text-white leading-tight select-none">
                    {partner.name}
                  </span>
                </div>
              ) : (
                partner.svg
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================
   Main PartnersSection Component
   ================================================================ */

export default function PartnersSection() {
  const dataCenterRows = chunkArray(dataCenterPartners, 4);
  const cyberSecurityRows = chunkArray(cyberSecurityPartners, 4);
  const networkSecurityRows = chunkArray(networkSecurityPartners, 4);

  return (
    <div className="relative w-full" style={{ background: '#0A0F1D' }}>

      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Hero (dark background, centered)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-b border-dashed border-white/10">
        {/* Soft warm orange/red radial glow blob in the top-left corner */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: '-10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Faint decorative diagonal grid lines across background */}
        <div className="absolute inset-0 z-0 grid-bg opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
          {/* Centered Heading */}
          <Reveal delay={0} threshold={0.1} duration={700}>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-wider uppercase mb-8 font-mono"
              style={{ color: '#F1F5F9', letterSpacing: '0.08em' }}
            >
              OUR PARTNERS
            </h1>
          </Reveal>

          {/* Centered Paragraphs */}
          <Reveal delay={150} threshold={0.1} duration={700}>
            <p className="text-base sm:text-lg leading-relaxed mb-4"
              style={{ color: '#D0D3DA' }}
            >
              We partner with leading enterprise technology vendors to provide our customers with
              a range of platform-specific and workflow-based integration options.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: '#D0D3DA' }}
            >
              ESSL&apos;s partnerships span networking, security, cloud, and infrastructure —
              enabling us to deliver best-in-class solutions tailored to each client&apos;s environment.
            </p>
          </Reveal>

          {/* Centered single Contact Us button */}
          <Reveal delay={300} threshold={0.1} duration={700}>
            <div className="flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-xs font-bold tracking-widest text-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
                style={{ background: '#FF6B35', letterSpacing: '0.08em' }}
              >
                CONTACT US
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Technology Partnership categorized grids
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 overflow-hidden border-b border-dashed border-white/10">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          {/* Sub-section 1 — NETWORK & SECURITY SOLUTIONS */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-12 font-mono"
                style={{ color: '#FFFFFF', letterSpacing: '0.08em' }}
              >
                NETWORK & SECURITY SOLUTIONS
              </h2>
            </Reveal>

            <div className="flex flex-col gap-3 w-full">
              {networkSecurityRows.map((rowItems, rowIndex) => (
                <PartnersRow
                  key={`networksecurity-${rowIndex}`}
                  rowItems={rowItems}
                  staggerMs={90}
                />
              ))}
            </div>
          </div>

          {/* Divider 1 */}
          <div className="border-t border-dashed border-white/10 w-full my-20" />

          {/* Sub-section 2 — CYBER SECURITY SOLUTIONS */}
          <div className="mb-20">
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-12 font-mono"
                style={{ color: '#FFFFFF', letterSpacing: '0.08em' }}
              >
                CYBER SECURITY SOLUTIONS
              </h2>
            </Reveal>

            <div className="flex flex-col gap-3 w-full">
              {cyberSecurityRows.map((rowItems, rowIndex) => (
                <PartnersRow
                  key={`cybersecurity-${rowIndex}`}
                  rowItems={rowItems}
                  staggerMs={90}
                />
              ))}
            </div>
          </div>

          {/* Divider 2 */}
          <div className="border-t border-dashed border-white/10 w-full my-20" />

          {/* Sub-section 3 — DATA CENTER & VIRTUALIZATION */}
          <div>
            <Reveal delay={0} threshold={0.15} duration={700}>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-12 font-mono"
                style={{ color: '#FFFFFF', letterSpacing: '0.08em' }}
              >
                DATA CENTER & VIRTUALIZATION
              </h2>
            </Reveal>

            <div className="flex flex-col gap-3 w-full">
              {dataCenterRows.map((rowItems, rowIndex) => (
                <PartnersRow
                  key={`datacenter-${rowIndex}`}
                  rowItems={rowItems}
                  staggerMs={90}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 3 — Collaborate With Us CTA (light card)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-28 overflow-hidden">
        {/* Soft blue radial glow accent on the dark background near the top-right */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: '20%',
            right: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(23,108,167,0.14) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Centered narrower card layout */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-100/10 bg-gradient-to-r from-white to-slate-50/95 text-center">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-4"
                style={{ letterSpacing: '0.08em' }}
              >
                COLLABORATE WITH US
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-8 max-w-xl">
                We&apos;re always looking for new technology and channel partnerships.
                Get in touch to discuss how we can work together to deliver better outcomes for our clients.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-xs font-bold tracking-widest text-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ background: '#FF6B35', letterSpacing: '0.08em' }}
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
