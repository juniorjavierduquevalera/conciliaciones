// import ListaPropietarios from "src/components/ui/organismo/ListaDePropietariosComerciales";

// export default function page() {
//   return (
//     <div className="">
//       <ListaPropietarios/>
//     </div>
//   )
// }

'use client'
import { useEffect } from "react";
import { usePropietarioComercialStore } from "../../../hooks/usePropietarioComercialStore";

const PropietariosComercialesPage = () => {
  const { propietarios, isLoading, fetchPropietarios } = usePropietarioComercialStore();

  useEffect(() => {
    fetchPropietarios();
  }, []);

  if (isLoading) {
    return <pre>Cargando...</pre>;
  }

  return (
    <div>
      <h1>Lista de Propietarios Comerciales</h1>
      <pre>{JSON.stringify(propietarios, null, 2)}</pre>
    </div>
  );
};

export default PropietariosComercialesPage;

