'use client';
import React, { useEffect } from 'react';
import { useTasaDeCambioStore } from '../../../hooks/useTasaDeCambioStore';
import TasasDataTable from '../moleculas/TasasDeCambioDataTable';

const TasasList = () => {
  const { tasas, isLoading, fetchTasas } = useTasaDeCambioStore();

  useEffect(() => {
    fetchTasas();
  }, []);

  if (isLoading) {
    return <pre>Cargando...</pre>;
  }
  
  return (
    <div>
      <h1>Tasas de Cambio</h1>
      <TasasDataTable tasas={tasas} />
    </div>
  );
};

export default TasasList;