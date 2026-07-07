'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent-2/10 to-primary/10 animate-gradient" />
      <div className="absolute inset-0 bg-white/80" />
      
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-2/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Strengthen Your{' '}
            <span className="gradient-text-blue">IT Infrastructure?</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how ESSL can architect, deploy, and manage the right solutions for your enterprise. 
            Our team of certified engineers is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base px-10 py-4"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-base px-10 py-4"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
