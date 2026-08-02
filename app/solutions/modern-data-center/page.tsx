import { Metadata } from 'next';
import ModernDataCenterDetail from '@/components/ModernDataCenterDetail';

export const metadata: Metadata = {
  title: 'Modern Data Center Solutions | ESSL',
  description: 'Build scalable, resilient, AI-ready, and high-performance data center infrastructure with ESSL.',
};

export default function ModernDataCenterPage() {
  return <ModernDataCenterDetail />;
}
