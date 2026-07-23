import { Metadata } from 'next';
import GovernmentPublicSectorDetail from '@/components/GovernmentPublicSectorDetail';

export const metadata: Metadata = {
  title: 'Government & Public Sector Digital Solutions | ESSL',
  description: 'Build secure, connected, and citizen-centric digital government services. ESSL architects sovereign government data centers, national cyber security, and smart city infrastructure.',
};

export default function GovernmentPublicSectorPage() {
  return (
    <div className="pt-20">
      <GovernmentPublicSectorDetail />
    </div>
  );
}
