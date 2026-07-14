import { Metadata } from 'next';
import TechnologyConsultingDetail from '@/components/TechnologyConsultingDetail';

export const metadata: Metadata = {
  title: 'Technology Consulting | ESSL',
  description: 'Strategic guidance to architect the right technology roadmap for your business.',
};

export default function TechnologyConsultingPage() {
  return (
    <div className="pt-20">
      <TechnologyConsultingDetail />
    </div>
  );
}
