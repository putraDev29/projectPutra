"use client";
import RegisterForm from '../../components/RegisterForm';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/create-pin');
  };

  return (
    <RegisterForm onSubmit={handleSubmit} />
  );
}
