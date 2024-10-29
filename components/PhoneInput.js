"use client"; // This marks the component as a client component
import React from 'react';
import Header from './Header'
import Image from 'next/image';

export default function PhoneInput({ onSendOTP }) {
  return (
    <div className="flex flex-col items-center h-screen bg-white p-4">
      <Header title='LRT X JakOne Pay' />
      <div className="flex flex-col items-center w-full max-w-md mt-6">
        <img src="/logo-lrt.png" alt="LRT Logo" className="h-12 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Selamat Datang</h2>
      </div>
      <div className="flex flex-col w-full max-w-md mt-6">
        <p className="text-gray-500 mt-6">
          Ekspresikan perjalananmu menggunakan LRT Pay
        </p>
      </div>
      <div className="flex flex-col items-center w-full max-w-md mt-4">
        <label htmlFor="phone" className="w-full text-left mb-2 font-bold text-sm text-gray-700">Nomor Telepon</label>
        <div className="flex items-center border border-red-600 rounded-md p-1 w-full">
        <input
          type="text"
          id="phone"
          className="p-3 flex-1 focus:outline-none rounded-md"
          placeholder="085839328544"
        />
        <button
          onClick={onSendOTP}
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md ml-2 m-4"
        >
          Kirim OTP
        </button>
      </div>

        <p className="text-xs font-semibold mt-4">
          Seluruh transaksi aman, dengan melanjutkan proses ini. Menu{' '}
          <span className="text-red-600 font-semibold">syarat & ketentuan</span> yang berlaku
        </p>
      </div>
      <footer className="mt-auto text-center text-xs text-gray-400 pb-4">
        Powered by{" "}
        <Image src="/logo-bankdki.svg" alt="Bank DKI" width={103} height={20} className="inline-block" />
      </footer>
    </div>
  );
}
