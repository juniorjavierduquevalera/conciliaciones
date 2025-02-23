"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

export default function Home() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center gap-x-12 bg-slate-100">
      <div className="bg-white/50 p-8 flex flex-col items-center rounded shadow-md w-96 height-div">
        <Image
          src="/administradora.jpg"
          alt="Conexión de Datos"
          width={250}
          height={250}
        />
        <div className="self-start">
            <h1 className="font-bold text-green-400 text-xl mb-9 ">
              Conciliaciones Bancarias
            </h1>
            <p className="text-base">Una frase motivacional</p>
        </div>
        <div className="relative w-full h-10 mb-4 mt-20">
          <div
            className={`absolute w-1/2 h-full bg-green-200 rounded-full transition-all duration-300 ease-in-out`}
            style={{ left: showRegisterForm ? "50%" : "0" }}
          ></div>
          <button
            className={`px-6 py-2 rounded-l-full w-1/2 relative z-10 ${
              !showRegisterForm ? "text-gray-700 font-bold" : "text-gray-500"
            } transition-colors duration-300`}
            onClick={() => setShowRegisterForm(false)}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-6 py-2 rounded-r-full w-1/2 relative z-10 ${
              showRegisterForm ? "text-gray-700 font-bold" : "text-gray-500"
            } transition-colors duration-300`}
            onClick={() => setShowRegisterForm(true)}
          >
            Registrar
          </button>
        </div>
      </div>

      <div className="bg-white/50 p-8 rounded shadow-md w-96 height-div">
        <div className="flex justify-center mb-4"></div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaFacebook size={32} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={32} />
          </a>
          <a href="#" className="text-red-500 hover:text-red-700">
            <FaGoogle size={32} />
          </a>
        </div>
        {!showRegisterForm && (
          <form className="transition-all duration-300">
            <div className="flex flex-col gap-y-5">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <FaUser className="inline-block mr-1" /> Nombre de Usuario
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu nombre de usuario"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <FaLock className="inline-block mr-1" /> Contraseña
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              <div className="flex items-center mb-6">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-700">
                  Recordar Contraseña
                </label>
              </div>
    
              <div className="" style={{ height: "48px" }}></div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Iniciar Sesión Clicked (Simulated)");
                  }}
                >
                  Entrar
                </button>
              </div>
            </div>
          </form>
        )}
        {showRegisterForm && (
          <form className="transition-all duration-300 flex flex-col gap-y-5">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nombre de Usuario
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingresa tu nombre de usuario"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Correo
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="flex items-center ">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">
                Acepto Términos y Condiciones
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Iniciar Sesión Clicked (Simulated)");
                }}
              >
                Entrar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}