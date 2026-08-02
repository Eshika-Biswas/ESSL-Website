'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import Image from 'next/image';

const allPosts = [
  {
    title: 'Zero Trust Architecture: A Complete Guide for Bangladeshi Enterprises',
    excerpt: 'Learn how Zero Trust principles can protect your organization from modern cyber threats and why Bangladeshi banks are adopting this framework.',
    date: '2026-06-28',
    category: 'Cybersecurity',
    readTime: '8 min read',
    image: '/images/cybersecurity-card.png',
    pillColor: 'text-[rgb(20,109,174)] border-[rgb(20,109,174)]/30 bg-[rgb(20,109,174)]/10',
  },
  {
    title: 'The Future of SD-WAN: How Cisco and Fortinet Are Redefining Network Edge',
    excerpt: 'A deep dive into SD-WAN technologies and how ESSL is helping enterprises modernize their branch connectivity.',
    date: '2026-06-15',
    category: 'Networking',
    readTime: '6 min read',
    image: '/images/networking-card.png',
    pillColor: 'text-amber-600 border-amber-500/30 bg-amber-50',
  },
  {
    title: 'Cloud Migration Strategies: Azure vs AWS for Enterprise Workloads',
    excerpt: 'Comparing cloud platforms for Bangladeshi enterprises — cost, compliance, and performance considerations.',
    date: '2026-06-02',
    category: 'Cloud',
    readTime: '10 min read',
    image: '/images/cloud-card.png',
    pillColor: 'text-sky-600 border-sky-500/30 bg-sky-50',
  },
  {
    title: 'Modern Managed SOC: Why 24/7 Monitoring is Essential for Local Banks',
    excerpt: 'Deep dive into cybersecurity requirements for commercial banks under the latest Bangladesh Bank guidelines.',
    date: '2026-05-20',
    category: 'Cybersecurity',
    readTime: '7 min read',
    image: '/images/cybersecurity-card.png',
    pillColor: 'text-[rgb(20,109,174)] border-[rgb(20,109,174)]/30 bg-[rgb(20,109,174)]/10',
  },
  {
    title: 'Building High-Availability Campus Networks: A Multi-Chassis EtherChannel Case Study',
    excerpt: 'An engineering overview of deploying core switches with VSS/VPC technologies to achieve sub-second failover times.',
    date: '2026-05-10',
    category: 'Networking',
    readTime: '9 min read',
    image: '/images/networking-card.png',
    pillColor: 'text-amber-600 border-amber-500/30 bg-amber-50',
  },
  {
    title: 'Leveraging Hybrid Cloud for Disaster Recovery under regulatory guidelines',
    excerpt: 'How to architect replication between on-premises primary sites and public cloud recovery nodes while satisfying data residency guidelines.',
    date: '2026-04-28',
    category: 'Cloud',
    readTime: '8 min read',
    image: '/images/cloud-card.png',
    pillColor: 'text-sky-600 border-sky-500/30 bg-sky-50',
  },
];

const categories = ['All', 'Cybersecurity', 'Networking', 'Cloud'];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.category === activeCategory);

  const gridBgStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `
      radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
    `,
    backgroundSize: '40px 40px',
  };

  return (
    <div className="w-full text-slate-900 min-h-screen bg-[#f8fafc]" style={gridBgStyle}>
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden pt-36 pb-20 border-b border-slate-200 bg-[#f8fafc]">
        {/* Soft Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[rgb(20,109,174)]/10 rounded-full blur-[120px] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
            <BookOpen className="w-4 h-4 text-[rgb(20,109,174)]" />
            <span className="text-xs text-[rgb(20,109,174)] font-semibold uppercase tracking-wider font-mono">ESSL Resource Hub</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Insights &amp; <span className="text-[rgb(20,109,174)]">Resources</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Stay up to date with engineering guides, white papers, and regional tech trends in enterprise networks, cybersecurity, and cloud environments.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="relative w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[rgb(20,109,174)] text-white shadow-lg shadow-[rgb(20,109,174)]/20 border border-[rgb(20,109,174)]'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="group relative rounded-2xl bg-white border border-slate-200/80 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgb(20,109,174)]/30 hover:shadow-xl flex flex-col h-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
              >
                {/* Image Wrap */}
                <div className="h-52 relative overflow-hidden flex-shrink-0 bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 text-[11px] font-semibold rounded-full border backdrop-blur-sm ${post.pillColor}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 group-hover:text-[rgb(20,109,174)] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[rgb(20,109,174)] transition-colors duration-300 mt-auto">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state if none */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">No articles found in this category.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
