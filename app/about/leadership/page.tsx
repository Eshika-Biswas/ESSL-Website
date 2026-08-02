import { Metadata } from 'next';
import Leadership from '@/components/Leadership';

export const metadata: Metadata = {
  title: 'Leadership Team | ESSL',
  description: 'Meet the leadership team at Ensure Support Services Limited (ESSL) leading our mission-critical services.',
};

export default function LeadershipPage() {
  return (
    <div className="pt-20">
      <Leadership />
    </div>
  );
}
