'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const vendors = [
  { name: 'Cisco', color: '#049fd9' },
  { name: 'Fortinet', color: '#ee3124' },
  { name: 'Sophos', color: '#003d8f' },
  { name: 'Palo Alto', color: '#FA582D' },
  { name: 'CrowdStrike', color: '#ff0000' },
  { name: 'Dell', color: '#007db8' },
  { name: 'Microsoft', color: '#00a4ef' },
  { name: 'VMware', color: '#717074' },
  { name: 'F5', color: '#e4002b' },
  { name: 'Veritas', color: '#b01c2e' },
  { name: 'NetApp', color: '#0067C5' },
  { name: 'Veeam', color: '#00b336' },
];

export default function VendorStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
            Technology Partners
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Certified Partner of the World&apos;s Leading Vendors
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            We hold the highest certifications from 12+ global technology leaders
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {vendors.map((vendor, index) => (
            <Link
              key={vendor.name}
              href="#"
              className={`group relative flex items-center justify-center h-24 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-500 hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span
                className="text-base font-bold tracking-wide text-muted group-hover:text-primary transition-all duration-300"
              >
                {vendor.name}
              </span>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-primary transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
