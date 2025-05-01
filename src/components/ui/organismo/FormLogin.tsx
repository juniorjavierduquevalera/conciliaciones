"use client";
import React from "react";
import Input from "../atomos/Input";
import Button from "../atomos/Button";
import { useInputValues } from "src/hooks/useInputType";
//import { useAuth } from "src/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Icons from "../atomos/Icons";
import useSubmit from "src/hooks/useSubmit";

interface Values {
  email: string;
  password: string;
}

const FormLogin: React.FC = () => {
  //const { login } = useAuth();
  const router = useRouter();
  const { values, handleChange } = useInputValues<Values>({

    email: "",
    password: "",
  });

  const { handleSubmit, loading } = useSubmit<Values>({
    values,
    endpoint: "login",
    onSuccess: (data) => {
    // login(data);
      router.push("/");
    }
  });

  return (
    <div>
      <Icons />
      <form className="transition-all duration-300 flex flex-col gap-y-5">
    <Input
          type="email"
          placeholder="Correo electrónico"
          label="Digite su email"
          value={values.email}
          onChange={handleChange("email")}
          id="email"
        />
        <Input
          type="password"
          placeholder="Contraseña"
          label="Digite su contraseña"
          value={values.password}
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

export default FormLogin;