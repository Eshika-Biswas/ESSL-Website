'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Handshake, Briefcase, Newspaper, ArrowRight } from 'lucide-react';

/* ================================================================
   Reveal — reusable IntersectionObserver scroll-reveal wrapper
   Consistent with the pattern in components/ServicesGrid.tsx.
   Each instance observes independently, fires once, uses CSS
   transitions (transform + opacity) for GPU-accelerated smoothness.
   ================================================================ */

interface RevealProps {
  children: ReactNode;
  /** Extra transition-delay in ms for staggering siblings */
  delay?: number;
  /** IntersectionObserver threshold (0–1). Default 0.2 */
  threshold?: number;
  /** Transition duration in ms. Default 600 */
  duration?: number;
  /** Optional extra className */
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
      { threshold },
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
   StaggeredGrid — single observer for a grid; children stagger by
   index × staggerMs.
   ================================================================ */

function StaggeredGrid({
  children,
  staggerMs = 120,
  threshold = 0.2,
  className = '',
}: {
  children: ReactNode[];
  staggerMs?: number;
  threshold?: number;
  className?: string;
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
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <div
          key={i}
          className="h-full"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 600ms ease-out ${i * staggerMs}ms, transform 600ms ease-out ${i * staggerMs}ms`,
            willChange: 'opacity, transform',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/* ================================================================
   Card data
   ================================================================ */

const cards = [
  {
    icon: Users,
    heading: 'OUR TEAM',
    desc: 'Meet the people behind ESSL\u2019s enterprise IT and cybersecurity solutions.',
    linkText: 'MEET OUR TEAM',
    href: '/about/leadership',
  },
  {
    icon: Handshake,
    heading: 'OUR PARTNERS',
    desc: 'Explore the technology partnerships that power our enterprise solutions.',
    linkText: 'MEET OUR PARTNERS',
    href: '/about/partners',
  },
  {
    icon: Briefcase,
    heading: 'CAREERS',
    desc: 'Come and work with us. We\u2019re always looking for talented people to grow our team.',
    linkText: 'VIEW OPEN ROLES',
    href: '/about/careers',
  },
  {
    icon: Newspaper,
    heading: 'INSIGHTS',
    desc: 'Read our latest insights on IT infrastructure and cybersecurity trends.',
    linkText: 'READ INSIGHTS',
    href: '/insights',
  },
];

/* ================================================================
   OurStoryDetail — main page component
   ================================================================ */

export default function OurStoryDetail() {
  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  const blueGridStyle = {
    backgroundColor: 'rgb(20, 109, 174)',
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="relative w-full bg-[#f8fafc] text-slate-900">

      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Hero (light background, centered)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#f8fafc]" style={gridBgStyle}>
        {/* Decorative radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '10%',
            right: '12%',
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,109,174,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 text-center">
          {/* Heading */}
          <Reveal delay={0} threshold={0.1} duration={700}>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-tight mb-8 text-slate-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About Ensure Support Services Ltd.
            </h1>
          </Reveal>

          {/* Founding paragraph */}
          <Reveal delay={150} threshold={0.1} duration={700}>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-slate-600">
              Ensure Support Services Ltd. was founded in 2016 in Dhaka, Bangladesh, to provide
              exceptional value, innovation, assurance, and integrity in the support of emerging
              information technology solutions. Our main focus on IT support services provides
              exceptional value and improves our clients&apos; businesses, not just their IT
              environment. We truly do{' '}
              <strong className="text-slate-900 font-bold">&quot;Think Globally and Act Locally.&quot;</strong>
            </p>
          </Reveal>

          {/* CTA Button */}
          <Reveal delay={300} threshold={0.1} duration={700}>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest border transition-all duration-300 hover:scale-105 hover:bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] border-[rgb(20,109,174)]"
            >
              Explore Our Solutions
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Our Vision (light circuit texture background)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#f8fafc] border-t border-slate-200 text-slate-900">
        <div className="absolute inset-0 z-0 bg-[#f8fafc]">
          <Image
            src="/images/end-to-end-tech-bg.png"
            alt="Vision Backdrop Pattern"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60 pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/30 via-transparent to-[#f8fafc]/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            {/* Left — heading */}
            <Reveal delay={0} threshold={0.2} duration={700}>
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-tight text-slate-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                OUR VISION
              </h2>
            </Reveal>

            {/* Right — text with highlighted clause */}
            <div>
              <Reveal delay={150} threshold={0.2} duration={900}>
                <p className="text-lg sm:text-xl leading-relaxed font-semibold mb-5 text-[rgb(20,109,174)]">
                  Our vision is to provide greater value to our clients by providing complete
                  competitive solutions &amp; Services that are responsive to dynamic markets,
                </p>
              </Reveal>
              <Reveal delay={300} threshold={0.2} duration={600}>
                <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                  as well as treat clients, suppliers, and other associates with the utmost respect.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 3 — Our Mission (circuit-board texture & soft glowing hexagon)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#f8fafc] border-t border-slate-200/80 text-slate-900">
        {/* Low-opacity circuit-board line pattern backdrop */}
        <div className="absolute inset-0 z-0 bg-[#f8fafc]">
          <Image
            src="/images/network-grid-light.svg"
            alt="Mission Circuit Grid"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40 pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/40 via-transparent to-[#f8fafc]/50" />
        </div>

        {/* Faint glowing hexagon shape right-of-center */}
        <div className="absolute right-[8%] sm:right-[15%] top-1/2 -translate-y-1/2 pointer-events-none opacity-20 sm:opacity-30 z-0">
          <svg width="300" height="340" viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M150 15 L275 88 L275 252 L150 325 L25 252 L25 88 Z"
              stroke="rgb(20,109,174)"
              strokeWidth="1.75"
              strokeDasharray="8 6"
              fill="url(#missionHexGlow)"
            />
            <circle cx="150" cy="15" r="4.5" fill="rgb(20,109,174)" />
            <circle cx="275" cy="88" r="4.5" fill="rgb(20,109,174)" />
            <circle cx="275" cy="252" r="4.5" fill="rgb(20,109,174)" />
            <circle cx="150" cy="325" r="4.5" fill="rgb(20,109,174)" />
            <circle cx="25" cy="252" r="4.5" fill="rgb(20,109,174)" />
            <circle cx="25" cy="88" r="4.5" fill="rgb(20,109,174)" />
            <defs>
              <radialGradient id="missionHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgb(20,109,174)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="rgb(20,109,174)" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32 text-left">
          {/* Heading */}
          <Reveal delay={0} threshold={0.2} duration={700}>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-wider uppercase mb-8 font-mono text-slate-900"
              style={{ letterSpacing: '0.08em' }}
            >
              OUR MISSION
            </h2>
          </Reveal>

          {/* Body paragraph */}
          <Reveal delay={150} threshold={0.2} duration={600}>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-slate-600 font-medium">
              To build long-term relationships with our customers and provide exceptional
              customer services by pursuing business through innovation and advanced technology
              for both on-premises and in the cloud.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 4 — Cross-link card grid (Blue Grid Background)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={blueGridStyle}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <StaggeredGrid
            staggerMs={120}
            threshold={0.15}
            className="grid sm:grid-cols-2 gap-8 lg:gap-10"
          >
            {cards.map((card) => (
              <div
                key={card.heading}
                className="group flex h-full flex-col p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] hover:border-[rgb(20,109,174)]/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-5">
                  <card.icon
                    className="w-7 h-7 text-[rgb(20,109,174)]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Heading */}
                <h3
                  className="text-lg sm:text-xl font-bold tracking-wide mb-3 text-[rgb(20,109,174)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {card.heading}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 text-slate-600">
                  {card.desc}
                </p>

                {/* Link with circular arrow */}
                <Link
                  href={card.href}
                  className="group/link inline-flex items-center gap-3 mt-auto"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200 text-slate-900 group-hover/link:text-[rgb(20,109,174)]">
                    {card.linkText}
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-slate-300 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:border-[rgb(20,109,174)] group-hover/link:bg-[rgb(20,109,174)]/10 text-slate-700 group-hover/link:text-[rgb(20,109,174)]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </section>
    </div>
  );
}
