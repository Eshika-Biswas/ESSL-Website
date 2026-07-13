import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AIAdvisorTeaser from '@/components/AIAdvisorTeaser';
import ServicesGrid from '@/components/ServicesGrid';
import VendorStrip from '@/components/VendorStrip';
import IndustriesSection from '@/components/IndustriesSection';
import CaseStudy from '@/components/CaseStudy';
import BlogPreview from '@/components/BlogPreview';
import ClientOutcomes from '@/components/ClientOutcomes';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />
      {/* 2. Trusted clients logo strip */}
      <TrustBar />
      {/* 3. Ask Our AI Advisor */}
      <AIAdvisorTeaser />
      {/* 4. End To End Technology — 8 business unit cards */}
      <ServicesGrid />
      {/* 5. Certified Partner / vendor logos */}
      <VendorStrip />
      {/* 6. Empowering Industries, Driving Impact */}
      <IndustriesSection />
      {/* 7. Enterprise Network Transformation case study */}
      <CaseStudy />
      {/* 8. Latest Insights */}
      <BlogPreview />
      <ClientOutcomes />
      <CTABanner />
    </>
  );
}
