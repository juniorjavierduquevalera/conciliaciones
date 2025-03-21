'use client'
import { useEffect } from "react";
import { useCargosBancariosStore } from "../../../hooks/useCargosBancariosStore";

const CargosBancariosPage = () => {
  const { cargos, isLoading, fetchCargos } = useCargosBancariosStore();

  useEffect(() => {
    fetchCargos();
  }, []);

  if (isLoading) return <pre>Cargando...</pre>;

  return (
    <div>
      <h1>Cargos Bancarios</h1>
      <pre>{JSON.stringify(cargos, null, 2)}</pre>
    </div>
  );
};

export default CargosBancariosPage;
