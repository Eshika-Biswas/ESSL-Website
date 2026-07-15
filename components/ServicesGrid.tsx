'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const businessUnits = [
  {
    title: 'Network & Security',
    category: 'Networking',
    description: 'Campus networks, SD-WAN, ZTNA, firewalls, and end-to-end secure connectivity.',
    image: '/images/networking-card.png',
    href: '/business-units/network-security',
    pillColor: 'text-blue-400 border-blue-500/30 bg-slate-950/70',
  },
  {
    title: 'Cyber Security',
    category: 'Security',
    description: 'SOC, threat detection, incident response, and enterprise security posture management.',
    image: '/images/cyber-security-1.png',
    href: '/business-units/cyber-security',
    pillColor: 'text-red-400 border-red-500/30 bg-slate-950/70',
  },
  {
    title: 'Data Center & Cloud',
    category: 'Cloud',
    description: 'Hyper-converged infrastructure, hybrid cloud design, and data center consolidation.',
    image: '/images/cloud-card.png',
    href: '/business-units/data-center-cloud',
    pillColor: 'text-sky-400 border-sky-500/30 bg-slate-950/70',
  },
  {
    title: 'Passive Infrastructure',
    category: 'Infrastructure',
    description: 'Structured cabling, fiber optic systems, cable management, and physical layer design.',
    image: '/images/passive-infrastructure-card.png',
    href: '/business-units/passive-infrastructure',
    pillColor: 'text-amber-400 border-amber-500/30 bg-slate-950/70',
  },
  {
    title: 'Technology Consulting',
    category: 'Consulting',
    description: 'IT strategy, architecture roadmaps, vendor selection, and digital transformation advisory.',
    image: '/images/tech-consulting-card.png',
    href: '/business-units/technology-consulting',
    pillColor: 'text-emerald-400 border-emerald-500/30 bg-slate-950/70',
  },
  {
    title: 'Managed Services',
    category: 'Operations',
    description: '24×7 NOC/SOC monitoring, proactive support, and SLA-backed managed operations.',
    image: '/images/noc-bg.png',
    href: '/business-units/managed-services',
    pillColor: 'text-violet-400 border-violet-500/30 bg-slate-950/70',
  },
  {
    title: 'Software Engineering',
    category: 'Development',
    description: 'Custom enterprise applications, system integration, APIs, and digital product delivery.',
    image: '/images/software-engineering-card.png',
    href: '/business-units/software-engineering',
    pillColor: 'text-cyan-400 border-cyan-500/30 bg-slate-950/70',
  },
  {
    title: 'AI & Automation',
    category: 'Artificial Intelligence',
    description: 'Intelligent automation, ML pipelines, AI-powered analytics, and process optimization.',
    image: '/images/ai.jpg',
    href: '/business-units/ai-automation',
    pillColor: 'text-fuchsia-400 border-fuchsia-500/30 bg-slate-950/70',
  },
];

export default function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden section-transition">
      {/* Background Image: End to End Technology Circuit Pattern */}
      <div className="absolute inset-0 z-0 bg-[#f8fafc]">
        <Image
          src="/images/end-to-end.png"
          alt="End to End Technology Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-100"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative max-w-3xl mx-auto mb-16 text-center z-10">
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#1B6BA8] border border-[#1B6BA8]/20 bg-[#1B6BA8]/5 mb-6">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1420] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              End To End Technology
            </h2>
            <p className="text-[#0f1420]/80 text-lg max-w-2xl mx-auto">
              Eight specialised business units delivering comprehensive technology services across every domain.
            </p>
          </div>
        </div>

        {/* 8-card grid — 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {businessUnits.map((unit, index) => (
            <Link
              key={unit.title}
              href={unit.href}
              className={`group relative rounded-2xl bg-white border border-slate-200/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 hover:border-primary/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              {/* Top image area */}
              <div className="h-44 relative overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                {/* Dark gradient fade bottom → so the white card below feels connected */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />

                {/* Category pill top-left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2.5 py-1 text-[10px] font-semibold rounded-full border backdrop-blur-sm ${unit.pillColor}`}>
                    {unit.category}
                  </span>
                </div>
              </div>

              {/* Content area — dark card body */}
              <div className="p-5 bg-[#111827] border-t border-white/5 flex flex-col h-[180px]">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-light transition-colors leading-snug">
                  {unit.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-grow">
                  {unit.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-[#1B6BA8] text-white border border-[#1B6BA8]/20 transition-all duration-300 shadow-sm group-hover:bg-[#1B6BA8]/85 group-hover:scale-[1.03] group-hover:shadow-md">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
