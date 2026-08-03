import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Clients | ESSL',
  description:
    "ESSL is the trusted IT infrastructure and cybersecurity partner for Bangladesh's leading banks, government agencies, enterprises, manufacturers, retailers, and NGOs.",
  keywords: [
    'ESSL Clients',
    'Ensure Support Service Limited Clients',
    'Enterprise Clients Bangladesh',
    'IT Infrastructure Clients',
  ],
};

// ─── Shared Logo Card Component ────────────────────────────────────────────────
interface ClientEntry {
  name: string;
  type: string;
  logo: string;
  initials: string;
  scale?: string;
}

function ClientCard({ client, accentColor = 'rgb(20,109,174)' }: { client: ClientEntry; accentColor?: string }) {
  return (
    <div
      className="group relative p-4 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/80 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
      style={{ '--accent': accentColor } as React.CSSProperties}
    >
      {client.logo ? (
        <div className="h-14 flex items-center justify-center mb-2 w-full px-2">
          <Image
            src={encodeURI(client.logo)}
            alt={`${client.name} logo`}
            width={140}
            height={48}
            className={`w-auto object-contain ${client.scale || 'max-h-10'}`}
          />
        </div>
      ) : (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm mb-2 transition-colors"
          style={{ background: `${accentColor}1a`, color: accentColor }}
        >
          {client.initials}
        </div>
      )}
      <span
        className="text-xs font-bold text-slate-800 leading-tight transition-colors group-hover:text-[var(--accent)]"
      >
        {client.name}
      </span>
      <span className="text-[10px] font-medium text-slate-400 mt-0.5">{client.type}</span>
    </div>
  );
}

// ─── Industry Section Component ────────────────────────────────────────────────
function IndustrySection({
  title,
  href,
  count,
  accentColor = 'rgb(20,109,174)',
  clients,
}: {
  title: string;
  href: string;
  count: number;
  accentColor?: string;
  clients: ClientEntry[];
}) {
  return (
    <section className="relative py-14 border-b border-slate-200 last:border-0">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-3 font-mono"
            style={{ color: accentColor, borderColor: `${accentColor}33`, background: `${accentColor}0d` }}
          >
            {count} Clients
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h2>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors shrink-0"
          style={{ color: accentColor }}
        >
          View Industry Page
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.name} client={client} accentColor={accentColor} />
        ))}
      </div>
    </section>
  );
}

// ─── Client Data (mirrors each Industries page's Customers section exactly) ───

const bankingClients: ClientEntry[] = [
  { name: 'Standard Chartered', type: 'International Bank', logo: '/logos/standard-chartered.png', initials: 'SCB', scale: 'max-h-8' },
  { name: 'BRAC Bank', type: 'Commercial Bank', logo: '/logos/brac-bank.png', initials: 'BB', scale: 'max-h-10' },
  { name: 'Eastern Bank (EBL)', type: 'Commercial Bank', logo: '/logos/eastern-bank.png', initials: 'EBL', scale: 'max-h-9' },
  { name: 'Dhaka Bank', type: 'Commercial Bank', logo: '/logos/dhaka-bank.png', initials: 'DB', scale: 'max-h-10' },
  { name: 'LankaBangla Finance', type: 'NBFI', logo: '/logos/lankabangla.png', initials: 'LBF', scale: 'max-h-9' },
  { name: 'Meghna Bank', type: 'Commercial Bank', logo: '/logos/meghna-bank.png', initials: 'MGB', scale: 'max-h-10' },
  { name: 'NRBC Bank', type: 'Commercial Bank', logo: '/logos/nrbc-bank.png', initials: 'NRBC', scale: 'max-h-10' },
  { name: 'Southeast Bank', type: 'Commercial Bank', logo: '/logos/southeast-bank.png', initials: 'SEB', scale: 'max-h-9' },
  { name: 'Commercial Bank of Ceylon', type: 'International Bank', logo: '/logos/commercial-bank.png', initials: 'CBC', scale: 'max-h-10' },
  { name: 'NCC Bank', type: 'Commercial Bank', logo: '/logos/ncc-bank.png', initials: 'NCC', scale: 'max-h-10' },
  { name: 'HBL', type: 'International Bank', logo: '/logos/hbl.png', initials: 'HBL', scale: 'max-h-10' },
  { name: 'DBH Finance', type: 'Housing Finance', logo: '/logos/dbh_logo.png', initials: 'DBH', scale: 'max-h-10' },
  { name: 'IDLC Finance', type: 'NBFI', logo: '/logos/idlc-finance.png', initials: 'IDLC', scale: 'max-h-9' },
  { name: 'IDCOL', type: 'Infrastructure Finance', logo: '/logos/idcol.png', initials: 'IDCOL', scale: 'max-h-10' },
  { name: 'IPDC Finance', type: 'NBFI', logo: '/logos/IPDC Finance.png', initials: 'IPDC', scale: 'max-h-9' },
  { name: 'Green Delta Insurance', type: 'General Insurance', logo: '/logos/green-delta-insurance.png', initials: 'GDI', scale: 'max-h-10' },
  { name: 'Pragati Life Insurance', type: 'Life Insurance', logo: '/logos/pragati-life.png', initials: 'PLI', scale: 'max-h-10' },
  { name: 'Delta Life Insurance', type: 'Life Insurance', logo: '/logos/delta-life.png', initials: 'DLI', scale: 'max-h-10' },
];

