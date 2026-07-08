import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users } from 'lucide-react';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Our Clients | ESSL',
  description: 'ESSL is the trusted IT infrastructure and cybersecurity partner for Bangladesh\'s leading banks, government secretariats, MNCs, and corporate conglomerates.',
  keywords: ['ESSL Clients', 'Ensure Support Service Limited Clients', 'Enterprise Clients Bangladesh', 'IT Infrastructure Clients'],
};

interface ClientGroup {
  category: string;
  companies: string[];
}

// Map for clients who have existing high-res PNG/JPG logos in /logos/
const logoMapping: Record<string, string> = {
  "AKIJ Insaf": "Akij-Insaf-logo.472a84eedbb63231b165.png",
  "City Group": "citygroup.png",
  "Crown Cement": "crown-cement.png",
  "Masco Group": "masco.png",
  "Navana Group": "navana_logo-1.svg",
  "Next Ventures": "next-ventures.png",
  "Paramount Textile": "paramount.png",
  "Partex Star Group": "partex-star.png",
  "PDS": "pds.png",
  "Rahimafrooz": "rahimafrooz.png",
  "Samuda Chemical Complex Limited": "samuda.png",
  "Savoy": "savoy.png",
  "Snowtex": "snowtex.png",
  "Standard Group": "standarad.png",
  "Thermax Group": "theremax.png",
  "TK Group": "TK-Group-1-2.png",
  "Urmi Group": "urmi-logo-1-1-2.png",
};

// Helper: stacked logo tile — icon block on top, label below, fits the square card
function LogoTile({ icon, label, bg = '#FFFFFF', color = '#1e293b' }: {
  icon: ReactNode;
  label: string;
  bg?: string;
  color?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
      <div
        className="flex items-center justify-center rounded-lg w-14 h-14"
        style={{ background: bg }}
      >
        {icon}
      </div>
      <span
        className="text-[10px] font-semibold text-center leading-tight px-1"
        style={{ color, maxWidth: '100%', wordBreak: 'break-word', whiteSpace: 'normal' }}
      >
        {label}
      </span>
    </div>
  );
}

