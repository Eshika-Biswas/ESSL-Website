'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Vendor {
  name: string;
  svg: ReactNode;
}

const vendors: Vendor[] = [
  {
    name: 'Cisco',
    svg: (
      <svg viewBox="0 0 100 60" className="h-8 w-auto" fill="#00B0ED">
        <rect x="10" y="30" width="4" height="20" rx="2" />
        <rect x="20" y="20" width="4" height="30" rx="2" />
        <rect x="30" y="10" width="4" height="40" rx="2" />
        <rect x="40" y="20" width="4" height="30" rx="2" />
        <rect x="50" y="10" width="4" height="40" rx="2" />
        <rect x="60" y="20" width="4" height="30" rx="2" />
        <rect x="70" y="10" width="4" height="40" rx="2" />
        <rect x="80" y="20" width="4" height="30" rx="2" />
        <rect x="90" y="30" width="4" height="20" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Fortinet',
    svg: (
      <svg viewBox="0 0 160 50" className="h-6 w-auto">
        <path d="M15,14 H32 V24 H23 V34 H15 Z" fill="#C8102E" />
        <path d="M28,14 H40 V20 H28 Z" fill="#C8102E" />
        <text x="46" y="32" fill="#C8102E" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="16" letterSpacing="0.5">FORTINET</text>
      </svg>
    ),
  },
  {
    name: 'Sophos',
    svg: (
      <svg viewBox="0 0 160 50" className="h-6 w-auto">
        <text x="15" y="34" fill="#003882" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="25" letterSpacing="-0.5">SOPHOS</text>
      </svg>
    ),
  },
  {
    name: 'Palo Alto',
    svg: (
      <svg viewBox="0 0 160 55" className="h-6 w-auto">
        <circle cx="25" cy="27" r="10" fill="none" stroke="#EA2D3F" strokeWidth="3.5" />
        <line x1="25" y1="17" x2="41" y2="33" stroke="#EA2D3F" strokeWidth="3.5" />
        <text x="46" y="33" fill="#334155" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="16" letterSpacing="-0.5">paloalto</text>
      </svg>
    ),
  },
  {
    name: 'CrowdStrike',
    svg: (
      <svg viewBox="0 0 160 50" className="h-6 w-auto">
        <path d="M12,25 C12,16 20,13 28,18 C24,21 20,24 17,28 C22,26 27,29 25,34 C17,32 12,28 12,25 Z" fill="#FC0000" />
        <text x="36" y="30" fill="#0D0D0D" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="14" letterSpacing="0.8">CROWDSTRIKE</text>
      </svg>
    ),
  },
  {
    name: 'Dell',
    svg: (
      <svg viewBox="0 0 100 60" className="h-7 w-auto">
        <circle cx="50" cy="30" r="20" fill="none" stroke="#007DB8" strokeWidth="3" />
        <text x="50" y="36" fill="#007DB8" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle" letterSpacing="-0.5">DELL</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    svg: (
      <svg viewBox="0 0 110 30" className="h-5.5 w-auto">
        <rect x="0" y="2" width="11" height="11" fill="#F25022" />
        <rect x="13" y="2" width="11" height="11" fill="#7FBA00" />
        <rect x="0" y="15" width="11" height="11" fill="#00A4EF" />
        <rect x="13" y="15" width="11" height="11" fill="#FFB900" />
        <text x="30" y="22" fill="#737373" fontFamily="var(--font-sans), sans-serif" fontWeight="600" fontSize="15" letterSpacing="-0.5">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'VMware',
    svg: (
      <svg viewBox="0 0 160 50" className="h-6 w-auto">
        <rect x="15" y="10" width="8" height="30" fill="#0095D9" />
        <rect x="26" y="14" width="8" height="26" fill="#0095D9" />
        <rect x="37" y="18" width="8" height="22" fill="#0095D9" />
        <text x="52" y="31" fill="#0095D9" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="17" letterSpacing="0.5">vmware</text>
      </svg>
    ),
  },
  {
    name: 'F5',
    svg: (
      <svg viewBox="0 0 80 40" className="h-7 w-auto">
        <ellipse cx="40" cy="20" rx="20" ry="17" fill="#E4002B" />
        <text x="40" y="27" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="18" textAnchor="middle">f5</text>
      </svg>
    ),
  },
  {
    name: 'Veritas',
    svg: (
      <svg viewBox="0 0 160 50" className="h-6 w-auto">
        <path d="M15,20 L25,33 L42,14" fill="none" stroke="#D81E05" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="48" y="31" fill="#D81E05" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="17" letterSpacing="0.8">VERITAS</text>
      </svg>
    ),
  },
  {
    name: 'NetApp',
    svg: (
      <svg viewBox="0 0 120 40" className="h-6 w-auto">
        <path d="M15,10 H30 V25 H15 Z" fill="#0067C5" />
        <path d="M22,10 L35,25 H22 Z" fill="#0067C5" />
        <text x="42" y="26" fill="#0067C5" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.5">NetApp</text>
      </svg>
    ),
  },
  {
    name: 'Veeam',
    svg: (
      <svg viewBox="0 0 100 35" className="h-6 w-auto">
        <rect x="10" y="5" width="25" height="25" rx="3" fill="#00B336" />
        <rect x="15" y="10" width="5" height="15" fill="#FFFFFF" />
        <rect x="25" y="10" width="5" height="15" fill="#FFFFFF" />
        <rect x="15" y="20" width="15" height="5" fill="#FFFFFF" />
        <text x="42" y="24" fill="#00B336" fontFamily="var(--font-sans), sans-serif" fontWeight="bold" fontSize="15" letterSpacing="0.5">VEEAM</text>
      </svg>
    ),
  },
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
                {vendor.svg}
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
