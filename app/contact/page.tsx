'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Check } from 'lucide-react';

/* ================================================================
   Reveal - reusable IntersectionObserver scroll-reveal wrapper
   ================================================================ */
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  duration?: number;
  className?: string;
}

function Reveal({
  children,
  delay = 0,
  threshold = 0.1,
  duration = 600,
  className = '',
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [agree, setAgree] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    if (!firstName || !lastName || !email || !message) {
      setErrorMsg('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          businessEmail: email,
          message,
          hearAboutUs,
          agreedToComms: agree,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      setHearAboutUs('');
      setAgree(false);
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      setErrorMsg(error.message || 'Something went wrong. Please try again or email us directly at sales@ensure-bd.com.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen text-slate-100" style={{ background: '#0A0F1D' }}>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 grid-bg opacity-15 pointer-events-none" />
      
      {/* Soft warm red/orange radial glow blob in the top-left corner */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '-10%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Soft blue radial glow gradient blending in from the right side */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '30%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(23,108,167,0.15) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ─────────────────────────────────────────────────────────
              LEFT COLUMN — Contact Details & Headings
             ───────────────────────────────────────────────────────── */}
          <div className="md:col-span-5 pt-6 text-left">
            <Reveal delay={0}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 mb-6">
                GET IN TOUCH
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-6 font-mono tracking-wider text-white"
                style={{ letterSpacing: '0.08em' }}
              >
                CONTACT US
              </h1>
              <p className="text-base leading-relaxed mb-12" style={{ color: '#D0D3DA' }}>
                Get in touch with any questions, and we&apos;ll reach out to you soon — we look forward to hearing from you.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <h2
                className="text-xs sm:text-sm font-bold uppercase tracking-widest font-mono text-white mb-6"
                style={{ letterSpacing: '0.08em' }}
              >
                FOR ALL OTHER INQUIRIES
              </h2>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-[#3F94CF]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                      LOCATION
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-200">
                      JJR Heritage, L-4 147/D, 1 Green Rd, Dhaka 1215
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-[#3F94CF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                      PHONE
                    </h4>
                    <a
                      href="tel:+8801818399642"
                      className="text-sm leading-relaxed text-slate-200 hover:text-[#3F94CF] transition-colors"
                    >
                      +8801818399642
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-[#3F94CF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                      EMAIL
                    </h4>
                    <a
                      href="mailto:sales@ensure-bd.com"
                      className="text-sm leading-relaxed text-slate-200 hover:text-[#3F94CF] transition-colors"
                    >
                      sales@ensure-bd.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─────────────────────────────────────────────────────────
              RIGHT COLUMN — Dark Form Card
             ───────────────────────────────────────────────────────── */}
          <div className="md:col-span-7 relative z-10 w-full md:-mt-8">
            <Reveal delay={300}>
              <div
                className="relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/[0.05]"
                style={{ background: '#121622' }}
              >
                {/* Inner decorative design pattern */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.01] rounded-full pointer-events-none" />

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-success/10 border border-success/20 rounded-full flex items-center justify-center text-success mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-wide text-white mb-2 uppercase">
                      MESSAGE SENT
                    </h3>
                    <p className="text-sm text-slate-350 max-w-sm">
                      Thank you for contacting us. We have received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[10px] font-bold tracking-widest text-white font-mono hover:opacity-90 transition-all duration-300 shadow-md"
                      style={{ background: '#FF6B35', letterSpacing: '0.08em' }}
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-red-400 text-xs sm:text-sm text-left">
                        {errorMsg}
                      </div>
                    )}

                    {/* First & Last Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                          FIRST NAME*
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="border-b border-white/20 bg-transparent text-white focus:border-[#3F94CF] focus:outline-none py-2 w-full transition-colors text-sm"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                          LAST NAME*
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="border-b border-white/20 bg-transparent text-white focus:border-[#3F94CF] focus:outline-none py-2 w-full transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Business Email */}
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                        BUSINESS EMAIL*
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b border-white/20 bg-transparent text-white focus:border-[#3F94CF] focus:outline-none py-2 w-full transition-colors text-sm"
                      />
                    </div>

                    {/* Hear About Us Dropdown */}
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                        HOW DID YOU HEAR ABOUT US?
                      </label>
                      <select
                        value={hearAboutUs}
                        onChange={(e) => setHearAboutUs(e.target.value)}
                        className="border-b border-white/20 bg-transparent text-slate-300 focus:border-[#3F94CF] focus:outline-none py-2 w-full transition-colors text-sm cursor-pointer [&>option]:bg-[#121622] [&>option]:text-white"
                      >
                        <option value="">Please Select</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="recommendation">Recommendation</option>
                        <option value="event">Event/Webinar</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                        MESSAGE*
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-b border-white/20 bg-transparent text-white focus:border-[#3F94CF] focus:outline-none py-2 w-full transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-3 text-left">
                      <input
                        type="checkbox"
                        id="agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                      />
                      <label htmlFor="agree" className="text-xs text-slate-400 leading-normal cursor-pointer select-none">
                        I agree to receive other communications from ESSL.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-left pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`inline-flex items-center justify-center rounded-full px-10 py-3.5 text-xs font-bold tracking-widest text-white font-mono transition-all duration-300 shadow-md ${
                          isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:scale-105'
                        }`}
                        style={{ background: '#FF6B35', letterSpacing: '0.08em' }}
                      >
                        {isLoading ? 'Sending...' : 'Contact Us'}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}
