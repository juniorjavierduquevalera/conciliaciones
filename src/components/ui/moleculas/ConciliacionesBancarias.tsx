import React from "react";
import { interfaceMaster } from "src/interfaces/interfaceMaster";
import { customStylesTable } from "src/app/styles/stylesTable";
import Table from "../atomos/Table";
import useFetchData from "src/hooks/useFetchData";
import { columnsConciliacionesBancaria } from "src/components/data/ConciliacionBancaria";
export const ConciliacionesBancarias: React.FC = () => {
    const{ data: ConciliacionesBancarias, isLoading} =
    useFetchData<interfaceMaster>(
        "https://lv9d0stg-4000.use2.devtunnels.ms/api/conciliacion-bancaria"
    );
    if(isLoading){
        return <div>Cargando datos...</div>
    }
  return (
    <>
       <Table
       title="Conciliaciones Bancarias"
       columns={columnsConciliacionesBancaria}
       data={ConciliacionesBancarias}
       customStyles={customStylesTable}
       />
    </>
  );
};
