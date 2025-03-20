// import ListaDeEstadoDeCuenta from "src/components/ui/organismo/ListaDeEstadoDeCuenta";

// export default function page() {
//   return (
//     <>
//      <ListaDeEstadoDeCuenta/> 
//     </>
//   )
// }

'use client'
import { useEffect } from "react";
import { useEstadoDeCuentaStore } from "../../../hooks/useEstadoDeCuentaStore";

const EstadoDeCuentaPage = () => {
  const { estados, isLoading, fetchEstados } = useEstadoDeCuentaStore();

  useEffect(() => {
    fetchEstados();
  }, []);

  if (isLoading) {
    return <pre>Cargando...</pre>;
  }

  return (
    <div>
      <h1>Lista de Estados de Cuenta</h1>
      <pre>{JSON.stringify(estados, null, 2)}</pre>
    </div>
  );
};

export default EstadoDeCuentaPage;

