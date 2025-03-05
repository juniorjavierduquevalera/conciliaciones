import React from "react";
import Table from "../atomos/Table";
import { TasasDeCambios } from "src/interfaces/interfaceTasaDeCambios";
import { customStylesTable } from "src/app/styles/stylesTable";
import { columnsTasasDeCambios } from "src/components/data/tasaDeCambio";
import useFetchData from "src/hooks/useFetchData";

export const TasasDeCambiosTable: React.FC = () => {
  const { data: tasasDeCambios, isLoading } = useFetchData<TasasDeCambios>(
    "https://lv9d0stg-4000.use2.devtunnels.ms/api/tasa-de-cambio/"
  );

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <Table
      title="Lista de Cambios"
      columns={columnsTasasDeCambios}
      data={tasasDeCambios} 
      customStyles={customStylesTable}
    />
  );
};