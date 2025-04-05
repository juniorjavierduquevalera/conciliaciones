
'use client'
import React, { useEffect } from "react";
import DataTable, {TableColumn} from "react-data-table-component";
import { useCodigoTransaccionalStore } from "../../../hooks/useCodigoTransaccionalStore";
import { interfaceCodigosTransaccionales } from "src/interfaces/interfaceCodigosTransaccionales";
import { customStylesTable } from "src/app/styles/stylesTable";

const CodigoTransaccionalPage: React.FC = () => {
  const { codigos, isLoading, fetchCodigos } = useCodigoTransaccionalStore();

  useEffect(() => {
    fetchCodigos();
  }, []);

  const columns: TableColumn<interfaceCodigosTransaccionales>[] = [
  {
    name: 'ID', selector: (row) => row.id, sortable: true
  },
  {
    name: 'Codigo', selector: (row) => row.codigo, sortable: true
  },
  {
    name: 'Descripcion', selector: (row) => row.descripcion
  }
  ];
  if (isLoading) {
    return <pre>Cargando...</pre>;
  }

  const flattenedCodigosTransaccionales = codigos.flat();

  return (
    <div>
      <h1>Lista de Códigos Transaccionales</h1>
      <DataTable<interfaceCodigosTransaccionales>
        columns={columns}
        data={flattenedCodigosTransaccionales}
        pagination
        customStyles={customStylesTable}
      />
    </div>
  );
};

export default CodigoTransaccionalPage;

