'use client';

import { useEffect, useRef, useState } from 'react';
import { LucideIcon, Circle, ChevronDown } from 'lucide-react';

const processSteps: { icon: LucideIcon; title: string; description: string; color: string; bgGlow: string }[] = [
  { 
    icon: Circle, 
    title: '[Step 1 Name]', 
    description: '[Step 1 description placeholder]', 
    color: 'from-blue-600 to-blue-400', 
    bgGlow: 'bg-blue-600/10' 
  },
  { 
    icon: Circle, 
    title: '[Step 2 Name]', 
    description: '[Step 2 description placeholder]', 
    color: 'from-blue-500 to-indigo-600', 
    bgGlow: 'bg-blue-500/10' 
  },
  { 
    icon: Circle, 
    title: '[Step 3 Name]', 
    description: '[Step 3 description placeholder]', 
    color: 'from-blue-600 to-sky-500', 
    bgGlow: 'bg-blue-600/10' 
  },
  { 
    icon: Circle, 
    title: '[Step 4 Name]', 
    description: '[Step 4 description placeholder]', 
    color: 'from-indigo-600 to-blue-500', 
    bgGlow: 'bg-indigo-600/10' 
  },
];

// TODO: Replace icon (import a specific relevant lucide-react icon 
// per step instead of the generic Circle placeholder), title, and 
// description for each step once finalized.

export default function BusinessProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative w-full section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-2/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            [Business Process heading placeholder]
          </h2>
          <p className="text-slate-450 text-lg max-w-2xl mx-auto">
            [One sentence placeholder describing the end-to-end process]
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {processSteps.map((step, index) => {
            const stepNum = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className={`group relative rounded-2xl glass-card p-8 overflow-hidden transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left flex items-center justify-between cursor-pointer focus:outline-none select-none mt-6 mb-4"
                >
                  {/* Step number badge absolute positioned relative to the card */}
                  <span className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    {stepNum}
                  </span>

                  <div className="flex items-center gap-4">
                    {/* Icon Box */}
                    <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.bgGlow} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <step.icon className={`w-6 h-6 bg-gradient-to-r ${step.color} bg-clip-text`} style={{ color: 'inherit' }} />
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${step.color} opacity-20`} />
                      <step.icon className="w-6 h-6 text-white absolute" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>

                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Description Accordion Body */}
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="text-slate-350 leading-relaxed pb-2">
                    {step.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 ${step.bgGlow} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
