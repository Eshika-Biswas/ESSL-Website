import { Metadata } from 'next';
import CareersSection from '@/components/CareersSection';

export const metadata: Metadata = {
  title: 'Careers | ESSL',
  description: 'Explore career and growth opportunities at Ensure Support Services Limited (ESSL).',
};

export default function CareersPage() {
  return (
    <div className="pt-20">
      <CareersSection />
    </div>
  );
}
