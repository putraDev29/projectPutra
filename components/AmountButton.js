// components/AmountButton.js
"use client"; // This marks the component as a client component
import Image from 'next/image';

export default function AmountButton({ amount, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center p-3 border border-gray-200 rounded-md w-full md:w-28 hover:border-red-500"
    >
      <Image src={icon} alt="icon" width={40} height={40} className="mr-2" />
      <span className="text-sm font-medium">{amount}</span>
    </button>
  );
}
