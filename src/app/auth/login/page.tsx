"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <Image
          src="/administradora.svg"
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-4" // Centra la imagen horizontalmente
        />
        <h1 className="text-2xl font-semibold mb-4 text-green-500 text-center">
          Iniciar Sesión
        </h1>
        <p className="mb-6 text-center">Inicia sesión para continuar</p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className="flex items-center justify-center">
            {" "}
            {/* Centra el botón */}
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Iniciar Sesión Clicked (Simulated)");
              }}
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="text-center mt-4">
            {" "}
            {/* Centra el enlace */}
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            >
              Olvidaste la contraseña?
            </a>
          </div>
        </form>
        <hr className="my-6 border-gray-300" /> {/* Línea divisoria */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            No tienes cuenta?{" "}
            <a
              href="#"
              className="font-bold text-green-500 hover:text-green-800"
            >
              Registrate
            </a>
          </p>

          <p className="text-xs text-gray-500 mt-2">
            <a href="#" className="hover:underline">
              Terms
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
