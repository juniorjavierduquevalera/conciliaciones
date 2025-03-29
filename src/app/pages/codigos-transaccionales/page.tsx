// import React from 'react'
// import ListaDeCodigosTransaccionales from 'src/components/ui/organismo/ListaDeCodigosTransaccionales'

// export default function page() {
//   return (
//     <>
//       <ListaDeCodigosTransaccionales/>
//     </>
//   )
// }
'use client'
import { useEffect } from "react";
import { useCodigoTransaccionalStore } from "../../../hooks/useCodigoTransaccionalStore";

const CodigoTransaccionalPage = () => {
  const { codigos, isLoading, fetchCodigos } = useCodigoTransaccionalStore();

  useEffect(() => {
    fetchCodigos();
  }, []);

  if (isLoading) {
    return <pre>Cargando...</pre>;
  }

  return (
    <div>
      <h1>Lista de Códigos Transaccionales</h1>
      <pre>{JSON.stringify(codigos, null, 2)}</pre>
    </div>
  );
};

export default CodigoTransaccionalPage;

