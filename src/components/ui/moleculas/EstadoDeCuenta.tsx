import React from "react";
import Table from "../atomos/Table";
import { interfaceEstadoDeCuenta } from "src/interfaces/interfaceEstadoDeCuenta";
import { columnsEstadoDeCuenta } from "src/components/data/EstadoDeCuenta";
import { customStylesTable } from "src/app/styles/stylesTable";
import useFetchData from "src/hooks/useFetchData";

export const EstadoDeCuentaTable: React.FC = () => {
    const {data: interfaceEstadoDeCuenta, isLoading} = 
    useFetchData<interfaceEstadoDeCuenta>(
        "https://lv9d0stg-4000.use2.devtunnels.ms/api/estado-de-cuenta"
    );
    if (isLoading) {
        return <div>Cargando datos...</div>;
    }
    return(
        <Table
            title="Estado de cuenta"
            columns={columnsEstadoDeCuenta}
            data={interfaceEstadoDeCuenta}
            customStyles={customStylesTable}
        />
    );
};