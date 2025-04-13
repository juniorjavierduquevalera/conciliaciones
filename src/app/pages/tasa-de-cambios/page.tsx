'use client'
import React, { useEffect } from "react";
import DataTable, { TableColumn } from 'react-data-table-component';
import { useTasaDeCambioStore } from "../../../hooks/useTasaDeCambioStore";
import { TasasDeCambios } from "src/interfaces/interfaceTasaDeCambios";
import { customStylesTable } from "src/app/styles/stylesTable";

const TasaDeCambioPage: React.FC =  () => {
  const { tasas, isLoading, fetchTasas } = useTasaDeCambioStore();

  useEffect(() => {
    fetchTasas();
  }, []);

  const columns: TableColumn<TasasDeCambios>[] = [

    {
      name: 'ID', selector: (row) => row.id, sortable: true
    },
    {
      name: 'Moneda Nacional', selector: (row) => row.moneda_nacional, sortable: true
    },
    {
      name: 'Moneda Extranjera', selector: (row) => row.moneda_extranjera, sortable: true
    },
    {
      name: 'Cambio', selector: (row) => row.cambio, sortable: true
    },
    {
      name: 'Fecha', selector: (row) => row.fecha, sortable: true
    },

  ];

  if (isLoading) {
    return <pre>Cargando...</pre>;
  }
  console.log("Valor de tasas antes de DataTable:", tasas); // <--- AGREGAR ESTO

  return (
    <div>
      <h1>Tasas de Cambio</h1>
      <DataTable<TasasDeCambios>
        columns={columns}
        data={tasas}
        pagination
        customStyles={customStylesTable}
      />
    </div>
  );
};

export default TasaDeCambioPage;

