import { TasasDeCambios } from "src/interfaces/interfaceTasaDeCambios";

export const columnsTasasDeCambios = [
    { name: "Propietario", selector: (row: TasasDeCambios) => row.moneda_nacional, sortable: true },
    { name: "RIF", selector: (row: TasasDeCambios) => row.moneda_extranjera, sortable: true },
    { name: "Dirección", selector: (row: TasasDeCambios) => row.cambio, sortable: true },
  ];