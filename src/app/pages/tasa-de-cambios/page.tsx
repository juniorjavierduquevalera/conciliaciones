// import React from 'react'
// import ListaDeCambios from 'src/components/ui/organismo/ListaDeCambios'

// export default function page() {
//   return (
//     <>
//       <ListaDeCambios/>
//     </>
//   )
// }
'use client'
import { useEffect } from "react";
import { useTasaDeCambioStore } from "../../../hooks/useTasaDeCambioStore";

const TasaDeCambioPage = () => {
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
      <pre>{JSON.stringify(tasas, null, 2)}</pre>
    </div>
  );
};

export default TasaDeCambioPage;

