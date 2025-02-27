import React from "react";
import { TfiEmail } from "react-icons/tfi";

interface LoginProps{
  type: "name" | "email" | "password";
  placeholder: string;
  

}
export default function Input({type, placeholder, onChange}) {
  return (
    <div className="relative w-full">
      <TfiEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

      <input
        type="email"
        autoComplete="on"
        placeholder="Type your email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}
