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

  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <>
      <section ref={sectionRef} className="relative w-full py-24 overflow-hidden bg-[#f8fafc]" style={gridBgStyle}>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              Our Executive Team
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Meet the leaders driving security, innovation, and support excellence at ESSL.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <Link
                href={`/about/leadership/${member.slug}`}
                key={member.slug}
                className={`group flex flex-col rounded-3xl bg-white border border-slate-200/80 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[rgb(20,109,174)]/30 hover:-translate-y-1.5 transition-all duration-300 ${
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
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[rgb(20,109,174)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    {member.title}
                  </p>
                  <span className="inline-flex items-center justify-center gap-1 mt-4 text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Profile &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CTA SECTIONS (light background wrapping container)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 overflow-hidden border-t border-slate-200 bg-white">
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
            background: 'radial-gradient(circle, rgba(20,109,174,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          
          {/* Card 1: Come and Work for Us */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 text-center border border-slate-200 bg-slate-50 shadow-sm">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-3"
                style={{ letterSpacing: '0.08em' }}
              >
                COME AND WORK FOR US
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-6 text-slate-600">
                Work within a passionate team, focused on developing solutions and selling products 
                that push the boundaries of modern enterprise technology. Explore our 
                opportunities to make an impact.
              </p>
              <Link
                href="/about/careers"
                className="inline-flex items-center justify-center border border-slate-300 rounded-full px-8 py-2.5 text-[10px] font-semibold tracking-widest text-slate-900 font-mono hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105"
                style={{ letterSpacing: '0.08em' }}
              >
                CAREERS
              </Link>
            </div>
          </div>

          {/* Card 2: Get in Touch */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 bg-gradient-to-r from-white to-slate-50">
            <div className="grid md:grid-cols-[2fr_1.2fr] items-center gap-6 text-left">
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-3"
                  style={{ letterSpacing: '0.08em' }}
                >
                  GET IN TOUCH
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  Learn more about how we foster a culture of creativity, support, and innovation 
                  to create cutting-edge solutions.
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
      </section>
    </>
  );
}
