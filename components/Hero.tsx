'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  Building,
  CheckCircle,
  Headphones
} from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

// ─── Carousel Slides ──────────────────────────────────────────────────────────
const slides = [
  {
    title: "Network & Security",
    titleLight: "Network &",
    titleColor: "Security",
    description: "High-performance networking solutions for a connected enterprise.",
    href: "/business-units/network-security",
    image: "/images/hero/network123.png",
    overlayColor: "15, 20, 32",
    opacityRange: [0.85, 0.45],
    textColor: "light",
    imageOpacity: 0.95,
  },
  {
    title: "Cyber Security",
    titleLight: "Cyber",
    titleColor: "Security",
    description: "Protect what matters most with advanced solutions and services.",
    href: "/business-units/cyber-security",
    image: "/images/hero/cyber-security.jpg",
    overlayColor: "15, 20, 32",
    opacityRange: [0.82, 0.40],
    textColor: "light",
    imageOpacity: 0.90,
  },
  {
    title: "Data Center & Cloud",
    titleLight: "Data Center",
    titleColor: "& Cloud",
    description: "Modernize your data center and accelerate your journey to cloud.",
    href: "/business-units/data-center-cloud",
    image: "/images/hero/data-center-cloud123.png",
    overlayColor: "15, 20, 32",
    opacityRange: [0.85, 0.45],
    textColor: "light",
    imageOpacity: 0.95,
  },
  {
    title: "Passive Infrastructure",
    titleLight: "Passive",
    titleColor: "Infrastructure",
    description: "Structured, reliable and future-ready physical infrastructure.",
    href: "/business-units/passive-infrastructure",
    image: "/images/hero/passive-infrastructure.png",
    overlayColor: "15, 20, 32",
    opacityRange: [0.70, 0.25],
    textColor: "light",
    imageOpacity: 0.85,
  },
  {
    title: "Technology Consulting",
    titleLight: "Technology",
    titleColor: "Consulting",
    description: "Strategic guidance to architect the right technology roadmap for your business.",
    href: "/business-units/technology-consulting",
    image: "/images/hero/technology-consulting.png",
    overlayColor: "15, 20, 32",
    opacityRange: [0.75, 0.30],
    textColor: "light",
    imageOpacity: 0.85,
  },
  {
    title: "Managed Services",
    titleLight: "Managed",
    titleColor: "Services",
    description: "24×7 monitoring, support, and optimization for your critical systems.",
    href: "/business-units/managed-services",
    image: "/images/hero/managed-services.png",
    overlayColor: "15, 20, 32",
    opacityRange: [0.80, 0.40],
    textColor: "light",
    imageOpacity: 0.85,
  },
  {
    title: "Software Engineering",
    titleLight: "Software",
    titleColor: "Engineering",
    description: "Custom software solutions and seamless integrations built for your business.",
    href: "/business-units/software-engineering",
    image: "/images/hero/software-engineering.png",
    overlayColor: "15, 20, 32",
    opacityRange: [0.85, 0.45],
    textColor: "light",
    imageOpacity: 0.95,
  },
  {
    title: "AI & Automation",
    titleLight: "AI &",
    titleColor: "Automation",
    description: "Intelligent automation and AI-driven solutions that transform how you work.",
    href: "/business-units/ai-automation",
    image: "/images/hero/ai-automation.png",
    overlayColor: "15, 20, 32",
    opacityRange: [0.85, 0.45],
    textColor: "light",
    imageOpacity: 0.95,
  },
];

// ─── Types for Client Logos ──────────────────────────────────────────────────
interface ImageLogo {
  kind: 'image';
  name: string;
  src: string;
  width: number;
  height: number;
  needsBacking?: boolean;
}
interface SvgLogo {
  kind: 'svg';
  name: string;
  svg: string;
  needsBacking?: boolean;
}
interface TextLogo {
  kind: 'text';
  name: string;
  needsBacking?: boolean;
}
type ClientLogo = ImageLogo | SvgLogo | TextLogo;

