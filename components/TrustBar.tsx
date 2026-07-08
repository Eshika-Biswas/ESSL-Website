'use client';

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
  svg: string;
}
type ClientLogo = ImageLogo | SvgLogo;

// ─── Client list ─────────────────────────────────────────────────────────────
const BASE_CLIENTS: ClientLogo[] = [
  // --- Real image file logos (rendered on a light tile, no filter tricks needed) ---
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
    kind: 'image', name: 'Anwar Group', src: '/logos/anwar-group.png',
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
  // --- Inline SVG logos rendered on a light tile, so colors are fully visible ---
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

// Duplicate for seamless infinite scroll — exactly 2× so -50% translateX loops perfectly
const CLIENTS = [...BASE_CLIENTS, ...BASE_CLIENTS];

export default function TrustBar() {
  return (
    <section className="relative w-full py-16 overflow-hidden border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label — always visible, no animation delay */}
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted mb-10">
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
                  className="flex-shrink-0 mx-3 sm:mx-4"
                >
                  {/* Light tile card — logos always visible on white/near-white bg */}
                  <div className="flex items-center justify-center h-14 px-4 rounded-xl border border-white/10 bg-white/90 hover:bg-white hover:border-primary/20 hover:shadow-md transition-all duration-300 group cursor-default" style={{ minWidth: '140px' }}>
                    {client.kind === 'image' ? (
                      <Image
                        src={client.src}
                        alt={`${client.name} logo`}
                        width={client.width}
                        height={client.height}
                        className="object-contain max-h-[32px] w-auto transition-all duration-300"
                      />
                    ) : (
                      <div
                        className="flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: client.svg }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View all clients link — always visible */}
        <div className="mt-10 flex justify-center">
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
