'use client';
import { useEffect } from 'react';
import { useConciliacionStore } from '../../../hooks/useConciliacionStore';
import DataTable, { TableColumn } from 'react-data-table-component';
import { interfaceConciliacionBancaria } from 'src/interfaces/interfaceConciliacionBancaria';
import { customStylesTable } from 'src/app/styles/stylesTable';

const ConciliacionesPage = () => {
  const { conciliaciones, isLoading, fetchConciliaciones } = useConciliacionStore();

  useEffect(() => {
    fetchConciliaciones();
  }, []);

  const columns: TableColumn<interfaceConciliacionBancaria>[] = [
    {
      name: 'ID', selector: (row) => row.id, sortable: true
    },
    {
      name: 'Rif', selector: (row) => row.rif, sortable: true
    },
    {
      name: 'Razon social', selector: (row) => row.razon_social, sortable: true
    },
    {
      name: 'Referencia', selector: (row) => row.referencia, sortable: true
    },
    {
      name: 'Abono', selector: (row) => row.abono, sortable: true
    },
    {
      name: 'Abono de estado de cuenta', selector: (row) => row.abono_estado_de_cuenta, sortable: true
    },
    {
      name: 'Verificacion', selector: (row) => row.verificacion, sortable: true
    },
    {
      name: 'Fecha', selector: (row) => row.fecha, sortable: true
    },
    {
      name: 'Mes', selector: (row) => row.fecha, sortable: true
    },
    {
      name: 'Año', selector: (row) => row.año, sortable: true
    },
    {
      name: 'Fecha', selector: (row) => row.fecha, sortable: true
    },
    {
      name: 'Mes', selector: (row) => row.mes, sortable: true
    },
    {
      name: 'Año', selector: (row) => row.año, sortable: true
    },
    {
      name: 'Fecha creacion', selector: (row) => row.fecha_creacion, sortable: true
    },
    {
      name: 'Fecha actualization', selector: (row) => row.fecha_actualizacion, sortable: true
    },
  ]

  if (isLoading) {
    return <p>Cargando conciliaciones...</p>;
  }
  const flattenedConciliacionesBancarias = conciliaciones.flat();
  return (
    <div>
      <h1>Conciliaciones Bancarias</h1>
      <DataTable<interfaceConciliacionBancaria> 
        columns={columns}
        data={flattenedConciliacionesBancarias}
        pagination
        customStyles={customStylesTable}
        />
    </div>
  );
};

export default ConciliacionesPage;

