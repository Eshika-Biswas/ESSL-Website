import { Metadata } from 'next';
import LicensingSoftwareServicesDetail from '@/components/LicensingSoftwareServicesDetail';

export const metadata: Metadata = {
  title: 'Licensing & Software Services | ESSL',
  description: 'Procure, manage, and renew software licenses and subscriptions across cloud platforms, cybersecurity, backup, and productivity tools with ESSL.',
};

export default function LicensingSoftwareServicesPage() {
  return <LicensingSoftwareServicesDetail />;
}
