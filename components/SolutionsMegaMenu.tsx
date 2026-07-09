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
  return (
    <div
      className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none opacity-0 invisible translate-y-2'
      }`}
    >
      <div className="w-[420px] p-5 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 px-3 font-mono font-bold">
          Solutions Categories
        </p>
        
        <div className="space-y-1">
          {solutionCategories.map((category) => {
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
            href="/solutions"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(20,109,174)] hover:text-white transition-colors duration-200 group/all"
          >
            View All Solutions
            <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
