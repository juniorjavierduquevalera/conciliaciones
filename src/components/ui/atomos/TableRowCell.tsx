import React from 'react'

interface TableRowCellProps<T> {
    value: any;
};
const TableRowCell: React.FC<TableRowCellProps<any>> = ({ value }) => {
    return <td>{value}</td>;
  };
export default TableRowCell;