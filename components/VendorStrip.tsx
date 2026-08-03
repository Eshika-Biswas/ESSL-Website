'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Vendor {
  name: string;
  src: string;
  // Optional scale override, e.g. 'max-h-7' (defaults to 'max-h-8')
  scale?: string;
}

const vendors: Vendor[] = [
  { name: 'Cisco',        src: '/partners/cisco.png',              scale: 'max-h-7' },
  { name: 'Fortinet',     src: '/partners/fortinet-logo.svg',      scale: 'max-h-6' },
  { name: 'Sophos',       src: '/partners/sophos.png',             scale: 'max-h-7' },
  { name: 'Palo Alto',    src: '/partners/paloalto.svg',           scale: 'max-h-6' },
  { name: 'CrowdStrike',  src: '/partners/crowdstrike.svg',        scale: 'max-h-5' },
  { name: 'Dell',         src: '/partners/dell.png',               scale: 'max-h-7' },
  { name: 'Microsoft',    src: '/partners/microsoft.png',          scale: 'max-h-6' },
  { name: 'VMware',       src: '/partners/vmware-logo-grey.svg',   scale: 'max-h-6' },
  { name: 'F5',           src: '/partners/f5.svg',                 scale: 'max-h-7' },
  { name: 'Veritas',      src: '/partners/veritas.svg',            scale: 'max-h-6' },
  { name: 'NetApp',       src: '/partners/netapp.avif',            scale: 'max-h-6' },
  { name: 'Veeam',        src: '/partners/veem.webp',              scale: 'max-h-6' },
];

export default function VendorStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 overflow-hidden section-transition">
      {/* Background Image: World's Leading Vendors */}
      <div className="absolute inset-0 z-0 bg-[#f8fafc]">
        <Image
          src="/images/worlds-leading-vendors-bg.jpg"
          alt="World's Leading Vendors Background"
          fill
          sizes="100vw"
          className="object-cover opacity-100"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/about/partners"
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#1B6BA8] border border-[#1B6BA8]/20 bg-[#1B6BA8]/5 hover:bg-[#1B6BA8]/10 hover:border-[#1B6BA8]/40 mb-6 transition-all duration-300"
          >
            Technology Partners
          </Link>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1420] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Certified Partner of the World&apos;s Leading Vendors
          </h2>
          <p className="text-slate-650 text-base max-w-xl mx-auto">
            We hold the highest certifications from 12+ global technology leaders
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {vendors.map((vendor, index) => (
            <Link
              key={vendor.name}
              href="/about/partners"
              className={`group relative flex items-center justify-center h-24 rounded-2xl border border-white/10 bg-white/90 hover:bg-white transition-all duration-500 hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 p-4 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={vendor.src}
                  alt={`${vendor.name} logo`}
                  width={140}
                  height={48}
                  className={`w-auto object-contain ${vendor.scale ?? 'max-h-8'}`}
                  onError={(e) => {
                    // Fallback: hide broken image
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-primary transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>

        {/* View All Partners Link */}
        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link
            href="/about/partners"
            className="inline-flex items-center text-sm font-semibold tracking-wider uppercase font-mono text-slate-600 hover:text-[#0f1420] hover:gap-2 transition-all duration-300 gap-1.5"
          >
            <span>View All Partners</span>
            <span className="text-xs">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
