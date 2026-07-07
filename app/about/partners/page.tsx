import { Metadata } from 'next';
import PartnersSection from '@/components/PartnersSection';

export const metadata: Metadata = {
  title: 'Our Partners | ESSL',
  description: 'Learn about Ensure Support Services Limited (ESSL) strategic industry partnerships and alliances.',
};

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <PartnersSection />
    </div>
  );
}
