import React from "react";
import Table from "../atomos/Table";
import { Comerciales } from "src/interfaces/interfaceComerciales";
import { columnsComerciales } from "src/components/data/columnsComerciales";
import { customStylesTable } from "src/app/styles/stylesTable";
import useFetchData from "src/hooks/useFetchData";

export const ComercialesTable: React.FC = () => {
  const { data: comerciales, isLoading } = useFetchData<Comerciales>(
    "https://lv9d0stg-4000.use2.devtunnels.ms/api/comerciales/"
  );

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <Table
      title="Lista de Empresas"
      columns={columnsComerciales}
      data={comerciales}
      customStyles={customStylesTable}
    />
  );
};