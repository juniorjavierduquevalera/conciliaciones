import React from "react";
import DataTable from "react-data-table-component";

interface TableProps<T> {
  title: string;
  columns: any; 
  data: T;
  customStyles: any;
}

const Table: React.FC<TableProps<any>> = ({ title, columns, data, customStyles }) => {
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