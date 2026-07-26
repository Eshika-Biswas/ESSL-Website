import { Metadata } from 'next';
import AIIntelligentAutomationDetail from '@/components/AIIntelligentAutomationDetail';

export const metadata: Metadata = {
  title: 'AI & Intelligent Automation Solutions | ESSL',
  description: 'Harness Artificial Intelligence, Machine Learning, and Intelligent Automation to streamline business processes and enhance decision-making with ESSL.',
};

export default function AIIntelligentAutomationPage() {
  return <AIIntelligentAutomationDetail />;
}
