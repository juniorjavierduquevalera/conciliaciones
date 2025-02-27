import React from "react";
import { HiOutlineKey } from "react-icons/hi2";

export default function InputPassword() {
  return (
    <div className="relative w-full">
      <HiOutlineKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="password"
        autoComplete="on"
        placeholder="Digite sua senha"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}
