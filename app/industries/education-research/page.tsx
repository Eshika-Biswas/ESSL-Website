import { Metadata } from 'next';
import EducationResearchDetail from '@/components/EducationResearchDetail';

export const metadata: Metadata = {
  title: 'Education & Research Campus IT Solutions | ESSL',
  description: 'Enable modern digital learning with secure campus technology. ESSL provides high-density campus Wi-Fi, e-learning platforms, smart classrooms, and research data centers.',
};

export default function EducationResearchPage() {
  return (
    <div className="pt-20">
      <EducationResearchDetail />
    </div>
  );
}
