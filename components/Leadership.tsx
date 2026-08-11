'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, User } from 'lucide-react';

const executiveTeam = [
  {
    slug: 'golam-mostafa',
    name: 'Md. Golam Mostafa',
    title: 'Managing Director',
    photo: '/team/golam-mostafa 1.jpeg',
  },
  {
    slug: 'partha-sharathe-biswas',
    name: 'Partha Sharathe Biswas',
    title: 'Director',
    photo: '/team/partha-biswas.png',
  },
  {
    slug: 'sarker-mohammad-faisal',
    name: 'Sarker Mohammad Faisal',
    title: 'Director',
    photo: '/team/mohammad-faisal1.jpeg',
  },
];

interface OperationalMember {
  id: number;
  name: string;
  designation?: string;
  department?: string;
  email?: string;
  photo?: string | null;
}

const operationalTeam: OperationalMember[] = [
  {
    id: 1,
    name: 'Probir Kanti Biswas',
    designation: 'Sr. Manager',
    department: 'Supply Chain & Logistics',
    email: 'probir@ensure-bd.com',
    photo: '/team/probir kanti biswas.jpeg',
  },
  {
    id: 2,
    name: 'Anirban Shil',
    designation: 'Deputy Manager',
    department: 'Network & Security',
    email: 'anirban@ensure-bd.com',
    photo: null,
  },
  {
    id: 3,
    name: 'Faruk Ahmed',
    designation: 'Deputy Manager',
    department: 'Cyber Security Solutions',
    email: 'faruk@ensure-bd.com',
    photo: null,
  },
  {
    id: 4,
    name: 'Md. Sahol Imam',
    designation: 'Asst. Manager',
    department: 'Data Center & Virtualization',
    email: 'sahol@ensure-bd.com',
    photo: '/team/md sahol imam.jpeg',
  },
  {
    id: 5,
    name: 'Sourav Debnath Shuvro',
    designation: 'Manager',
    department: 'Pre-Sales',
    email: 'shuvro@ensure-bd.com',
    photo: '/team/sourav debnath shovro.jpeg',
  },
  {
    id: 6,
    name: 'H. M. Towhid',
    designation: 'Deputy Manager',
    department: 'Technology Sales',
    email: 'towhid@ensure-bd.com',
    photo: '/team/H.M Towhid.jpeg',
  },
  {
    id: 7,
    name: 'Rifat Raihan',
    designation: 'Assistant Manager',
    department: 'Pre-Sales',
    email: 'rifat@ensure-bd.com',
    photo: '/team/Rifat Raihan.jpeg',
  },
  {
    id: 8,
    name: 'Md. Atiqur Rahman',
    designation: 'Deputy Manager',
    department: 'Technology Sales',
    email: 'atiq@ensure-bd.com',
    photo: '/team/md atiqur rahaman.jpeg',
  },
  {
    id: 9,
    name: 'Sadequr Rahman',
    designation: 'Asst. Manager',
    department: 'Technology Sales',
    email: 'sadequr@ensure-bd.com',
    photo: null,
  },
  {
    id: 10,
    name: 'Al-Mamun',
    designation: 'Asst. Manager',
    department: 'Accounts & Finance',
    email: 'almamun@ensure-bd.com',
    photo: '/team/AL- Mamun.jpeg',
  },
  {
    id: 11,
    name: 'Ali Akbar Molla',
    designation: 'Asst. Manager',
    department: 'Commercial',
    email: 'akbar@ensure-bd.com',
    photo: '/team/Ali Akbar  Malla.jpeg',
  },
  {
    id: 12,
    name: 'Mehedi Hasan',
    designation: 'Asst. Manager',
    department: 'HR & Admin',
    email: 'mehedi.hasan@ensure-bd.com',
    photo: null,
  },
  {
    id: 13,
    name: 'Akbar Hossain',
    designation: 'Sr.Manager',
    department: 'Business Development',
    email: undefined,
    photo: null,
  },
  {
    id: 14,
    name: 'Md. Hedaet Sheikh',
    designation: 'Solution Architect',
    department: 'Network & Security',
    email: undefined,
    photo: null,
  },
];

function getInitials(name: string): string {
  const words = name.replace(/^(Md\.|H\.|M\.)\s*/i, '').trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  return words[0] ? words[0].substring(0, 2).toUpperCase() : 'TM';
}

