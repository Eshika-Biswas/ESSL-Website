'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lightbulb, Layers, HeadsetIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: Lightbulb,
    title: 'Technology Consulting',
    description: 'Strategic guidance to architect the right technology roadmap for your business.',
    gradient: 'from-blue-600/20 to-blue-400/20',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/30',
    features: ['IT Assessment', 'Roadmap Planning', 'Vendor Selection', 'Risk Analysis'],
  },
  {
    icon: Layers,
    title: 'System Integration',
    description: 'End-to-end deployment of certified, enterprise-grade solutions.',
    gradient: 'from-blue-700/20 to-indigo-500/20',
    iconColor: 'text-blue-300',
    borderHover: 'hover:border-blue-600/30',
    features: ['Solution Design', 'Implementation', 'Migration', 'Optimization'],
  },
  {
    icon: HeadsetIcon,
    title: 'Managed Services',
    description: '24×7 monitoring, support, and optimization for your critical systems.',
    gradient: 'from-blue-800/20 to-sky-500/20',
    iconColor: 'text-sky-400',
    borderHover: 'hover:border-blue-700/30',
    features: ['NOC/SOC', '24/7 Monitoring', 'Proactive Support', 'SLA Management'],
  },
];

export default function ServicesGrid() {
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
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden section-transition">
      {/* Background and Services Image Overlay */}
      <div className="absolute inset-0 bg-[#0f1420]" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/services-bg.png"
          alt="Services Data Center Backdrop"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.4]"
        />
        {/* Soft gradient mask and radial glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/20 to-dark-950/95" />
        <div className="absolute inset-0 radial-glow-blue z-0 opacity-40" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Enterprise IT Services
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Three pillars of service excellence that power your digital transformation journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl glass-card overflow-hidden transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Background Glow */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