const healthcareClients: ClientEntry[] = [
  { name: 'ACI Limited', type: 'Pharmaceuticals & FMCG', logo: '/logos/aci-plc.png', initials: 'ACI', scale: 'max-h-9 scale-105' },
  { name: 'Aristo Pharma', type: 'Pharmaceuticals', logo: '/logos/aristo-pharma.png', initials: 'AP', scale: 'max-h-10 scale-105' },
  { name: 'Beximco Pharma', type: 'Pharmaceuticals & Biotech', logo: '/logos/beximco.png', initials: 'BXP', scale: 'max-h-10 scale-105' },
  { name: 'Renata PLC', type: 'Pharmaceuticals', logo: '/logos/renata.png', initials: 'RP', scale: 'max-h-9 scale-100' },
  { name: 'Opsonin Pharma', type: 'Pharmaceuticals', logo: '/logos/opsonin-pharma.png', initials: 'OPP', scale: 'max-h-9 scale-105' },
  { name: 'Healthcare Pharma', type: 'Pharmaceuticals', logo: '/logos/healthcare-pharma.png', initials: 'HCP', scale: 'max-h-10 scale-105' },
  { name: 'Sun Pharma', type: 'Multinational Pharma', logo: '/logos/sun-pharma.png', initials: 'SP', scale: 'max-h-8 scale-105' },
  { name: 'Incepta Pharma', type: 'Pharmaceuticals', logo: '/logos/incepta-pharma.png', initials: 'INC', scale: 'max-h-9 scale-105' },
  { name: 'Eskayef (SK+F)', type: 'Pharmaceuticals', logo: '/logos/eskayef.png', initials: 'SKF', scale: 'max-h-10 scale-105' },
  { name: 'Synovia Pharma', type: 'Specialty Pharma', logo: '/logos/synovia-pharma.png', initials: 'SYN', scale: 'max-h-9 scale-105' },
  { name: 'Ibn Sina', type: 'Hospitals & Diagnostics', logo: '/logos/ibn-sina.png', initials: 'IBS', scale: 'max-h-10 scale-105' },
  { name: 'Evercare Hospital', type: 'Hospitals & Diagnostics', logo: '/logos/evercare-hospita-logo.webp', initials: 'EVC', scale: 'max-h-10 scale-105' },
  { name: 'Continental Hospital', type: 'Hospitals & Diagnostics', logo: '/logos/continental-hospital.png', initials: 'CH', scale: 'max-h-10 scale-105' },
  { name: 'Asgar Ali Hospital', type: 'Hospitals & Diagnostics', logo: '/logos/asgar-ali-hospital.png', initials: 'AAH', scale: 'max-h-10 scale-105' },
];

