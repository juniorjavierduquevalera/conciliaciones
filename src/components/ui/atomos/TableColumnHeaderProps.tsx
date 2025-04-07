import React from "react";

interface TableColumnHeaderProps {
  name: string;
}

const TableColumnHeader: React.FC<TableColumnHeaderProps> = ({ name }) => {
  return <th>{name}</th>;
};
export default TableColumnHeader;
