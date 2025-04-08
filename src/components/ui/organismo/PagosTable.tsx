import React, { useEffect } from "react";
import { usePagosStore } from "src/hooks/usePagosStore";
import { Pagos } from "src/interfaces/interfacePagos";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

const PagosTable: React.FC = () => {
  const { pagos, isLoading, fetchPagos } =
    usePagosStore();

  useEffect(() => {
    fetchPagos();
  }, []);

  const columns: TableColumn<Pagos>[] = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "RIF", selector: (row) => row.rif, sortable: true },
    { name: "Razón Social", selector: (row) => row.razon_social, sortable: true },
    { name: "Referencia", selector: (row) => row.referencia, sortable: true },
    { name: "Abono", selector: (row) => row.abono, sortable: true },
    { name: "Tipo de Pago", selector: (row) => row.tipo_de_pago, sortable: true },
    { name: "Fecha", selector: (row) => row.fecha, sortable: true },
  ];

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const flattenedPagos = pagos.flat();

  return (
    <DataTableComponent<Pagos>
      title="Lista de Pagos"
      columns={columns}
      data={flattenedPagos}
    />
  );
};

export default PagosTable;
