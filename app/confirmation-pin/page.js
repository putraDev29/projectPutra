"use client";
import ConfirmationPIN from '../../components/ConfirmationPIN';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = () => {
    // Logic for resending OTP (e.g., trigger API call)
    console.log('Resending OTP...');
  };

  return (
    <ConfirmationPIN onSubmit={handleSubmit} />
  );
}
