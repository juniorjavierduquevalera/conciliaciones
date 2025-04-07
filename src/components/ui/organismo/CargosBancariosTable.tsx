import React, { useEffect } from "react";
import { useCargosBancariosStore } from "src/hooks/useCargosBancariosStore";
import { CargosBancarios } from "src/interfaces/interfaceCargosBancarios";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

const CargosBancariosTable: React.FC = () => {
  const { cargosBancarios, isLoading, fetchCargosBancarios } =
    useCargosBancariosStore();

  useEffect(() => {
    fetchCargosBancarios();
  }, []);

  const columns: TableColumn<CargosBancarios>[] = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Fecha", selector: (row) => row.fecha, sortable: true },
    { name: "Referencia", selector: (row) => row.referencia, sortable: true },
    { name: "Concepto", selector: (row) => row.concepto, sortable: true },
    { name: "Cargo", selector: (row) => row.cargo, sortable: true },
    { name: "Código Operación", selector: (row) => row.codigo_operacion, sortable: true },
    { name: "Tipo Operación", selector: (row) => row.tipo_operacion, sortable: true },
    { name: "Tasa de Cambio", selector: (row) => row.tasa_de_cambio, sortable: true },
    { name: "Moneda Nacional", selector: (row) => row.moneda_nacional, sortable: true },
    { name: "Moneda Extranjera", selector: (row) => row.moneda_extranjera, sortable: true },
    { name: "Cambio", selector: (row) => row.cambio, sortable: true },
    { name: "Conversión", selector: (row) => row.conversion, sortable: true },
    { name: "Mes", selector: (row) => row.mes, sortable: true },
    { name: "Año", selector: (row) => row.año, sortable: true },
  ];

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const flattenedCargosBancarios = cargosBancarios.flat();

  return (
    <DataTableComponent<CargosBancarios>
      title="Lista de Cargos Bancarios"
      columns={columns}
      data={flattenedCargosBancarios}
    />
  );
};

export default CargosBancariosTable;
