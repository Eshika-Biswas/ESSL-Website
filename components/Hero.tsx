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

  useEffect(() => {
    let vantaEffect: any = null;
    const initVanta = async () => {
      try {
        const THREE = await import('three');
        if (typeof window !== 'undefined') {
          (window as any).THREE = THREE;
          const NET = (await import('vanta/dist/vanta.net.min')).default;
          if (heroRef.current) {
            console.log('Vanta color being used:', 0x1B6BA8, (0x1B6BA8).toString(16));
            vantaEffect = NET({
              el: heroRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x1B6BA8,        // = rgb(27,107,168), replaces white lines
              backgroundColor: 0x0F1420, // pure black background (0x0), per updated reference
              points: 11.00,
              maxDistance: 20.00,
              spacing: 15.00,
              showDots: true
            });
          }
        }
      } catch (err) {
        console.error('Vanta initialization failed:', err);
      }
    };
    initVanta();
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section ref={heroRef} id="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
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
            <span className="text-white">Enterprise IT Infrastructure</span>
            <br />
            <span className="text-white">& Cybersecurity,</span>
            <br />
            <span className="gradient-text-blue">Delivered Right.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 transition-all duration-700 delay-400 ${
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
      <div className="text-2xl sm:text-3xl font-bold text-white counter-value">
        <AnimatedCounter target={target} suffix={suffix} />
      </div>
      <div className="text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}
