import { Metadata } from 'next';
import DigitalTransformationDetail from '@/components/DigitalTransformationDetail';

export const metadata: Metadata = {
  title: 'Digital Transformation Solutions | ESSL',
  description: 'Accelerate business growth through strategic consulting, technology modernization, process automation, and digital innovation with ESSL.',
};

export default function DigitalTransformationPage() {
  return <DigitalTransformationDetail />;
}