// Map for clients with custom inline vector SVG brand logos (replacing broken images & building placeholders)
const inlineSvgLogos: Record<string, ReactNode> = {
  // ──────────────────────────────────────────────
  // BANKING & FINANCIAL SERVICES
  // ──────────────────────────────────────────────
  "Standard Chartered Bank": (
    <LogoTile
      label="Standard Chartered"
      bg="#009A44"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M5,20 C5,11 15,11 20,18 C25,11 35,11 35,20 C35,29 25,29 20,22 C15,29 5,29 5,20 Z" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      }
    />
  ),
  "BRAC Bank": (
    <LogoTile
      label="BRAC Bank"
      bg="#003594"
      color="#003594"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#FFC72C" />
          <text x="20" y="28" fill="#003594" fontFamily="sans-serif" fontWeight="900" fontSize="22" textAnchor="middle">b</text>
        </svg>
      }
    />
  ),
  "Eastern Bank PLC": (
    <LogoTile
      label="Eastern Bank (EBL)"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="6" y="8" width="22" height="7" fill="#FFFFFF" />
          <rect x="6" y="17" width="16" height="7" fill="#FFFFFF" />
          <rect x="6" y="26" width="22" height="7" fill="#FFFFFF" />
        </svg>
      }
    />
  ),
  "Dhaka Bank PLC": (
    <LogoTile
      label="Dhaka Bank"
      bg="#00843D"
      color="#002D62"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" fill="#002D62" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="14" textAnchor="middle">DB</text>
        </svg>
      }
    />
  ),
  "LankaBangla Finance": (
    <LogoTile
      label="LankaBangla Finance"
      bg="#f0faf0"
      color="#1D252D"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,20 Q14,6 20,20 Q26,34 36,20" fill="none" stroke="#84BD00" strokeWidth="4" strokeLinecap="round" />
        </svg>
      }
    />
  ),
  "Meghna Bank PLC": (
    <LogoTile
      label="Meghna Bank"
      bg="#EEF5FF"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,24 Q12,10 20,18 Q28,10 36,24" fill="none" stroke="#D22630" strokeWidth="4" strokeLinecap="round" />
        </svg>
      }
    />
  ),
  "NRB Commercial Bank Limited": (
    <LogoTile
      label="NRBC Bank"
      bg="#006A4E"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#006A4E" />
          <circle cx="20" cy="20" r="8" fill="#F42A41" />
          <circle cx="20" cy="20" r="3" fill="#FFFFFF" />
        </svg>
      }
    />
  ),
  "Southeast Bank PLC": (
    <LogoTile
      label="Southeast Bank"
      bg="#EEF4FF"
      color="#005C8A"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <polygon points="20,4 36,20 20,36 4,20" fill="#005C8A" />
        </svg>
      }
    />
  ),
  "Commercial Bank": (
    <LogoTile
      label="Commercial Bank"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" fill="#005A9C" />
          <text x="20" y="28" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="20" textAnchor="middle">C</text>
        </svg>
      }
    />
  ),
  "NCC Bank": (
    <LogoTile
      label="NCC Bank"
      bg="#D22630"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#D22630" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="13" textAnchor="middle">NCC</text>
        </svg>
      }
    />
  ),
  "IDLC Finance PLC": (
    <LogoTile
      label="IDLC Finance"
      bg="#f0fdf9"
      color="#1A2B4C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="6" y="8" width="10" height="24" fill="#008080" />
          <rect x="20" y="18" width="10" height="14" fill="#FF8C00" />
        </svg>
      }
    />
  ),
  "HBL (Habib Bank)": (
    <LogoTile
      label="HBL — Habib Bank"
      bg="#006A4E"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" fill="#006A4E" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">HBL</text>
        </svg>
      }
    />
  ),
  "IDCOL": (
    <LogoTile
      label="IDCOL"
      bg="#EEF4FF"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#005A9C" />
          <text x="20" y="25" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">IDCOL</text>
        </svg>
      }
    />
  ),
  "IPDC Finance": (
    <LogoTile
      label="IPDC Finance"
      bg="#FF5E00"
      color="#0A1D37"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#FF5E00" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="12" textAnchor="middle">IPDC</text>
        </svg>
      }
    />
  ),
  "Green Delta Insurance": (
    <LogoTile
      label="Green Delta Insurance"
      bg="#f0fdf4"
      color="#008000"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,20 Q12,6 20,20 Q28,34 36,20" fill="none" stroke="#008000" strokeWidth="4" strokeLinecap="round" />
        </svg>
      }
    />
  ),
  "Pragati Life Insurance Limited": (
    <LogoTile
      label="Pragati Life Insurance"
      bg="#EEF4FF"
      color="#004687"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,18 L20,4 L36,18 V34 Q20,40 4,34 Z" fill="#004687" />
        </svg>
      }
    />
  ),
  "Delta Life Insurance Company Limited": (
    <LogoTile
      label="Delta Life Insurance"
      bg="#fff8f0"
      color="#1A3B8B"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <polygon points="20,4 36,36 4,36" fill="#E87722" />
        </svg>
      }
    />
  ),

  // ──────────────────────────────────────────────
  // GOVERNMENT & DEVELOPMENT ORGANIZATIONS
  // ──────────────────────────────────────────────
  "Bangladesh Parliament": (
    <LogoTile
      label="Bangladesh Parliament"
      bg="#006A4E"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <ellipse cx="20" cy="14" rx="12" ry="8" fill="#006A4E" />
          <ellipse cx="20" cy="14" rx="6" ry="4" fill="#F42A41" />
          <rect x="8" y="22" width="24" height="4" fill="#006A4E" />
          <rect x="12" y="28" width="16" height="4" fill="#006A4E" />
        </svg>
      }
    />
  ),
  "IFRC": (
    <LogoTile
      label="IFRC"
      bg="#FFF0F0"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M20,4 V36 M4,20 H36" stroke="#D22630" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      }
    />
  ),
  "Transparency International (Bangladesh)": (
    <LogoTile
      label="Transparency International BD"
      bg="#EFF9FF"
      color="#00355F"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#00A4E4" strokeWidth="3" />
          <text x="20" y="25" fill="#00A4E4" fontFamily="sans-serif" fontWeight="900" fontSize="13" textAnchor="middle">TI</text>
        </svg>
      }
    />
  ),
  "BURO Bangladesh": (
    <LogoTile
      label="BURO Bangladesh"
      bg="#006A4E"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#006A4E" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="12" textAnchor="middle">BURO</text>
        </svg>
      }
    />
  ),
  "World Vision Bangladesh": (
    <LogoTile
      label="World Vision"
      bg="#FFF5F0"
      color="#FF6B35"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="14" fill="none" stroke="#FF6B35" strokeWidth="3" />
          <path d="M6,20 Q13,12 20,20 Q27,28 34,20" fill="none" stroke="#FF6B35" strokeWidth="2.5" />
        </svg>
      }
    />
  ),
  "icddr,b": (
    <LogoTile
      label="icddr,b"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#005A9C" />
          <text x="20" y="25" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">icddr,b</text>
        </svg>
      }
    />
  ),
  "EGCB (Electricity Generation Company)": (
    <LogoTile
      label="EGCB Bangladesh"
      bg="#fffbeb"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <polygon points="20,4 26,16 16,16 22,30 10,18 22,18" fill="#FFC72C" />
        </svg>
      }
    />
  ),
  "BIFPCL": (
    <LogoTile
      label="BIFPCL"
      bg="#1C3F60"
      color="#1C3F60"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#D22630" />
          <polygon points="14,20 20,10 26,20" fill="#FFFFFF" />
          <rect x="14" y="20" width="12" height="8" fill="#FFFFFF" />
        </svg>
      }
    />
  ),

  // ──────────────────────────────────────────────
  // AVIATION, ENERGY & INDUSTRIAL
  // ──────────────────────────────────────────────
  "Biman Bangladesh Airlines": (
    <LogoTile
      label="Biman Bangladesh Airlines"
      bg="#006A4E"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,28 C12,12 28,12 36,20 L28,18 L36,28 Z" fill="#FFFFFF" stroke="#006A4E" strokeWidth="1" />
          <circle cx="18" cy="22" r="4" fill="#F42A41" />
        </svg>
      }
    />
  ),
  "SHV Energy": (
    <LogoTile
      label="SHV Energy"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#005A9C" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="14" textAnchor="middle">SHV</text>
        </svg>
      }
    />
  ),
  "Mobil (MJL Bangladesh PLC)": (
    <LogoTile
      label="Mobil — MJL Bangladesh"
      bg="#FFFFFF"
      color="#333333"
      icon={
        <svg viewBox="0 0 60 28" width="52" height="24">
          <text x="2" y="22" fill="#005A9C" fontFamily="sans-serif" fontWeight="900" fontSize="24" letterSpacing="-1">M<tspan fill="#D22630">o</tspan>bil</text>
        </svg>
      }
    />
  ),
  "INSEE Cement": (
    <LogoTile
      label="INSEE Cement"
      bg="#D22630"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" fill="#D22630" />
          <text x="20" y="18" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">INSEE</text>
          <text x="20" y="31" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">CEMENT</text>
        </svg>
      }
    />
  ),
  "NTC": (
    <LogoTile
      label="NTC — National Tea"
      bg="#006A4E"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,8 H36 L32,22 L36,36 H4 Z" fill="#006A4E" />
          <text x="20" y="26" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="13" textAnchor="middle">NTC</text>
        </svg>
      }
    />
  ),
  "Duncan Brothers (Bangladesh) Limited": (
    <LogoTile
      label="Duncan Brothers"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#005A9C" />
          <text x="20" y="17" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="10" textAnchor="middle">DUNCAN</text>
          <text x="20" y="28" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="9" textAnchor="middle">BROTHERS</text>
        </svg>
      }
    />
  ),
  "Sembcorp": (
    <LogoTile
      label="Sembcorp"
      bg="#EFF9FF"
      color="#0079C1"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="12" width="32" height="16" rx="4" fill="#0079C1" />
          <text x="20" y="24" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">SEMBCORP</text>
        </svg>
      }
    />
  ),

  // ──────────────────────────────────────────────
  // CONGLOMERATES & CORPORATE GROUPS
  // ──────────────────────────────────────────────
  "Anwar Group": (
    <LogoTile
      label="Anwar Group"
      bg="#E41E26"
      color="#1C1B1F"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <polygon points="20,4 36,36 4,36" fill="#E41E26" />
          <text x="20" y="30" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">AG</text>
        </svg>
      }
    />
  ),
  "United Group": (
    <LogoTile
      label="United Group"
      bg="#1562A4"
      color="#1562A4"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#1562A4" />
          <polygon points="20,8 28,20 20,32 12,20" fill="#FFFFFF" />
        </svg>
      }
    />
  ),
  "Team Group": (
    <LogoTile
      label="Team Group"
      bg="#1C3F60"
      color="#1C3F60"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#1C3F60" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="18" textAnchor="middle">T</text>
        </svg>
      }
    />
  ),

  // ──────────────────────────────────────────────
  // TEXTILE, APPAREL & CONSUMER GOODS
  // ──────────────────────────────────────────────
  "Auto-Tex Group": (
    <LogoTile
      label="Auto-Tex Group"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#005A9C" />
          <text x="20" y="18" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="10" textAnchor="middle">AUTO</text>
          <text x="20" y="29" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="9" textAnchor="middle">TEX</text>
        </svg>
      }
    />
  ),
  "GMS Composite Knitting Ind. Ltd.": (
    <LogoTile
      label="GMS Composite Knitting"
      bg="#006A4E"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#006A4E" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="14" textAnchor="middle">GMS</text>
        </svg>
      }
    />
  ),
  "Cotton": (
    <LogoTile
      label="Cotton Group"
      bg="#EFF9FF"
      color="#4A90E2"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="16" r="8" fill="#4A90E2" />
          <circle cx="12" cy="22" r="6" fill="#4A90E2" />
          <circle cx="28" cy="22" r="6" fill="#4A90E2" />
          <rect x="18" y="24" width="4" height="10" fill="#6B7280" />
        </svg>
      }
    />
  ),
  "Babylon": (
    <LogoTile
      label="Babylon Group"
      bg="#fff0f0"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <polygon points="20,4 36,32 4,32" fill="#D22630" />
        </svg>
      }
    />
  ),
  "Berger Paints": (
    <LogoTile
      label="Berger Paints"
      bg="#D22630"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" fill="#D22630" />
          <text x="20" y="18" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">BERGER</text>
          <text x="20" y="30" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">PAINTS</text>
        </svg>
      }
    />
  ),
  "Aarong": (
    <LogoTile
      label="Aarong"
      bg="#fffbeb"
      color="#b45309"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#FFC72C" />
          <text x="20" y="25" fill="#78350F" fontFamily="sans-serif" fontWeight="900" fontSize="12" textAnchor="middle">aarong</text>
        </svg>
      }
    />
  ),

  // ──────────────────────────────────────────────
  // TECHNOLOGY & MULTINATIONAL
  // ──────────────────────────────────────────────
  "Samsung": (
    <LogoTile
      label="Samsung"
      bg="#0A5CA6"
      color="#0A5CA6"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <ellipse cx="20" cy="20" rx="18" ry="16" fill="#0A5CA6" />
          <text x="20" y="25" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">SAMSUNG</text>
        </svg>
      }
    />
  ),
  "Singer Bangladesh Limited": (
    <LogoTile
      label="Singer Bangladesh"
      bg="#FFF0F0"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <text x="6" y="32" fill="#D22630" fontFamily="sans-serif" fontWeight="900" fontSize="34">S</text>
        </svg>
      }
    />
  ),
  "IWM (Water Environment & Climate)": (
    <LogoTile
      label="IWM"
      bg="#EFF9FF"
      color="#0079C1"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,28 C12,14 16,14 20,22 C24,30 28,14 36,14" fill="none" stroke="#0079C1" strokeWidth="4" strokeLinecap="round" />
        </svg>
      }
    />
  ),
  "Mercury": (
    <LogoTile
      label="Mercury"
      bg="#0A0A0A"
      color="#0A0A0A"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#1a1a1a" />
          <text x="20" y="25" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">MERCURY</text>
        </svg>
      }
    />
  ),
  "New Zealand Dairy": (
    <LogoTile
      label="New Zealand Dairy"
      bg="#f0fdf4"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <path d="M4,20 Q12,8 20,16 Q28,8 36,20" fill="none" stroke="#009A44" strokeWidth="4" strokeLinecap="round" />
        </svg>
      }
    />
  ),
  "Avery Dennison Paxar Bangladesh": (
    <LogoTile
      label="Avery Dennison"
      bg="#D22630"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="12" width="32" height="16" fill="#D22630" />
          <text x="20" y="24" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="10" textAnchor="middle">AVERY</text>
        </svg>
      }
    />
  ),
  "BEOL (Bangladesh Edible Oil Limited)": (
    <LogoTile
      label="BEOL"
      bg="#fffbeb"
      color="#006A4E"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#FFC72C" />
          <text x="20" y="25" fill="#006A4E" fontFamily="sans-serif" fontWeight="900" fontSize="13" textAnchor="middle">BEOL</text>
        </svg>
      }
    />
  ),
  "EPIC Group": (
    <LogoTile
      label="EPIC Group"
      bg="#0A1D37"
      color="#0A1D37"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" fill="#0A1D37" />
          <text x="20" y="19" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">EPIC</text>
          <text x="20" y="30" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="9" textAnchor="middle">GROUP</text>
        </svg>
      }
    />
  ),
  "Therap (BD) Ltd.": (
    <LogoTile
      label="Therap BD"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#005A9C" />
          <text x="20" y="26" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle">Therap</text>
        </svg>
      }
    />
  ),
  "TVS": (
    <LogoTile
      label="TVS"
      bg="#EEF4FF"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <text x="20" y="28" fill="#005A9C" fontFamily="sans-serif" fontWeight="900" fontSize="22" textAnchor="middle">TVS</text>
        </svg>
      }
    />
  ),
  "Honda": (
    <LogoTile
      label="Honda"
      bg="#FFF0F0"
      color="#D22630"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="2" fill="none" stroke="#D22630" strokeWidth="3" />
          <text x="20" y="28" fill="#D22630" fontFamily="sans-serif" fontWeight="900" fontSize="20" textAnchor="middle">H</text>
        </svg>
      }
    />
  ),
  "CCI Bangladesh": (
    <LogoTile
      label="CCI Bangladesh"
      bg="#EEF4FF"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#005A9C" />
          <text x="20" y="25" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="14" textAnchor="middle">CCI</text>
        </svg>
      }
    />
  ),

  // ──────────────────────────────────────────────
  // EDUCATION
  // ──────────────────────────────────────────────
  "IUB (Independent University Bangladesh)": (
    <LogoTile
      label="Independent University Bangladesh"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#005A9C" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">IUB</text>
        </svg>
      }
    />
  ),
  "UIU (United International University)": (
    <LogoTile
      label="United International University"
      bg="#FF5E00"
      color="#FF5E00"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#FF5E00" />
          <text x="20" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">UIU</text>
        </svg>
      }
    />
  ),
  "East West University": (
    <LogoTile
      label="East West University"
      bg="#005A9C"
      color="#005A9C"
      icon={
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="20" r="16" fill="#005A9C" />
          <text x="20" y="18" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="10" textAnchor="middle">EAST</text>
          <text x="20" y="29" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">WEST</text>
        </svg>
      }
    />
  ),
};

