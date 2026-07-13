import { Metadata } from 'next';
import CyberSecurityDetail from '@/components/CyberSecurityDetail';

export const metadata: Metadata = {
  title: 'Cyber Security | ESSL',
  description: 'Advanced cybersecurity solutions including endpoint security, SOC operations, and risk & compliance services. ESSL protects enterprises with proven security frameworks.',
};

export default function CyberSecurityPage() {
  return (
    <div className="pt-20">
      <CyberSecurityDetail />
    </div>
  );
}
