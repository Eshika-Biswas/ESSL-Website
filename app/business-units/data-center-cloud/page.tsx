import { Metadata } from 'next';
import DataCenterCloudDetail from '@/components/DataCenterCloudDetail';

export const metadata: Metadata = {
  title: 'Data Center & Cloud | ESSL',
  description: 'Enterprise data center modernization and cloud migration solutions including compute, storage, virtualization, backup, and hybrid cloud services.',
};

export default function DataCenterCloudPage() {
  return (
    <div className="pt-20">
      <DataCenterCloudDetail />
    </div>
  );
}
