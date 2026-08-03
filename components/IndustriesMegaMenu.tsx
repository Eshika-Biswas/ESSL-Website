'use client';

import Link from 'next/link';
import {
  Landmark,
  Heart,
  Factory,
  GraduationCap,
  Building2,
  HeartHandshake,
  ShoppingBag,
  Radio,
  Code2,
} from 'lucide-react';

export const industries = [
  { name: 'Banking & Financial Services', icon: Landmark, href: '/industries/banking-financial-services' },
  { name: 'Healthcare & Pharmaceuticals', icon: Heart, href: '/industries/healthcare-pharmaceuticals' },
  { name: 'Manufacturing & Industrial', icon: Factory, href: '/industries/manufacturing-industrial' },
  { name: 'Education & Research', icon: GraduationCap, href: '/industries/education-research' },
  { name: 'Government & Public Sector', icon: Building2, href: '/industries/government-public-sector' },
  { name: 'NGOs & Development', icon: HeartHandshake, href: '/industries/ngos-development' },
  { name: 'Retail & E-commerce', icon: ShoppingBag, href: '/industries/retail-ecommerce' },
  { name: 'Telecom & Media', icon: Radio, href: '/industries/telecom-media' },
  { name: 'IT & Software', icon: Code2, href: '/industries/it-software' },
];

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IndustriesMegaMenu({ isOpen, onClose }: IndustriesMegaMenuProps) {
  return (
    <div
      className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none opacity-0 invisible translate-y-2'
      }`}
    >
      <div className="w-[340px] max-h-[80vh] overflow-y-auto p-4 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 px-3 font-mono font-bold">
          Industries
        </p>
        
        <div className="space-y-1">
          {industries.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3.5 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer group"
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
