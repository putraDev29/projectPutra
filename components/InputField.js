import { useState, useEffect } from 'react';

export default function InputField({ label, type = "text", autoFocus = false }) {
  const [isFocused, setIsFocused] = useState(autoFocus);
  const [value, setValue] = useState('');

  useEffect(() => {
    // If autoFocus is true, set focus on mount
    if (autoFocus) setIsFocused(true);
  }, [autoFocus]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false);
  };

  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={autoFocus}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500
          ${isFocused || value ? 'pt-5' : ''}`}
      />
      <label
        className={`absolute left-4 top-3 text-gray-400 transition-all duration-200
          ${isFocused || value ? 'text-xs -top-2 text-red-500' : 'text-sm'}`}
      >
        {label}
      </label>
    </div>
  );
}
