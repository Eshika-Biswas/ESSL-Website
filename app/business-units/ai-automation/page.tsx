import { Metadata } from 'next';
import AIAutomationDetail from '@/components/AIAutomationDetail';

export const metadata: Metadata = {
  title: 'AI & Automation | ESSL',
  description: 'Intelligent automation and AI-driven solutions that transform how you work.',
};

export default function AIAutomationPage() {
  return (
    <div className="pt-20">
      <AIAutomationDetail />
    </div>
  );
}
