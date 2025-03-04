import React from "react";
import { TfiEmail } from "react-icons/tfi";

export default function InputEmail() {
  return (
    <div className="relative w-full">
      <TfiEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

      <input
        type="email"
        autoComplete="on"
        placeholder="Type your email"
        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none input-style"
      />
    </div>
  );
}
