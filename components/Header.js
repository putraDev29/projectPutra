import React from 'react';

export default function Header({ title }) {
  return (
    <div className="flex items-center w-full max-w-md">
      <button className="text-red-600 mr-4">
        <img src="/arrow-left.svg" alt="Back" className="w-6 h-6" />
      </button>
      <h1 className="font-bold">{title}</h1>
    </div>
  );
}
