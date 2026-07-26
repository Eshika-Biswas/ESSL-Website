import { Metadata } from 'next';
import BusinessContinuityDetail from '@/components/BusinessContinuityDetail';

export const metadata: Metadata = {
  title: 'Business Continuity & Disaster Recovery | ESSL',
  description: 'Ensure uninterrupted business operations with resilient backup, disaster recovery, cyber recovery, and business continuity solutions from ESSL.',
};

export default function BusinessContinuityPage() {
  return <BusinessContinuityDetail />;
}
