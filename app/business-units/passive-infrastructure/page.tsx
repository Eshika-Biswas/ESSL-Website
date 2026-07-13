import { Metadata } from 'next';
import PassiveInfrastructureDetail from '@/components/PassiveInfrastructureDetail';

export const metadata: Metadata = {
  title: 'Passive Infrastructure | ESSL',
  description: 'Structured, reliable, and future-ready physical infrastructure including structured cabling, fiber optic networks, rack management, power solutions, and physical security.',
};

export default function PassiveInfrastructurePage() {
  return (
    <div className="pt-20">
      <PassiveInfrastructureDetail />
    </div>
  );
}
