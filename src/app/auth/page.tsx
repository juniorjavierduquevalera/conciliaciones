"use client";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "src/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

interface UserData {
  name: string;
  email: string;
  password: string;
}

export default function Home() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { user, login } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "", 
    password: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserData
  ) => {
    setUserData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    endpoint: string
  ) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://lv9d0stg-4000.use2.devtunnels.ms/api/users/${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.message || "Ocorreu um erro inesperado. Tente novamente."
        );
        return;
      }

      login(data.token);
      toast.success(data.message);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Algo deu errado";
      toast.error(
        errorMessage.includes("Unexpected token")
          ? "Problemas técnicos, tente depois"
          : errorMessage
      );
    }
  }
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

      <div className="bg-white/50 p-8 rounded shadow-md w-96 height-div">
        <div className="flex justify-center mb-4"></div>
        <div className="flex justify-center space-x-4 mb-14">
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
          <div>
            <form
              className="transition-all duration-300"
              onSubmit={(e) => handleSubmit(e, "login")}
            >
              <div className="flex flex-col gap-y-2">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <FaUser className="inline-block mr-1" /> Correo
                  </label>
                  <input
                    type="text"
                    value={userData.email}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleChange(e, "email")}
                    placeholder="Ingresa tu correo"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <FaLock className="inline-block mr-1" /> Contraseña
                  </label>
                  <input
                    type="password"
                    value={userData.password}
                    onChange={(e) => handleChange(e, "password")}
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
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        )}
        {showRegisterForm && (
          <div>
            <form
              className="transition-all duration-300 flex flex-col gap-y-5"
              onSubmit={(e) => handleSubmit(e, "")}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre de Usuario
                </label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => handleChange(e, "name")}
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
                  value={userData.email}
                  onChange={(e) => handleChange(e, "email")}
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
                  value={userData.password}
                  onChange={(e) => handleChange(e, "password")}
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
                >
                  Entrar
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        )}
      </div>
    </div>
  );
}
