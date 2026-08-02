import { Metadata } from 'next';
import Link from 'next/link';
import {
  Laptop,
  ShieldCheck,
  Server,
  Cloud,
  RefreshCw,
  Network,
  Wrench,
  Zap,
  Code,
  Bot,
  FileCheck,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Solutions Architecture | ESSL',
  description: 'Explore ESSL enterprise solution architectures across digital workplace, cybersecurity, data center, cloud transformation, software licensing, and AI automation.',
};

const solutions = [
  {
    title: 'Digital Workplace',
    description: 'Empower hybrid teams with secure, high-performance digital workspace environments and end-user compute.',
    href: '/solutions/digital-workplace',
    icon: Laptop,
  },
  {
    title: 'Secure Enterprise',
    description: 'Comprehensive cybersecurity solutions protecting users, data, cloud, and critical infrastructure.',
    href: '/solutions/secure-enterprise',
    icon: ShieldCheck,
  },
  {
    title: 'Modern Data Center',
    description: 'Scalable, resilient, and AI-ready data center infrastructure engineered for high-performance workloads.',
    href: '/solutions/modern-data-center',
    icon: Server,
  },
  {
    title: 'Cloud Transformation',
    description: 'Modernize infrastructure, migrate workloads, and adopt secure hybrid and multi-cloud architectures.',
    href: '/solutions/cloud-transformation',
    icon: Cloud,
  },
  {
    title: 'Business Continuity & Disaster Recovery',
    description: 'Ensure operational resilience with automated backup, disaster recovery, and cyber recovery solutions.',
    href: '/solutions/business-continuity-disaster-recovery',
    icon: RefreshCw,
  },
  {
    title: 'Smart Infrastructure',
    description: 'Intelligent physical infrastructure, structured cabling, UPS power, and environmental monitoring.',
    href: '/solutions/smart-infrastructure',
    icon: Network,
  },
  {
    title: 'Managed IT Services',
    description: '24×7 proactive monitoring, NOC/SOC operations, and expert technical support for critical systems.',
    href: '/solutions/managed-it-services',
    icon: Wrench,
  },
  {
    title: 'Digital Transformation',
    description: 'Accelerate business innovation through technology modernization, automation, and process engineering.',
    href: '/solutions/digital-transformation',
    icon: Zap,
  },
  {
    title: 'Enterprise Software',
    description: 'Custom web, mobile, ERP, CRM, and workflow approval applications tailored for scalable growth.',
    href: '/solutions/enterprise-software',
    icon: Code,
  },
  {
    title: 'AI & Intelligent Automation',
    description: 'Harness LLMs, autonomous AI agents, RAG, and predictive analytics to automate complex workflows.',
    href: '/solutions/ai-intelligent-automation',
    icon: Bot,
  },
  {
    title: 'Licensing & Software Services',
    description: 'Procure, manage, and renew software licenses and subscriptions across cloud platforms, security, backup, and productivity tools.',
    href: '/solutions/licensing-software-services',
    icon: FileCheck,
  },
];

export default function SolutionsOverviewPage() {
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
            ENTERPRISE ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 font-[family-name:var(--font-display)]">
            Our Enterprise Solutions
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            End-to-end technology solution architectures engineered for security, high availability, and performance across Bangladesh&apos;s leading enterprises.
          </p>
        </div>

        {/* Grid of Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => {
            const IconComp = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative rounded-2xl bg-white border border-slate-200/80 p-8 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[rgb(20,109,174)]/30 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[rgb(20,109,174)]/10 text-[rgb(20,109,174)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[rgb(20,109,174)] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(20,109,174)] group-hover:translate-x-1 transition-transform">
                  Explore Solution
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
