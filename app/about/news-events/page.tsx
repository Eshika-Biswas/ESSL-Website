import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { newsEvents } from '@/lib/newsEvents';
import { Calendar, ArrowRight, Rss } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Events | Ensure Support Services Ltd.',
  description:
    'Stay up to date with the latest news, company events, and announcements from Ensure Support Services Ltd. (ESSL).',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden border-b border-slate-200/70">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(15,23,42,0.07) 1.5px, transparent 1.5px),
              linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(20,109,174,0.07)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
            <Rss className="w-3.5 h-3.5" />
            Latest Updates
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold uppercase mb-6 font-mono tracking-wider text-slate-900"
            style={{ letterSpacing: '0.07em' }}
          >
            NEWS &amp; EVENTS
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Stay up to date with the latest announcements, milestones, and events from Ensure Support Services Ltd.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {newsEvents.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <Rss className="w-10 h-10 mx-auto mb-4 opacity-40" />
            <p className="text-base font-medium">No news or events yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsEvents.map((item) => (
              <Link
                key={item.slug}
                href={`/about/news-events/${item.slug}`}
                className="group flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[rgb(20,109,174)]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Card image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={item.heroImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[rgb(20,109,174)] text-white shadow">
                    {item.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(item.date)}
                  </div>
                  <h2 className="text-base font-bold text-slate-900 leading-snug mb-3 group-hover:text-[rgb(20,109,174)] transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-grow">
                    {item.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[rgb(20,109,174)] font-mono uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
