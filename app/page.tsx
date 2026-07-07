import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import SolutionsGrid from '@/components/SolutionsGrid';
import VendorStrip from '@/components/VendorStrip';
import AIAdvisorTeaser from '@/components/AIAdvisorTeaser';
import CaseStudy from '@/components/CaseStudy';
import BlogPreview from '@/components/BlogPreview';
import ClientOutcomes from '@/components/ClientOutcomes';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <SolutionsGrid />
      <VendorStrip />
      <AIAdvisorTeaser />
      <CaseStudy />
      <BlogPreview />
      <ClientOutcomes />
      <CTABanner />
    </>
  );
}
