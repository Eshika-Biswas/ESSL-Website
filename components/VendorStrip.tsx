'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Vendor {
  name: string;
  type: string;
  src: string;
  scale?: string;
  href?: string;
}

const vendors: Vendor[] = [
  { name: 'Cisco', type: 'Networking & Security', src: '/partners/cisco.png', scale: 'max-h-7', href: 'https://locatr.cloudapps.cisco.com/WWChannels/LOCATR/pf/index.jsp#/NjUyMTI3@MTM2NTYxMDUw@RU4=' },
  { name: 'Fortinet', type: 'Network Security', src: '/partners/fortinet-logo.svg', scale: 'max-h-6', href: 'https://partnerportal.fortinet.com/directory/search?loe=Advanced&l=Bangladesh&q=ensure+support+services' },
  { name: 'Sophos', type: 'Endpoint Security', src: '/partners/sophos.png', scale: 'max-h-7' },
  { name: 'Palo Alto Networks', type: 'Network Security', src: '/partners/paloalto.svg', scale: 'max-h-6', href: 'https://paloaltonetworks.my.site.com/NextWavePartnerProgram/s/partnerlocator?c__pageDetails=RecordView&c__key=2Smer%2FK0VxCnaeqoa617j8Fo%2FxiWsRYO6Pns%2FGdvAhOoGgnXqPzIs%2BrcB%2B0bbi2%2B' },
  { name: 'CrowdStrike', type: 'EDR & Cybersecurity', src: '/partners/crowdstrike.svg', scale: 'max-h-5' },
  { name: 'Dell Technologies', type: 'Server & Storage', src: '/partners/dell.png', scale: 'max-h-7' },
  { name: 'Microsoft', type: 'Cloud & Productivity', src: '/partners/microsoft.png', scale: 'max-h-6' },
  { name: 'VMware', type: 'Virtualization & Cloud', src: '/partners/vmware-logo-grey.svg', scale: 'max-h-6' },
  { name: 'F5', type: 'Application Delivery', src: '/partners/f5.svg', scale: 'max-h-7' },
  { name: 'NetApp', type: 'Hybrid Cloud Storage', src: '/partners/netapp.avif', scale: 'max-h-6' },
  { name: 'Veeam', type: 'Data Backup & Recovery', src: '/partners/veeam-logo.svg', scale: 'max-h-6', href: 'https://www.veeam.com/find-a-partner.html' },
  { name: 'AWS', type: 'Cloud Infrastructure', src: '/partners/aws.png', scale: 'max-h-6' },
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
            We hold the highest certifications from global technology leaders
          </p>
        </div>

        {/* Vendor Grid — matching Clients page card styling */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {vendors.map((vendor, index) => {
            const cardContent = (
              <>
                <div className="h-14 flex items-center justify-center mb-2 w-full px-2">
                  <Image
                    src={vendor.src}
                    alt={`${vendor.name} logo`}
                    width={140}
                    height={48}
                    className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${vendor.scale ?? 'max-h-10'}`}
                  />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-tight transition-colors group-hover:text-[#1B6BA8]">
                  {vendor.name}
                </span>
                <span className="text-[10px] font-medium text-slate-400 mt-0.5">
                  {vendor.type}
                </span>
              </>
            );
            const sharedClass = `group relative p-4 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/85 hover:border-[#1B6BA8]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center text-center h-32 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`;
            if (vendor.href) {
              return (
                <a
                  key={vendor.name}
                  href={vendor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${vendor.name} partner locator (opens in new tab)`}
                  className={sharedClass}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {cardContent}
                </a>
              );
            }
            return (
              <Link
                key={vendor.name}
                href="/about/partners"
                className={sharedClass}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {cardContent}
              </Link>
            );
          })}
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
