import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | ESSL',
  description: 'Ensure Support Services Limited (ESSL) Privacy Policy.',
};

export default function PrivacyPolicyPage() {
  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] text-slate-900 pt-36 pb-24" style={gridBgStyle}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[rgb(20,109,174)] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3 mb-4 text-[rgb(20,109,174)]">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-xs font-mono uppercase tracking-widest font-bold">ESSL LEGAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)]">
            Privacy Policy
          </h1>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
            Ensure Support Services Limited (ESSL) is committed to protecting the privacy and security of your enterprise data. Content coming soon.
          </p>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-600">
            For privacy inquiries or data protection details, please contact us at{' '}
            <a href="mailto:sales@ensure-bd.com" className="text-[rgb(20,109,174)] font-semibold hover:underline">
              sales@ensure-bd.com
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
}
