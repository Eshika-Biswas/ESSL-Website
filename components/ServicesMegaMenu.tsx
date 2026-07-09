'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, Wrench } from 'lucide-react';

export const serviceCategories = [
  {
    id: 'consulting',
    name: 'Technology Consulting',
    icon: Cpu,
    href: '#',
    items: [
      { name: 'IT Strategy', href: '#' },
      { name: 'Enterprise Architecture', href: '#' },
      { name: 'Technology Assessment', href: '#' },
      { name: 'Digital Transformation', href: '#' },
      { name: 'Cloud Readiness', href: '#' },
      { name: 'Cybersecurity Assessment', href: '#' },
      { name: 'Business Continuity', href: '#' },
      { name: 'PMO', href: '#' },
      { name: 'Project Management', href: '#' },
      { name: 'Solution Design', href: '#' },
      { name: 'Procurement Consulting', href: '#' },
      { name: 'Vendor Advisory', href: '#' },
      { name: 'CIO Advisory', href: '#' },

    ]
  },
  {
    id: 'integration',
    name: 'System Integration',
    icon: Layers,
    href: '#',
    items: [
      { name: 'Network & Security (Cisco)', href: '#' },
      { name: 'Cyber Security', href: '#' },
      { name: 'Data Center, Virtualization & Cloud Infrastructure', href: '#' },
      { name: 'Passive Infrastructure & Data Center Facilities', href: '#' },
      { name: 'Technology Consulting & Project Delivery', href: '#' },
      { name: 'Software Engineering, AI & Intelligent Automation', href: '#' },
      { name: 'Cloud, DevOps & Platform Engineering', href: '#' },
    ]
  },
  {
    id: 'managed',
    name: 'Managed Services',
    icon: Wrench,
    href: '#',
    items: [
      { name: 'Managed Network', href: '#' },
      { name: 'Managed Security', href: '#' },
      { name: 'Managed Cloud', href: '#' },
      { name: 'Managed Workplace', href: '#' },
      { name: 'Managed Infrastructure', href: '#' },
      { name: 'Professional Services', href: '#' },
    ]
  }
];

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  // Reset active category to default when menu is closed
  useEffect(() => {
    if (!isOpen) {
      setActiveCategory(serviceCategories[0].id);
    }
  }, [isOpen]);

  const activeCatData = serviceCategories.find((cat) => cat.id === activeCategory);

  return (
    <div
      className={`nav-dropdown absolute top-full left-0 right-0 w-full pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none'
      }`}
    >
      {/* Mega Menu Inner Panel */}
      <div className="w-full border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-2xl overflow-hidden flex min-h-[360px]">
        {/* Left Column (Categories List) */}
        <div className="w-[300px] bg-[#131926] border-r border-white/5 py-6 flex flex-col justify-between shrink-0">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4 px-6 font-mono font-bold">
              Service Pillars
            </p>
            {serviceCategories.map((category) => {
              const isActive = activeCategory === category.id;
              const CatIcon = category.icon;
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  onClick={onClose}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  className={`group flex items-center justify-between w-full px-6 py-4 text-left font-mono uppercase text-xs tracking-wider font-semibold transition-all duration-200 border-l-4 ${
                    isActive
                      ? 'border-[rgb(20,109,174)] bg-white/5 text-white'
                      : 'border-transparent text-slate-450 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CatIcon className={`w-4 h-4 ${isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400 group-hover:text-white'}`} />
                    <span className={isActive ? 'underline decoration-[rgb(20,109,174)] decoration-2 underline-offset-4' : ''}>
                      {category.name}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-all duration-200 ${
                      isActive
                        ? 'opacity-100 text-[rgb(20,109,174)] translate-x-0'
                        : 'opacity-0 group-hover:opacity-100 text-slate-400 -translate-x-2 group-hover:translate-x-0'
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          
          {/* Accent footer info on left column */}
          <div className="px-6 pt-4 border-t border-white/5">
            <Link
              href="#"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[rgb(20,109,174)] hover:text-white transition-colors duration-200 group/all"
            >
              View All Services
              <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column (Sub-items Grid) */}
        <div className="flex-1 p-8 bg-[#0f1420]">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-450 mb-6 font-mono font-bold">
              Explore {activeCatData?.name}
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {activeCatData?.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="group/item flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 py-1.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[rgb(20,109,174)]/40 group-hover/item:bg-[rgb(20,109,174)] group-hover/item:scale-125 transition-all duration-200" />
                  <span className="group-hover/item:text-white transition-colors duration-200 leading-relaxed font-sans">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
