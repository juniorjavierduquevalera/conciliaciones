import React from 'react'
import Table from '../atomos/Table'
import { interfaceCodigosTransaccionales } from 'src/interfaces/interfaceCodigosTransaccionales'
import { dataCodigosTransaccionales } from 'src/components/data/CodigosTransaccionales'
import { customStylesTable } from 'src/app/styles/stylesTable'
import useFetchData from 'src/hooks/useFetchData'

export const CodigosTransaccionales: React.FC = () => {
    const {data: codigosTransaccionales, isLoading} = useFetchData<interfaceCodigosTransaccionales>("https://lv9d0stg-4000.use2.devtunnels.ms/api/codigo-transaccionales"   
    );
    if(isLoading){
        return <div>Cargando datos...</div>
    }
  return (
    <Table
        title='Transacciones Comerciales'
        columns={dataCodigosTransaccionales}
        data={codigosTransaccionales}
        customStyles={customStylesTable}
    />
  )
}
