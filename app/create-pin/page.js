// pages/create-pin.js
"use client"; // This line designates the component as a client component

import CreatePIN from '@/components/CreatePIN';
import { useRouter } from 'next/navigation';

export default function CreatePINPage() {
  const router = useRouter();

  const handleSubmit = () => {
    // Logic for resending OTP (e.g., trigger API call)
    console.log('Resending OTP...');
  };

  return (
    <CreatePIN onSubmit={handleSubmit} />
  );
}
