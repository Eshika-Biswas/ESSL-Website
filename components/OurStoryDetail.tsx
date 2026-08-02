'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Link from 'next/link';
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest border transition-all duration-300 hover:scale-105 hover:bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] border-[rgb(20,109,174)]"
            >
              Explore Our Solutions
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Our Vision (two-column, light background)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-white border-t border-slate-200">
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
          SECTION 3 — Our Mission (full-width single-column, light background)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#f8fafc] border-t border-slate-200">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32 text-left">
          {/* Top-aligned heading with monospace tech-style font */}
          <Reveal delay={0} threshold={0.2} duration={700}>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-wider uppercase mb-10 font-mono text-slate-900"
              style={{ letterSpacing: '0.08em' }}
            >
              OUR MISSION
            </h2>
          </Reveal>

          {/* Body paragraph text left-aligned in the same column */}
          <Reveal delay={150} threshold={0.2} duration={600}>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-slate-600">
              To build long-term relationships with our customers and provide exceptional
              customer services by pursuing business through innovation and advanced technology
              for both on-premises and in the cloud.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 4 — Cross-link card grid (2×2, light background)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-white border-t border-slate-200">
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-28 sm:pb-36">
          <StaggeredGrid
            staggerMs={120}
            threshold={0.15}
            className="grid sm:grid-cols-2 gap-x-10 gap-y-14"
          >
            {cards.map((card) => (
              <div key={card.heading} className="flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
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
                <p className="text-sm leading-relaxed mb-5 text-slate-600">
                  {card.desc}
                </p>

                {/* Link with circular arrow */}
                <Link
                  href={card.href}
                  className="group inline-flex items-center gap-3 mt-auto"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200 text-slate-900 group-hover:text-[rgb(20,109,174)]">
                    {card.linkText}
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[rgb(20,109,174)]">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-[rgb(20,109,174)]" />
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
