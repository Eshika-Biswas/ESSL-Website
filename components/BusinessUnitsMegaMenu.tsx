'use client';

import Link from 'next/link';
import { ArrowRight, Network, Shield, Server, Building, Cpu, Wrench, Code, MonitorCog } from 'lucide-react';

export const businessUnits = [
  { name: 'Network & Security', icon: Network, href: '/business-units/network-security' },
  { name: 'Cyber Security', icon: Shield, href: '#' },
  { name: 'Data Center & Cloud', icon: Server, href: '#' },
  { name: 'Passive Infrastructure', icon: Building, href: '#' },
  { name: 'Technology Consulting', icon: Cpu, href: '#' },
  { name: 'Managed Services', icon: Wrench, href: '#' },
  { name: 'Software Engineering', icon: Code, href: '#' },
  { name: 'AI & Automation', icon: MonitorCog, href: '#' },
];

interface BusinessUnitsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessUnitsMegaMenu({ isOpen, onClose }: BusinessUnitsMegaMenuProps) {
  return (
    <div
      className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none opacity-0 invisible translate-y-2'
      }`}
    >
      <div className="w-[340px] p-5 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 px-3 font-mono font-bold">
          Business Units
        </p>
        
        <div className="space-y-1">
          {businessUnits.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-4 px-3 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)]/10 flex items-center justify-center group-hover:bg-[rgb(20,109,174)]/20 transition-colors shrink-0">
                  <IconComponent className="w-5 h-5 text-[rgb(20,109,174)]" />
                </div>
                <span className="text-base font-sans font-semibold group-hover:text-white transition-colors leading-tight">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-2 pt-4 border-t border-white/5 px-3">
          <Link
            href="#"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(20,109,174)] hover:text-white transition-colors duration-200 group/all"
          >
            View All Business Units
            <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
