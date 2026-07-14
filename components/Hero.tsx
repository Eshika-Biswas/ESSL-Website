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
    image: "/images/hero/network.png",
    isLightImage: true,
  },
  {
    title: "Cyber Security",
    titleLight: "Cyber",
    titleColor: "Security",
    description: "Protect what matters most with advanced solutions and services.",
    href: "/business-units/cyber-security",
    image: "/images/hero/cyber-security.jpg",
  },
  {
    title: "Data Center & Cloud",
    titleLight: "Data Center",
    titleColor: "& Cloud",
    description: "Modernize your data center and accelerate your journey to cloud.",
    href: "/business-units/data-center-cloud",
    image: "/images/hero/data-center-cloud.png",
  },
  {
    title: "Passive Infrastructure",
    titleLight: "Passive",
    titleColor: "Infrastructure",
    description: "Structured, reliable and future-ready physical infrastructure.",
    href: "/business-units/passive-infrastructure",
    image: "/images/hero/passive-infrastructure.png",
  },
  {
    title: "Technology Consulting",
    titleLight: "Technology",
    titleColor: "Consulting",
    description: "Strategic guidance to architect the right technology roadmap for your business.",
    href: "/business-units/technology-consulting",
    image: "/images/hero/technology-consulting.png",
  },
  {
    title: "Managed Services",
    titleLight: "Managed",
    titleColor: "Services",
    description: "24×7 monitoring, support, and optimization for your critical systems.",
    href: "/business-units/managed-services",
    image: "/images/hero/managed-services.png",
  },
  {
    title: "Software Engineering",
    titleLight: "Software",
    titleColor: "Engineering",
    description: "Custom software solutions and seamless integrations built for your business.",
    href: "/business-units/software-engineering",
    image: "/images/hero/software-engineering.png",
  },
  {
    title: "AI & Automation",
    titleLight: "AI &",
    titleColor: "Automation",
    description: "Intelligent automation and AI-driven solutions that transform how you work.",
    href: "/business-units/ai-automation",
    image: "/images/hero/ai-automation.png",
  },
];

// ─── Types for Client Logos ──────────────────────────────────────────────────
interface ImageLogo {
  kind: 'image';
  name: string;
  src: string;
  width: number;
  height: number;
}
interface SvgLogo {
  kind: 'svg';
  name: string;
  svg: string;
}
type ClientLogo = ImageLogo | SvgLogo;

