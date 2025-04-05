'use client'
import { useEffect } from "react";
import { useComercialStore } from "../../../hooks/useComercialStore";
import DataTable, { TableColumn } from "react-data-table-component";
import { Comerciales } from "src/interfaces/interfaceComerciales";
import { customStylesTable } from "src/app/styles/stylesTable";


const ComercialesPage = () => {
  const { comerciales, isLoading, fetchComerciales } = useComercialStore();

  useEffect(() => {
    fetchComerciales();
  }, []);

  const columns: TableColumn<Comerciales>[] = [
    { 
      name: 'ID', selector: (row) => row.id, sortable: true
    },
    {
      name: 'Codigo', selector: (row) => row.codigo, sortable: true
    },
    {
      name: 'Comercial', selector: (row) => row.comercial, sortable: true
    },
    {
      name: 'Rif', selector: (row) => row.rif, sortable: true
    },
    {
      name: 'Direccion', selector: (row) => row.direccion, sortable: true
    },
    {
      name: 'Superficie', selector: (row) => row.superficie, sortable: true
    },
    {
      name: 'Rif Propietario', selector: (row) => row.propietario_comercial.rif, sortable: true
    },
    { 
      name: 'Propietario', selector: (row) => row.propietario_comercial.propietario, sortable: true
    }
  ];
  
  if (isLoading) {
    return <pre>Cargando...</pre>;
  }

  const flattenedComerciales = comerciales.flat();
  return (
    <div>
      <h1>Lista de Comerciales</h1>
      <DataTable<Comerciales> 
        columns = {columns}
        data={flattenedComerciales}
        pagination
        customStyles={customStylesTable}
        />
    </div>
  );
};

export default ComercialesPage;

