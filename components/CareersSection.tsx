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
    <div className="w-full text-slate-900 min-h-screen bg-[#f8fafc]">
      
      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Hero (light background, centered)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden border-b border-dashed border-slate-200 pt-32 pb-24"
      >
        {/* Soft blue radial glow blob in the top-left corner */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: '-15%',
            left: '-15%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,109,174,0.06) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Faint decorative diagonal grid lines across background */}
        <div className="absolute inset-0 z-0 grid-bg opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Centered Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-[3.2rem] font-bold uppercase mb-8 font-mono tracking-wider transition-all duration-700 text-slate-900 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '0.08em' }}
          >
            OUR CAREERS
          </h1>

          {/* Centered Paragraph */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-150 text-slate-600 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
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
              className={`text-2xl sm:text-3xl font-bold uppercase tracking-wider font-mono text-slate-900 mb-6 transition-all duration-700 ${
                benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '0.08em' }}
            >
              BENEFITS
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl transition-all duration-700 delay-150 text-slate-600 ${
                benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              We&apos;re always on the lookout for talented team players. If you&apos;re an experienced IT or cybersecurity practitioner, and you&apos;d like to join an innovative and growing organization, get in touch at{' '}
              <a
                href="mailto:careers@essl.com"
                className="text-[rgb(20,109,174)] hover:underline font-semibold transition-colors"
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
                  ? 'border-b md:border-r border-slate-200 pb-8 md:pr-8 md:pb-8'
                  : index === 1
                  ? 'border-b border-slate-200 pb-8 pt-8 md:pt-0 md:pl-8 md:pb-8'
                  : index === 2
                  ? 'border-b md:border-b-0 md:border-r border-slate-200 pt-8 pb-8 md:pb-0 md:pr-8 md:pt-8'
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
                    <benefit.icon className="w-6 h-6 text-[rgb(20,109,174)]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider font-mono mb-2 text-[rgb(20,109,174)]"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {benefit.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
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
            <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 bg-white">
              <div className="grid md:grid-cols-[2fr_1.2fr] items-center gap-6 text-left">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-3"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    GET IN TOUCH
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Learn more about how we foster a culture of creativity, support, and innovation to create cutting-edge solutions.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[10px] font-bold tracking-widest text-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg bg-[rgb(20,109,174)]"
                    style={{ letterSpacing: '0.08em' }}
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
