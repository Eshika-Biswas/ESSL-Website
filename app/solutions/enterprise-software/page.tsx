import { Metadata } from 'next';
import EnterpriseSoftwareDetail from '@/components/EnterpriseSoftwareDetail';

export const metadata: Metadata = {
  title: 'Enterprise Software Solutions | ESSL',
  description: 'Develop secure, scalable, and intelligent enterprise software solutions that streamline business processes with ESSL.',
};

export default function EnterpriseSoftwarePage() {
  return <EnterpriseSoftwareDetail />;
}
