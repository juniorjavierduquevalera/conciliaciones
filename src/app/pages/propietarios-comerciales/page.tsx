'use client'
/*import React, { useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { usePropietarioComercialStore } from '../../../hooks/usePropietarioComercialStore';
import { Propietario } from 'src/interfaces/interfacePropietarios';
import { customStylesTable } from 'src/app/styles/stylesTable';

const PropietariosComercialesPage: React.FC = () => {
  const { propietarios, isLoading, fetchPropietarios } = usePropietarioComercialStore();

  useEffect(() => {
    fetchPropietarios();
  }, []);

  const columns: TableColumn<Propietario>[] = [
    { 
      name: 'ID', selector: (row) => row.id, sortable: true 
    },
    { 
      name: 'Propietario', selector: (row) => row.propietario, sortable: true 
    },
    { 
      name: 'Rif', selector: (row) => row.rif, sortable: true 
    },
    { 
      name: 'Direccion', selector: (row) => row.direccion, sortable: true 
    },
    {
      name: 'Telefono', selector: (row) => row.telefono, sortable: true
    },
    {
      name: 'email', selector: (row) => row.email, sortable: true
    },

  ];

  if (isLoading) {
    return <pre>Cargando...</pre>;
  }
  
  const flattenedPropietarios = propietarios.flat();

  return (
    <div>
      <h1>Lista de Propietarios Comerciales</h1>
      <DataTable<Propietario>
        columns={columns}
        data={flattenedPropietarios}
        pagination
        customStyles={customStylesTable}
      />
    </div>
  );
};
export default PropietariosComercialesPage;*/
import React from 'react'
import PropietariosTable from 'src/components/ui/organismo/PropietariosTable'

const PropietariosComercialesPage: React.FC = () => {
  return (
    <div>
      <PropietariosTable/>
    </div>
  )
}
export default PropietariosComercialesPage;