// ─── Client list ─────────────────────────────────────────────────────────────
// NOTE: Only IPDC Finance does not have an image asset provided yet.
// We use a clean text-based placeholder treatment for it until its logo asset is supplied.
const BASE_CLIENTS: ClientLogo[] = [
  {
    kind: 'image', name: 'IDLC Finance', src: '/logos/idlc-finance.png',
    width: 110, height: 40,
    needsBacking: true,
  },
  {
    kind: 'text', name: 'IPDC Finance',
  },
  {
    kind: 'image', name: 'Berger Paints', src: '/logos/berger-paints.png',
    width: 110, height: 40,
    needsBacking: true,
  },
  {
    kind: 'image', name: 'Aristo Pharma', src: '/logos/aristo-pharma.png',
    width: 110, height: 40,
    needsBacking: true,
  },
  {
    kind: 'image', name: 'Opsonin Pharma', src: '/logos/opsonin-pharma.png',
    width: 110, height: 40,
    needsBacking: true,
  },
  {
    kind: 'image', name: 'ACI', src: '/logos/aci-plc.png',
    width: 110, height: 40,
    needsBacking: true,
  },
  {
    kind: 'image', name: 'Brac University', src: '/logos/brac-university.svg',
    width: 110, height: 40,
    needsBacking: true,
  },
  {
    kind: 'image', name: 'UIU', src: '/logos/uiu.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Evercare Hospital', src: '/logos/evercare-hospita-logo.webp',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Aarong', src: '/logos/aarong.png',
    width: 110, height: 40,
    needsBacking: true,
  },
  {
    kind: 'image', name: 'Buro Bangladesh', src: '/logos/buro-bangladesh.svg',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Bangladesh Biman', src: '/logos/biman-logo-english-copy.svg',
    width: 110, height: 40,
  },
];

// Duplicate for seamless infinite scroll
const CLIENTS = [...BASE_CLIENTS, ...BASE_CLIENTS];

