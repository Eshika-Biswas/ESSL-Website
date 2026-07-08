'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Network, Compass, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Network,
    heading: 'FLEXIBLE WORKING',
    desc: 'We support flexible work schedules that help our team balance productivity with personal wellbeing, while maintaining strong collaboration across projects.',
  },
  {
    icon: Compass,
    heading: 'TRAINING & CONFERENCES',
    desc: 'Our employees get opportunities to attend industry conferences, technical workshops, and vendor certification trainings to stay current with evolving IT and cybersecurity trends.',
  },
  {
    icon: Users,
    heading: 'INCLUSIVE WORKING ENVIRONMENT',
    desc: 'ESSL promotes an open, respectful, and collaborative working environment that supports constructive relationships and a positive team culture.',
  },
  {
    icon: TrendingUp,
    heading: 'PROFESSIONAL DEVELOPMENT',
    desc: 'ESSL invests in continuing professional development, providing employees the time and resources to pursue certifications and skills that benefit both their careers and the business.',
  },
];

export default function CareersSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);

    const benefitsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current);

    return () => {
      heroObserver.disconnect();
      benefitsObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full text-slate-100 min-h-screen" style={{ background: '#0A0F1D' }}>
      
      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Hero (dark background, centered)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden border-b border-dashed border-white/10 pt-32 pb-24"
      >
        {/* Soft warm red/orange radial glow blob in the top-left corner */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: '-15%',
            left: '-15%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Soft blue radial glow gradient blending in from the right side */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: '10%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(23,108,167,0.14) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Faint decorative diagonal grid lines across background */}
        <div className="absolute inset-0 z-0 grid-bg opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Centered Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-[3.2rem] font-bold uppercase mb-8 font-mono tracking-wider transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#F1F5F9', letterSpacing: '0.08em' }}
          >
            OUR CAREERS
          </h1>

          {/* Centered Paragraph */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-150 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#D0D3DA' }}
          >
            If you&apos;re passionate about enterprise IT infrastructure, cybersecurity, and making a difference for businesses across Bangladesh, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Benefits (staggered cards, monospace headers)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={benefitsRef}
        className="relative w-full py-24 overflow-hidden"
      >
        {/* Faint grid background for Benefits section */}
        <div className="absolute inset-0 z-0 grid-bg opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          
          {/* Heading and Intro paragraph */}
          <div className="mb-20 text-left">
            <h2
              className={`text-2xl sm:text-3xl font-bold uppercase tracking-wider font-mono text-white mb-6 transition-all duration-700 ${
                benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '0.08em' }}
            >
              BENEFITS
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl transition-all duration-700 delay-150 ${
                benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#D0D3DA' }}
            >
              We&apos;re always on the lookout for talented team players. If you&apos;re an experienced IT or cybersecurity practitioner, and you&apos;d like to join an innovative and growing organization, get in touch at{' '}
              <a
                href="mailto:careers@essl.com"
                className="text-[#3F94CF] hover:underline hover:text-[#50a3df] transition-colors"
                style={{ color: '#3F94CF' }}
              >
                careers@essl.com
              </a>
            </p>
          </div>

          {/* Staggered Grid of 2x2 cards */}
          <div className="grid md:grid-cols-2">
            {benefits.map((benefit, index) => {
              // Responsive borders to create clean horizontal and vertical lines separating the cards
              const borderClasses =
                index === 0
                  ? 'border-b md:border-r border-white/5 pb-8 md:pr-8 md:pb-8'
                  : index === 1
                  ? 'border-b border-white/5 pb-8 pt-8 md:pt-0 md:pl-8 md:pb-8'
                  : index === 2
                  ? 'border-b md:border-b-0 md:border-r border-white/5 pt-8 pb-8 md:pb-0 md:pr-8 md:pt-8'
                  : 'pt-8 md:pl-8';

              return (
                <div
                  key={benefit.heading}
                  className={`flex flex-col text-left transition-all duration-700 ${borderClasses} ${
                    benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${300 + index * 120}ms` }}
                >
                  <div className="mb-4">
                    <benefit.icon className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider font-mono mb-2"
                    style={{ color: 'var(--accent-blue)', letterSpacing: '0.08em' }}
                  >
                    {benefit.heading}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A0A5B5' }}>
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div
            className={`mt-24 sm:mt-32 transition-all duration-700 delay-500 ${
              benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Card 2: Get in Touch (light card - constrained max-width) */}
            <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100/10 bg-gradient-to-r from-white to-slate-50/95">
              <div className="grid md:grid-cols-[2fr_1.2fr] items-center gap-6 text-left">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-3"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    GET IN TOUCH
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#1f2937]">
                    Learn more about how we foster a culture of creativity, support, and innovation to create cutting-edge solutions.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[10px] font-bold tracking-widest text-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{ background: 'var(--accent-blue)', letterSpacing: '0.08em' }}
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
