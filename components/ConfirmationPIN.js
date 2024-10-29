  // components/CreatePIN.js
  "use client"; // This marks the component as a client component
  import React, { useRef, useState } from 'react';
  import Header from './Header';
  import Image from 'next/image';
  import { useRouter } from 'next/navigation';
  
  export default function ConfirmationPIN() {
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
        router.push('/topup-method');
      }
    };
  
  
      return (
          <div className="flex flex-col items-center h-screen bg-white p-4">
              <Header title='LRT X JakOne Pay' />
              <div className="flex flex-col items-center w-full max-w-md mt-6">
                  <img src="/logo-lrt.png" alt="LRT Logo" className="h-12 mb-6" />
              </div>
              <span className="text-lg font-semibold mb-4">Konfirmasi PIN Kamu!</span>
              
              <div className="flex justify-center space-x-2 mt-6">
              {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  type="password"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={inputValues[index]} // Control the input value
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-12 h-12 border border-red-500 text-center text-xl"
                />
              ))}
              </div>
  
              <Image src="/logo-create-pin.png" alt="Create PIN" width={238} height={219} className="inline-block mt-12 mb-2" />
              <span>Seluruh Informasi Kamu Terlindungi</span>
  
              <footer className="mt-auto text-center text-xs text-gray-400 pb-4">
                  Powered by{" "}
                  <Image src="/logo-bankdki.svg" alt="Bank DKI" width={103} height={20} className="inline-block" />
              </footer>
          </div>
      );
  }