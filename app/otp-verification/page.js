"use client";
import OTPVerification from '../../components/OTPVerification';
import { useRouter } from 'next/navigation';

export default function OTPPage() {
  const router = useRouter();

  const handleResendOTP = () => {
    router.push('/register-form');
  };

  return (
    <OTPVerification onResendOTP={handleResendOTP} />
  );
}
