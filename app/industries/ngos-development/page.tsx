import { Metadata } from 'next';
import NgosDevelopmentDetail from '@/components/NgosDevelopmentDetail';

export const metadata: Metadata = {
  title: 'NGOs & Development IT Solutions | ESSL',
  description: 'Reliable, secure, and cost-effective technology for mission-driven organizations. ESSL provides multi-branch SD-WAN, cloud collaboration, endpoint security, and M365 nonprofit deployment.',
};

export default function NgosDevelopmentPage() {
  return (
    <div className="pt-20">
      <NgosDevelopmentDetail />
    </div>
  );
}
