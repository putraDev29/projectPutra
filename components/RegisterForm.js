// components/RegisterForm.jsx
"use client"; // This marks the component as a client component
import InputField from './InputField';
import Header from './Header';
import Image from 'next/image';

export default function RegisterForm({onSubmit}) {
  return (
    <div className="flex flex-col h-screen p-4">
    <Header title='LRT X JakOne Pay' />
    <div className="flex flex-col items-center w-full max-w-md mt-6">
        <img src="/logo-lrt.png" alt="LRT Logo" className="h-12 mb-4" />
    </div>
      <form className="mt-4 p-4">
        <InputField label="Nomor telepon/handphone" />
        <InputField label="Nama" />
        <InputField label="Tanggal Lahir" type="date" autoFocus/>
        <InputField label="Tempat Lahir" />
        <InputField label="Email" type="email" />
      </form>
      <hr></hr>
      <button
          onClick={onSubmit}
          className="bg-red-600 text-white font-semibold ml-4 mr-4 rounded-md mt-3 py-3 px-3"
        >
          Daftar
        </button>
        <footer className="mt-auto text-center text-xs text-gray-400 pb-4">
        Powered by{" "}
        <Image src="/logo-bankdki.svg" alt="Bank DKI" width={103} height={20} className="inline-block" />
      </footer>
    </div>
  );
}
