'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Network, Compass, Users, TrendingUp, MapPin, Briefcase, Building2, ChevronDown, ChevronUp, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { JobPosting } from '@/types/job';

const benefits = [
  {
    icon: Network,
    heading: 'FLEXIBLE WORKING',
    desc: 'We support flexible work schedules that help our team balance productivity with personal wellbeing, while maintaining strong collaboration across projects.',
  },
  {
    icon: Compass,
    heading: 'TRAINING & CONFERENCES',
    desc: 'Our employees get opportunities to attend industry conferences, technical workshops, and vendor certification trainings to stay current with evolving IT and cybersecurity trends.',
  },
  {
    icon: Users,
    heading: 'INCLUSIVE WORKING ENVIRONMENT',
    desc: 'ESSL promotes an open, respectful, and collaborative working environment that supports constructive relationships and a positive team culture.',
  },
  {
    icon: TrendingUp,
    heading: 'PROFESSIONAL DEVELOPMENT',
    desc: 'ESSL invests in continuing professional development, providing employees the time and resources to pursue certifications and skills that benefit both their careers and the business.',
  },
];

export default function CareersSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);

  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);

    const benefitsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current);

    return () => {
      heroObserver.disconnect();
      benefitsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    async function fetchActiveJobs() {
      try {
        setLoadingJobs(true);
        const { data, error } = await supabase
          .from('job_postings')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching job postings:', error?.message, '| code:', error?.code, '| details:', error?.details, '| hint:', error?.hint);
        } else if (data) {
          setJobs(data as JobPosting[]);
        }
      } catch (err) {
        console.error('Unexpected error fetching jobs:', err);
      } finally {
        setLoadingJobs(false);
      }
    }

    fetchActiveJobs();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedJobId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full text-slate-900 min-h-screen bg-[#f8fafc]">

      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Hero (light background, centered)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden border-b border-dashed border-slate-200 pt-32 pb-24"
        style={{
          backgroundColor: '#f8fafc',
          backgroundImage: `
            radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px),
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(15,23,42,0.08)' stroke-width='0.5'/%3E%3Cpath d='M18 20h4M20 18v4' stroke='rgba(20,109,174,0.30)' stroke-width='1'/%3E%3C/svg%3E")
          `,
          backgroundSize: '40px 40px',
        }}
      >
        {/* Soft blue radial glow blob in the top-left corner */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: '-15%',
            left: '-15%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,109,174,0.06) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Centered Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-[3.2rem] font-bold uppercase mb-8 font-mono tracking-wider transition-all duration-700 text-slate-900 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ letterSpacing: '0.08em' }}
          >
            OUR CAREERS
          </h1>

          {/* Centered Paragraph */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-150 text-slate-600 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            If you&apos;re passionate about enterprise IT infrastructure, cybersecurity, and making a difference for businesses across Bangladesh, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Benefits (staggered cards, monospace headers)
         ───────────────────────────────────────────────────────── */}
      <section
        ref={benefitsRef}
        className="relative w-full py-24 overflow-hidden bg-[#f8fafc]"
      >
        {/* Low-opacity circuit-board line pattern backdrop */}
        <div className="absolute inset-0 z-0 bg-[#f8fafc]">
          <Image
            src="/images/end-to-end-tech-bg.png"
            alt="Benefits Circuit Pattern"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60 pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/30 via-transparent to-[#f8fafc]/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* Heading and Intro paragraph */}
          <div className="mb-20 text-left">
            <h2
              className={`text-2xl sm:text-3xl font-bold uppercase tracking-wider font-mono text-slate-900 mb-6 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ letterSpacing: '0.08em' }}
            >
              BENEFITS
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl transition-all duration-700 delay-150 text-slate-600 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              We&apos;re always on the lookout for talented team players. If you&apos;re an experienced IT or cybersecurity practitioner, and you&apos;d like to join an innovative and growing organization, get in touch at{' '}
              <a
                href="mailto:mehedi.hasan@ensure-bd.com"
                className="text-[rgb(20,109,174)] hover:underline font-semibold transition-colors"
              >
                mehedi.hasan@ensure-bd.com
              </a>
            </p>
          </div>

          {/* Staggered Grid of 2x2 cards */}
          <div className="grid md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const borderClasses =
                index === 0
                  ? 'border-b md:border-r border-slate-200 pb-8 md:pr-8 md:pb-8'
                  : index === 1
                    ? 'border-b border-slate-200 pb-8 pt-8 md:pt-0 md:pl-8 md:pb-8'
                    : index === 2
                      ? 'border-b md:border-b-0 md:border-r border-slate-200 pt-8 pb-8 md:pb-0 md:pr-8 md:pt-8'
                      : 'pt-8 md:pl-8';

              return (
                <div
                  key={benefit.heading}
                  className={`flex flex-col text-left transition-all duration-700 ${borderClasses} ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${300 + index * 120}ms` }}
                >
                  <div className="mb-4">
                    <benefit.icon className="w-6 h-6 text-[rgb(20,109,174)]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider font-mono mb-2 text-[rgb(20,109,174)]"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {benefit.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2B & 3 — Open Positions & Get in Touch (Blue Grid Background)
         ───────────────────────────────────────────────────────── */}
      <section
        className="relative w-full py-24 overflow-hidden border-t border-white/10"
        style={{
          backgroundColor: 'rgb(22, 120, 191)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M0 0H48M0 0V48' fill='none' stroke='rgba(255,255,255,0.10)' stroke-width='0.75'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-left mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white border border-white/30 bg-white/15 mb-4 font-mono">
              JOIN OUR TEAM
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold uppercase tracking-wider font-mono text-white mb-4"
              style={{ letterSpacing: '0.08em' }}
            >
              OPEN POSITIONS
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
              Explore our current job opportunities and take the next step in your career with Ensure Support Services Limited.
            </p>
          </div>

          {loadingJobs ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-[rgb(20,109,174)] mb-3" />
              <p className="text-sm font-mono uppercase tracking-wider">Loading career opportunities...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center">
              <p className="text-slate-700 font-medium text-base mb-2">There are currently no active job openings.</p>
              <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                We are always open to meeting talented professionals. Send your resume to our HR team and we will contact you when suitable roles open up.
              </p>
              <a
                href="mailto:careers@ensure-bd.com?subject=General Application / Resume Submission"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold tracking-widest text-white bg-[rgb(20,109,174)] font-mono hover:opacity-90 transition-all duration-300 shadow-sm"
                style={{ letterSpacing: '0.08em' }}
              >
                <Send className="w-3.5 h-3.5" />
                SUBMIT CV
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map(job => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-300"
                  >
                    {/* Header bar / clickable row */}
                    <div
                      onClick={() => toggleExpand(job.id)}
                      className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[rgb(20,109,174)] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-600 font-mono">
                          <span className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md text-slate-700">
                            <Building2 className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md text-slate-700">
                            <MapPin className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md text-slate-700">
                            <Briefcase className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />
                            {job.employment_type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 self-end sm:self-center">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[rgb(20,109,174)] font-mono uppercase tracking-wider hover:underline"
                        >
                          {isExpanded ? 'Hide Details' : 'View Details'}
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Details section */}
                    {isExpanded && (
                      <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-100 bg-slate-50/40 space-y-6">

                        {/* Job Summary */}
                        {job.job_summary && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                              JOB SUMMARY
                            </h4>
                            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                              {job.job_summary}
                            </p>
                          </div>
                        )}

                        {/* Job Responsibilities */}
                        {job.job_responsibilities && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                              JOB RESPONSIBILITIES
                            </h4>
                            <ul className="space-y-1.5">
                              {job.job_responsibilities.split('\n').filter(l => l.trim()).map((line, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(20,109,174)] shrink-0" />
                                  {line.trim()}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Skills */}
                        {job.skills && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                              REQUIRED SKILLS
                            </h4>
                            <ul className="space-y-1.5">
                              {job.skills.split('\n').filter(l => l.trim()).map((line, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(20,109,174)] shrink-0" />
                                  {line.trim()}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Educational Requirements */}
                        {job.educational_requirements && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                              EDUCATIONAL REQUIREMENTS
                            </h4>
                            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                              {job.educational_requirements}
                            </p>
                          </div>
                        )}

                        {/* Experience Requirements */}
                        {job.experience_requirements && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                              EXPERIENCE REQUIREMENTS
                            </h4>
                            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                              {job.experience_requirements}
                            </p>
                          </div>
                        )}

                        {/* Additional Requirements */}
                        {job.additional_requirements && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                              ADDITIONAL REQUIREMENTS
                            </h4>
                            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                              {job.additional_requirements}
                            </p>
                          </div>
                        )}


                        {/* Salary & Benefits row */}
                        {(job.salary_type || job.benefits) && (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {/* Salary */}
                            {job.salary_type && (
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                                  SALARY
                                </h4>
                                <p className="text-sm font-semibold text-slate-800">
                                  {job.salary_type === 'Range' && job.salary_min != null && job.salary_max != null
                                    ? `BDT ${job.salary_min.toLocaleString()} – ${job.salary_max.toLocaleString()} / month`
                                    : job.salary_type === 'Range' && (job.salary_min != null || job.salary_max != null)
                                      ? `BDT ${(job.salary_min ?? job.salary_max ?? 0).toLocaleString()} / month`
                                      : 'Negotiable'}
                                </p>
                              </div>
                            )}

                            {/* Benefits */}
                            {job.benefits && (
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[rgb(20,109,174)] mb-2">
                                  BENEFITS
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {job.benefits.split(',').map(b => b.trim()).filter(Boolean).map((b, i) => (
                                    <span key={i}
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[rgb(20,109,174)]/8 text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20">
                                      ✓ {b.startsWith('Other: ') ? b.replace('Other: ', '') : b}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Apply CTA */}
                        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80">
                          <span className="text-xs text-slate-500 font-mono">
                            Interested candidates can apply directly via email.
                          </span>
                          <a
                            href={`mailto:careers@ensure-bd.com?subject=Application for ${encodeURIComponent(job.title)}`}
                            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold tracking-widest text-white bg-[rgb(20,109,174)] font-mono hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
                            style={{ letterSpacing: '0.08em' }}
                          >
                            <Send className="w-3.5 h-3.5" />
                            APPLY NOW
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA Section — nested inside the same max-w-5xl blue container */}
          <div
            className={`mt-24 sm:mt-32 transition-all duration-700 delay-300 text-center ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold uppercase tracking-wider font-mono text-white mb-4"
              style={{ letterSpacing: '0.08em' }}
            >
              GET IN TOUCH
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Learn more about how we foster a culture of creativity, support, and innovation to create cutting-edge solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-bold tracking-widest text-[rgb(22, 120, 191)] bg-white hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg font-mono"
              style={{ letterSpacing: '0.08em' }}
            >
              CONTACT US
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
