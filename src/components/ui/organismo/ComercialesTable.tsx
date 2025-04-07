import React, { useEffect } from "react";
import { useComercialStore } from "src/hooks/useComercialStore";
import { Comerciales } from "src/interfaces/interfaceComerciales";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

    const ComercialesTable: React.FC = () => {
        const { comerciales, isLoading, fetchComerciales } =
        useComercialStore();

        useEffect(() => {fetchComerciales()}, []);

    const columns: TableColumn<Comerciales>[] = [
        { name: "ID", selector: (row) => row.id, sortable: true },
        { name: "codigo", selector: (row) => row.codigo, sortable: true },
        { name: "comercial", selector: (row) => row.comercial, sortable: true },
        { name: "Rif", selector: (row) => row.rif, sortable: true },
        { name: "Direccion", selector: (row) => row.direccion, sortable: true },       
        { name: "superficie", selector: (row) => row.superficie, sortable: true },
        { name: "propietario", selector: (row) => row.propietario_comercial.propietario, sortable: true },
        { name: "rif", selector: (row) => row.propietario_comercial.rif, sortable: true },
 
    ];

    if (isLoading) {
        return <LoadingIndicator />;
    }

    const flattenedComerciales = comerciales.flat();

    return (
        <DataTableComponent<Comerciales>
            title="Lista de Comerciales"
            columns={columns}
            data={flattenedComerciales}
        />
    );
    };
export default ComercialesTable;