const manufacturingClients: ClientEntry[] = [
  { name: 'City Group', type: 'FMCG & Foods', logo: '/logos/citygroup.png', initials: 'CG', scale: 'max-h-10 scale-105' },
  { name: 'United Group', type: 'Apparel & Textiles', logo: '/logos/united-group.png', initials: 'UG', scale: 'max-h-9 scale-105' },
  { name: 'Epic Group', type: 'Garments & Apparel', logo: '/logos/epic-group.png', initials: 'EG', scale: 'max-h-10 scale-105' },
  { name: 'Veolmedtech', type: 'Medical Devices Mfg', logo: '/logos/veolmedtech.png', initials: 'VMT', scale: 'max-h-10 scale-105' },
  { name: 'TK Group', type: 'FMCG & Consumer Goods', logo: '/logos/TK-Group-1-2.png', initials: 'TKG', scale: 'max-h-10 scale-105' },
  { name: 'Standard Group', type: 'Garments & Textiles', logo: '/logos/standarad.png', initials: 'STG', scale: 'max-h-9 scale-100' },
  { name: 'Duncan Brothers BD', type: 'Tea & Agro-Industry', logo: '/logos/duncanbd.png', initials: 'DB', scale: 'max-h-10 scale-105' },
  { name: 'Urmi Group', type: 'Garments & Textiles', logo: '/logos/urmi-logo-1-1-2.png', initials: 'URM', scale: 'max-h-9 scale-105' },
  { name: 'Coca-Cola', type: 'Beverages & FMCG', logo: '/logos/coca-cola.png', initials: 'CC', scale: 'max-h-10 scale-105' },
  { name: 'Expo Group', type: 'Garments & Textiles', logo: '/logos/expo-group.png', initials: 'EXP', scale: 'max-h-10 scale-105' },
  { name: 'GMS Composite', type: 'Knitting & Garments', logo: '/logos/gms-composite.png', initials: 'GMS', scale: 'max-h-9 scale-105' },
  { name: 'Crown Cement', type: 'Building Materials', logo: '/logos/crown-cement.png', initials: 'CRC', scale: 'max-h-10 scale-105' },
  { name: 'MGL', type: 'Gas Distribution', logo: '/logos/mgl.png', initials: 'MGL', scale: 'max-h-10 scale-105' },
  { name: 'Sembcorp', type: 'Energy & Utilities', logo: '/logos/sembcorp.png', initials: 'SBC', scale: 'max-h-9 scale-100' },
  { name: 'Masco Group', type: 'Home & Construction', logo: '/logos/masco.png', initials: 'MSC', scale: 'max-h-10 scale-105' },
  { name: 'Marico', type: 'FMCG & Consumer Goods', logo: '/logos/marico.png', initials: 'MRC', scale: 'max-h-9 scale-105' },
  { name: 'Singer (Beko)', type: 'Electronics & Appliances', logo: '/logos/singer.png', initials: 'SNG', scale: 'max-h-10 scale-105' },
  { name: 'Windy Group', type: 'Energy & Renewables', logo: '/logos/windy.png', initials: 'WDY', scale: 'max-h-9 scale-105' },
  { name: 'Berger Paints', type: 'Paints & Coatings', logo: '/logos/berger-paints.png', initials: 'BP', scale: 'max-h-10 scale-105' },
  { name: 'Anwar Group', type: 'Industrial Conglomerate', logo: '/logos/anwar-group 12.jpg', initials: 'AGL', scale: 'max-h-10 scale-105' },
  { name: 'Navana Group', type: 'Industrial & Automotive', logo: '/logos/navana.png', initials: 'NVN', scale: 'max-h-10 scale-105' },
  { name: 'Partex Star Group', type: 'Consumer & Manufacturing', logo: '/logos/partex-logo.png', initials: 'PSG', scale: 'max-h-9 scale-105' },
  { name: 'Akij Group', type: 'Industrial Conglomerate', logo: '/logos/Akij-Insaf-logo.472a84eedbb63231b165.png', initials: 'AKJ', scale: 'max-h-11 scale-110' },
  { name: 'Snowtex Outerwear', type: 'Apparel & Export Mfg', logo: '/logos/snowtex.png', initials: 'STX', scale: 'max-h-9 scale-105' },
  { name: 'Rahimafrooz', type: 'Energy & Storage Solutions', logo: '/logos/rahimafrooz.png', initials: 'RAF', scale: 'max-h-9 scale-105' },
  { name: 'Savoy Ice Cream', type: 'FMCG & Food Processing', logo: '/logos/savoy.png', initials: 'SVY', scale: 'max-h-10 scale-105' },
  { name: 'PDS Multinational', type: 'Global Sourcing & Apparel', logo: '/logos/pds-logo-1.svg', initials: 'PDS', scale: 'max-h-10 scale-105' },
  { name: 'Thermax Group', type: 'Textiles & Industrial Infra', logo: '/logos/theremax 1.png', initials: 'TMX', scale: 'max-h-10 scale-105' },
];

