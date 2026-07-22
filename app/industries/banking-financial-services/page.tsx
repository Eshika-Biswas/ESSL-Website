import { Metadata } from 'next';
import BankingFinancialServicesDetail from '@/components/BankingFinancialServicesDetail';

export const metadata: Metadata = {
  title: 'Banking & Financial Services IT Solutions | ESSL',
  description: 'Secure, resilient, and compliant technology solutions for modern financial institutions. ESSL architects core banking infrastructure, Zero Trust security, and cloud transformation.',
};

export default function BankingFinancialServicesPage() {
  return (
    <div className="pt-20">
      <BankingFinancialServicesDetail />
    </div>
  );
}
