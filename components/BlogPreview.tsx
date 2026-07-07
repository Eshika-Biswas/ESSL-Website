'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    title: 'Zero Trust Architecture: A Complete Guide for Bangladeshi Enterprises',
    excerpt: 'Learn how Zero Trust principles can protect your organization from modern cyber threats and why Bangladeshi banks are adopting this framework.',
    date: '2026-06-28',
    category: 'Cyber Security',
    readTime: '8 min read',
    gradient: 'from-blue-600/20 to-blue-400/20',
  },
  {
    title: 'The Future of SD-WAN: How Cisco and Fortinet Are Redefining Network Edge',
    excerpt: 'A deep dive into SD-WAN technologies and how ESSL is helping enterprises modernize their branch connectivity.',
    date: '2026-06-15',
    category: 'Networking',
    readTime: '6 min read',
    gradient: 'from-blue-700/20 to-indigo-500/20',
  },
  {
    title: 'Cloud Migration Strategies: Azure vs AWS for Enterprise Workloads',
    excerpt: 'Comparing cloud platforms for Bangladeshi enterprises — cost, compliance, and performance considerations.',
    date: '2026-06-02',
    category: 'Cloud',
    readTime: '10 min read',
    gradient: 'from-blue-800/20 to-sky-500/20',
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
    <section ref={sectionRef} className="relative w-full section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
              Insights & Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
              Latest Insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors group"
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
              href="#"
              className={`group relative rounded-2xl border border-slate-100 bg-white overflow-hidden transition-all duration-700 hover:border-slate-200 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Placeholder — Gradient */}
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-slate-900/10">{post.category}</span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/5 rounded-full border border-primary/20">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Read article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
