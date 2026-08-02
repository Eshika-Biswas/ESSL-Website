import { Metadata } from 'next';
import CloudTransformationDetail from '@/components/CloudTransformationDetail';

export const metadata: Metadata = {
  title: 'Cloud Transformation Solutions | ESSL',
  description: 'Accelerate digital transformation by modernizing infrastructure, migrating workloads, and adopting secure, scalable, cloud-native technologies with ESSL.',
};

export default function CloudTransformationPage() {
  return <CloudTransformationDetail />;
}
