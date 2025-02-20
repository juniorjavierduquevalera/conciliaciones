"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";

interface Personaje {
  moneda_nacional: string;
  moneda_extranjera: string;
  cambio: number;
  tasa_de_cambio: number;
  fecha: string;
}

export default function TasaDeCambio() {
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#f0f0f0", // Color de fondo de las filas
      },
    },
    headCells: {
      style: {
        fontWeight: "bold", // Negrita en los encabezados
        color: "white", // Color de texto en los encabezados
        backgroundColor:"green",
        fontSize: '16px',
      },
    },
    cells: {
      style: {
        paddingLeft: "16px", // Espacio interno en las celdas
      },
    },
  };
  const columns = [
    {
      name: "Mon. Nacional",
      selector: (row: Personaje) => row.moneda_nacional,
      sortable: true,
    },
    {
      name: "Mon. Internacional",
      selector: (row: Personaje) => row.moneda_extranjera,
      sortable: true,
    },
    {
      name: "Cambio",
      selector: (row: Personaje) => row.cambio,
      sortable: true,
    },
    {
      name: "Tasa de cambio",
      selector: (row: Personaje) => row.tasa_de_cambio,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row: Personaje) => row.fecha,
      sortable: true,
    },
  ];
  const data = [
    {
      moneda_nacional: "Debora",
      moneda_extranjera: "Mozart",
      cambio: 43,
      tasa_de_cambio: 2.5,
      fecha: '20/02/2025'
    },
    {
      moneda_nacional: "Manuelle",
      moneda_extranjera: "Rojas",
      cambio: 28,
      tasa_de_cambio: 2.5,
      fecha: '20/02/2025'
    },
    {
      moneda_nacional: "Mairyli",
      moneda_extranjera: "Rojas",
      cambio: 18,
      tasa_de_cambio: 2.5,
      fecha: '20/02/2025'
    },
    {
      moneda_nacional: "Junior",
      moneda_extranjera: "Duque",
      cambio: 35,
      tasa_de_cambio: 2.5,
      fecha: '20/02/2025'
    },
    {
      moneda_nacional: "Krilim",
      moneda_extranjera: "Mozart",
      cambio: 24,
      tasa_de_cambio: 2.5,
      fecha: '20/02/2025'
    },
    {
      moneda_nacional: "Goku",
      moneda_extranjera: "Rojas",
      cambio: 65,
      tasa_de_cambio: 2.5,
      fecha: '20/02/2025'
    },
  ];
  const [records, setRecords] = useState<Personaje[]>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();

    // const filteredRecords = data.filter((record) => {
    //   return record.nombre && record.nombre.toLowerCase().includes(inputValue);
    // });

    // setRecords(filteredRecords);
  };
  return (
    <>
      {/* <input type="text" onChange={handleChange} /> */}

      <DataTable
        title="Tasa de Cambio"
        columns={columns}
        data={records}
        //selectableRows
        //pagination
        fixedHeader
        onSelectedRowsChange={(data) => console.log(data)}
        customStyles={customStyles}
        className="zebrado"
      />
    </>
  );
}
