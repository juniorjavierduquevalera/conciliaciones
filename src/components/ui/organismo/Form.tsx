"use client";
import React from "react";
import FormInput from "../moleculas/FormInput";
import Button from "../atomos/Button";
import { useInputValues } from "src/hooks/useInputType";

const Form: React.FC = () => {
  const { values, handleChange } = useInputValues({
    Nombre: "",
    "Correo electrónico": "",
    Contraseña: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado", values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="transition-all duration-300 flex flex-col gap-y-5"
    >
      <FormInput
        type="text"
        placeholder="Nombre"
        label="Nombre"
        value={values.Nombre}
        onChange={handleChange("Nombre")}
        id="Nombre"
      />
      <FormInput
        type="email"
        placeholder="Correo electrónico"
        label="Digite su email"
        value={values["Correo electrónico"]}
        onChange={handleChange("Correo electrónico")}
        id="Correo electrónico"
      />
      <FormInput
        type="password"
        placeholder="Contraseña"
        label="Digite su contraseña"
        value={values.Contraseña}
        onChange={handleChange("Contraseña")}
        id="Contraseña"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default Form;
