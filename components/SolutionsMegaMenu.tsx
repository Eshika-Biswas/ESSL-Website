'use client';

import Link from 'next/link';
import {
  Laptop,
  ShieldCheck,
  Server,
  Cloud,
  RefreshCw,
  Network,
  Wrench,
  Zap,
  Code,
  Bot,
  FileCheck
} from 'lucide-react';

export const solutions = [
  { name: 'Digital Workplace', icon: Laptop, href: '/solutions/digital-workplace' },
  { name: 'Secure Enterprise', icon: ShieldCheck, href: '/solutions/secure-enterprise' },
  { name: 'Modern Data Center', icon: Server, href: '/solutions/modern-data-center' },
  { name: 'Cloud Transformation', icon: Cloud, href: '/solutions/cloud-transformation' },
  { name: 'Business Continuity & Disaster Recovery', icon: RefreshCw, href: '/solutions/business-continuity-disaster-recovery' },
  { name: 'Smart Infrastructure', icon: Network, href: '/solutions/smart-infrastructure' },
  { name: 'Managed IT Services', icon: Wrench, href: '/solutions/managed-it-services' },
  { name: 'Digital Transformation', icon: Zap, href: '/solutions/digital-transformation' },
  { name: 'Enterprise Software', icon: Code, href: '/solutions/enterprise-software' },
  { name: 'AI & Intelligent Automation', icon: Bot, href: '/solutions/ai-intelligent-automation' },
  { name: 'Licensing & Software Services', icon: FileCheck, href: '/solutions/licensing-software-services' },
];

interface SolutionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionsMegaMenu({ isOpen, onClose }: SolutionsMegaMenuProps) {
  return (
    <div
      className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none opacity-0 invisible translate-y-2'
      }`}
    >
      <div className="w-[380px] max-h-[80vh] overflow-y-auto p-4 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 px-3 font-mono font-bold">
          Solutions
        </p>
        
        <div className="space-y-1">
          {solutions.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3.5 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgb(20,109,174)]/10 flex items-center justify-center group-hover:bg-[rgb(20,109,174)]/20 transition-colors shrink-0">
                  <IconComponent className="w-4 h-4 text-[rgb(20,109,174)]" />
                </div>
                <span className="text-sm font-sans font-semibold group-hover:text-white transition-colors leading-tight">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
