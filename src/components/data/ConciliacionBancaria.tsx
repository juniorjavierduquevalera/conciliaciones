import { interfaceMaster } from "src/interfaces/interfaceMaster";

export const columnsConciliacionesBancaria = [
  {
    name: "Rif",
    selector: (row:interfaceMaster) => row.rif,
    sortable: true,
  },
  {
    name: "Razon Social",
    selector: (row:interfaceMaster) => row.razon_social,
    sortable: true,
  },
  {
    name: "Referencia",
    selector: (row:interfaceMaster) => row.referencia,
    sortable: true,
  },
  {
    name: "Abono",
    selector: (row:interfaceMaster) => row.abono,
    sortable: true,
  },
  {
    name: "Abono est. de Cuenta",
    selector: (row:interfaceMaster) => row.abono_estado_de_cuenta,
    sortable: true,
  },
  {
    name: "Referencia",
    selector: (row:interfaceMaster) => row.verificacion,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row:interfaceMaster) => row.fecha,
    sortable: true,
  },
  {
    name: "Mes",
    selector: (row:interfaceMaster) => row.mes,
    sortable: true,
  },
  {
    name: "Año",
    selector: (row:interfaceMaster) => row.año,
    sortable: true,
  },
];
