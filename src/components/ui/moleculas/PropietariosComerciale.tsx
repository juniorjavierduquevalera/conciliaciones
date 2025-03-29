import React from "react";
import Table from "../atomos/Table";
import { Propietario } from "src/interfaces/interfacePropietarios";
import { customStylesTable } from "src/app/styles/stylesTable";
import { columnsPropietariosComerciales } from "src/components/data/propietariosComerciales";
import useFetchData from "src/hooks/useFetchData";

export const PropietariosTable: React.FC = () => {
  const { data: propietarios, isLoading } = useFetchData<Propietario>(
    "https://lv9d0stg-4000.use2.devtunnels.ms/api/propietarios-comerciales/"
  );

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <Table
      title="Lista de Propietarios Comerciales"
      columns={columnsPropietariosComerciales}
      data={propietarios}
      customStyles={customStylesTable}
    />
  );
};
