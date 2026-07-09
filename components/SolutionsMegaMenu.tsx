'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Network, Shield, Server, Building, Code, Cloud } from 'lucide-react';

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/\s+/g, '-')         // replace spaces with hyphens
    .replace(/-+/g, '-')          // replace multiple hyphens with single
    .trim();
};

export const solutionCategories = [
  {
    id: 'network-security',
    name: 'Network & Security',
    icon: Network,
    href: '#',
    items: [
      { name: 'Enterprise LAN & WAN' },
      { name: 'Campus Network' },
      { name: 'Software Defined Network (SDN)' },
      { name: 'SD-WAN' },
      { name: 'Wireless LAN' },
      { name: 'Network Access Control (NAC)' },
      { name: 'Zero Trust Network Access (ZTNA)' },
      { name: 'Internet Edge' },
      { name: 'Branch Connectivity' },
      { name: 'VPN Solutions' },
      { name: 'DNS/DHCP/IPAM' },
      { name: 'Load Balancing' },
      { name: 'Network Monitoring' },
      { name: 'Network Automation' },
      { name: 'Industrial Networking (OT)' }
    ].map(item => ({ ...item, href: `/solutions/${slugify(item.name)}` }))
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    icon: Shield,
    href: '#',
    items: [
      { name: 'Network Security' },
      { name: 'Endpoint Security' },
      { name: 'Identity Security' },
      { name: 'Email Security' },
      { name: 'Security Operations' },
      { name: 'Governance & Compliance' }
    ].map(item => ({ ...item, href: `/solutions/${slugify(item.name)}` }))
  },
  {
    id: 'datacenter-cloud',
    name: 'Data Center, Virtualization & Cloud',
    icon: Server,
    href: '#',
    items: [
      { name: 'Compute' },
      { name: 'Storage' },
      { name: 'Backup' },
      { name: 'Virtualization' },
      { name: 'Cloud' },
      { name: 'Containers' },
      { name: 'Cloud Native' }
    ].map(item => ({ ...item, href: `/solutions/${slugify(item.name)}` }))
  },
  {
    id: 'passive-infrastructure',
    name: 'Passive Infrastructure & Data Center Facilities',
    icon: Building,
    href: '#',
    items: [
      { name: 'Structured Cabling' },
      { name: 'Fiber Backbone' },
      { name: 'Enterprise WiFi Survey' },
      { name: 'Data Center Design' },
      { name: 'Raised Floor' },
      { name: 'Precision Cooling' },
      { name: 'UPS' },
      { name: 'Generator Integration' },
      { name: 'Rack Solutions' },
      { name: 'DCIM' },
      { name: 'Environmental Monitoring' },
      { name: 'Physical Security' },
      { name: 'Smart Building Integration' }
    ].map(item => ({ ...item, href: `/solutions/${slugify(item.name)}` }))
  },
  {
    id: 'software-ai',
    name: 'Software Engineering & AI Automation',
    icon: Code,
    href: '#',
    items: [
      { name: 'Software Solutions' },
      { name: 'AI Solutions' },
      { name: 'Integration' }
    ].map(item => ({ ...item, href: `/solutions/${slugify(item.name)}` }))
  },
  {
    id: 'cloud-devsecops',
    name: 'Cloud, DevSecOps & Platform Engineering',
    icon: Cloud,
    href: '#',
    items: [
      { name: 'DevOps' },
      { name: 'Containers' },
      { name: 'Platform Engineering' },
      { name: 'Cloud Security' },
      { name: 'Observability' }
    ].map(item => ({ ...item, href: `/solutions/${slugify(item.name)}` }))
  }
];

interface SolutionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionsMegaMenu({ isOpen, onClose }: SolutionsMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(solutionCategories[0].id);

  // Reset active category to default when menu is closed
  useEffect(() => {
    if (!isOpen) {
      setActiveCategory(solutionCategories[0].id);
    }
  }, [isOpen]);

  const activeCatData = solutionCategories.find((cat) => cat.id === activeCategory);

  return (
    <div
      className={`nav-dropdown absolute top-full left-0 right-0 w-full pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none'
      }`}
    >
      {/* Mega Menu Inner Panel */}
      <div className="w-full border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-2xl overflow-hidden flex min-h-[360px] max-h-[85vh]">
        {/* Left Column (Categories List) */}
        <div className="w-[320px] bg-[#131926] border-r border-white/5 py-6 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4 px-6 font-mono font-bold">
              Solutions Categories
            </p>
            {solutionCategories.map((category) => {
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
                  <div className="flex items-center gap-3 pr-2">
                    <CatIcon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400 group-hover:text-white'}`} />
                    <span className={`leading-snug ${isActive ? 'underline decoration-[rgb(20,109,174)] decoration-2 underline-offset-4' : ''}`}>
                      {category.name}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
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
          <div className="px-6 pt-4 border-t border-white/5 mt-6">
            <Link
              href="/solutions"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[rgb(20,109,174)] hover:text-white transition-colors duration-200 group/all"
            >
              View All Solutions
              <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column (Sub-items Grid) */}
        <div className="flex-1 p-8 bg-[#0f1420] overflow-y-auto">
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
                  <div className="w-1.5 h-1.5 rounded-full bg-[rgb(20,109,174)]/40 group-hover/item:bg-[rgb(20,109,174)] group-hover/item:scale-125 transition-all duration-200 shrink-0" />
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
