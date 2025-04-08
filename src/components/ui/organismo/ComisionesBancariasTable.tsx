import React, { useEffect } from "react";
import { useComisionesBancariasStore } from "src/hooks/useComisionesBancariasStore";
import { ComisionBancaria } from "src/interfaces/interfaceComisionesBancarias";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

const ComisionesBancariasTable: React.FC = () => {
  const { comisiones: comisionesBancarias, isLoading, fetchComisiones } = useComisionesBancariasStore();

  useEffect(() => {
    fetchComisiones();
  }, [fetchComisiones]);

  const columns: TableColumn<ComisionBancaria>[] = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Fecha", selector: (row) => row.fecha, sortable: true },
    { name: "Referencia", selector: (row) => row.referencia, sortable: true },
    { name: "Concepto", selector: (row) => row.concepto, sortable: true },
    { name: "Cargo", selector: (row) => row.cargo, sortable: true },
    { name: "Código Operación", selector: (row) => row.codigo_operacion, sortable: true },
    { name: "Tipo Operación", selector: (row) => row.tipo_operacion, sortable: true },
    { name: "Tasa de Cambio", selector: (row) => row.tasa_de_cambio ?? '', sortable: true },
    { name: "Moneda Nacional", selector: (row) => row.moneda_nacional, sortable: true },
    { name: "Moneda Extranjera", selector: (row) => row.moneda_extranjera, sortable: true },
    { name: "Cambio", selector: (row) => row.cambio?.toString() ?? '', sortable: true },
    { name: "Conversión", selector: (row) => row.conversion?.toString() ?? '', sortable: true },
    { name: "Mes", selector: (row) => row.mes, sortable: true },
    { name: "Año", selector: (row) => row.año, sortable: true },
  ];

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const flattenedComisionesBancarias = Array.isArray(comisionesBancarias) ? comisionesBancarias : [];

  return (
    <DataTableComponent<ComisionBancaria>
      title="Lista de Comisiones Bancarias"
      columns={columns}
      data={flattenedComisionesBancarias}
    />
  );
};

export default ComisionesBancariasTable;