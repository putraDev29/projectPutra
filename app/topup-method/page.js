"use client";
import TopUpMethods from '@/components/TopUpMethods';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/create-pin');
  };

  return (
    <TopUpMethods onSubmit={handleSubmit} />
  );
}
