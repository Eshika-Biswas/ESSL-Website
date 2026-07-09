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
  return (
    <div
      className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none opacity-0 invisible translate-y-2'
      }`}
    >
      <div className="w-[340px] p-5 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 px-3 font-mono font-bold">
          Services
        </p>
        
        <div className="space-y-1">
          {serviceCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.id}
                className="flex items-center gap-4 px-3 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)]/10 flex items-center justify-center group-hover:bg-[rgb(20,109,174)]/20 transition-colors shrink-0">
                  <CatIcon className="w-5 h-5 text-[rgb(20,109,174)]" />
                </div>
                <span className="text-base font-sans font-semibold group-hover:text-white transition-colors leading-tight">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-2 pt-4 border-t border-white/5 px-3">
          <Link
            href="#"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(20,109,174)] hover:text-white transition-colors duration-200 group/all"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