const educationClients: ClientEntry[] = [
  { name: 'IUB', type: 'Private University', logo: '/logos/iub.webp', initials: 'IUB', scale: 'max-h-10 scale-105' },
  { name: 'UIU', type: 'Private University', logo: '/logos/uiu 2.png', initials: 'UIU', scale: 'max-h-10 scale-105' },
  { name: 'BRAC University', type: 'Private University', logo: '/logos/brac-university.svg', initials: 'BRACU', scale: 'max-h-10 scale-105' },
  { name: 'BUFT', type: 'Private University', logo: '/logos/buft_new_logo.png', initials: 'BUFT', scale: 'max-h-11 scale-110' },
];

const governmentClients: ClientEntry[] = [
  { name: 'Bangladesh Biman', type: 'National Airline', logo: '/logos/Bangladesh Biman.PNG', initials: 'BBA', scale: 'max-h-10 scale-105' },
  { name: 'EGCB', type: 'Power Generation', logo: '/logos/egcb.png', initials: 'EGCB', scale: 'max-h-9 scale-105' },
  { name: 'IDCOL', type: 'Infrastructure Finance', logo: '/logos/idcol.png', initials: 'IDCOL', scale: 'max-h-10 scale-105' },
  { name: 'Bangladesh Parliament', type: 'National Legislature', logo: '/logos/parliament.webp', initials: 'PARL', scale: 'max-h-10 scale-105' },
  { name: 'BIFPCL', type: 'Power Generation', logo: '/logos/bifplc.png', initials: 'BIFPCL', scale: 'max-h-10 scale-105' },
];

const ngoClients: ClientEntry[] = [
  { name: 'ASA', type: 'Microfinance & Development', logo: '/logos/asa-logo-vertical.png', initials: 'ASA', scale: 'max-h-14 scale-105' },
  { name: 'BRAC', type: 'Development NGO', logo: '/logos/brac ngo.png', initials: 'BRAC', scale: 'max-h-10 scale-105' },
  { name: 'Shakti Foundation', type: 'Microfinance NGO', logo: '/logos/shakti.png', initials: 'SHK', scale: 'max-h-10 scale-105' },
  { name: 'BEES', type: 'Environmental NGO', logo: '/logos/BEES-Logo-Home-Page-2.jpg', initials: 'BEES', scale: 'max-h-10 scale-105' },
];

const retailClients: ClientEntry[] = [
  { name: 'Aarong', type: 'Fashion & Lifestyle Retail', logo: '/logos/aarong 111.png', initials: 'ARG', scale: 'max-h-10 scale-105' },
  { name: 'Alfamart', type: 'Convenience Retail Chain', logo: '/logos/alfamart.png', initials: 'AFM', scale: 'max-h-10 scale-105' },
  { name: 'Shwapno', type: 'Supermarket Chain', logo: '/logos/shwapno_logo.png', initials: 'SWP', scale: 'max-h-9 scale-105' },
  { name: 'Agora', type: 'Supermarket Chain', logo: '/logos/agora.png', initials: 'AGR', scale: 'max-h-10 scale-105' },
];