// ─── Client list ─────────────────────────────────────────────────────────────
const BASE_CLIENTS: ClientLogo[] = [
  {
    kind: 'image', name: 'AKIJ Insaf', src: '/logos/Akij-Insaf-logo.472a84eedbb63231b165.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Navana Group', src: '/logos/navana_logo-1.svg',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Rahimafrooz', src: '/logos/rahimafrooz.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Snowtex', src: '/logos/snowtex.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'United Group', src: '/logos/united.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'TK Group', src: '/logos/TK-Group-1-2.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Savoy', src: '/logos/savoy.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Masco Group', src: '/logos/masco.png',
    width: 110, height: 40,
  },
  {
    kind: 'image', name: 'Partex Star Group', src: '/logos/partex-star.png',
    width: 110, height: 40,
  },
  {
    kind: 'svg', name: 'Standard Chartered',
    svg: `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" width="110" height="36">
      <path d="M6,20 C6,11 14,11 19,18 C24,11 32,11 32,20 C32,29 24,29 19,22 C14,29 6,29 6,20Z" fill="none" stroke="#009A44" stroke-width="3"/>
      <text x="38" y="22" fill="#009A44" font-family="sans-serif" font-weight="700" font-size="12">Standard</text>
      <text x="38" y="34" fill="#005A9C" font-family="sans-serif" font-weight="600" font-size="10">Chartered</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'BRAC Bank',
    svg: `<svg viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg" width="100" height="36">
      <rect x="4" y="4" width="30" height="30" rx="5" fill="#FFC72C"/>
      <text x="19" y="26" fill="#003594" font-family="sans-serif" font-weight="900" font-size="20" text-anchor="middle">b</text>
      <text x="40" y="20" fill="#003594" font-family="sans-serif" font-weight="700" font-size="13">BRAC</text>
      <text x="40" y="32" fill="#003594" font-family="sans-serif" font-weight="500" font-size="9" letter-spacing="1">BANK</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Biman Airlines',
    svg: `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" width="110" height="36">
      <path d="M4,28 C10,12 26,12 34,20 L28,18 L34,28Z" fill="#006A4E"/>
      <circle cx="16" cy="22" r="4" fill="#F42A41"/>
      <text x="40" y="21" fill="#006A4E" font-family="sans-serif" font-weight="700" font-size="12">Biman</text>
      <text x="40" y="33" fill="#555" font-family="sans-serif" font-weight="400" font-size="9">Bangladesh Airlines</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Bangladesh Parliament',
    svg: `<svg viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg" width="120" height="36">
      <ellipse cx="20" cy="14" rx="12" ry="7" fill="#006A4E"/>
      <ellipse cx="20" cy="14" rx="6" ry="3.5" fill="#F42A41"/>
      <rect x="9" y="22" width="22" height="4" fill="#006A4E"/>
      <rect x="13" y="28" width="14" height="4" fill="#006A4E"/>
      <text x="37" y="20" fill="#006A4E" font-family="sans-serif" font-weight="700" font-size="10">Bangladesh</text>
      <text x="37" y="33" fill="#555" font-family="sans-serif" font-weight="500" font-size="9">Parliament</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Samsung',
    svg: `<svg viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg" width="100" height="36">
      <ellipse cx="55" cy="20" rx="50" ry="17" fill="#0A5CA6"/>
      <text x="55" y="26" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="-0.5">SAMSUNG</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Eastern Bank EBL',
    svg: `<svg viewBox="0 0 90 40" xmlns="http://www.w3.org/2000/svg" width="80" height="36">
      <rect x="4" y="6" width="19" height="7" fill="#005A9C"/>
      <rect x="4" y="15" width="14" height="7" fill="#005A9C"/>
      <rect x="4" y="24" width="19" height="7" fill="#005A9C"/>
      <text x="28" y="26" fill="#005A9C" font-family="sans-serif" font-weight="700" font-size="18" letter-spacing="0.5">EBL</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Dhaka Bank',
    svg: `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" width="110" height="36">
      <rect x="4" y="4" width="30" height="30" fill="#00843D"/>
      <circle cx="19" cy="19" r="9" fill="#002D62"/>
      <text x="40" y="22" fill="#002D62" font-family="sans-serif" font-weight="700" font-size="13">DHAKA</text>
      <text x="40" y="34" fill="#00843D" font-family="sans-serif" font-weight="500" font-size="10">BANK</text>
    </svg>`,
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
                    className={`object-cover ${(slide as any).isLightImage ? 'opacity-100 object-right' : 'opacity-80'}`}
                    priority={index === 0}
                  />
                  {/* Overlays */}
                  {(slide as any).isLightImage ? (
                    /* Left-side specific dark gradient mask behind text, leaving the right 45% clear on desktop */
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0f1420]/95 via-[#0f1420]/85 to-transparent z-[1] w-full md:w-[55%]" />
                  ) : (
                    <>
                      {/* Directional Overlay (left shadow, transparent right) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1420]/95 via-[#0f1420]/50 to-transparent z-[1]" />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1420]/30 via-transparent to-[#0f1420]/50 z-[1]" />
                    </>
                  )}
                </div>

                {/* Content Block */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
                  <div className="max-w-4xl text-left">

                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-8">
                      <div className="w-2 h-2 rounded-full bg-[rgb(20,109,174)] animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-primary-light font-semibold">Business Unit</span>
                    </div>

                    {/* Headline */}
                    <h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      <span className="text-white">{slide.titleLight} </span>
                      <br className="hidden sm:inline" />
                      <span className="text-[rgb(20,109,174)]">{slide.titleColor}</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed mb-10">
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
                : 'bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Combined Floating Bottom Bar (Stats + Trusted Logos) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 mb-16">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl p-6 sm:p-8 text-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* LEFT SIDE: Stats */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <StatItem target={10} suffix="+" label="Years of Experience" icon={Calendar} />
              <StatItem target={310} suffix="+" label="Enterprise Clients" icon={Building} />
              <StatItem target={11500} suffix="+" label="Projects Delivered" icon={CheckCircle} />
              <StatItem target={116000} suffix="+" label="Support Cases Resolved" icon={Headphones} />
            </div>

            {/* RIGHT SIDE: Trusted Logos */}
            <div className="lg:col-span-5 flex flex-col justify-center overflow-hidden w-full">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 font-mono">
                Trusted by leading enterprises
              </p>

              <div className="relative w-full">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="overflow-hidden">
                  <div className="flex animate-ticker">
                    {CLIENTS.map((client, i) => (
                      <div
                        key={`${client.name}-${i}`}
                        className="flex-shrink-0 mx-2 sm:mx-3"
                      >
                        <div className="flex items-center justify-center h-12 px-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/45 hover:shadow-md transition-all duration-300 group cursor-default" style={{ minWidth: '120px' }}>
                          {client.kind === 'image' ? (
                            <Image
                              src={client.src}
                              alt={`${client.name} logo`}
                              width={client.width}
                              height={client.height}
                              className="object-contain max-h-[26px] w-auto transition-all duration-300"
                            />
                          ) : (
                            <div
                              className="flex items-center justify-center scale-90"
                              dangerouslySetInnerHTML={{ __html: client.svg }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
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
