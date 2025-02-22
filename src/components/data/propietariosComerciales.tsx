import { Propietario } from "src/interfaces/interfacePropietarios";

export const columnsPropietariosComerciales = [
    { name: "Propietario", selector: (row: Propietario) => row.propietario, sortable: true },
    { name: "RIF", selector: (row: Propietario) => row.rif, sortable: true },
    { name: "Dirección", selector: (row: Propietario) => row.direccion, sortable: true },
    { name: "Teléfono", selector: (row: Propietario) => row.telefono, sortable: true },
    { name: "Email", selector: (row: Propietario) => row.email, sortable: true },
    { name: "Fecha de Creación", selector: (row: Propietario) => new Date(row.createdAt).toLocaleDateString(), sortable: true },
  ];