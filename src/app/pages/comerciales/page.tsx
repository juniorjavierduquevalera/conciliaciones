// import ListaComerciale from "src/components/ui/organismo/ListaDeComerciales"

// export default function page() {
//   return (
//     <div>
//       <ListaComerciale/>
//     </div>
//   )
// }

'use client'
import { useEffect } from "react";
import { useComercialStore } from "../../../hooks/useComercialStore";

const ComercialesPage = () => {
  const { comerciales, isLoading, fetchComerciales } = useComercialStore();

  useEffect(() => {
    fetchComerciales();
  }, []);

  if (isLoading) {
    return <pre>Cargando...</pre>;
  }

  return (
    <div>
      <h1>Lista de Comerciales</h1>
      <pre>{JSON.stringify(comerciales, null, 2)}</pre>
    </div>
  );
};

export default ComercialesPage;

