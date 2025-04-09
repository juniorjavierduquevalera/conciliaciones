import React, { useEffect } from "react";
import { useRecibosStore } from "src/hooks/useRecibosStore";
import { Recibo } from "src/interfaces/interfaceRecibo";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

const ReciboTable: React.FC = () => {
  const { recibos, isLoading, fetchRecibos } = useRecibosStore();

  useEffect(() => {
    fetchRecibos();
  }, []);

  const columns: TableColumn<Recibo>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Numero Recibo",
      selector: (row) => row.numero_recibo,
      sortable: true,
    },
    { name: "Rif", selector: (row) => row.rif, sortable: true },
    {
      name: "Razon Social",
      selector: (row) => row.razon_social,
      sortable: true,
    },
    {
      name: "Refencia Pago",
      selector: (row) => row.referencia_pago,
      sortable: true,
    },
    {
      name: "Abono",
      selector: (row) => row.abono,
      sortable: true,
    },
    {
      name: "Subtotal",
      selector: (row) => row.subtotal,
      sortable: true,
    },
    {
      name: "Iva",
      selector: (row) => row.iva,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Tipo de Pago",
      selector: (row) => row.tipo_de_pago,
      sortable: true,
    },
    {
      name: "Mes",
      selector: (row) => row.mes,
      sortable: true,
    },
    {
      name: "Año",
      selector: (row) => row.año,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.fecha,
      sortable: true,
    },
  ];

  if (isLoading) {
    return <LoadingIndicator />;
  }
  const flattenedRecibos = recibos.flat();

  return (
    <DataTableComponent<Recibo>
      title="Lista de Recibos"
      columns={columns}
      data={flattenedRecibos}
    />
  );
};
export default ReciboTable;
