import { Metadata } from 'next';
import ManagedServicesDetail from '@/components/ManagedServicesDetail';

export const metadata: Metadata = {
  title: 'Managed Services | ESSL',
  description: '24×7 monitoring, support, and optimization for your critical systems.',
};

export default function ManagedServicesPage() {
  return (
    <div className="pt-20">
      <ManagedServicesDetail />
    </div>
  );
}
