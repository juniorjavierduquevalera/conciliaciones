import { title } from 'process';
import React from 'react'
import DataTable, {TableColumn} from 'react-data-table-component'
import { customStylesTable
 } from 'src/app/styles/stylesTable'

 interface DataTableComponentProps<T>{
    columns: TableColumn<T>[];
    data: T[];
    title: string;
 };
 
const DataTableComponent = <T extends {}>({columns, data, title}: DataTableComponentProps<T>) => {
  return (
    <DataTable<T>
      title={title}
      columns={columns}
      data={data}
      pagination
      customStyles={customStylesTable}
      />
  );
};
export default DataTableComponent;