function TeamMemberCard({ member, isVisible }: { member: OperationalMember; isVisible: boolean }) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(member.photo) && !imgError;
  const initials = getInitials(member.name);

  return (
    <div
      className={`group flex flex-col rounded-3xl bg-white border border-slate-300 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[rgb(20,109,174)]/30 hover:-translate-y-1.5 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${Math.min(member.id * 40, 500)}ms` }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
        {hasPhoto ? (
          <Image
            src={member.photo!}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200/70">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-200/80 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-bold text-[rgb(20,109,174)] tracking-wider">
                {initials}
              </span>
            </div>
            <User className="w-5 h-5 text-slate-400/80 mt-1" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow text-left">
        <h3 className="text-base font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors leading-snug mb-1">
          {member.name}
        </h3>

        {member.designation ? (
          <p className="text-xs font-semibold text-slate-700">
            {member.designation}
          </p>
        ) : (
          <p className="text-xs font-medium text-slate-400 italic">
            Designation TBD
          </p>
        )}

        {member.department ? (
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            {member.department}
          </p>
        ) : (
          <p className="text-xs text-slate-400 italic mt-0.5">
            Department TBD
          </p>
        )}

        <div className="mt-auto pt-4">
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-[rgb(20,109,174)] hover:text-slate-900 font-medium hover:underline transition-colors max-w-full truncate"
              title={`Send email to ${member.email}`}
            >
              <Mail className="w-3.5 h-3.5 shrink-0 opacity-80" />
              <span className="truncate">{member.email}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 italic">
              <Mail className="w-3.5 h-3.5 shrink-0 opacity-40" />
              Email TBD
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  const blueGridStyle = {
    backgroundColor: 'rgb(20, 109, 174)',
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <>
      <section ref={sectionRef} className="relative w-full py-24 overflow-hidden bg-[#f8fafc]" style={gridBgStyle}>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              Our Executive Team
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Meet the leaders driving security, innovation, and support excellence at ESSL.
            </p>
          </div>

          {/* Executive Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {executiveTeam.map((member) => (
              <Link
                href={`/about/leadership/${member.slug}`}
                key={member.slug}
                className={`group flex flex-col rounded-3xl bg-white border border-slate-300 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[rgb(20,109,174)]/30 hover:-translate-y-1.5 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${member.slug === 'golam-mostafa' ? '0ms' : member.slug === 'partha-sharathe-biswas' ? '120ms' : '240ms'}` }}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-slate-100 border border-slate-200">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[rgb(20,109,174)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    {member.title}
                  </p>
                  <span className="inline-flex items-center justify-center gap-1 mt-4 text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Profile &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            OUR TEAM SECTION (Operational Team Members)
           ───────────────────────────────────────────────────────── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-slate-200/80">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              OUR TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              Our Team
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The people behind ESSL&apos;s day-to-day delivery.
            </p>
          </div>

          {/* Operational Team Grid (Responsive: 1 col mobile, 2 sm, 3 md, 4 lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {operationalTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CTA SECTIONS (Graph paper blue grid background)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 overflow-hidden" style={blueGridStyle}>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">

          {/* Card 1: Come and Work for Us */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 text-center border border-slate-100 bg-white shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-3"
                style={{ letterSpacing: '0.08em' }}
              >
                COME AND WORK FOR US
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-6 text-slate-600">
                Work within a passionate team, focused on developing solutions and selling products
                that push the boundaries of modern enterprise technology. Explore our
                opportunities to make an impact.
              </p>
              <Link
                href="/about/careers"
                className="inline-flex items-center justify-center border border-slate-300 rounded-full px-8 py-2.5 text-[10px] font-semibold tracking-widest text-slate-900 font-mono hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105"
                style={{ letterSpacing: '0.08em' }}
              >
                CAREERS
              </Link>
            </div>
          </div>

          {/* Card 2: Get in Touch */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 bg-white">
            <div className="grid md:grid-cols-[2fr_1.2fr] items-center gap-6 text-left">
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 uppercase font-mono mb-3"
                  style={{ letterSpacing: '0.08em' }}
                >
                  GET IN TOUCH
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  Learn more about how we foster a culture of creativity, support, and innovation
                  to create cutting-edge solutions.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[10px] font-bold tracking-widest text-white font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg bg-[rgb(20,109,174)]"
                  style={{ letterSpacing: '0.08em' }}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

