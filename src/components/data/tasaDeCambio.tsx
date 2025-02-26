import { TasasDeCambios } from "src/interfaces/interfaceTasaDeCambios";

export const columnsTasasDeCambios = [
    { name: "Moneda Nacional", selector: (row: TasasDeCambios) => row.moneda_nacional, sortable: true },
    { name: "Moneda Extranjera", selector: (row: TasasDeCambios) => row.moneda_extranjera, sortable: true },
    { name: "tasa", selector: (row: TasasDeCambios) => row.cambio, sortable: true },
  ];