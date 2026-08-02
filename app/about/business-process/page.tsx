import { Metadata } from 'next';
import BusinessProcess from '@/components/BusinessProcess';

export const metadata: Metadata = {
  title: 'Our Business Process | ESSL',
  description: 'Understand how Ensure Support Services Limited (ESSL) operates and delivers solutions sequentially and systematically.',
};

export default function BusinessProcessPage() {
  return (
    <div className="pt-20">
      <BusinessProcess />
    </div>
  );
}
