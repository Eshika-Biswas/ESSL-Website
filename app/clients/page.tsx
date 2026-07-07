import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Clients | ESSL',
  description: 'ESSL is the trusted IT infrastructure and cybersecurity partner for Bangladesh\'s leading banks, government secretariats, MNCs, and corporate conglomerates.',
  keywords: ['ESSL Clients', 'Ensure Support Service Limited Clients', 'Enterprise Clients Bangladesh', 'IT Infrastructure Clients'],
};

interface ClientGroup {
  category: string;
  companies: string[];
}

const logoMapping: Record<string, string> = {
  "AKIJ Insaf": "Akij-Insaf-logo.472a84eedbb63231b165.png",
  "Anwar Group": "anwar group.png",
  "City Group": "citygroup.png",
  "Crown Cement": "crown cement.png",
  "Masco Group": "masco.png",
  "Navana Group": "navana.png",
  "Next Ventures": "next ventures.png",
  "Paramount Textile": "paramount.png",
  "Partex Star Group": "partex star.png",
  "PDS": "pds.png",
  "Rahimafrooz": "rahimafrooz.png",
  "Samuda Chemical Complex Limited": "samuda.png",
  "Savoy": "savoy.png",
  "Snowtex": "snowtex.png",
  "Standard Group": "standarad.png",
  "Thermax Group": "theremax.png",
  "TK Group": "TK-Group-1-2.png",
  "United Group": "united.png",
  "Urmi Group": "urmi-logo-1-1-2.png",
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
      "Bangladesh Parliament Secretariat",
      "IFRC",
      "Transparency International Bangladesh",
      "BURO Bangladesh",
      "World Vision Bangladesh",
      "icddr,b",
      "EGCB (Electricity Generation Company of Bangladesh)",
      "BIFPCL (Bangladesh-India Friendship Power Company)"
    ]
  },
  {
    category: "Aviation, Energy & Industrial",
    companies: [
      "Biman Bangladesh Airlines",
      "SHV Energy",
      "Mobil (MJL Bangladesh PLC)",
      "INSEE Cement",
      "Crown Cement",
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
                  const logo = logoMapping[company];
                  const hasLogo = !!logo;

                  return (
                    <div
                      key={company}
                      className="group flex items-center justify-center bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 cursor-default"
                      id={`client-card-${groupIdx}-${companyIdx}`}
                    >
                      {hasLogo ? (
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
                        <div className="flex flex-col items-center justify-center h-28 w-full text-center">
                          <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center mb-3 border border-slate-100 text-slate-400 group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors duration-300">
                            <Building2 className="w-4.5 h-4.5" />
                          </div>
                          <span className="text-xs font-semibold text-slate-700 leading-tight px-1 line-clamp-2 transition-colors duration-300 group-hover:text-slate-900">
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
