'use client'
import React from 'react';
import FormInput from '../moleculas/FormInput';
import Button from '../atomos/Button';

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar el formulario
    console.log('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput type="text" placeholder="Nombre" />
      <FormInput type="email" placeholder="Correo electrónico" />
      <FormInput type="password" placeholder="Contraseña" />
      <Button>Enviar</Button>
    </form>
  );
};

export default Form;