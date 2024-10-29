// components/TopUpMethods.js
"use client";

import TopUpMethod from './TopUpMethod';
import Header from './Header';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function TopUpMethods() {
  const router = useRouter();

  const topUpMethods = [
    {
      icon: '/jakone-mobile.svg', // replace with your actual image path
      title: 'JakOne Mobile',
      description: 'No administration fees via the JakOne Mobile App',
      route: '/jakone-mobile',
    },
    {
      icon: '/icon-atm.png',
      title: 'ATM Bank DKI',
      description: 'Top up Martipay from nearest Bank DKI ATM',
      route: '/atm-bank-dki',
    },
    {
      icon: '/icon-bank.png',
      title: 'Other Bank',
      description: 'Transfer anytime from your favorite Indonesia bank',
      route: '/other-bank',
    },
    {
      icon: '/icon-debit.png',
      title: 'Debit Card',
      description: 'Top up online using your debit card',
      route: './topup-debit',
    },
  ];

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center h-screen bg-white p-4">
      <Header title="Top Up LRTJPay" onBack={handleBack} />
    <div className="flex items-center w-full mt-8">
        <Image src="/icon_topup.png" width={56} height={56} alt="Back" />
        <h3 className="text-lg font-semibold mb-2">Top Up Methods</h3>
    </div>
     
        <div className="mt-8">
          {topUpMethods.map((method, index) => (
            <div key={index} onClick={() => router.push(method.route)}>
              <TopUpMethod
                icon={method.icon}
                title={method.title}
                description={method.description}
              />
            </div>
          ))}
        </div>
      </div>
  );
}
