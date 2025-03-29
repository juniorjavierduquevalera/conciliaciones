import { interfaceEstadoDeCuenta } from "src/interfaces/interfaceEstadoDeCuenta";

export const columnsEstadoDeCuenta = [
  {
    name: "Fecha",
    selector: (row: interfaceEstadoDeCuenta) => row.fecha,
    sortable: true,
  },
  {
    name: "Referencia",
    selector: (row: interfaceEstadoDeCuenta) => row.referencia,
    sortable: true,
  },
  {
    name: "Concepto",
    selector: (row: interfaceEstadoDeCuenta) => row.concepto,
    sortable: true,
  },
  {
    name: "Cargo",
    selector: (row: interfaceEstadoDeCuenta) => row.cargo,
    sortable: true,
  },
  {
    name: "Abono",
    selector: (row: interfaceEstadoDeCuenta) => row.abono,
    sortable: true,
  },
  {
    name: "Saldo",
    selector: (row: interfaceEstadoDeCuenta) => row.saldo,
    sortable: true,
  },
  {
    name: "Codigo de operacion",
    selector: (row: interfaceEstadoDeCuenta) => row.codigo_operacion,
    sortable: true,
  },
  {
    name: "Tipo de Operacion",
    selector: (row: interfaceEstadoDeCuenta) => row.tipo_operacion,
    sortable: true,
  },
  {
    name: "Fecha de Creación",
    selector: (row: interfaceEstadoDeCuenta) => row.fecha_creacion,
    sortable: true,
    
  },
  {
    name: "Fecha de Actualización",
    selector: (row: interfaceEstadoDeCuenta) => row.fecha_actualizacion,
    sortable: true,
  },
];
