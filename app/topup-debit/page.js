"use client";
import TopUp from '@/components/TopUp';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/create-pin');
  };

  return (
    <TopUp onSubmit={handleSubmit} />
  );
}
