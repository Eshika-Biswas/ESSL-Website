'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const team = [
  {
    slug: 'golam-mostafa',
    name: 'Md. Golam Mostafa',
    title: 'Managing Director',
    photo: '/team/golam-mostafa.png',
  },
  {
    slug: 'partha-sharathe-biswas',
    name: 'Partha Sharathe Biswas',
    title: 'Director',
    photo: '/team/partha-biswas.png',
  },
  {
    slug: 'sarker-mohammad-faisal',
    name: 'Sarker Mohammad Faisal',
    title: 'Director',
    photo: '/team/mohammad-faisal.png',
  },
];

export default function Leadership() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative w-full section-padding overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              Our Executive Team
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Meet the leaders driving ensuring security, innovation, and support excellence at ESSL.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Link
                href={`/about/leadership/${member.slug}`}
                key={member.slug}
                className={`group flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${member.slug === 'golam-mostafa' ? '0ms' : member.slug === 'partha-sharathe-biswas' ? '120ms' : '240ms'}` }}
              >
                {/* Image Container with fixed 4:5 aspect ratio and top headshot crop focus */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-slate-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    {member.title}
                  </p>
                  <span className="inline-flex items-center justify-center gap-1 mt-4 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Profile &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CTA SECTIONS (dark background wrapping container)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-28 overflow-hidden"
        style={{ background: '#0A0F1D' }}
      >
        {/* Soft blue radial glow gradient blending in from the right side */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: '50%',
            right: '-15%',
            transform: 'translateY(-50%)',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(23,108,167,0.16) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Decorative glowing dot/orbit accent in the top-right corner */}
        <div className="absolute top-16 right-16 w-3 h-3 bg-accent rounded-full blur-[2px] opacity-45 animate-pulse pointer-events-none" />
        <div className="absolute top-6 right-8 w-20 h-20 border border-accent/15 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-28">
          
          {/* Card 1: Come and Work for Us (dark card - constrained max-width) */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 text-center border border-white/[0.05] border-r-4 border-r-accent shadow-[0_0_40px_rgba(63,148,207,0.15)]"
            style={{ background: '#0F1626' }}
          >
            {/* Concentric circular orbit line pattern in background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none opacity-[0.03]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white rounded-full" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-bold tracking-widest text-white uppercase font-mono mb-3"
                style={{ letterSpacing: '0.08em' }}
              >
                COME AND WORK FOR US
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-6"
                style={{ color: '#D0D3DA' }}
              >
                Work within a passionate team, focused on developing solutions and selling products 
                that push the boundaries of modern threat intelligence technology. Explore our 
                opportunities to make an impact.
              </p>
              <Link
                href="/about/careers"
                className="inline-flex items-center justify-center border border-white/80 rounded-full px-8 py-2 text-[10px] font-semibold tracking-widest text-white font-mono hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105"
                style={{ letterSpacing: '0.08em' }}
              >
                CAREERS
              </Link>
            </div>
          </div>

          {/* Card 2: Get in Touch (light card - constrained max-width) */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100/10 bg-gradient-to-r from-white to-slate-50/95">
            <div className="grid md:grid-cols-[2fr_1.2fr] items-center gap-6 text-left">
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-3"
                  style={{ letterSpacing: '0.08em' }}
                >
                  GET IN TOUCH
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-650 max-w-xl">
                  Learn more about how we foster a culture of creativity, support, and innovation 
                  to create cutting-edge solutions.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[10px] font-bold tracking-widest text-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{ background: '#FF6B35', letterSpacing: '0.08em' }}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
