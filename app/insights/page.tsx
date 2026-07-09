'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, BookOpen, Clock, ShieldCheck, Cpu, CloudLightning } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const allPosts = [
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
  {
    title: 'Modern Managed SOC: Why 24/7 Monitoring is Essential for Local Banks',
    excerpt: 'Deep dive into cybersecurity requirements for commercial banks under the latest Bangladesh Bank guidelines.',
    date: '2026-05-20',
    category: 'Cybersecurity',
    readTime: '7 min read',
    image: '/images/cybersecurity-card.png',
    pillColor: 'text-blue-400 border-blue-500/30 bg-slate-950/70',
  },
  {
    title: 'Building High-Availability Campus Networks: A Multi-Chassis EtherChannel Case Study',
    excerpt: 'An engineering overview of deploying core switches with VSS/VPC technologies to achieve sub-second failover times.',
    date: '2026-05-10',
    category: 'Networking',
    readTime: '9 min read',
    image: '/images/networking-card.png',
    pillColor: 'text-amber-400 border-amber-500/30 bg-slate-950/70',
  },
  {
    title: 'Leveraging Hybrid Cloud for Disaster Recovery under regulatory guidelines',
    excerpt: 'How to architect replication between on-premises primary sites and public cloud recovery nodes while satisfying data residency guidelines.',
    date: '2026-04-28',
    category: 'Cloud',
    readTime: '8 min read',
    image: '/images/cloud-card.png',
    pillColor: 'text-sky-400 border-sky-500/30 bg-slate-950/70',
  },
];

const categories = ['All', 'Cybersecurity', 'Networking', 'Cloud'];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <div className="w-full text-slate-100 min-h-screen bg-dark-950">
      {/* Hero Banner with Tech Background */}
      <section className="relative w-full overflow-hidden pt-36 pb-20 border-b border-white/5">
        {/* Background Image with Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tech-hero-bg.png"
            alt="Insights Backdrop"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950 to-dark-950" />
          <div className="absolute inset-0 bg-[#0f1420]/80" />
        </div>

        {/* Diagonal orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-2/10 rounded-full blur-[120px] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary-light font-semibold uppercase tracking-wider font-mono">ESSL Resource Hub</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
          >
            Insights & <span className="gradient-text-blue">Resources</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-350 max-w-2xl mx-auto">
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
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 border border-primary'
                    : 'bg-white/[0.02] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
            {filteredPosts.map((post, index) => (
              <article
                key={post.title}
                className="group relative rounded-2xl bg-dark-950 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="h-52 relative overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 text-[11px] font-semibold rounded-full border backdrop-blur-sm ${post.pillColor}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-dark-950 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-650" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 mt-auto">
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
              <p className="text-slate-400 text-lg">No articles found in this category.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
