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
      className="group relative p-4 rounded-2xl border border-white/30 bg-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
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
      <span className="text-[10px] font-medium text-slate-500 mt-0.5">{client.type}</span>
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
    <section className="relative py-14 border-b border-white/15 last:border-0">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-3 font-mono"
            style={{ color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.12)' }}
          >
            {count} Clients
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h2>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors shrink-0"
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
  { name: 'Standard Chartered', type: 'Multinational Bank', logo: '/logos/standard-chartered.png', initials: 'SCB', scale: 'max-h-11 scale-105' },
  { name: 'BRAC Bank', type: 'Private Commercial Bank', logo: '/logos/brac-bank.svg', initials: 'BBL', scale: 'max-h-9 scale-100' },
  { name: 'Eastern Bank (EBL)', type: 'Private Commercial Bank', logo: '/logos/eastern-bank-plc.webp', initials: 'EBL', scale: 'max-h-9 scale-105' },
  { name: 'Dhaka Bank', type: 'Private Commercial Bank', logo: '/logos/dhaka-bank.png', initials: 'DBL', scale: 'max-h-9 scale-105' },
  { name: 'LankaBangla Finance', type: 'Financial Institution', logo: '/logos/lankabangla-finance.png', initials: 'LBF', scale: 'max-h-10 scale-105' },
  { name: 'Meghna Bank', type: 'Private Commercial Bank', logo: '/logos/meghna-bank.png', initials: 'MBL', scale: 'max-h-9 scale-105' },
  { name: 'NRBC Bank', type: 'Private Commercial Bank', logo: '/logos/nrbc-bank.png', initials: 'NRBC', scale: 'max-h-9 scale-105' },
  { name: 'Southeast Bank', type: 'Private Commercial Bank', logo: '/logos/southeast-bank.jpg', initials: 'SEB', scale: 'max-h-10 scale-105' },
  { name: 'Commercial Bank', type: 'Multinational Bank', logo: '/logos/commercial-bank.png', initials: 'CBC', scale: 'max-h-10 scale-105' },
  { name: 'NCC Bank', type: 'Private Commercial Bank', logo: '/logos/ncc-bank.png', initials: 'NCC', scale: 'max-h-10 scale-105' },
  { name: 'HBL (Habib Bank)', type: 'Multinational Bank', logo: '/logos/hbl-habib-bank.png', initials: 'HBL', scale: 'max-h-11 scale-110' },
  { name: 'DBH Finance', type: 'Housing Finance Specialist', logo: '/logos/dbh_logo.png', initials: 'DBH', scale: 'max-h-11 scale-110' },
  { name: 'IDLC Finance', type: 'Financial Institution', logo: '/logos/idlc-finance.png', initials: 'IDLC', scale: 'max-h-12 scale-115' },
  { name: 'IDCOL', type: 'Development Financial Inst.', logo: '/logos/idcol.png', initials: 'IDC', scale: 'max-h-10 scale-105' },
  { name: 'IPDC Finance', type: 'Financial Institution', logo: '/logos/ipdc-finance.png', initials: 'IPDC', scale: 'max-h-12 scale-120' },
  { name: 'Green Delta Insurance', type: 'Non-Life Insurance', logo: '/logos/green-delta-insurance.png', initials: 'GDI', scale: 'max-h-10 scale-105' },
  { name: 'Pragati Life Insurance', type: 'Life Insurance', logo: '/logos/PragatiLifeInsurancePlc.png', initials: 'PLI', scale: 'max-h-9 scale-105' },
  { name: 'Delta Life Insurance', type: 'Life Insurance', logo: '/logos/delta-life-insurance.png', initials: 'DLI', scale: 'max-h-9 scale-105' },
];

