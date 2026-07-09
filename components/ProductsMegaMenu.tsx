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
  const [activeVendor, setActiveVendor] = useState(productVendors[0].id);

  // Reset active vendor to default when menu is closed
  useEffect(() => {
    if (!isOpen) {
      setActiveVendor(productVendors[0].id);
    }
  }, [isOpen]);

  const activeVendorData = productVendors.find((v) => v.id === activeVendor);

  return (
    <div
      className={`nav-dropdown absolute top-full left-0 right-0 w-full pt-2 z-[100] transition-all duration-300 ${
        isOpen ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none'
      }`}
    >
      {/* Mega Menu Inner Panel */}
      <div className="w-full border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-2xl overflow-hidden flex min-h-[360px] max-h-[85vh]">
        {/* Left Column (Vendors List) */}
        <div className="w-[320px] bg-[#131926] border-r border-white/5 py-6 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-450 mb-4 px-6 font-mono font-bold">
              Partner Vendors
            </p>
            {productVendors.map((vendor) => {
              const isActive = activeVendor === vendor.id;
              const VendorIcon = vendor.icon;
              return (
                <Link
                  key={vendor.id}
                  href={vendor.href}
                  onClick={onClose}
                  onMouseEnter={() => setActiveVendor(vendor.id)}
                  className={`group flex items-center justify-between w-full px-6 py-4 text-left font-mono uppercase text-xs tracking-wider font-semibold transition-all duration-200 border-l-4 ${
                    isActive
                      ? 'border-[rgb(20,109,174)] bg-white/5 text-white'
                      : 'border-transparent text-slate-450 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <VendorIcon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[rgb(20,109,174)]' : 'text-slate-400 group-hover:text-white'}`} />
                    <span className={`leading-snug ${isActive ? 'underline decoration-[rgb(20,109,174)] decoration-2 underline-offset-4' : ''}`}>
                      {vendor.name}
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
              href="/partners"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[rgb(20,109,174)] hover:text-white transition-colors duration-200 group/all"
            >
              View All Products
              <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column (Products List) */}
        <div className="flex-1 p-8 bg-[#0f1420] overflow-y-auto">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-450 mb-6 font-mono font-bold">
              Explore {activeVendorData?.name} Products
            </p>
            <div className="flex flex-col gap-3 max-w-md">
              {activeVendorData?.items.map((item) => (
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
