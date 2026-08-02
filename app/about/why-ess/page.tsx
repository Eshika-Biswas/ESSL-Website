import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why ESS | ESSL',
  description: 'Learn why leading enterprises trust Ensure Support Services Limited (ESSL) for critical IT infrastructure and cybersecurity.',
};

export default function WhyEssPage() {
  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="relative w-full min-h-screen pt-36 pb-20 flex flex-col justify-start bg-[#f8fafc] text-slate-900" style={gridBgStyle}>
      {/* Decorative radial glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '12%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,109,174,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          left: '10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,109,174,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
            Why ESS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight text-slate-900 mb-6 font-[family-name:var(--font-display)]">
            Partnering for Technology Excellence
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Ensure Support Services Limited (ESSL) is Bangladesh&apos;s leading systems integration and managed services provider. We deliver industry-leading expertise, robust cybersecurity, and mission-critical support tailored to elevate your enterprise IT infrastructure.
          </p>
        </div>

        {/* Core Value Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[rgb(20,109,174)]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-display)]">Trust & Security</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design and deploy state-of-the-art cybersecurity and resilient network infrastructure to protect your operations 24/7.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[rgb(20,109,174)]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-display)]">Agile Integration</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              From on-premises data centers to cloud infrastructure, we integrate systems with high speed, accuracy, and minimum downtime.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-[rgb(20,109,174)]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-display)]">Customer First</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are dedicated to long-term client success, offering flexible service agreements and dedicated support teams.
            </p>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="border border-slate-200/80 bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)]">
              Our Commitment to Bangladesh&apos;s Digital Future
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              As a certified partner of global tech giants like Cisco, Fortinet, Palo Alto, CrowdStrike, and Dell, ESSL bridges the gap between complex enterprise technologies and local business demands. We believe in building secure, scalable environments that empower financial institutions, government sectors, and corporations to thrive.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(20,109,174)] hover:text-slate-900 transition-colors duration-200 group"
            >
              Get in Touch with Our Experts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
