import { Metadata } from 'next';
import NetworkSecurityDetail from '@/components/NetworkSecurityDetail';

export const metadata: Metadata = {
  title: 'Network & Security | ESSL',
  description: 'High-performance networking and security solutions for a connected enterprise. ESSL designs, deploys, and manages enterprise networks.',
};

export default function NetworkSecurityPage() {
  return (
    <div className="pt-20">
      <NetworkSecurityDetail />
    </div>
  );
}
