'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Check, Shield } from 'lucide-react';

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

const countries = [
  { code: 'BD', name: 'Bangladesh' },
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'IN', name: 'India' },
  { code: 'AU', name: 'Australia' },
];

const citiesByCountry: Record<string, string[]> = {
  BD: ['Dhaka', 'Chattogram', 'Sylhet', 'Khulna', 'Rajshahi'],
  US: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco'],
  GB: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Glasgow'],
  IN: ['Delhi', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata'],
  AU: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
};

const interestCategories = [
  'PLATFORM ASSESSMENT',
  'SYSTEM INTEGRATION',
  'MANAGED SERVICES',
  'TECHNOLOGY CONSULTING',
  'NETWORK & SECURITY',
  'CLOUD SOLUTIONS',
];

export default function ContactPage() {
  // Form state
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState('+880');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Available cities dependent on selected country
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  useEffect(() => {
    if (country) {
      setAvailableCities(citiesByCountry[country] || []);
      setCity(''); // Reset city select when country changes
    } else {
      setAvailableCities([]);
      setCity('');
    }
  }, [country]);

  const toggleInterest = (category: string) => {
    if (areaOfInterest.includes(category)) {
      setAreaOfInterest(areaOfInterest.filter((c) => c !== category));
    } else {
      setAreaOfInterest([...areaOfInterest, category]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    // Frontend validation
    if (!fullName || !company || !email || !phoneNumber || !country || !city || !role || !message || !agree) {
      setErrorMsg('Please fill in all required fields and agree to the Privacy Policy.');
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
          fullName,
          company,
          workEmail: email,
          phoneCode,
          phoneNumber,
          country,
          city,
          role,
          areaOfInterest,
          message,
          privacyAgreed: agree,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setSubmitted(true);
      
      // Clear fields
      setFullName('');
      setCompany('');
      setEmail('');
      setPhoneCode('+880');
      setPhoneNumber('');
      setCountry('');
      setCity('');
      setRole('');
      setAreaOfInterest([]);
      setMessage('');
      setAgree(false);
    } catch (error: any) {
      console.error('Contact submission error:', error);
      setErrorMsg(error.message || 'Something went wrong. Please check your network or try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-300">
      
      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — "Let's Talk" Hero (Light background, dark stats card)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-b border-white/5 pt-36 pb-24 bg-transparent">
        {/* Faint grid lines decorative background */}
        <div className="absolute inset-0 z-0 grid-bg opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Heading */}
            <div className="lg:col-span-7 text-left">
              <Reveal delay={0}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--accent-blue)] font-mono mb-4">
                  LET&apos;S TALK
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6 font-[family-name:var(--font-display)]">
                  Start your security conversation{' '}
                  <span className="text-[var(--accent-blue)]">today.</span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-slate-350 max-w-2xl">
                  Whether you need a structured assessment, a platform deployment, or 24×7 managed operations — our certified team is ready to engage.
                </p>
              </Reveal>
            </div>

            {/* Right side: Dark Stats Card (2x2) */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={150}>
                <div className="relative overflow-hidden rounded-3xl p-8 shadow-xl bg-[#0A0F1D] text-left border border-white/5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="grid grid-cols-2 gap-8">
                    {/* Stat 1 */}
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-4xl font-bold text-[var(--accent-blue)] font-mono mb-1">
                        310+
                      </span>
                      <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 leading-snug">
                        ENTERPRISE CLIENTS
                      </span>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-4xl font-bold text-[var(--accent-blue)] font-mono mb-1">
                        15,000+
                      </span>
                      <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 leading-snug">
                        PROFESSIONAL SERVICE HOURS
                      </span>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-4xl font-bold text-[var(--accent-blue)] font-mono mb-1">
                        12+
                      </span>
                      <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 leading-snug">
                        TECHNOLOGY PARTNERS
                      </span>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-4xl font-bold text-[var(--accent-blue)] font-mono mb-1">
                        25+
                      </span>
                      <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 leading-snug">
                        CERTIFIED ENGINEERS
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Form + Sidebar (Two-column layout)
         ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 bg-transparent">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN — Redesigned Form */}
            <div className="lg:col-span-8 w-full text-left">
              <Reveal delay={200}>
                
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center border border-white/5 rounded-3xl bg-[#0a0e17]/50 p-8 shadow-sm">
                    <div className="w-16 h-16 bg-success/10 border border-success/20 rounded-full flex items-center justify-center text-success mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-wide text-white mb-2 uppercase">
                      MESSAGE SENT
                    </h3>
                    <p className="text-sm text-slate-400 max-w-md">
                      Thank you for contacting Ensure Support Services. We have received your query and will review it within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center justify-center rounded-full px-10 py-3.5 text-xs font-bold tracking-widest text-white font-mono hover:opacity-90 transition-all duration-300 shadow-md"
                      style={{ background: 'var(--accent-blue)', letterSpacing: '0.08em' }}
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    
                    <div>
                      <h2 className="text-xs font-bold tracking-widest text-slate-400 font-mono mb-8 uppercase">
                        YOUR DETAILS
                      </h2>

                      {errorMsg && (
                        <div className="p-4 mb-8 rounded-xl bg-red-950/20 border border-red-900/50 text-red-400 text-xs sm:text-sm">
                          {errorMsg}
                        </div>
                      )}

                      <div className="space-y-8">
                        {/* Row 1: Full Name | Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <div className="flex flex-col">
                            <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                              FULL NAME*
                            </label>
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                              COMPANY*
                            </label>
                            <input
                              type="text"
                              required
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm"
                            />
                          </div>
                        </div>

                        {/* Row 2: Work Email | Phone (Code + Num) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <div className="flex flex-col">
                            <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                              WORK EMAIL*
                            </label>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm"
                            />
                          </div>
                          
                          <div className="flex flex-col">
                            <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                              PHONE NUMBER*
                            </label>
                            <div className="flex gap-2">
                              <select
                                value={phoneCode}
                                onChange={(e) => setPhoneCode(e.target.value)}
                                className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 transition-colors text-sm cursor-pointer"
                              >
                                <option value="+880" className="bg-[#0f1420]">+880 (BD)</option>
                                <option value="+1" className="bg-[#0f1420]">+1 (US)</option>
                                <option value="+44" className="bg-[#0f1420]">+44 (UK)</option>
                                <option value="+91" className="bg-[#0f1420]">+91 (IN)</option>
                                <option value="+61" className="bg-[#0f1420]">+61 (AU)</option>
                              </select>
                              <input
                                type="tel"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Row 3: Country | City dropdowns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <div className="flex flex-col">
                            <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                              COUNTRY*
                            </label>
                            <select
                              required
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#0f1420]">Select Country</option>
                              {countries.map((c) => (
                                <option key={c.code} value={c.code} className="bg-[#0f1420]">
                                  {c.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="flex flex-col">
                            <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                              CITY*
                            </label>
                            <select
                              required
                              disabled={!country}
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className={`border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm cursor-pointer ${
                                !country ? 'opacity-40 cursor-not-allowed' : ''
                              }`}
                            >
                              <option value="" disabled className="bg-[#0f1420]">
                                {country ? 'Select City' : 'Choose Country First'}
                              </option>
                              {availableCities.map((cityOpt) => (
                                <option key={cityOpt} value={cityOpt} className="bg-[#0f1420]">
                                  {cityOpt}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Row 4: Your Role */}
                        <div className="flex flex-col">
                          <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-1">
                            YOUR ROLE / JOB TITLE*
                          </label>
                          <input
                            type="text"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="e.g. CISO, IT Director, Network Engineer"
                            className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Area of Interest Multi-select Pills */}
                    <div>
                      <h2 className="text-xs font-bold tracking-widest text-slate-400 font-mono mb-6 uppercase">
                        AREAS OF INTEREST
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {interestCategories.map((category) => {
                          const isSelected = areaOfInterest.includes(category);
                          return (
                            <button
                              key={category}
                              type="button"
                              onClick={() => toggleInterest(category)}
                              className={`px-4 py-3 rounded-lg border text-left text-xs font-bold transition-all duration-300 cursor-pointer ${
                                isSelected
                                  ? 'border-[var(--accent-blue)] bg-[var(--accent-blue)]/5 text-[var(--accent-blue)] shadow-[0_0_12px_rgba(20,109,174,0.1)]'
                                  : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/10 hover:bg-white/[0.04]'
                              }`}
                            >
                              {category}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* How Can We Help message textarea */}
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-bold tracking-widest uppercase font-mono text-slate-400 mb-2">
                        HOW CAN ESSL HELP YOU?*
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please briefly describe your infrastructure or security needs..."
                        className="border-b border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:outline-none bg-transparent text-white py-2 w-full transition-colors text-sm resize-none font-mono placeholder:text-slate-400 placeholder:font-mono"
                      />
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy-agree"
                        required
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/20 text-[var(--accent-blue)] focus:ring-[var(--accent-blue)] focus:ring-offset-0 cursor-pointer"
                      />
                      <label htmlFor="privacy-agree" className="text-xs text-slate-400 leading-normal cursor-pointer select-none">
                        I agree to the ESSL{' '}
                        <Link href="/privacy-policy" className="text-[var(--accent-blue)] hover:underline">
                          Privacy Policy
                        </Link>{' '}
                        and consent to ESSL storing my contact info to respond to this request.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full rounded-xl py-4 text-xs font-bold tracking-widest text-white font-mono shadow-md transition-all duration-300 ${
                          isLoading
                            ? 'bg-[var(--accent-blue)]/70 cursor-not-allowed'
                            : 'bg-[var(--accent-blue)] hover:opacity-90 hover:scale-[1.01] hover:shadow-lg'
                        }`}
                        style={{ letterSpacing: '0.08em' }}
                      >
                        {isLoading ? 'SENDING...' : 'Send Message'}
                      </button>
                    </div>

                  </form>
                )}
              </Reveal>
            </div>

            {/* RIGHT COLUMN — Sidebar */}
            <div className="lg:col-span-4 w-full text-left space-y-12 lg:pl-4">
              
              {/* Process Section */}
              <Reveal delay={300}>
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-[var(--accent-blue)] font-mono mb-6 uppercase">
                    WHAT HAPPENS NEXT
                  </h3>
                  <div className="space-y-6">
                    {/* Item 01 */}
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono font-bold text-[var(--accent-blue)] mt-0.5">01</span>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                          We review your enquiry
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Within one business day, our team will review your message and match you to the right specialist.
                        </p>
                      </div>
                    </div>

                    {/* Item 02 */}
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono font-bold text-[var(--accent-blue)] mt-0.5">02</span>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                          Discovery call — 30 minutes
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          We schedule a focused call to understand your environment, priorities, and timeline.
                        </p>
                      </div>
                    </div>

                    {/* Item 03 */}
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono font-bold text-[var(--accent-blue)] mt-0.5">03</span>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                          Tailored proposal
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          You receive a structured engagement proposal — scoped, priced, and ready to move.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct Contact Card */}
              <Reveal delay={450}>
                <div className="space-y-6">
                  <h3 className="text-xs font-bold tracking-widest text-[var(--accent-blue)] font-mono mb-6 uppercase">
                    DIRECT CONTACT
                  </h3>
                  
                  <div className="glass-card rounded-2xl p-6 space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <div>
                        <span className="block text-[10px] font-bold tracking-widest text-slate-450 font-mono uppercase mb-0.5">
                          General Enquiries
                        </span>
                        <a
                          href="mailto:sales@ensure-bd.com"
                          className="text-sm font-bold text-white hover:text-[var(--accent-blue)] transition-colors"
                        >
                          sales@ensure-bd.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <div>
                        <span className="block text-[10px] font-bold tracking-widest text-slate-450 font-mono uppercase mb-0.5">
                          Office Address
                        </span>
                        <p className="text-sm font-normal text-slate-300 leading-relaxed">
                          JJR Heritage, L-4 147/D, 1 Green Rd, Dhaka 1215
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <div>
                        <span className="block text-[10px] font-bold tracking-widest text-slate-450 font-mono uppercase mb-0.5">
                          Phone
                        </span>
                        <a
                          href="tel:+8801818399642"
                          className="text-sm font-bold text-white hover:text-[var(--accent-blue)] transition-colors"
                        >
                          +8801818399642
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Badge tag row */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider font-mono bg-white/5 border border-white/10 text-slate-400 uppercase">
                      ISO 27001 Certified
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider font-mono bg-white/5 border border-white/10 text-slate-400 uppercase">
                      Cisco Partner
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider font-mono bg-white/5 border border-white/10 text-slate-400 uppercase">
                      Fortinet Partner
                    </span>
                  </div>

                </div>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
