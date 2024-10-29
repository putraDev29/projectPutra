// components/TopUpMethod.js
"use client"; // This marks the component as a client component
import Image from 'next/image';

export default function TopUpMethod({ icon, title, description, onClick }) {
  return (
    <div
      className="flex items-center pt-4 pb-4 bg-white border-b border-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <Image src={icon} alt={title} width={56} height={56} />
      </div>
      <div className="ml-4 mr-4 flex-1">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <Image src="/arrow_forward.png" alt={title} width={24} height={24} />
    </div>
  );
}
