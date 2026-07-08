'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Network,
  Server,
  Cloud,
  Code,
  Wrench,
  Building,
  Cpu,
  MonitorCog,
  Settings,
  Layers,
  BookOpen,
  Users,
  Workflow,
  Handshake,
  Briefcase
} from 'lucide-react';

const solutions = [
  { name: 'Network & Security (Cisco)', icon: Network, href: '#' },
  { name: 'Cyber Security', icon: Shield, href: '#' },
  { name: 'Data Center, Virtualization & Cloud', icon: Server, href: '#' },
  { name: 'Passive Infrastructure & DC Facilities', icon: Building, href: '#' },
  { name: 'Managed Services', icon: MonitorCog, href: '#' },
  { name: 'Technology Consulting & Project Delivery', icon: Settings, href: '#' },
  { name: 'Software Engineering, AI & Automation', icon: Code, href: '#' },
  { name: 'Cloud, DevOps & Platform Engineering', icon: Cloud, href: '#' },
];

const services = [
  { name: 'Technology Consulting', icon: Cpu, href: '#' },
  { name: 'System Integration', icon: Layers, href: '#' },
  { name: 'Managed Services', icon: Wrench, href: '#' },
];

const products = [
  'Cisco', 'Fortinet', 'Sophos', 'Palo Alto Networks',
  'CrowdStrike', 'Dell', 'Microsoft', 'VMware',
  'F5', 'Veritas', 'NetApp', 'Veeam'
];

const about = [
  { name: 'Our Story', icon: BookOpen, href: '/about/our-story' },
  { name: 'Leadership Team', icon: Users, href: '/about/leadership' },
  { name: 'Our Business Process', icon: Workflow, href: '/about/business-process' },
  { name: 'Our Partners', icon: Handshake, href: '/about/partners' },
  { name: 'Careers', icon: Briefcase, href: '/about/careers' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled
          ? 'top-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 rounded-2xl border border-white/10 bg-[#0f1420]/80 backdrop-blur-lg shadow-lg shadow-black/20'
          : 'top-0 left-0 right-0 rounded-none border-b border-white/10 bg-[#0f1420]/90 backdrop-blur-xl shadow-md shadow-black/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'} gap-6 lg:gap-8`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logos/essl-logo.jpeg"
              alt="ESS - Ensure Support Services"
              width={200}
              height={74}
              className={`h-12 w-auto object-contain transition-all duration-300 origin-left ${isScrolled ? 'scale-90' : 'scale-100'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'gap-1 xl:gap-2' : 'gap-2 xl:gap-4'}`}>
            <NavLink href="/" label="Home" active={pathname === '/'} />
            
            {/* About Us Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                About Us
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 ${activeDropdown === 'about' ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                <div className="w-[520px] p-4 rounded-2xl glass border border-white/10 bg-[#0a0e17]/95 backdrop-blur-2xl shadow-2xl">
                  <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3 px-2">ABOUT ESSL</p>
                  <div className="grid grid-cols-2 gap-1">
                    {about.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-tight">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 ${activeDropdown === 'solutions' ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                <div className="w-[520px] p-4 rounded-2xl glass border border-white/10 bg-[#0a0e17]/95 backdrop-blur-2xl shadow-2xl">
                  <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3 px-2">Centers of Excellence</p>
                  <div className="grid grid-cols-2 gap-1">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-tight">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 ${activeDropdown === 'services' ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                <div className="w-80 p-4 rounded-2xl glass border border-white/10 bg-[#0a0e17]/95 backdrop-blur-2xl shadow-2xl">
                  <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3 px-2">Our Services</p>
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`nav-dropdown absolute top-full right-0 pt-2 ${activeDropdown === 'products' ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                <div className="w-64 p-4 rounded-2xl glass border border-white/10 bg-[#0a0e17]/95 backdrop-blur-2xl shadow-2xl">
                  <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3 px-2">Vendor Products</p>
                  <div className="grid grid-cols-2 gap-1">
                    {products.map((product) => (
                      <Link
                        key={product}
                        href="#"
                        className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/case-studies" label="Case Studies" active={pathname === '/case-studies'} />
            <NavLink href="/insights" label="Insights" active={pathname === '/insights'} />
            <NavLink href="/contact" label="Contact Us" active={pathname === '/contact'} />
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-primary text-sm"
            >
              Request a Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0f1420]/98 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[80vh] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          <MobileLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
          <MobileAccordion title="About Us" items={about.map(a => ({ name: a.name, href: a.href }))} onItemClick={() => setMobileMenuOpen(false)} />
          <MobileAccordion title="Solutions" items={solutions.map(s => ({ name: s.name, href: s.href }))} onItemClick={() => setMobileMenuOpen(false)} />
          <MobileAccordion title="Services" items={services.map(s => ({ name: s.name, href: s.href }))} onItemClick={() => setMobileMenuOpen(false)} />
          <MobileAccordion title="Products" items={products.map(p => ({ name: p, href: '#' }))} onItemClick={() => setMobileMenuOpen(false)} />
          <MobileLink href="/case-studies" label="Case Studies" onClick={() => setMobileMenuOpen(false)} />
          <MobileLink href="/insights" label="Insights" onClick={() => setMobileMenuOpen(false)} />
          <MobileLink href="/contact" label="Contact Us" onClick={() => setMobileMenuOpen(false)} />
          <div className="pt-4">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary block text-center w-full text-sm">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
        active ? 'text-white bg-primary/20 font-semibold' : 'text-slate-350 hover:text-white hover:bg-white/5'
      }`}
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="block px-4 py-3 text-slate-200 hover:bg-white/5 rounded-xl transition-colors">
      {label}
    </Link>
  );
}

function MobileAccordion({ title, items, onItemClick }: { title: string; items: { name: string; href: string }[]; onItemClick?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 text-slate-200 hover:bg-white/5 rounded-xl transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pl-6 space-y-1 py-2">
          {items.map((item) => (
            <Link key={item.name} href={item.href} onClick={onItemClick} className="block px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
