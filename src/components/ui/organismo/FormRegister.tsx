"use client";
import React from "react";
import Input from "../atomos/Input";
import Button from "../atomos/Button";
import { useInputValues } from "src/hooks/useInputType";
import { useRouter } from "next/navigation";
import Icons from "../atomos/Icons";
import useSubmit from "src/hooks/useSubmit";

interface Values {
  name?: string;
  email: string;
  password: string;
}

const FormRegister: React.FC = () => {
  const router = useRouter();
  const { values, handleChange } = useInputValues<Values>({
    name: "",
    email: "",
    password: "",
  });
  const { handleSubmit, loading } = useSubmit<Values>({
    values,
    endpoint: "",
    onSuccess: () => {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
  });

  return (
    <div>
      <Icons />
      <form className="transition-all duration-300 flex flex-col gap-y-5">
        <Input
          type="text"
          placeholder="Nombre"
          label="Digite su nombre"
          value={values.name || ""} 
          onChange={handleChange("name")}
          id="name"
        />
        <Input 
          type="email"
          placeholder="Correo electrónico"
          label="Digite su email"
          value={values.email || ""} 
          onChange={handleChange("email")}
          id="email"
        />
        <Input 
          type="password"
          placeholder="Contraseña"
          label="Digite su contraseña"
          value={values.password || ""} 
          onChange={handleChange("password")}
          id="password"
        />
        <div className="flex items-center justify-center mt-24">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Enviando..." : "Entrar"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;