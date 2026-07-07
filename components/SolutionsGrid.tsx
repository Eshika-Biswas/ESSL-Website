'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Network,
  Shield,
  Server,
  Building,
  MonitorCog,
  Settings,
  Code,
  Cloud,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    icon: Network,
    title: 'Network & Security',
    vendor: 'Cisco',
    description: 'Enterprise networking and security solutions powered by Cisco technologies.',
    color: 'from-blue-600 to-blue-400',
    bgGlow: 'bg-blue-600/10',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    vendor: 'Multi-vendor',
    description: 'Comprehensive cybersecurity posture management and threat defense.',
    color: 'from-blue-500 to-indigo-600',
    bgGlow: 'bg-blue-500/10',
  },
  {
    icon: Server,
    title: 'Data Center & Cloud Infrastructure',
    vendor: 'Dell, VMware',
    description: 'Virtualization, HCI, and cloud infrastructure for modern data centers.',
    color: 'from-blue-600 to-sky-500',
    bgGlow: 'bg-blue-600/10',
  },
  {
    icon: Building,
    title: 'Passive Infrastructure & DC Facilities',
    vendor: 'Structured Cabling',
    description: 'Physical infrastructure, structured cabling, and data center facility design.',
    color: 'from-indigo-600 to-blue-500',
    bgGlow: 'bg-indigo-600/10',
  },
  {
    icon: MonitorCog,
    title: 'Managed Services',
    vendor: 'ESSL NOC/SOC',
    description: '24×7 monitoring, managed detection & response, and IT operations.',
    color: 'from-blue-700 to-indigo-500',
    bgGlow: 'bg-blue-700/10',
  },
  {
    icon: Settings,
    title: 'Technology Consulting & Project Delivery',
    vendor: 'Advisory',
    description: 'Strategic IT advisory, project management, and technology roadmaps.',
    color: 'from-sky-500 to-blue-600',
    bgGlow: 'bg-sky-500/10',
  },
  {
    icon: Code,
    title: 'Software Engineering, AI & Automation',
    vendor: 'Custom Development',
    description: 'Custom software, AI/ML solutions, and intelligent process automation.',
    color: 'from-blue-600 to-sky-400',
    bgGlow: 'bg-blue-600/10',
  },
  {
    icon: Cloud,
    title: 'Cloud, DevOps & Platform Engineering',
    vendor: 'Azure, AWS',
    description: 'Cloud migration, DevOps pipelines, and platform engineering at scale.',
    color: 'from-indigo-500 to-blue-500',
    bgGlow: 'bg-indigo-500/10',
  },
];

export default function SolutionsGrid() {
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
    <section ref={sectionRef} id="solutions" className="relative w-full section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-2/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 mb-6">
            Centers of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Solutions Built for Scale
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Eight specialized practice areas delivering enterprise-grade technology solutions
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {solutions.map((solution, index) => (
            <Link
              key={solution.title}
              href="#"
              className={`group relative rounded-2xl border border-slate-100 bg-white backdrop-blur-sm p-6 overflow-hidden transition-all duration-700 hover:border-slate-200 hover:-translate-y-1 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl ${solution.bgGlow} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className={`w-6 h-6 bg-gradient-to-r ${solution.color} bg-clip-text`} style={{ color: 'inherit' }} />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${solution.color} opacity-20`} />
                <solution.icon className="w-6 h-6 text-white absolute" />
              </div>

              {/* Vendor Tag */}
              <span className="text-[11px] text-muted uppercase tracking-wider font-medium">
                {solution.vendor}
              </span>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-900 mt-2 mb-2 group-hover:text-primary transition-colors leading-snug">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-4">
                {solution.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                Explore
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

              {/* Hover Glow */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 ${solution.bgGlow} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
