import React, { useEffect } from "react";
import { usePropietarioComercialStore } from "src/hooks/usePropietarioComercialStore";
import { Propietario } from "src/interfaces/interfacePropietarios";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

const PropietariosTable: React.FC = () => {
  const { propietarios, isLoading, fetchPropietarios } =
    usePropietarioComercialStore();

  useEffect(() => {
    fetchPropietarios();
  }, []);

  const columns: TableColumn<Propietario>[] = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Propietario", selector: (row) => row.propietario, sortable: true },
    { name: "Rif", selector: (row) => row.rif, sortable: true },
    { name: "Direccion", selector: (row) => row.direccion, sortable: true },
    { name: "Telefono", selector: (row) => row.telefono, sortable: true },
    { name: "email", selector: (row) => row.email, sortable: true },
  ];

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const flattenedPropietarios = propietarios.flat();

  return (
    <DataTableComponent<Propietario>
      title="Lista de Propietarios"
      columns={columns}
      data={flattenedPropietarios}
    />
  );
};
export default PropietariosTable;
