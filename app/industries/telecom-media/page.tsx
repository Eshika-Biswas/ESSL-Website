import { Metadata } from 'next';
import TelecomMediaDetail from '@/components/TelecomMediaDetail';

export const metadata: Metadata = {
  title: 'Telecom & Media Infrastructure Solutions | ESSL',
  description: 'Build high-performance, carrier-grade infrastructure for modern connectivity. ESSL architects core IP/MPLS networks, telco cloud data centers, edge compute, and volumetric DDoS mitigation.',
};

export default function TelecomMediaPage() {
  return (
    <div className="pt-20">
      <TelecomMediaDetail />
    </div>
  );
}
