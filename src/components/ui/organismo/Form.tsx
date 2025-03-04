"use client";
import React from "react";
import FormInput from "../moleculas/FormInput";
import Button from "../atomos/Button";

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit} className="transition-all duration-300 flex flex-col gap-y-5">
      <FormInput type="text" placeholder="Nombre" label="Nombre" />
      <FormInput
        type="email"
        placeholder="Correo electrónico"
        label="Digite su email"
      />
      <FormInput
        type="password"
        placeholder="Contraseña"
        label="Digite su contraseña"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default Form;
