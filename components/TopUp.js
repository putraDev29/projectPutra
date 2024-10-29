// pages/topup.js
"use client"; // This marks the component as a client component
import Header from './Header';
import AmountButton from './AmountButton';
import { useState } from 'react';
import Image from 'next/image';

export default function TopUp() {
  const [customAmount, setCustomAmount] = useState(0);

  const handleAmountClick = (amount) => {
    setCustomAmount(amount);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCustomAmount(value ? parseInt(value, 10) : 0);
  };

  return (
    <div className="items-center h-screen bg-white p-4">
      <Header title="Top Up LRTJPay" />

   
      <div className="flex items-center w-full mt-8">
        <Image src="/icon_topup.png" width={56} height={56} alt="Back" className='mr-4'/>
        <h3 className="text-lg font-semibold mb-2">Via Debit/Credit Card</h3>
        </div>

        <div className="flex w-full mt-8 bg-gray-100 p-2">
        <Image src="/announcement.png" width={14} height={14} alt="Back" className='mr-4 ml-2'/>
        <h3 className="text-red-500 text-sm font-semibold">Topup Information </h3>
        </div>
        <div className="flex w-full bg-gray-100 pb-2 pl-2 pr-2">
        <h3 className="text-sm font-semibold mb-2 ml-10">You can save up to Rp 2.000.000 with maximum transactions of Rp 20.000.000 per month</h3>
        </div>
       
        <div className="grid grid-cols-2 gap-4 my-4">
          {["Rp50.000", "Rp100.000", "Rp150.000", "Rp200.000", "Rp250.000", "Rp300.000"].map((amount) => (
            <AmountButton
              key={amount}
              amount={amount}
              icon="/icon_topup.png" // replace with actual path
              onClick={() => handleAmountClick(amount)}
            />
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Enter Another Amount</label>
          <div className="flex items-center mt-2">
            <span className="text-xl font-bold mr-2">Rp</span>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="w-full p-2 border border-gray-200 rounded-md text-lg font-medium text-gray-700"
              placeholder="0"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Minimum top up amount Rp 20.000</p>
        </div>

        <button
          className={`w-full mt-6 p-3 rounded-md ${
            customAmount >= 0? 'bg-gray-300 text-gray-400' : 'bg-red-500 text-white'
          }`}
          disabled={customAmount < 0}
        >
          Next
        </button>
      </div>
   
  );
}
