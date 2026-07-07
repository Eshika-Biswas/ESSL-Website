'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const clients = [
  { name: 'Standard Chartered Bank', abbr: 'SCB' },
  { name: 'BRAC Bank', abbr: 'BRAC' },
  { name: 'Biman Bangladesh Airlines', abbr: 'BIMAN' },
  { name: 'Bangladesh Parliament', abbr: 'PARLIAMENT' },
  { name: 'Samsung', abbr: 'SAMSUNG' },
  { name: 'Standard Chartered Bank', abbr: 'SCB' },
  { name: 'BRAC Bank', abbr: 'BRAC' },
  { name: 'Biman Bangladesh Airlines', abbr: 'BIMAN' },
  { name: 'Bangladesh Parliament', abbr: 'PARLIAMENT' },
  { name: 'Samsung', abbr: 'SAMSUNG' },
];

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 overflow-hidden border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-sm uppercase tracking-[0.2em] text-muted mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Trusted by leading organizations
        </p>

        {/* Scrolling Logo Strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-900/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-900/50 to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex animate-ticker">
              {clients.map((client, i) => (
                <div
                  key={`${client.abbr}-${i}`}
                  className="flex-shrink-0 mx-8 sm:mx-12"
                >
                  <div className="flex items-center justify-center h-16 w-40 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 group cursor-default">
                    <span className="text-sm font-semibold text-muted group-hover:text-primary-light transition-colors tracking-wide">
                      {client.abbr}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View all clients link */}
        <div className={`mt-10 flex justify-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
          >
            <span>View all clients</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