const healthcareClients: ClientEntry[] = [
  { name: 'ACI Limited', type: 'Pharmaceuticals & Healthcare', logo: '/logos/aci-plc.png', initials: 'ACI', scale: 'max-h-10 scale-105' },
  { name: 'Aristo Pharma', type: 'Pharmaceuticals', logo: '/logos/aristo-pharma.png', initials: 'APL', scale: 'max-h-10 scale-105' },
  { name: 'Beximco Pharma', type: 'Pharmaceuticals & Exporter', logo: '/logos/beximcopharma.png', initials: 'BPL', scale: 'max-h-10 scale-110' },
  { name: 'Renata PLC', type: 'Pharmaceuticals', logo: '/logos/renata-plc.png', initials: 'RPL', scale: 'max-h-9 scale-105' },
  { name: 'Opsonin Pharma', type: 'Pharmaceuticals', logo: '/logos/opsonin-pharma.png', initials: 'OPL', scale: 'max-h-10 scale-105' },
  { name: 'Healthcare Pharma', type: 'Pharmaceuticals & Clinical', logo: '/logos/Healthcare.png', initials: 'HPL', scale: 'max-h-12 scale-115' },
  { name: 'Sun Pharmaceutical', type: 'Multinational Pharma', logo: '/logos/sun-pharmaceutical.png', initials: 'SUN', scale: 'max-h-12 scale-115' },
  { name: 'Incepta Pharma', type: 'Pharmaceuticals & Vaccines', logo: '/logos/inceptapharma.png', initials: 'IPL', scale: 'max-h-10 scale-110' },
  { name: 'Eskayef (SK+F)', type: 'Pharmaceuticals', logo: '/logos/skf.png', initials: 'SKF', scale: 'max-h-9 scale-105' },
  { name: 'Synovia Pharma', type: 'Pharmaceuticals', logo: '/logos/synovia-logo.png', initials: 'SPL', scale: 'max-h-9 scale-105' },
  { name: 'Ibn Sina Pharma', type: 'Pharmaceuticals & Hospitals', logo: '/logos/ibn-sina.png', initials: 'ISP', scale: 'max-h-10 scale-105' },
  { name: 'Evercare Hospital', type: 'Tertiary Care Hospital', logo: '/logos/evercare-hospita-logo-1.webp', initials: 'EHD', scale: 'max-h-12 scale-115' },
  { name: 'Continental Hospital', type: 'Super Speciality Hospital', logo: '/logos/continental.health.webp', initials: 'CHL', scale: 'max-h-10 scale-105' },
  { name: 'Asgar Ali Hospital', type: 'Tertiary Care Hospital', logo: '/logos/asgaralihospital-1.png', initials: 'AAH', scale: 'max-h-10 scale-105' },
];

