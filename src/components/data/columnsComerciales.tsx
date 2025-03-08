import { Comerciales } from "src/interfaces/interfaceComerciales";

export const columnsComerciales = [
  { 
    name: "Codigo",
    selector: (row: Comerciales) => row.codigo,
    sortable: true,
  },
  {
    name: "Comercial",
    selector: (row: Comerciales) => row.comercial,
    sortable: true,
  },
  { name: "RIF", selector: (row: Comerciales) => row.rif, sortable: true },
  {
    name: "Dirección",
    selector: (row: Comerciales) => row.direccion,
    sortable: true,
  },
  {
    name: "Propietario",
    selector: (row: Comerciales) => row.propietario_comercial.propietario,
    sortable: true,
  },
  {
    name: "RIF Propietario",
    selector: (row: Comerciales) => row.propietario_comercial.rif,
    sortable: true,
  },
];
