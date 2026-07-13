'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Landmark,
  Heart,
  Factory,
  GraduationCap,
  Building2,
  HeartHandshake,
  ShoppingBag,
  Pill,
  Umbrella,
} from 'lucide-react';

const industries = [
  { name: 'Banking & Financial Services', icon: Landmark },
  { name: 'Healthcare', icon: Heart },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Education', icon: GraduationCap },
  { name: 'Government', icon: Building2 },
  { name: 'NGO', icon: HeartHandshake },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Pharmaceutical', icon: Pill },
  { name: 'Insurance', icon: Umbrella },
];

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden bg-[#f8fafc] border-t border-slate-200">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
            Industries We Serve
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Empowering Industries,{' '}
            <span className="text-[rgb(20,109,174)]">Driving Impact</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Purpose-built technology solutions for the sectors that power Bangladesh&apos;s economy.
          </p>
        </div>

        {/* Industry icons row — 5 on desktop first row, 4 on second */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className={`group flex flex-col items-center gap-4 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Icon circle */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06)] flex items-center justify-center group-hover:border-[rgb(20,109,174)]/30 group-hover:shadow-[0_6px_24px_-4px_rgba(20,109,174,0.18)] group-hover:-translate-y-1.5 transition-all duration-300">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400 group-hover:text-[rgb(20,109,174)] transition-colors duration-300" />
                </div>
                {/* Label */}
                <span className="text-sm sm:text-base font-semibold text-slate-600 text-center max-w-[110px] sm:max-w-[130px] leading-snug group-hover:text-[rgb(20,109,174)] transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
