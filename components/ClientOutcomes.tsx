// TODO: Replace placeholder metrics with real, client-verified figures and obtain client approval before production launch.
'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

// PLACEHOLDER DATA - These metrics are drafts pending real client-approved figures before launch
const outcomes = [
  {
    client: 'Standard Chartered Bank',
    sector: 'Banking',
    outcome: 'Reduced security incident response time through 24x7 managed SOC coverage.',
    metric: '24/7',
    metricLabel: 'SOC Monitoring'
  },
  {
    client: 'BRAC Bank',
    sector: 'Banking',
    outcome: 'Modernized core network infrastructure supporting nationwide branch operations.',
    target: 100,
    suffix: '+',
    metricLabel: 'Branches Connected'
  },
  {
    client: 'Biman Bangladesh Airlines',
    sector: 'Critical Infrastructure',
    outcome: 'Strengthened cybersecurity posture across critical operational systems.',
    target: 99.9,
    suffix: '%',
    decimals: 1,
    metricLabel: 'Uptime Target'
  },
  {
    client: 'Bangladesh Parliament Secretariat',
    sector: 'Government',
    outcome: 'Deployed enterprise-grade network security for a nationally sensitive institution.',
    metric: '1',
    metricLabel: 'National Institution Secured'
  },
  {
    client: 'Samsung',
    sector: 'Enterprise',
    outcome: 'Delivered scalable IT infrastructure supporting regional operations.',
    target: 10,
    suffix: '+',
    metricLabel: 'Years Partnership'
  }
];

export default function ClientOutcomes() {
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
      {/* Background elements to match ServicesGrid */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
            CLIENT OUTCOMES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Delivered. Measured. Validated.
          </h2>
          <p className="text-slate-350 text-lg max-w-3xl mx-auto">
            Outcomes from enterprise, critical infrastructure, and regulated industries across Bangladesh&apos;s most demanding sectors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {outcomes.map((item, index) => (
            <div
              key={item.client}
              className={`group relative rounded-2xl glass-card p-8 transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Header: Client & Sector */}
              <div className="flex justify-between items-start gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {item.client}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-slate-400 whitespace-nowrap">
                  {item.sector}
                </span>
              </div>

              {/* Prominent Metric */}
              <div className="mb-5">
                <div className="counter-value text-3xl sm:text-4xl font-extrabold text-primary">
                  {item.target !== undefined ? (
                    <AnimatedCounter target={item.target} suffix={item.suffix} decimals={item.decimals} />
                  ) : (
                    <span>{item.metric}</span>
                  )}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                  {item.metricLabel}
                </div>
              </div>

              {/* Outcome Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
