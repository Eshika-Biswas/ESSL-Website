import { Metadata } from 'next';
import DigitalWorkplaceDetail from '@/components/DigitalWorkplaceDetail';

export const metadata: Metadata = {
  title: 'Digital Workplace Solutions | ESSL',
  description: 'Enable secure, seamless hybrid and remote work with ESSL. Unified collaboration tools, Zero Trust remote access, and endpoint protection.',
};

export default function DigitalWorkplacePage() {
  return (
    <div className="pt-20">
      <DigitalWorkplaceDetail />
    </div>
  );
}
