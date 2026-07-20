'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

import AboutMegaMenu from './AboutMegaMenu';
import BusinessUnitsMegaMenu, { businessUnits } from './BusinessUnitsMegaMenu';
import SolutionsMegaMenu, { solutions } from './SolutionsMegaMenu';
import IndustriesMegaMenu, { industries } from './IndustriesMegaMenu';

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
            {/* Home Link */}
            <NavLink href="/" label="Home" active={pathname === '/'} />

            {/* About ESS Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('about-ess')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-medium">
                About ESS
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'about-ess' ? 'rotate-180' : ''}`} />
              </button>
              <AboutMegaMenu isOpen={activeDropdown === 'about-ess'} onClose={() => setActiveDropdown(null)} />
            </div>

            {/* Capabilities Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('business-units')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-medium">
                Capabilities
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'business-units' ? 'rotate-180' : ''}`} />
              </button>
              <BusinessUnitsMegaMenu isOpen={activeDropdown === 'business-units'} onClose={() => setActiveDropdown(null)} />
            </div>

            {/* Solutions Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-medium">
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              <SolutionsMegaMenu isOpen={activeDropdown === 'solutions'} onClose={() => setActiveDropdown(null)} />
            </div>

            {/* Industries Dropdown */}
            <div
              className="nav-item relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-medium">
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <IndustriesMegaMenu isOpen={activeDropdown === 'industries'} onClose={() => setActiveDropdown(null)} />
            </div>
          </nav>

          {/* Mobile Toggle */}
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
          <MobileLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
          <MobileAccordion
            title="About ESS"
            items={[
              { name: 'Why ESS', href: '/about/why-ess' },
              { name: 'Our Team', href: '/about/leadership' },
              { name: 'Our Partners', href: '/about/partners' },
              { name: 'Careers', href: '/about/careers' },
              { name: 'Insights', href: '/insights' },
            ]}
            onItemClick={() => setMobileMenuOpen(false)}
          />
          
          <MobileAccordion
            title="Capabilities"
            items={businessUnits.map(b => ({ name: b.name, href: b.href }))}
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <MobileAccordion
            title="Solutions"
            items={solutions.map(s => ({ name: s.name, href: s.href }))}
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <MobileAccordion
            title="Industries"
            items={industries.map(i => ({ name: i.name, href: i.href }))}
            onItemClick={() => setMobileMenuOpen(false)}
          />
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
        className="flex items-center justify-between w-full px-4 py-3 text-slate-200 hover:bg-white/5 rounded-xl transition-colors font-semibold"
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
