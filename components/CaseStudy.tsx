'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from './AnimatedCounter';

export default function CaseStudy() {
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
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden section-transition">
      {/* Background and NOC Image Overlay */}
      <div className="absolute inset-0 bg-[#141a28]" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/noc-bg.png"
          alt="NOC Operations Backdrop"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06] mix-blend-overlay"
        />
        {/* Soft blue glow centered around the statistics panel */}
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-success border border-success/20 bg-success/5 mb-6">
              Featured Case Study
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Enterprise Network Transformation for a Leading Financial Institution
            </h2>
            <p className="text-slate-350 text-lg leading-relaxed mb-8">
              ESSL delivered a complete network infrastructure overhaul for one of Bangladesh&apos;s largest banks,
              deploying Cisco SD-WAN across 100+ branches with zero downtime during migration,
              resulting in dramatically improved performance and security posture.
            </p>

            {/* Result Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <ResultMetric
                icon={TrendingUp}
                target={68}
                suffix="%"
                label="Faster Network"
                color="text-blue-400"
              />
              <ResultMetric
                icon={Shield}
                target={99.99}
                suffix="%"
                decimals={2}
                label="Uptime Achieved"
                color="text-blue-400"
              />
              <ResultMetric
                icon={Clock}
                target={45}
                suffix="%"
                label="Cost Reduction"
                color="text-indigo-400"
              />
            </div>

            <Link
              href="/case-studies"
              className="btn-primary inline-flex items-center gap-2"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Visual */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Visual Card */}
              <div className="relative rounded-2xl glass-card overflow-hidden p-8">
                {/* Decorative top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />

                {/* Stats visualization */}
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h4 className="text-sm uppercase tracking-widest text-slate-400 mb-2">Project Impact</h4>
                    <p className="text-xs text-slate-500">Network performance before vs after</p>
                  </div>

                  {/* Bar Charts */}
                  <BarChart label="Network Latency" before={82} after={26} color="bg-blue-500" isVisible={isVisible} />
                  <BarChart label="Threat Detection" before={35} after={96} color="bg-sky-500" isVisible={isVisible} />
                  <BarChart label="Branch Connectivity" before={60} after={99} color="bg-indigo-500" isVisible={isVisible} />
                  <BarChart label="Incident Response" before={45} after={92} color="bg-blue-600" isVisible={isVisible} />
                </div>

                {/* Technologies Used */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Technologies Deployed</p>
                  <div className="flex flex-wrap gap-2">
                    {['Cisco SD-WAN', 'Cisco ISE', 'Fortinet NGFW', 'Palo Alto Prisma'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs text-slate-350 rounded-full border border-white/10 bg-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/10 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultMetric({
  icon: Icon,
  target,
  suffix = '',
  decimals = 0,
  label,
  color,
}: {
  icon: React.ElementType;
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
  color: string;
}) {
  return (
    <div className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
      <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
      <div className="text-2xl font-bold text-white">
        <AnimatedCounter target={target} suffix={suffix} decimals={decimals} />
      </div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function BarChart({ label, before, after, color, isVisible }: { label: string; before: number; after: number; color: string; isVisible: boolean }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-400">{label}</span>
        <span className="text-sm text-white font-medium">{after}%</span>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        {/* Before bar (faded) */}
        <div
          className="absolute top-0 left-0 h-full bg-white/5 rounded-full"
          style={{ width: `${before}%` }}
        />
        {/* After bar */}
        <div
          className={`absolute top-0 left-0 h-full ${color} rounded-full transition-all duration-1000`}
          style={{ width: isVisible ? `${after}%` : '0%' }}
        />
      </div>
    </div>
  );
}

