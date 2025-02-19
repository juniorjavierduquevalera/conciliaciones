"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";

interface Personaje {
  nombre: string;
  apellido: string;
  edad: number;
}

export default function TasaDeCambio() {
  const columns = [
    {
      name: "Nombre",
      selector: (row: Personaje) => row.nombre,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row: Personaje) => row.apellido,
      sortable: true,
    },
    {
      name: "Edad",
      selector: (row: Personaje) => row.edad,
      sortable: true,
    },
  ];
  const data = [
    {
      nombre: "Debora",
      apellido: "Mozart",
      edad: 43,
    },
    {
      nombre: "Manuelle",
      apellido: "Rojas",
      edad: 28,
    },
    {
      nombre: "Mairyli",
      apellido: "Rojas",
      edad: 18,
    },
    {
      nombre: "Junior",
      apellido: "Duque",
      edad: 35,
    },
    {
      nombre: "Krilim",
      apellido: "Mozart",
      edad: 24,
    },
    {
      nombre: "Goku",
      apellido: "Rojas",
      edad: 65,
    },
  ];
  const [records, setRecords] = useState<Personaje[]>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();

    const filteredRecords = data.filter((record) => {
      return record.nombre && record.nombre.toLowerCase().includes(inputValue);
    });

    setRecords(filteredRecords);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />

      <DataTable
        title= "Tasa de Cambio"
        columns={columns}
        data={records}
        selectableRows
        pagination
        fixedHeader
        onSelectedRowsChange={(data) => console.log(data)}
      />
    </>
  );
}
