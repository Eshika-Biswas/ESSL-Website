'use client';

import Link from 'next/link';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const solutions = [
  { name: 'Network & Security', href: '#' },
  { name: 'Cyber Security', href: '#' },
  { name: 'Data Center & Cloud', href: '#' },
  { name: 'Passive Infrastructure', href: '#' },
  { name: 'Managed Services', href: '#' },
  { name: 'Technology Consulting', href: '#' },
  { name: 'Software & AI', href: '#' },
  { name: 'Cloud & DevOps', href: '#' },
];

const services = [
  { name: 'Technology Consulting', href: '#' },
  { name: 'System Integration', href: '#' },
  { name: 'Managed Services', href: '#' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'Our Clients', href: '/clients' },
  { name: 'Careers', href: '#' },
  { name: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'Facebook', href: '#', icon: 'f' },
  { name: 'Twitter', href: '#', icon: '𝕏' },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-slate-200">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.01] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">ESSL</span>
                <span className="block text-[10px] text-muted tracking-widest uppercase -mt-1">
                  Ensure Support Service
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Bangladesh&apos;s trusted enterprise IT infrastructure and cybersecurity integration partner.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@ensure-bd.com" className="hover:text-white transition-colors">info@ensure-bd.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+880-2-XXXXXXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mt-8 mb-4">Products</h4>
            <Link href="#" className="text-sm text-muted hover:text-primary-light transition-colors">
              View All Products →
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ensure Support Service Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-lg border border-slate-200 bg-slate-50 hover:bg-primary/5 hover:border-primary/30 flex items-center justify-center text-slate-500 hover:text-primary transition-all"
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
