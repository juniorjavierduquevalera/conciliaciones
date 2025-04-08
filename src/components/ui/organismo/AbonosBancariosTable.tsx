import React, { useEffect } from "react";
import { useAbonosBancariosStore } from "src/hooks/useAbonosBancariosStore";
import { AbonosBancarios } from "src/interfaces/interfaceAbonosBancarios";
import DataTableComponent from "../moleculas/DataTableComponent";
import LoadingIndicator from "../atomos/LoadingIndicator";
import { TableColumn } from "react-data-table-component";

const AbonosBancariosTable: React.FC = () => {
    const { abonos: abonosBancarios, isLoading, fetchAbonos: fetchAbonosBancarios } = useAbonosBancariosStore();

    useEffect(() => { fetchAbonosBancarios(); }, []);

    const columns: TableColumn<AbonosBancarios>[] = [
        { name: "ID", selector: (row) => row.id, sortable: true },
        { name: "Fecha", selector: (row) => row.fecha, sortable: true },
        { name: "Referencia", selector: (row) => row.referencia, sortable: true },
        { name: "Concepto", selector: (row) => row.concepto, sortable: true },
        { name: "Abono", selector: (row) => row.abono, sortable: true },
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

    const flattenedAbonosBancarios = (abonosBancarios || []).flat(); 

    return (
        <DataTableComponent<AbonosBancarios>
            title="Lista de Abonos Bancarios"
            columns={columns}
            data={flattenedAbonosBancarios}
        />
    );
};

export default AbonosBancariosTable;