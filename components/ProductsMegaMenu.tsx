'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Network, Shield, Lock, Terminal, Activity, Server, LayoutGrid, Layers } from 'lucide-react';

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/\s+/g, '-')         // replace spaces with hyphens
    .replace(/-+/g, '-')          // replace multiple hyphens with single
    .trim();
};

const rawVendors = [
  {
    name: 'Cisco',
    icon: Network,
    products: ['Router', 'Switch', 'Wi-Fi', 'Meraki', 'NGFW', 'Email Security', 'Umbrella & Duo']
  },
  {
    name: 'Sophos',
    icon: Shield,
    products: ['Endpoint', 'Firewall and Secure Works']
  },
  {
    name: 'Fortinet',
    icon: Lock,
    products: ['Analyzer', 'Forti Manager', 'WAF', 'ZTNA', 'SDWAN']
  },
  {
    name: 'Palo Alto',
    icon: Terminal,
    products: ['NGFW', 'Cortex EDR', 'XDR', 'XSIAM', 'Starta Cloud Manager']
  },
  {
    name: 'CrowdStrike',
    icon: Activity,
    products: ['EDR', 'XDR', 'BG-SIEM', 'ITDR', 'AI']
  },
  {
    name: 'Dell',
    icon: Server,
    products: ['Storage', 'VxRail']
  },
  {
    name: 'Microsoft',
    icon: LayoutGrid,
    products: ['Office 365', 'Azure Cloud Services', 'Power BI']
  },
  {
    name: 'VMware',
    icon: Layers,
    products: ['VVF', 'VCF', 'Kubernetes']
  }
];

export const productVendors = rawVendors.map(vendor => {
  const vendorSlug = slugify(vendor.name);
  return {
    id: vendorSlug,
    name: vendor.name,
    icon: vendor.icon,
    href: '#',
    items: vendor.products.map(product => ({
      name: product,
      href: `/products/${vendorSlug}/${slugify(product)}`
    }))
  };
});

interface ProductsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductsMegaMenu({ isOpen, onClose }: ProductsMegaMenuProps) {
  return (
    <div
      className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none opacity-0 invisible translate-y-2'
      }`}
    >
      <div className="w-[320px] p-5 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 px-3 font-mono font-bold">
          Partner Vendors
        </p>
        
        <div className="space-y-1">
          {productVendors.map((vendor) => {
            const VendorIcon = vendor.icon;
            return (
              <div
                key={vendor.id}
                className="flex items-center gap-4 px-3 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)]/10 flex items-center justify-center group-hover:bg-[rgb(20,109,174)]/20 transition-colors shrink-0">
                  <VendorIcon className="w-5 h-5 text-[rgb(20,109,174)]" />
                </div>
                <span className="text-base font-sans font-semibold group-hover:text-white transition-colors leading-tight">
                  {vendor.name}
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
            View All Products
            <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
