'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const solutions = [
  { name: 'Network & Security', href: '/business-units/network-security' },
  { name: 'Cyber Security', href: '/business-units/cyber-security' },
  { name: 'Data Center & Cloud', href: '/business-units/data-center-cloud' },
  { name: 'Passive Infrastructure', href: '/business-units/passive-infrastructure' },
  { name: 'Managed Services', href: '/business-units/managed-services' },
  { name: 'Technology Consulting', href: '/business-units/technology-consulting' },
  { name: 'Software & AI', href: '/business-units/software-engineering' },
  { name: 'Cloud & DevOps', href: '/solutions/cloud-transformation' },
];

const services = [
  { name: 'Technology Consulting', href: '/business-units/technology-consulting' },
  { name: 'System Integration', href: '/solutions/digital-transformation' },
  { name: 'Managed Services', href: '/business-units/managed-services' },
];

const company = [
  { name: 'About Us', href: '/about/why-ess' },
  { name: 'Case Studies', href: '/insights' },
  { name: 'Insights', href: '/insights' },
  { name: 'Our Clients', href: '/clients' },
  { name: 'Careers', href: '/about/careers' },
  { name: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'Facebook', href: '#', icon: 'f' },
  { name: 'Twitter', href: '#', icon: '𝕏' },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0a0e17] text-slate-300">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(20,109,174,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Company Logo + Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/logos/essl-logo-transparent.png"
                alt="ESS - Ensure Support Services"
                width={200}
                height={74}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Bangladesh&apos;s trusted enterprise IT infrastructure and cybersecurity integration partner.
            </p>

            {/* Vertical Stacked Contact Info */}
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[rgb(20,109,174)] shrink-0 mt-0.5" />
                <span className="leading-snug">JJR Heritage, L-4 147/D, 1 Green Rd, Dhaka 1215</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[rgb(20,109,174)] shrink-0" />
                <a href="mailto:sales@ensure-bd.com" className="hover:text-white transition-colors">
                  sales@ensure-bd.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgb(20,109,174)] shrink-0" />
                <a href="tel:+8801818399642" className="hover:text-white transition-colors">
                  +8801818399642
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Products */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3 mb-8">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-3">Products</h4>
            <Link href="/solutions/smart-infrastructure" className="text-sm font-medium text-[rgb(20,109,174)] hover:text-white transition-colors inline-flex items-center gap-1">
              View All Products &rarr;
            </Link>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Ensure Support Service Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 hover:bg-[rgb(20,109,174)]/20 hover:border-[rgb(20,109,174)]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
