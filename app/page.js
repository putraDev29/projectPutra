"use client";
import PhoneInput from '../components/PhoneInput';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSendOTP = () => {
    router.push('/otp-verification');
  };

  return (
    <PhoneInput onSendOTP={handleSendOTP} />
  )
}