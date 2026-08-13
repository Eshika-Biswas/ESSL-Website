import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { newsEvents } from '@/lib/newsEvents';
import { Calendar, ArrowLeft, Rss } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return newsEvents.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = newsEvents.find((n) => n.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.title} | Ensure Support Services Ltd.`,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: [{ url: item.heroImage }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function NewsEventDetailPage({ params }: Props) {
  const item = newsEvents.find((n) => n.slug === params.slug);
  if (!item) notFound();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* Hero Image */}
      <div className="relative w-full" style={{ height: 'clamp(280px, 50vw, 520px)' }}>
        <Image
          src={item.heroImage}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420]/80 via-[#0f1420]/30 to-transparent" />

        {/* Back link */}
        <div className="absolute top-0 left-0 right-0 pt-24 px-6 z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/about/news-events"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              News &amp; Events
            </Link>
          </div>
        </div>

        {/* Title overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[rgb(20,109,174)] text-white mb-4 shadow">
              <Rss className="w-3 h-3" />
              {item.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl drop-shadow-lg">
              {item.title}
            </h1>
            <div className="flex items-center gap-2 mt-3 text-xs text-white/70 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(item.date)}
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-6 py-16">

        {/* Lead excerpt */}
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium border-l-4 border-[rgb(20,109,174)] pl-5 mb-12">
          {item.excerpt}
        </p>

        {/* Content blocks */}
        <div className="space-y-8">
          {item.body.map((block, i) => {
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="text-base sm:text-[17px] text-slate-700 leading-[1.85] tracking-[0.01em]">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="text-xl sm:text-2xl font-bold text-slate-900 mt-12 mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'image') {
              return (
                <figure key={i} className="my-12 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={block.src}
                      alt={block.caption || ''}
                      fill
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="bg-slate-50 px-5 py-3 text-xs text-slate-500 font-mono border-t border-slate-200">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return null;
          })}
        </div>

        {/* Back link at bottom */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/about/news-events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(20,109,174)] hover:text-slate-900 transition-colors font-mono uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News &amp; Events
          </Link>
        </div>
      </article>
    </div>
  );
}
