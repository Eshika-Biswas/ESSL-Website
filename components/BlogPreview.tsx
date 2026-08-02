'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    title: 'Zero Trust Architecture: A Complete Guide for Bangladeshi Enterprises',
    excerpt: 'Learn how Zero Trust principles can protect your organization from modern cyber threats and why Bangladeshi banks are adopting this framework.',
    date: '2026-06-28',
    category: 'Cybersecurity',
    readTime: '8 min read',
    image: '/images/cybersecurity-card.png',
    pillColor: 'text-blue-400 border-blue-500/30 bg-slate-950/70',
  },
  {
    title: 'The Future of SD-WAN: How Cisco and Fortinet Are Redefining Network Edge',
    excerpt: 'A deep dive into SD-WAN technologies and how ESSL is helping enterprises modernize their branch connectivity.',
    date: '2026-06-15',
    category: 'Networking',
    readTime: '6 min read',
    image: '/images/networking-card.png',
    pillColor: 'text-amber-400 border-amber-500/30 bg-slate-950/70',
  },
  {
    title: 'Cloud Migration Strategies: Azure vs AWS for Enterprise Workloads',
    excerpt: 'Comparing cloud platforms for Bangladeshi enterprises — cost, compliance, and performance considerations.',
    date: '2026-06-02',
    category: 'Cloud',
    readTime: '10 min read',
    image: '/images/cloud-card.png',
    pillColor: 'text-sky-400 border-sky-500/30 bg-slate-950/70',
  },
];

export default function BlogPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden section-transition">
      {/* Background Image: Latest Insights */}
      <div className="absolute inset-0 z-0 bg-[#f8fafc]">
        <Image
          src="/images/latest-insights-bg.jpg"
          alt="Latest Insights Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-100"
          loading="lazy"
        />
        {/* Soft edge blends and gradient overlay for readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/25 via-transparent to-[#f8fafc]/25 z-[1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#1B6BA8] border border-[#1B6BA8]/20 bg-[#1B6BA8]/5 mb-6">
              Insights & Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1420]" style={{ fontFamily: 'var(--font-display)' }}>
              Latest Insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B6BA8] hover:text-[#1B6BA8]/80 transition-colors group z-10"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.title}
              href="/insights"
              className={`group relative rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Top ~60% = Photo with Overlay */}
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                {/* Gradient Overlay (transparent at top fading to solid white at the bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 text-[11px] font-semibold rounded-full border backdrop-blur-sm ${post.pillColor}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Bottom ~40% = Content */}
              <div className="p-6 bg-white relative z-10">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-5">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors duration-300">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

