import { Metadata } from 'next';
import ManagedITServicesDetail from '@/components/ManagedITServicesDetail';

export const metadata: Metadata = {
  title: 'Managed IT Services Solutions | ESSL',
  description: 'Deliver 24×7 proactive monitoring, management, and expert support to ensure the availability, performance, and security of critical IT infrastructure with ESSL.',
};

export default function ManagedITServicesPage() {
  return <ManagedITServicesDetail />;
}
