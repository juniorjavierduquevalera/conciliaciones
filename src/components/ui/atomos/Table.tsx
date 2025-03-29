import React from "react";
import DataTable, {TableColumn }from "react-data-table-component";

interface TableProps<T> {
  title: string;
  columns: TableColumn<T>[]; 
  data: T[];
  customStyles: any; 
}

const Table = <T extends {}>({title, columns, data, customStyles }: TableProps<T>) => {
  return (
    <DataTable
      title={title}
      columns={columns}
      data={data}
      fixedHeader
      customStyles={customStyles}
    />
  );
};

export default Table;