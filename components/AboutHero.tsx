'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-32 pb-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
            ABOUT US
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)]">
            [Company headline placeholder]
          </h1>
          <p className="text-muted text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            [One sentence placeholder]
          </p>
        </div>
      </div>
    </section>
  );
}
