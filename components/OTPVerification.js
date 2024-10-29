"use client"; // This marks the component as a client component
import React, { useRef, useState } from 'react';
import Header from './Header';
import { useRouter } from 'next/navigation';

export default function OTPVerification({ onResendOTP }) {
  const router = useRouter();
  const inputRefs = useRef([]);
  const [inputValues, setInputValues] = useState(Array(6).fill("")); 

  const handleInputChange = (e, index) => {
    const { value } = e.target;

    const newInputValues = [...inputValues];
    newInputValues[index] = value;

    // Move to the next input if a character is entered
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      // Move to the previous input if backspace is pressed
      inputRefs.current[index - 1].focus();
    }

    setInputValues(newInputValues);

    // Check if all inputs are filled
    if (newInputValues.every((value) => value.length === 1)) {
      // Navigate to the next page if all inputs are filled
      router.push('/register-form');
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-white p-4">
     <Header title='Verifikasi Kode OTP' />
      <div className="flex flex-col items-center w-full max-w-md mt-6">
        <p className="text-gray-500 text-center mb-6">
          Masukkan 6 digit kode yang sudah dikirim ke nomor kamu di bawah ini ya!<br />
          <span className="font-bold text-red-600">085839328544</span>
        </p>
        <div className="flex space-x-2">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputRefs.current[index] = el)}
                value={inputValues[index]} // Control the input value
                onChange={(e) => handleInputChange(e, index)}
                className="w-12 h-12 border-b-2 border-gray-300 text-center text-lg focus:outline-none focus:border-red-500"
              />
            ))}
        </div>

        <div className="mt-6 text-center text-gray-500">
          <span className="mt-4 font-bold">Tidak menerima kode?{' '}</span>
          <button
            onClick={onResendOTP}
            className="mt-4"
          >
            Kirim kode kembali dalam 00:10
          </button>
        </div>
      </div>
    </div>
  );
}