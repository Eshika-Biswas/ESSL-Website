import { Metadata } from 'next';
import HealthcarePharmaceuticalsDetail from '@/components/HealthcarePharmaceuticalsDetail';

export const metadata: Metadata = {
  title: 'Healthcare & Pharmaceuticals IT Infrastructure | ESSL',
  description: 'Deliver secure, always-available digital healthcare infrastructure. ESSL architects hospital networks, EMR platforms, PACS storage, and HIPAA-compliant data protection.',
};

export default function HealthcarePharmaceuticalsPage() {
  return (
    <div className="pt-20">
      <HealthcarePharmaceuticalsDetail />
    </div>
  );
}
