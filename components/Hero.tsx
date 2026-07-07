'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-950" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-2/5 rounded-full blur-[150px]" />

      {/* Rotating Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]">
        <div className="w-full h-full border-2 border-primary rounded-full animate-spin-slow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]">
        <div className="w-full h-full border border-accent rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-primary-light font-medium">Trusted by 310+ Enterprise Clients</span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-slate-900">Enterprise IT Infrastructure</span>
            <br />
            <span className="text-slate-900">& Cybersecurity,</span>
            <br />
            <span className="gradient-text-blue">Delivered Right.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            ESSL designs, deploys, and manages enterprise network, security, and cloud solutions 
            for the region&apos;s leading banks, government institutions, and enterprises.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#solutions" className="btn-secondary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
              <Play className="w-4 h-4" />
              Explore Solutions
            </Link>
          </div>

          {/* Stats Row */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <StatItem target={10} suffix="+" label="Years of Experience" />
            <StatItem target={310} suffix="+" label="Enterprise Clients" />
            <StatItem target={11500} suffix="+" label="Projects Delivered" />
            <StatItem target={116000} suffix="+" label="Support Cases Resolved" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}

function StatItem({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-2xl sm:text-3xl font-bold text-slate-900 counter-value">
        <AnimatedCounter target={target} suffix={suffix} />
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}
