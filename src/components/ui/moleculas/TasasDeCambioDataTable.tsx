import React from "react";
import Table from "../atomos/Table";
import { TableColumn } from 'react-data-table-component';
import { customStylesTable } from "src/app/styles/stylesTable";
import { TasasDeCambios } from "src/interfaces/interfaceTasaDeCambios";

interface TasasDataTableProps{
  tasas: TasasDeCambios[]
}

const TasasDataTable = ({ tasas }: TasasDataTableProps) => {
  const columns: TableColumn<TasasDeCambios>[] = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Moneda Origen', selector: row => row.moneda_nacional, sortable: true },
    { name: 'Moneda Destino', selector: row => row.moneda_extranjera, sortable: true },
    { name: 'Tasa', selector: row => row.cambio, sortable: true },
  ];

  return (
    <Table<TasasDeCambios>
      title="Tasa de cambio"
      columns={columns}
      data={tasas}
      customStyles={customStylesTable} />
  );
};
export default TasasDataTable;