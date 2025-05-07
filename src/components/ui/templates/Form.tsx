"use client";
import React, { useState } from "react";
import Image from "next/image";
import RegisterPage from "src/components/ui/organismo/Register";
import LoginPage from "src/components/ui/organismo/Login";

export default function Form() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center gap-x-12">
      <div className="bg-white/50 p-8 flex flex-col items-center rounded shadow-md w-96 height-div">
        <Image
          src="/administradora.jpg"
          alt="Conexión de Datos"
          width={250}
          height={250}
        />
        <div className="self-start">
          <h1 className="font-bold text-green-500 text-xl mb-9 ">
            Conciliaciones Bancarias
          </h1>
          <p className="text-base italic text-justify">
            "El éxito no llega por azar, sino por la constancia y la valentía de
            seguir adelante.
          </p>
        </div>
        <div className="relative w-full h-10 mb-4 mt-20">
          <div
            className={`absolute w-1/2 h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out`}
            style={{ left: showRegisterForm ? "50%" : "0" }}
          ></div>
          <button
            className={`px-6 py-2 rounded-l-full w-1/2 relative z-10 ${
              !showRegisterForm ? "text-white font-bold" : "text-gray-500"
            } transition-colors duration-300`}
            onClick={() => setShowRegisterForm(false)}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-6 py-2 rounded-r-full w-1/2 relative z-10 ${
              showRegisterForm ? "text-white font-bold" : "text-gray-500"
            } transition-colors duration-300`}
            onClick={() => setShowRegisterForm(true)}
          >
            Registrar
          </button>
        </div>
      </div>
      <div className="p-8 rounded shadow-md w-96 height-div flex justify-center">
        {!showRegisterForm && <LoginPage />}
        {showRegisterForm && <RegisterPage/>}
      </div>
    </div>
  );
}