const CLIENTS_DATA: ClientGroup[] = [
  {
    category: "Banking & Financial Services",
    companies: [
      "Standard Chartered Bank",
      "BRAC Bank",
      "Eastern Bank PLC",
      "Dhaka Bank PLC",
      "LankaBangla Finance",
      "Meghna Bank PLC",
      "NRB Commercial Bank Limited",
      "Southeast Bank PLC",
      "Commercial Bank",
      "NCC Bank",
      "IDLC Finance PLC",
      "HBL (Habib Bank)",
      "IDCOL",
      "IPDC Finance",
      "Green Delta Insurance",
      "Pragati Life Insurance Limited",
      "Delta Life Insurance Company Limited"
    ]
  },
  {
    category: "Government & Development Organizations",
    companies: [
      "Bangladesh Parliament",
      "IFRC",
      "Transparency International (Bangladesh)",
      "BURO Bangladesh",
      "World Vision Bangladesh",
      "icddr,b",
      "EGCB (Electricity Generation Company)",
      "BIFPCL"
    ]
  },
  {
    category: "Aviation, Energy & Industrial",
    companies: [
      "Biman Bangladesh Airlines",
      "SHV Energy",
      "Mobil (MJL Bangladesh PLC)",
      "INSEE Cement",
      "NTC",
      "Duncan Brothers (Bangladesh) Limited",
      "Sembcorp"
    ]
  },
  {
    category: "Conglomerates & Corporate Groups",
    companies: [
      "Masco Group",
      "Anwar Group",
      "Navana Group",
      "Standard Group",
      "Next Ventures",
      "TK Group",
      "United Group",
      "Rahimafrooz",
      "Team Group",
      "City Group",
      "Partex Star Group",
      "Samuda Chemical Complex Limited"
    ]
  },
  {
    category: "Textile, Apparel & Consumer Goods",
    companies: [
      "Snowtex",
      "AKIJ Insaf",
      "Auto-Tex Group",
      "GMS Composite Knitting Ind. Ltd.",
      "Cotton",
      "Urmi Group",
      "Thermax Group",
      "Babylon",
      "PDS",
      "Paramount Textile",
      "Savoy",
      "Berger Paints",
      "Aarong"
    ]
  },
  {
    category: "Technology & Multinational",
    companies: [
      "Samsung",
      "Singer Bangladesh Limited",
      "IWM (Water Environment & Climate)",
      "Mercury",
      "New Zealand Dairy",
      "Avery Dennison Paxar Bangladesh",
      "BEOL (Bangladesh Edible Oil Limited)",
      "EPIC Group",
      "Therap (BD) Ltd.",
      "TVS",
      "Honda",
      "CCI Bangladesh"
    ]
  },
  {
    category: "Education",
    companies: [
      "IUB (Independent University Bangladesh)",
      "UIU (United International University)",
      "East West University"
    ]
  }
];

