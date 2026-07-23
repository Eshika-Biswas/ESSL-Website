import { Metadata } from 'next';
import RetailEcommerceDetail from '@/components/RetailEcommerceDetail';

export const metadata: Metadata = {
  title: 'Retail & E-Commerce Infrastructure & POS Security | ESSL',
  description: 'Empower connected retail with secure, intelligent, and scalable technology solutions. ESSL delivers store SD-WAN, POS network security, warehouse logistics, and AI retail analytics.',
};

export default function RetailEcommercePage() {
  return (
    <div className="pt-20">
      <RetailEcommerceDetail />
    </div>
  );
}
