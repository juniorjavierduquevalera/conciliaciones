import React, { useEffect } from "react";
import { useClientesStore } from "src/hooks/useClientesStore";
import { Clientes } from "src/interfaces/interfaceClientes";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

    const ClientesTable: React.FC = () => {
        const { clientes, isLoading, fetchClientes } =
        useClientesStore();

        useEffect(() => {fetchClientes()}, []);

    const columns: TableColumn<Clientes>[] = [
        { name: "ID", selector: (row) => row.id, sortable: true },
        { name: "Razon Social", selector: (row) => row.razon_social, sortable: true },
        { name: "Rif", selector: (row) => row.rif, sortable: true },
        { name: "Direccion", selector: (row) => row.direccion, sortable: true },
        { name: "Telefono", selector: (row) => row.telefono, sortable: true },
        { name: "email", selector: (row) => row.email, sortable: true },
        { name: "contribuyente_especial", selector: (row) => row.contribuyente_especial, sortable: true },
        { name: "retencion islr", selector: (row) => row.retencion_islr, sortable: true },
        { name: "retencion islr otro", selector: (row) => row.retencion_islr_otro, sortable: true },
        { name: "retencion iva", selector: (row) => row.retencion_iva, sortable: true },
        { name: "tipo de cliente", selector: (row) => row.tipo_de_cliente, sortable: true },
 
    ];

    if (isLoading) {
        return <LoadingIndicator />;
    }

    const flattenedClientes = clientes.flat();

    return (
        <DataTableComponent<Clientes>
            title="Lista de Clientes"
            columns={columns}
            data={flattenedClientes}
        />
    );
    };
export default ClientesTable;