// ─── Rebuilt Hero Component ──────────────────────────────────────────────────
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [interactionTrigger, setInteractionTrigger] = useState(0);

  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  const resetAutoRotate = () => {
    setInteractionTrigger((prev) => prev + 1);
  };

  // Initialize with a random slide on mount (client-side only to prevent hydration mismatch)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    setCurrentSlide(randomIndex);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Fixed 2.0 seconds per slide

    return () => clearInterval(interval);
  }, [isHovered, interactionTrigger]);

  // Scroll to navigate slides natively (with passive: false for e.preventDefault())
  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) return;

    const handleNativeWheel = (e: WheelEvent) => {
      // Only capture scroll interaction if hover is active
      if (!isHovered) return;

      const now = Date.now();
      const isScrollDown = e.deltaY > 0;

      // Throttle scrolling to avoid fast skipping
      if (now - lastScrollTime.current < 900) {
        if (isScrollDown && currentSlide < slides.length - 1) {
          e.preventDefault();
        } else if (!isScrollDown && currentSlide > 0) {
          e.preventDefault();
        }
        return;
      }

      if (isScrollDown) {
        if (currentSlide < slides.length - 1) {
          // Block page scroll and advance slide
          e.preventDefault();
          setCurrentSlide((prev) => prev + 1);
          lastScrollTime.current = now;
          resetAutoRotate();
        }
      } else {
        if (currentSlide > 0) {
          // Block page scroll and go to previous slide
          e.preventDefault();
          setCurrentSlide((prev) => prev - 1);
          lastScrollTime.current = now;
          resetAutoRotate();
        }
      }
    };

    container.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleNativeWheel);
    };
  }, [currentSlide, isHovered]);

  const activeSlide = slides[currentSlide];
  const isCurrentSlideLight = activeSlide?.textColor === 'dark';

  return (
    <>
      <section
        id="hero-section"
        className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-[#0f1420]"
      >
        {/* Slides Container */}
        <div
          ref={carouselContainerRef}
          className="absolute inset-0 z-0 w-full h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            const isLight = slide.textColor === 'dark';
            return (
              <div
                key={slide.title}
                className={`absolute inset-0 flex items-center transition-opacity duration-200 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={`${slide.title} backdrop`}
                    fill
                    sizes="100vw"
                    className="object-cover object-right"
                    style={{ opacity: slide.imageOpacity }}
                    priority={index === 0}
                  />
                  {/* Overlays */}
                  {/* Desktop Gradient Overlay (left-to-right, transparent on the right to keep image fully visible) */}
                  <div
                    className="hidden sm:block absolute inset-0 bg-gradient-to-r z-[1]"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(${slide.overlayColor}, ${slide.opacityRange[0]}) 0%, rgba(${slide.overlayColor}, ${slide.opacityRange[0] * 0.9}) 30%, rgba(${slide.overlayColor}, ${slide.opacityRange[1]}) 42%, transparent 50%)`
                    }}
                  />
                  
                  {/* Mobile Gradient Overlay (slower fading to keep full-width text readable on narrow screens) */}
                  <div
                    className="block sm:hidden absolute inset-0 bg-gradient-to-r z-[1]"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(${slide.overlayColor}, ${slide.opacityRange[0]}) 0%, rgba(${slide.overlayColor}, ${slide.opacityRange[0] * 0.95}) 50%, rgba(${slide.overlayColor}, 0.6) 100%)`
                    }}
                  />

                  {/* Vertical shadow overlay for depth (only for light text support) */}
                  {slide.textColor === 'light' && (
                    <div
                      className="absolute inset-0 bg-gradient-to-b z-[1]"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(${slide.overlayColor}, 0.2) 0%, transparent 30%, transparent 70%, rgba(${slide.overlayColor}, 0.45) 100%)`
                      }}
                    />
                  )}
                </div>

                {/* Content Block */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
                  <div className="max-w-4xl text-left">

                    {/* Eyebrow badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 ${isLight
                        ? 'border-[rgb(20,109,174)]/30 bg-[rgb(20,109,174)]/5'
                        : 'border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5'
                      }`}>
                      <div className="w-2 h-2 rounded-full bg-[rgb(20,109,174)] animate-pulse" />
                      <span className={`text-xs uppercase tracking-widest font-semibold ${isLight ? 'text-[#0f1420]/80' : 'text-primary-light'
                        }`}>
                        Business Unit
                      </span>
                    </div>

                    {/* Headline */}
                    <h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
                      style={{
                        fontFamily: 'var(--font-display)',
                        textShadow: isLight
                          ? '0 1px 4px rgba(255, 255, 255, 0.8)'
                          : '0 2px 8px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      <span className={isLight ? 'text-[#0f1420]' : 'text-white'}>{slide.titleLight} </span>
                      <br className="hidden sm:inline" />
                      <span className={isLight ? 'text-[rgb(16,98,157)]' : 'text-[rgb(20,109,174)]'}>{slide.titleColor}</span>
                    </h1>

                    {/* Tagline */}
                    <p
                      className={`text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 ${isLight ? 'text-slate-900' : 'text-slate-200'}`}
                      style={{
                        textShadow: isLight
                          ? '0 1px 4px rgba(255, 255, 255, 0.8)'
                          : '0 2px 8px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {slide.description}
                    </p>

                    {/* Button */}
                    <div>
                      <Link
                        href={slide.href}
                        className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
                      >
                        View More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots Indicators */}
        <div className="absolute bottom-28 sm:bottom-32 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentSlide(index); resetAutoRotate(); }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`w-3 h-3 rounded-full transition-all duration-350 cursor-pointer ${index === currentSlide
                ? 'bg-[rgb(20,109,174)] w-8'
                : isCurrentSlideLight
                  ? 'bg-[#0f1420]/30 hover:bg-[#0f1420]/50'
                  : 'bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Standalone Full-Width Stats Bar (overlapping the bottom of the hero carousel) */}
      <div className="relative z-20 w-full bg-white border-y border-slate-200/80 shadow-lg -mt-20 sm:-mt-24 mb-10 py-6 sm:py-8 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <StatItem target={10} suffix="+" label="Years of Experience" icon={Calendar} />
            <StatItem target={310} suffix="+" label="Enterprise Clients" icon={Building} />
            <StatItem target={11500} suffix="+" label="Projects Delivered" icon={CheckCircle} />
            <StatItem target={116000} suffix="+" label="Support Cases Resolved" icon={Headphones} />
          </div>
        </div>
      </div>

      {/* Standalone Trusted Logos Section (Unboxed & Centered Ticker below the stats bar) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full py-4 flex flex-col items-center gap-8">
        {/* Centered label */}
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold font-mono text-center">
          Trusted by leading enterprises
        </p>

        {/* Scrolling logo row */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges to match the dark background #0f1420 */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0f1420] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0f1420] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-ticker w-max">
              {CLIENTS.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex-shrink-0 mx-2 sm:mx-3"
                >
                  <div className="flex items-center justify-center h-12 px-4 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all duration-300 group cursor-default" style={{ minWidth: '135px' }}>
                    {client.kind === 'image' ? (
                      <Image
                        src={client.src}
                        alt={`${client.name} logo`}
                        width={client.width}
                        height={client.height}
                        className="object-contain max-h-[33px] w-auto transition-all duration-300"
                      />
                    ) : client.kind === 'svg' ? (
                      <div
                        className="flex items-center justify-center scale-[1.15]"
                        dangerouslySetInnerHTML={{ __html: client.svg }}
                      />
                    ) : (
                      <span className="text-[13px] font-extrabold text-slate-800 tracking-tight text-center leading-none">
                        {client.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered View All link below logo row */}
        <div className="text-center mt-2">
          <Link
            href="/clients"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#3f94cf] hover:text-white transition-colors group/link"
          >
            <span>View All Clients</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </>
  );
}

// ─── Stat Item Helper Component ──────────────────────────────────────────────
function StatItem({ target, suffix = '', label, icon: Icon }: { target: number; suffix?: string; label: string; icon: any }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-blue-50 text-[rgb(20,109,174)] shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xl sm:text-2xl font-bold text-slate-900 leading-none">
          <AnimatedCounter target={target} suffix={suffix} />
        </div>
        <div className="text-[10px] sm:text-[11px] font-bold text-slate-555 mt-1 uppercase tracking-wider leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
}
