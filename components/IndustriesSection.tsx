'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Landmark,
  Heart,
  Factory,
  GraduationCap,
  Building2,
  HeartHandshake,
  ShoppingBag,
  Radio,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const industries = [
  { name: 'Banking & Financial Services', icon: Landmark, href: '/industries/banking-financial-services' },
  { name: 'Healthcare & Pharmaceuticals', icon: Heart, href: '/industries/healthcare-pharmaceuticals' },
  { name: 'Manufacturing & Industrial', icon: Factory, href: '/industries/manufacturing-industrial' },
  { name: 'Education & Research', icon: GraduationCap, href: '/industries/education-research' },
  { name: 'Government & Public Sector', icon: Building2, href: '/industries/government-public-sector' },
  { name: 'NGO & Development', icon: HeartHandshake, href: '/industries/ngo-development' },
  { name: 'Retail & E-commerce', icon: ShoppingBag, href: '/industries/retail-ecommerce' },
  { name: 'Telecom & Media', icon: Radio, href: '/industries/telecom-media' },
];

// Duplicate industries 3 times to create a seamless infinite scrolling loop
const displayIndustries = [...industries, ...industries, ...industries];

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const isHoveringRef = useRef(false);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Position the scroll container in the middle third on mount
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const initScroll = () => {
        const singleSetWidth = container.scrollWidth / 3;
        container.scrollLeft = singleSetWidth;
      };
      const timer = setTimeout(initScroll, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Brief pause on manual navigation or click interaction
  const triggerInteractionPause = () => {
    setIsPaused(true);
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    userInteractionTimeoutRef.current = setTimeout(() => {
      userInteractionTimeoutRef.current = null;
      // Resume only if mouse is not currently hovering
      if (!isHoveringRef.current) {
        setIsPaused(false);
      }
    }, 2500);
  };

  // Continuous auto-scroll loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.6; // Matches continuous smooth marquee scroll pacing
    let currentScroll = container.scrollLeft;

    const step = () => {
      if (!isPaused) {
        const singleSetWidth = container.scrollWidth / 3;
        if (singleSetWidth > 0) {
          // Synchronize currentScroll if manual scroll occurred (e.g. trackpad scroll)
          if (Math.abs(currentScroll - container.scrollLeft) > 5) {
            currentScroll = container.scrollLeft;
          }

          currentScroll += speed;

          // Boundary correction to keep scroll position in the middle third
          if (currentScroll >= singleSetWidth * 2) {
            currentScroll -= singleSetWidth;
          } else if (currentScroll <= 0) {
            currentScroll += singleSetWidth;
          }
          
          container.scrollLeft = Math.round(currentScroll);
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  // Handle manual navigation arrow click
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    triggerInteractionPause();

    const singleSetWidth = container.scrollWidth / 3;
    const cardWidthWithGap = 344; // card (320px) + gap (24px)
    
    // Boundary check before scroll to make sure we don't hit edge
    if (container.scrollLeft >= singleSetWidth * 2 - cardWidthWithGap) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft <= cardWidthWithGap) {
      container.scrollLeft += singleSetWidth;
    }

    const target = container.scrollLeft + (direction === 'left' ? -cardWidthWithGap : cardWidthWithGap);

    // Perform scroll with temporary smooth override
    container.scrollTo({
      left: target,
      behavior: 'smooth',
    });
  };

  const pinstripeBgStyle = {
    backgroundColor: '#faf9f6', // Warm cream background
    backgroundImage: `
      linear-gradient(to right, rgba(15, 23, 42, 0.12) 1px, transparent 1px)
    `, // Increased visibility for the vertical pinstripes
    backgroundSize: '80px 100%',
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden border-t border-slate-200"
      style={pinstripeBgStyle}
    >
      {/* Hide scrollbar style */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Left-Aligned Title and Top-Right Scroll Controls */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl text-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              Industries We Serve
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Empowering Industries, <span className="text-[rgb(20,109,174)]">Driving Impact</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Purpose-built technology solutions for the sectors that power Bangladesh&apos;s economy.
            </p>
          </div>

          {/* Unified dark scroll controls pill */}
          <div className="flex items-center gap-2 bg-[#0f1420] p-1.5 rounded-full border border-white/10 shadow-lg shrink-0 self-start md:self-end">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-[1px] h-6 bg-white/10" />
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable carousel row */}
        {/* Toggle snap classes based on isPaused to allow smooth JS auto-scroll without snapping conflicts */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => {
            isHoveringRef.current = true;
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            isHoveringRef.current = false;
            if (!userInteractionTimeoutRef.current) {
              setIsPaused(false);
            }
          }}
          onTouchStart={triggerInteractionPause}
          onMouseDown={triggerInteractionPause}
          className={`flex gap-6 overflow-x-auto scrollbar-none py-4 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } ${isPaused ? 'snap-x snap-mandatory scroll-smooth' : ''}`}
        >
          {/* Edge Spacers */}
          <div className="w-[1px] shrink-0" />

          {displayIndustries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className={`group relative w-[280px] sm:w-[320px] h-[240px] shrink-0 p-8 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06)] hover:border-[rgb(20,109,174)]/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between ${
                  isPaused ? 'snap-start' : ''
                }`}
              >
                {/* Top content area */}
                <div className="flex flex-col items-start">
                  {/* Outline icon with brand-blue diagonal accent */}
                  <div className="relative inline-flex mb-6 self-start">
                    {/* Shifted brand blue backdrop accent */}
                    <div className="absolute top-1.5 left-1.5 w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 -z-10 translate-x-0.5 translate-y-0.5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                    {/* Outline Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-[rgb(20,109,174)]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Industry name in bold caps */}
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[rgb(20,109,174)] transition-colors duration-300 leading-snug tracking-wider">
                    {item.name.toUpperCase()}
                  </h3>
                </div>

                {/* Bottom left arrow button linking to page */}
                <div className="flex justify-start">
                  <Link
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-[rgb(20,109,174)] hover:bg-[rgb(14,76,122)] flex items-center justify-center text-white transition-all shadow-[0_2px_8px_rgba(20,109,174,0.25)] hover:shadow-[0_4px_12px_rgba(20,109,174,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label={`View ${item.name} Solutions`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}

          <div className="w-[1px] shrink-0" />
        </div>

      </div>
    </section>
  );
}