export default function ClientsPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Gradient ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
            <Users className="w-3.5 h-3.5" />
            Proven Partnerships
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)]"
          >
            Our <span className="gradient-text-blue">Clients</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            ESSL is privileged to design, deploy, and manage mission-critical IT infrastructure and cybersecurity solutions 
            for Bangladesh&apos;s leading financial institutions, government secretariats, energy giants, and corporate conglomerates.
          </p>
        </div>

        {/* Categories Section */}
        <div className="space-y-16">
          {CLIENTS_DATA.map((group, groupIdx) => (
            <div key={group.category} className="space-y-6">
              {/* Category Heading */}
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                <div className="w-1.5 h-6 rounded-full bg-primary" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight font-[family-name:var(--font-display)]">
                  {group.category}
                </h2>
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  {group.companies.length}
                </span>
              </div>

              {/* Grid of Companies */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.companies.map((company, companyIdx) => {
                  const hasInlineSvg = !!inlineSvgLogos[company];
                  const logo = logoMapping[company];
                  const hasImageLogo = !!logo;

                  return (
                    <div
                      key={company}
                      className="group flex items-center justify-center bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 cursor-default"
                      id={`client-card-${groupIdx}-${companyIdx}`}
                    >
                      {hasInlineSvg ? (
                        <div className="flex items-center justify-center h-28 w-full relative transition-transform duration-300 group-hover:scale-105">
                          {inlineSvgLogos[company]}
                        </div>
                      ) : hasImageLogo ? (
                        <div className="flex items-center justify-center h-28 w-full relative">
                          <Image
                            src={`/logos/${logo}`}
                            alt={`${company} Logo`}
                            width={140}
                            height={56}
                            className="object-contain max-h-[60px] max-w-[120px] transition-all duration-300 filter grayscale group-hover:grayscale-0"
                            priority={groupIdx === 0 && companyIdx < 6}
                          />
                        </div>
                      ) : (
                        // Clean text-only fallback — styled, intentional, no generic circle icons
                        <div className="flex flex-col items-center justify-center h-28 w-full text-center px-2">
                          <span className="text-xs font-bold text-slate-600 leading-snug transition-colors duration-300 group-hover:text-primary" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
                            {company}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