const manufacturingClients: ClientEntry[] = [
  { name: 'City Group', type: 'Conglomerate & FMCG', logo: '/logos/city-group-1.png', initials: 'CGL', scale: 'max-h-9 scale-105' },
  { name: 'United Group', type: 'Industrial Conglomerate', logo: '/logos/united-group.png', initials: 'UGL', scale: 'max-h-10 scale-105' },
  { name: 'Epic Group', type: 'Garments & Apparels', logo: '/logos/epic-group-1.png', initials: 'EGL', scale: 'max-h-9 scale-105' },
  { name: 'BEOL', type: 'Edible Oil / FMCG', logo: '/logos/Beol.png', initials: 'BEOL', scale: 'max-h-10 scale-110' },
  { name: 'TK Group', type: 'Industrial Conglomerate', logo: '/logos/TK-Group.png', initials: 'TKG', scale: 'max-h-11 scale-110' },
  { name: 'Standard Group', type: 'Apparel & Textile', logo: '/logos/standarad.png', initials: 'STG', scale: 'max-h-9 scale-105' },
  { name: 'DuncanBD', type: 'Industrial & Tea', logo: '/logos/duncan-brothers.jpg', initials: 'DBL', scale: 'max-h-8 scale-100' },
  { name: 'Urmi Group', type: 'Textile & Garments', logo: '/logos/urmi-logo-1-1-2.png', initials: 'URM', scale: 'max-h-10 scale-105' },
  { name: 'Coca-Cola', type: 'Beverage & FMCG', logo: '/logos/Coke-company-logo-black.svg', initials: 'KO', scale: 'max-h-8 scale-105' },
  { name: 'Expo Group', type: 'Freight & Logistics', logo: '/logos/expo.svg', initials: 'EXP', scale: 'max-h-10 scale-105' },
  { name: 'GMS Composite', type: 'Knitting & Textiles', logo: '/logos/GMS.png', initials: 'GMS', scale: 'max-h-8 scale-100' },
  { name: 'Crown Cement', type: 'Heavy Building Materials', logo: '/logos/crown-cement.svg', initials: 'CCL', scale: 'max-h-10 scale-105' },
  { name: 'MGL', type: 'Industrial Manufacturing', logo: '/logos/mgl.png', initials: 'MGL', scale: 'max-h-9 scale-105' },
  { name: 'Sembcorp', type: 'Energy & Utilities', logo: '/logos/sembcorp-logo.svg', initials: 'SMB', scale: 'max-h-9 scale-105' },
  { name: 'Masco Group', type: 'Knitwear & Manufacturing', logo: '/logos/masco1.png', initials: 'MAS', scale: 'max-h-11 scale-110' },
  { name: 'Marico', type: 'Consumer Goods & FMCG', logo: '/logos/marico.webp', initials: 'MRC', scale: 'max-h-11 scale-110' },
  { name: 'Singer (Beko)', type: 'Consumer Electronics', logo: '/logos/singer.png', initials: 'SNG', scale: 'max-h-9 scale-105' },
  { name: 'Windy Group', type: 'Apparel & Export Manufacturing', logo: '/logos/windy.png', initials: 'WND', scale: 'max-h-10 scale-105' },
  { name: 'Berger Paints', type: 'Paints & Coatings', logo: '/logos/berger-paints.png', initials: 'BPB', scale: 'max-h-10 scale-105' },
  { name: 'Anwar Group', type: 'Industrial Conglomerate', logo: '/logos/anwar-group-12.jpg', initials: 'AGL', scale: 'max-h-10 scale-105' },
  { name: 'Navana Group', type: 'Industrial & Automotive', logo: '/logos/navana.png', initials: 'NVN', scale: 'max-h-10 scale-105' },
  { name: 'Partex Star Group', type: 'Consumer & Manufacturing', logo: '/logos/partex-logo.png', initials: 'PSG', scale: 'max-h-9 scale-105' },
  { name: 'Akij Group', type: 'Industrial Conglomerate', logo: '/logos/Akij-Insaf-logo.472a84eedbb63231b165.png', initials: 'AKJ', scale: 'max-h-11 scale-110' },
  { name: 'Snowtex Outerwear', type: 'Apparel & Export Mfg', logo: '/logos/snowtex.png', initials: 'STX', scale: 'max-h-9 scale-105' },
  { name: 'Rahimafrooz', type: 'Energy & Storage Solutions', logo: '/logos/rahimafrooz.png', initials: 'RAF', scale: 'max-h-9 scale-105' },
  { name: 'Savoy Ice Cream', type: 'FMCG & Food Processing', logo: '/logos/savoy.png', initials: 'SVY', scale: 'max-h-10 scale-105' },
  { name: 'PDS Multinational', type: 'Global Sourcing & Apparel', logo: '/logos/pds-logo-1.svg', initials: 'PDS', scale: 'max-h-10 scale-105' },
  { name: 'Thermax Group', type: 'Textiles & Industrial Infra', logo: '/logos/theremax-1.png', initials: 'TMX', scale: 'max-h-10 scale-105' },
];

const educationClients: ClientEntry[] = [
  { name: 'IUB', type: 'Private University', logo: '/logos/iub.webp', initials: 'IUB', scale: 'max-h-10 scale-105' },
  { name: 'UIU', type: 'Private University', logo: '/logos/uiu-2.png', initials: 'UIU', scale: 'max-h-10 scale-105' },
  { name: 'BRAC University', type: 'Private University', logo: '/logos/brac-university.svg', initials: 'BRACU', scale: 'max-h-10 scale-105' },
  { name: 'BUFT', type: 'Private University', logo: '/logos/buft_new_logo.png', initials: 'BUFT', scale: 'max-h-11 scale-110' },
  { name: 'EWU', type: 'Private University', logo: '/logos/Ewubd.png', initials: 'EWU', scale: 'max-h-10 scale-105' },
];

