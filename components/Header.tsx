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

import ServicesMegaMenu, { serviceCategories } from './ServicesMegaMenu';
import SolutionsMegaMenu, { solutionCategories } from './SolutionsMegaMenu';
import ProductsMegaMenu, { productVendors } from './ProductsMegaMenu';

const about = [
  { name: 'Our Story', icon: BookOpen, href: '/about/our-story' },
  { name: 'Leadership Team', icon: Users, href: '/about/leadership' },
  { name: 'Our Business Process', icon: Workflow, href: '/about/business-process' },
  { name: 'Our Partners', icon: Handshake, href: '/about/partners' },
  { name: 'Careers', icon: Briefcase, href: '/about/careers' },
];

const insightsItems = [
  { name: 'Insights Hub', icon: BookOpen, href: '/insights' },
  { name: 'Case Studies', icon: Briefcase, href: '/case-studies' },
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
              src="/logos/essl-logo-transparent.png"
              alt="ESS - Ensure Support Services"
              width={200}
              height={74}
              className={`h-12 w-auto object-contain transition-all duration-300 origin-left ${isScrolled ? 'scale-90' : 'scale-100'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'gap-1 xl:gap-2' : 'gap-2 xl:gap-4'}`}>
            
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
              <ServicesMegaMenu isOpen={activeDropdown === 'services'} onClose={() => setActiveDropdown(null)} />
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
              <SolutionsMegaMenu isOpen={activeDropdown === 'solutions'} onClose={() => setActiveDropdown(null)} />
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
              <ProductsMegaMenu isOpen={activeDropdown === 'products'} onClose={() => setActiveDropdown(null)} />
            </div>

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
              <div className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${activeDropdown === 'about' ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none'}`}>
                <div className="w-[520px] p-6 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4 px-2 font-mono font-bold">ABOUT ESSL</p>
                  <div className="grid grid-cols-2 gap-2">
                    {about.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)]/10 flex items-center justify-center group-hover:bg-[rgb(20,109,174)]/20 transition-colors shrink-0">
                          <item.icon className="w-4 h-4 text-[rgb(20,109,174)]" />
                        </div>
                        <span className="text-sm font-sans text-slate-300 group-hover:text-white transition-colors leading-tight group-hover:underline group-hover:decoration-[rgb(20,109,174)] group-hover:decoration-2 group-hover:underline-offset-4">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('insights')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Insights
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] transition-all duration-300 ${activeDropdown === 'insights' ? '!opacity-100 !visible !translate-y-0' : 'pointer-events-none'}`}>
                <div className="w-80 p-6 rounded-2xl border border-white/10 bg-[#0f1420] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4 px-2 font-mono font-bold">Insights & Resources</p>
                  <div className="space-y-1">
                    {insightsItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)]/10 flex items-center justify-center group-hover:bg-[rgb(20,109,174)]/20 transition-colors shrink-0">
                          <item.icon className="w-4 h-4 text-[rgb(20,109,174)]" />
                        </div>
                        <span className="text-sm font-sans text-slate-300 group-hover:text-white transition-colors leading-tight group-hover:underline group-hover:decoration-[rgb(20,109,174)] group-hover:decoration-2 group-hover:underline-offset-4">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/contact" label="Contact Us" active={pathname === '/contact'} />
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
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
          <MobileServicesAccordion onItemClick={() => setMobileMenuOpen(false)} />
          <MobileSolutionsAccordion onItemClick={() => setMobileMenuOpen(false)} />
          <MobileProductsAccordion onItemClick={() => setMobileMenuOpen(false)} />
          <MobileAccordion title="About Us" items={about.map(a => ({ name: a.name, href: a.href }))} onItemClick={() => setMobileMenuOpen(false)} />
          <MobileAccordion title="Insights" items={insightsItems.map(i => ({ name: i.name, href: i.href }))} onItemClick={() => setMobileMenuOpen(false)} />
          <MobileLink href="/contact" label="Contact Us" onClick={() => setMobileMenuOpen(false)} />
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

function MobileServicesAccordion({ onItemClick }: { onItemClick: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (catId: string) => {
    if (activeCategory === catId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(catId);
    }
  };

  return (
    <div>
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-slate-200 hover:bg-white/5 rounded-xl transition-colors font-semibold"
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="pl-4 space-y-2 py-2 border-l border-white/5 ml-4">
          {serviceCategories.map((category) => {
            const isCatOpen = activeCategory === category.id;
            return (
              <div key={category.id}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-300 hover:bg-white/5 rounded-lg transition-colors font-mono uppercase tracking-wider text-left"
                >
                  {category.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCatOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isCatOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-6 space-y-1 py-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onItemClick}
                        className="block px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileSolutionsAccordion({ onItemClick }: { onItemClick: () => void }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (catId: string) => {
    if (activeCategory === catId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(catId);
    }
  };

  return (
    <div>
      <button
        onClick={() => setSolutionsOpen(!solutionsOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-slate-200 hover:bg-white/5 rounded-xl transition-colors font-semibold"
      >
        Solutions
        <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${solutionsOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="pl-4 space-y-2 py-2 border-l border-white/5 ml-4">
          {solutionCategories.map((category) => {
            const isCatOpen = activeCategory === category.id;
            return (
              <div key={category.id}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-300 hover:bg-white/5 rounded-lg transition-colors font-mono uppercase tracking-wider text-left"
                >
                  {category.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCatOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isCatOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-6 space-y-1 py-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onItemClick}
                        className="block px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileProductsAccordion({ onItemClick }: { onItemClick: () => void }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (catId: string) => {
    if (activeCategory === catId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(catId);
    }
  };

  return (
    <div>
      <button
        onClick={() => setProductsOpen(!productsOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-slate-200 hover:bg-white/5 rounded-xl transition-colors font-semibold"
      >
        Products
        <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${productsOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="pl-4 space-y-2 py-2 border-l border-white/5 ml-4">
          {productVendors.map((vendor) => {
            const isVendorOpen = activeCategory === vendor.id;
            return (
              <div key={vendor.id}>
                <button
                  onClick={() => toggleCategory(vendor.id)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-300 hover:bg-white/5 rounded-lg transition-colors font-mono uppercase tracking-wider text-left"
                >
                  {vendor.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isVendorOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isVendorOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-6 space-y-1 py-1">
                    {vendor.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onItemClick}
                        className="block px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
