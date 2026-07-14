import { Metadata } from 'next';
import SoftwareEngineeringDetail from '@/components/SoftwareEngineeringDetail';

export const metadata: Metadata = {
  title: 'Software Engineering | ESSL',
  description: 'Custom software solutions and seamless integrations built for your business.',
};

export default function SoftwareEngineeringPage() {
  return (
    <div className="pt-20">
      <SoftwareEngineeringDetail />
    </div>
  );
}
