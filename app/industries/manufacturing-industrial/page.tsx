import { Metadata } from 'next';
import ManufacturingIndustrialDetail from '@/components/ManufacturingIndustrialDetail';

export const metadata: Metadata = {
  title: 'Manufacturing & Industrial IT & OT Solutions | ESSL',
  description: 'Power smart manufacturing with reliable, secure, and connected infrastructure. ESSL delivers factory networks, industrial Wi-Fi, OT security, and AI video analytics.',
};

export default function ManufacturingIndustrialPage() {
  return (
    <div className="pt-20">
      <ManufacturingIndustrialDetail />
    </div>
  );
}
