import React from "react";
import InputEmail from "src/components/auth/InputEmail";
import InputPassword from "src/components/auth/InputPassword";

import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-dvh p-16 bg-gradient-to-l from-blue-900 to-blue-500 ">
      <div className="flex flex-col border w-96 items-center text-center bg-slate-100 shadow-2xl rounded-lg p-10 translate-x-14">
        <h1 className="text-3xl font-bold mb-6 text-center w-full">Login</h1>

        <form className="flex flex-col gap-y-7 w-full m-10">
          <InputEmail />
          <InputPassword />
          <button className="w-44 bg-blue-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Log in
          </button>
        </form>
      </div>
      <div
        className="w-96 h-96 bg-background-login2 bg-cover back rounded-lg"
      ></div>
    </main>
  );
}
