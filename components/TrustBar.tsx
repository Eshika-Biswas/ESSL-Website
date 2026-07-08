'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Types ───────────────────────────────────────────────────────────────────
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
  svg: string; // raw SVG markup rendered via dangerouslySetInnerHTML
}
type ClientLogo = ImageLogo | SvgLogo;

// ─── Client list ─────────────────────────────────────────────────────────────
// Mix of real file-based logos and compact inline SVG brand marks.
// SVGs use viewBox="0 0 120 36" to stay proportional at ~28-32px height.
const BASE_CLIENTS: ClientLogo[] = [
  // --- Real image file logos ---
  {
    kind: 'image', name: 'AKIJ Insaf', src: '/logos/Akij-Insaf-logo.472a84eedbb63231b165.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'Navana Group', src: '/logos/navana_logo-1.svg',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'Rahimafrooz', src: '/logos/rahimafrooz.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'Snowtex', src: '/logos/snowtex.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'Anwar Group', src: '/logos/anwar group.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'United Group', src: '/logos/united.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'TK Group', src: '/logos/TK-Group-1-2.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'Savoy', src: '/logos/savoy.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'Masco Group', src: '/logos/masco.png',
    width: 110, height: 36,
  },
  {
    kind: 'image', name: 'Partex Star Group', src: '/logos/partex star.png',
    width: 110, height: 36,
  },
  // --- Inline SVG logos (brand-accurate compact marks) ---
  {
    kind: 'svg', name: 'Standard Chartered Bank',
    svg: `<svg viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M6,18 C6,10 14,10 18,16 C22,10 30,10 30,18 C30,26 22,26 18,20 C14,26 6,26 6,18Z" fill="none" stroke="#009A44" stroke-width="2.5"/>
      <text x="36" y="22" fill="#009A44" font-family="sans-serif" font-weight="700" font-size="11" letter-spacing="-0.2">Standard</text>
      <text x="36" y="32" fill="#005A9C" font-family="sans-serif" font-weight="600" font-size="9" letter-spacing="0.1">Chartered</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'BRAC Bank',
    svg: `<svg viewBox="0 0 100 36" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="28" height="28" rx="5" fill="#FFC72C"/>
      <text x="18" y="24" fill="#003594" font-family="sans-serif" font-weight="900" font-size="18" text-anchor="middle">b</text>
      <text x="38" y="20" fill="#003594" font-family="sans-serif" font-weight="700" font-size="12">BRAC</text>
      <text x="38" y="31" fill="#003594" font-family="sans-serif" font-weight="500" font-size="8" letter-spacing="0.4">BANK</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Biman Bangladesh Airlines',
    svg: `<svg viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M4,26 C10,12 24,12 32,18 L26,16 L32,26Z" fill="#006A4E"/>
      <circle cx="16" cy="20" r="4" fill="#F42A41"/>
      <text x="38" y="20" fill="#006A4E" font-family="sans-serif" font-weight="700" font-size="11">Biman</text>
      <text x="38" y="31" fill="#006A4E" font-family="sans-serif" font-weight="400" font-size="8" letter-spacing="0.2">Bangladesh Airlines</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Bangladesh Parliament',
    svg: `<svg viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="18" cy="13" rx="10" ry="6" fill="#006A4E"/>
      <ellipse cx="18" cy="13" rx="5" ry="3" fill="#F42A41"/>
      <rect x="8" y="20" width="20" height="3" fill="#006A4E"/>
      <rect x="11" y="25" width="14" height="3" fill="#006A4E"/>
      <text x="34" y="20" fill="#006A4E" font-family="sans-serif" font-weight="700" font-size="10">Bangladesh</text>
      <text x="34" y="31" fill="#006A4E" font-family="sans-serif" font-weight="500" font-size="9" letter-spacing="0.1">Parliament</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Samsung',
    svg: `<svg viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="55" cy="18" rx="50" ry="15" fill="#0A5CA6"/>
      <text x="55" y="23" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" letter-spacing="-0.5">SAMSUNG</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Eastern Bank (EBL)',
    svg: `<svg viewBox="0 0 90 36" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="18" height="6" fill="#005A9C"/>
      <rect x="4" y="14" width="13" height="6" fill="#005A9C"/>
      <rect x="4" y="22" width="18" height="6" fill="#005A9C"/>
      <text x="28" y="24" fill="#005A9C" font-family="sans-serif" font-weight="700" font-size="16" letter-spacing="0.5">EBL</text>
    </svg>`,
  },
  {
    kind: 'svg', name: 'Dhaka Bank',
    svg: `<svg viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="28" height="28" fill="#00843D"/>
      <circle cx="18" cy="18" r="8" fill="#002D62"/>
      <text x="38" y="22" fill="#002D62" font-family="sans-serif" font-weight="700" font-size="12">DHAKA</text>
      <text x="38" y="32" fill="#00843D" font-family="sans-serif" font-weight="500" font-size="9">BANK</text>
    </svg>`,
  },
];

// Duplicate for seamless infinite scroll — must be exactly 2× so -50% translateX loops perfectly
const CLIENTS = [...BASE_CLIENTS, ...BASE_CLIENTS];

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 overflow-hidden border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-sm uppercase tracking-[0.2em] text-muted mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Trusted by leading organizations
        </p>

        {/* Scrolling Logo Strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-900/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-900/50 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-ticker">
              {CLIENTS.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex-shrink-0 mx-6 sm:mx-10"
                >
                  <div className="flex items-center justify-center h-14 w-40 rounded-xl border border-white/5 bg-white/[0.04] hover:bg-white/[0.08] hover:border-primary/25 transition-all duration-300 group cursor-default px-3">
                    {client.kind === 'image' ? (
                      <Image
                        src={client.src}
                        alt={`${client.name} logo`}
                        width={client.width}
                        height={client.height}
                        className="object-contain max-h-[30px] max-w-[120px] w-auto filter brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-400"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center opacity-55 group-hover:opacity-90 transition-opacity duration-300"
                        style={{ filter: 'grayscale(100%) brightness(2)' }}
                        /* Inline SVGs: grayscale + brightness boost so they show on dark bg */
                        dangerouslySetInnerHTML={{ __html: client.svg }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View all clients link */}
        <div className={`mt-10 flex justify-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
          >
            <span>View all clients</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