const governmentClients: ClientEntry[] = [
  { name: 'Bangladesh Biman', type: 'National Airline', logo: '/logos/bangladesh-biman.png', initials: 'BBA', scale: 'max-h-10 scale-105' },
  { name: 'EGCB', type: 'Power Generation', logo: '/logos/egcb.png', initials: 'EGCB', scale: 'max-h-9 scale-105' },
  { name: 'IDCOL', type: 'Infrastructure Finance', logo: '/logos/idcol.png', initials: 'IDCOL', scale: 'max-h-10 scale-105' },
  { name: 'Bangladesh Parliament', type: 'National Legislature', logo: '/logos/parliament.webp', initials: 'PARL', scale: 'max-h-10 scale-105' },
  { name: 'BIFPCL', type: 'Power Generation', logo: '/logos/bifplc.png', initials: 'BIFPCL', scale: 'max-h-10 scale-105' },
];

const ngoClients: ClientEntry[] = [
  { name: 'ASA', type: 'Microfinance & Development', logo: '/logos/asa-logo-vertical.png', initials: 'ASA', scale: 'max-h-14 scale-105' },
  { name: 'BRAC', type: 'Development NGO', logo: '/logos/brac-ngo.png', initials: 'BRAC', scale: 'max-h-10 scale-105' },
  { name: 'Shakti Foundation', type: 'Microfinance NGO', logo: '/logos/shakti.png', initials: 'SHK', scale: 'max-h-10 scale-105' },
  { name: 'BEES', type: 'Environmental NGO', logo: '/logos/BEES-Logo-Home-Page-2.jpg', initials: 'BEES', scale: 'max-h-10 scale-105' },
];

const retailClients: ClientEntry[] = [
  { name: 'Aarong', type: 'Fashion & Lifestyle Retail', logo: '/logos/aarong-111.png', initials: 'ARG', scale: 'max-h-10 scale-105' },
  { name: 'Alfamart', type: 'Convenience Retail Chain', logo: '/logos/alfamart.png', initials: 'AFM', scale: 'max-h-10 scale-105' },
  { name: 'Shwapno', type: 'Supermarket Chain', logo: '/logos/shwapno_logo.png', initials: 'SWP', scale: 'max-h-9 scale-105' },
  { name: 'Agora', type: 'Supermarket Chain', logo: '/logos/agora.png', initials: 'AGR', scale: 'max-h-10 scale-105' },
];

const itSoftwareClients: ClientEntry[] = [
  { name: 'Brain Station 23', type: 'Software Exporter', logo: '/logos/brain-station.webp', initials: 'BS23', scale: 'max-h-10 scale-105' },
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
    <div
      className="relative min-h-screen pt-28 pb-20"
      style={{
        backgroundColor: 'rgb(22, 120, 191)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M0 0H48M0 0V48' fill='none' stroke='rgba(255,255,255,0.10)' stroke-width='0.75'/%3E%3C/svg%3E")`,
        backgroundSize: '48px 48px',
        backgroundRepeat: 'repeat',
      }}
    >

      {/* Page Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/30 bg-white/15 mb-6 font-mono">
            <Users className="w-3.5 h-3.5" />
            {totalClients}+ Client Logos Across 8 Industries
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Clients We&apos;re <span className="text-white/80">Proud to Serve</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            ESSL designs, deploys, and manages mission-critical IT infrastructure and cybersecurity
            for Bangladesh&apos;s leading enterprises across every major sector.
          </p>

          {/* Industry quick-jump links */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {industries.map((ind) => (
              <a
                key={ind.title}
                href={`#${ind.href.split('/').pop()}`}
                className="px-3 py-1.5 rounded-full border border-white/30 bg-white/15 text-xs font-semibold text-white/90 hover:bg-white/25 hover:text-white transition-all"
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
