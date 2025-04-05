'use client'
import { useEffect } from "react";
import { useEstadoDeCuentaStore } from "../../../hooks/useEstadoDeCuentaStore";
import DataTable, {TableColumn } from "react-data-table-component";
import { interfaceEstadoDeCuenta } from "src/interfaces/interfaceEstadoDeCuenta";
import { customStylesTable } from "src/app/styles/stylesTable";

const EstadoDeCuentaPage = () => {
  const { estados, isLoading, fetchEstados } = useEstadoDeCuentaStore();
  
  useEffect(() => {
    fetchEstados();
  }, []);
  const columns: TableColumn<interfaceEstadoDeCuenta>[] = [
    {
      name: 'ID', selector: (row) => row.id, sortable: true
    },
    {
      name: 'Fecha', selector: (row) => row.fecha, sortable: true
    },
    {
      name: 'Referencia', selector: (row) => row.referencia, sortable: true
    },
    {
      name: 'Concepto', selector: (row) => row.concepto, sortable: true
    },
    {
      name: 'Cargo', selector: (row) => row.cargo, sortable: true
    },
    {
      name: 'Abono', selector: (row) => row.abono, sortable: true
    },
    {
      name: 'Saldo', selector: (row) => row.saldo, sortable: true
    },
    {
      name: 'Codigo de operacion', selector: (row) => row.codigo_operacion, sortable: true
    },
    {
      name: 'Tipo de operacion', selector: (row) => row.tipo_operacion, sortable: true
    },
    {
      name: 'Fecha creacion', selector: (row) => row.fecha_creacion, sortable: true
    },
    {
      name: 'Fecha actualizacion', selector: (row) => row.fecha_actualizacion, sortable: true
    }

  ]
  if (isLoading) {
    return <pre>Cargando...</pre>;
  }

  const flattenedEstadoDeCuenta = estados.flat();

  return (
    <div>
      <h1>Lista de Estados de Cuenta</h1>
      <DataTable<interfaceEstadoDeCuenta>
        columns={columns}
        data={flattenedEstadoDeCuenta}
        pagination
        customStyles={customStylesTable}
        />
      
    </div>
  );
};

export default EstadoDeCuentaPage;

