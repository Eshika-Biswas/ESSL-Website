// TODO: add real company history content
'use client';

import { useEffect, useRef, useState } from 'react';

export default function OurStory() {
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
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
            OUR STORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)]">
            [Our Story heading placeholder]
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            [Our story and history placeholder paragraph. This section will contain detailed details of our growth, milestones, and core mission to ensure exceptional delivery for our clients.]
          </p>
        </div>
      </div>
    </section>
  );
}
