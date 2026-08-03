import { Metadata } from 'next';
import ITSoftwareDetail from '@/components/ITSoftwareDetail';

export const metadata: Metadata = {
  title: 'IT & Software Industry Solutions | ESSL',
  description: 'Accelerate digital transformation with resilient cloud architecture, enterprise software engineering, DevOps automation, and zero-trust security solutions by Ensure Support Services Limited (ESSL).',
};

export default function ITSoftwarePage() {
  return <ITSoftwareDetail />;
}
