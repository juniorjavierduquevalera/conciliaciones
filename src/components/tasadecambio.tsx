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
        "&:nth-of-type(odd)": {
          backgroundColor: "#ffffff",
        },
        "&:nth-of-type(even)": {
          backgroundColor: "#f2f2f2",
        },
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "green",
        fontSize: "17px",
        padding: "10px",
      },
    },
    cells: {
      style: {
        padding: "10px",
        fontSize: "16px",        
      },
    },
    table: {
      style: {
        padding: "20px",      
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
    { name: "Fecha", selector: (row: Personaje) => row.fecha, sortable: true },
  ];

  const data: Personaje[] = [
    {
      moneda_nacional: "Debora",
      moneda_extranjera: "Mozart",
      cambio: 43,
      tasa_de_cambio: 2.5,
      fecha: "20/02/2025",
    },
    {
      moneda_nacional: "Manuelle",
      moneda_extranjera: "Rojas",
      cambio: 28,
      tasa_de_cambio: 2.5,
      fecha: "20/02/2025",
    },
    {
      moneda_nacional: "Mairyli",
      moneda_extranjera: "Rojas",
      cambio: 18,
      tasa_de_cambio: 2.5,
      fecha: "20/02/2025",
    },
    {
      moneda_nacional: "Junior",
      moneda_extranjera: "Duque",
      cambio: 35,
      tasa_de_cambio: 2.5,
      fecha: "20/02/2025",
    },
    {
      moneda_nacional: "Krilim",
      moneda_extranjera: "Mozart",
      cambio: 24,
      tasa_de_cambio: 2.5,
      fecha: "20/02/2025",
    },
    {
      moneda_nacional: "Goku",
      moneda_extranjera: "Rojas",
      cambio: 65,
      tasa_de_cambio: 2.5,
      fecha: "20/02/2025",
    },
  ];

  const [records, setRecords] = useState<Personaje[]>(data);

  return (
    <>
      <DataTable
        title="Tasa de Cambio"
        columns={columns}
        data={records}
        fixedHeader
        customStyles={customStyles}
      />
    </>
  );
}
