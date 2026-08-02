import { Metadata } from 'next';
import SmartInfrastructureDetail from '@/components/SmartInfrastructureDetail';

export const metadata: Metadata = {
  title: 'Smart Infrastructure Solutions | ESSL',
  description: 'Build intelligent, secure, and resilient physical infrastructure that powers modern enterprise facilities with ESSL.',
};

export default function SmartInfrastructurePage() {
  return <SmartInfrastructureDetail />;
}