const itSoftwareClients: ClientEntry[] = [
  { name: 'Brain Station 23', type: 'Software Exporter', logo: '/logos/brain station.webp', initials: 'BS23', scale: 'max-h-10 scale-105' },
  { name: 'TechnoNext', type: 'Software & Cloud Solutions', logo: '/logos/technonext.webp', initials: 'TN', scale: 'max-h-10 scale-105' },
  { name: 'IT Consultants Ltd', type: 'Fintech & Payment Systems', logo: '/logos/itcl-logo-new.png', initials: 'ITCL', scale: 'max-h-12 scale-125' },
  { name: 'SouthTech Group', type: 'Enterprise Software', logo: '/logos/southtech-logo.svg', initials: 'ST', scale: 'max-h-9 scale-110' },
  { name: 'Next Ventures', type: 'Fintech & Tech Venture', logo: '/logos/next-ventures.png', initials: 'NV', scale: 'max-h-9 scale-105' },
];

// ─── Industry Sections Config ─────────────────────────────────────────────────
const industries = [
  {
    title: 'Banking & Financial Services',
    href: '/industries/banking-financial-services',
    accentColor: 'rgb(20,109,174)',
    clients: bankingClients,
  },
  {
    title: 'Healthcare & Pharmaceuticals',
    href: '/industries/healthcare-pharmaceuticals',
    accentColor: 'rgb(5,150,105)',
    clients: healthcareClients,
  },
  {
    title: 'Manufacturing & Industrial',
    href: '/industries/manufacturing-industrial',
    accentColor: 'rgb(217,119,6)',
    clients: manufacturingClients,
  },
  {
    title: 'Education & Research',
    href: '/industries/education-research',
    accentColor: 'rgb(99,102,241)',
    clients: educationClients,
  },
  {
    title: 'Government & Public Sector',
    href: '/industries/government-public-sector',
    accentColor: 'rgb(15,118,110)',
    clients: governmentClients,
  },
  {
    title: 'NGOs & Development',
    href: '/industries/ngos-development',
    accentColor: 'rgb(220,38,38)',
    clients: ngoClients,
  },
  {
    title: 'Retail & E-Commerce',
    href: '/industries/retail-ecommerce',
    accentColor: 'rgb(234,88,12)',
    clients: retailClients,
  },
  {
    title: 'IT & Software',
    href: '/industries/it-software',
    accentColor: 'rgb(99,102,241)',
    clients: itSoftwareClients,
  },
];

const totalClients = industries.reduce((sum, ind) => sum + ind.clients.length, 0);

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ClientsPage() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] pt-28 pb-20">

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(15, 23, 42, 0.04) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Page Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[rgb(20,109,174)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6 font-mono">
            <Users className="w-3.5 h-3.5" />
            {totalClients}+ Client Logos Across 8 Industries
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Clients We&apos;re <span className="text-[rgb(20,109,174)]">Proud to Serve</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            ESSL designs, deploys, and manages mission-critical IT infrastructure and cybersecurity 
            for Bangladesh&apos;s leading enterprises across every major sector.
          </p>

          {/* Industry quick-jump links */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {industries.map((ind) => (
              <a
                key={ind.title}
                href={`#${ind.href.split('/').pop()}`}
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:border-[rgb(20,109,174)]/40 hover:text-[rgb(20,109,174)] hover:bg-[rgb(20,109,174)]/5 transition-all"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </div>

        {/* Industry Sections */}
        <div>
          {industries.map((ind) => (
            <div key={ind.title} id={ind.href.split('/').pop()}>
              <IndustrySection
                title={ind.title}
                href={ind.href}
                count={ind.clients.length}
                accentColor={ind.accentColor}
                clients={ind.clients}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
