import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Leader {
  slug: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
}

const leaders: Leader[] = [
  {
    slug: 'golam-mostafa',
    name: 'Md. Golam Mostafa',
    title: 'Managing Director',
    photo: '/team/golam-mostafa.png',
    bio: 'Md. Golam Mostafa, as the Managing Director of Ensure Support Services Limited (ESSL), leads the overall strategic vision, growth, and technology operations. With extensive experience in steering enterprise IT and infrastructure services, he is dedicated to delivering innovation, value, and integrity for ESSL\'s corporate partners and clients across Bangladesh.',
  },
  {
    slug: 'partha-sharathe-biswas',
    name: 'Partha Sharathe Biswas',
    title: 'Director',
    photo: '/team/partha-biswas.png',
    bio: 'Partha Sharathe Biswas serves as a Director at Ensure Support Services Limited (ESSL), focusing on service delivery excellence, system integration, and project management. He oversees critical enterprise implementations and client relations, ensuring the highest standards of support and operational readiness.',
  },
  {
    slug: 'sarker-mohammad-faisal',
    name: 'Sarker Mohammad Faisal',
    title: 'Director',
    photo: '/team/mohammad-faisal.png',
    bio: 'Sarker Mohammad Faisal serves as a Director at Ensure Support Services Limited (ESSL), driving corporate partnerships, vendor relations, and technology consulting strategy. He is instrumental in building ESSL\'s cloud, DevOps, and cybersecurity solution roadmap with global OEMs.',
  },
];

export async function generateStaticParams() {
  return leaders.map((l) => ({
    slug: l.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const leader = leaders.find((l) => l.slug === slug);
  if (!leader) return { title: 'Leader Profile | ESSL' };
  return {
    title: `${leader.name} — ${leader.title} | ESSL`,
    description: `Profile of ${leader.name}, ${leader.title} at Ensure Support Services Limited (ESSL).`,
  };
}

export default async function LeaderDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leader = leaders.find((l) => l.slug === slug);

  if (!leader) {
    notFound();
  }

  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 pt-36 pb-24" style={gridBgStyle}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/about/leadership"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[rgb(20,109,174)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Leadership
          </Link>
        </div>

        {/* Profile Card */}
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-12 lg:gap-16 items-start bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          {/* Photo Container */}
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
            <Image
              src={leader.photo}
              alt={leader.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-[center_15%]"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col h-full justify-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-4 w-fit">
              ESSL EXECUTIVE
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 font-[family-name:var(--font-display)]">
              {leader.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-slate-600 mb-6">
              {leader.title}
            </p>

            <div className="w-12 h-1 bg-[rgb(20,109,174)]/30 rounded-full mb-8" />

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Biography &amp; Vision</h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg whitespace-pre-line">
              {leader.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
