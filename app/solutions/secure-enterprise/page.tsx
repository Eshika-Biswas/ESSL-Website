import { Metadata } from 'next';
import SecureEnterpriseDetail from '@/components/SecureEnterpriseDetail';

export const metadata: Metadata = {
  title: 'Secure Enterprise Solutions | ESSL',
  description: 'Comprehensive cybersecurity solutions that protect users, applications, data, cloud environments, and critical business infrastructure.',
};

export default function SecureEnterprisePage() {
  return <SecureEnterpriseDetail />;
}
