import { Metadata } from 'next';
import OurStoryDetail from '@/components/OurStoryDetail';

export const metadata: Metadata = {
  title: 'Our Story | ESSL',
  description: 'Learn more about the history, growth, mission, and milestones of Ensure Support Services Limited (ESSL).',
};

export default function OurStoryPage() {
  return (
    <OurStoryDetail />
  );
}
