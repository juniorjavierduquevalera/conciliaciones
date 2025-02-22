"use client";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

interface Propietario {
  id: number;
  propietario: string;
  rif: string;
  direccion: string;
  telefono: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export default function ListaPropietarios() {
  const [propietarios, setPropietarios] = useState<Propietario[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const fetchData = async () => {
      try {
        const response = await fetch("https://lv9d0stg-4000.use2.devtunnels.ms/api/propietarios-comerciales/");
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        setPropietarios(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const customStyles = {
    rows: {
      style: {
        "&:nth-of-type(odd)": { backgroundColor: "#ffffff" },
        "&:nth-of-type(even)": { backgroundColor: "#f2f2f2" },
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
    cells: { style: { padding: "10px", fontSize: "16px" } },
    table: { style: { padding: "20px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" } },
  };

  const columns = [
    { name: "Propietario", selector: (row: Propietario) => row.propietario, sortable: true },
    { name: "RIF", selector: (row: Propietario) => row.rif, sortable: true },
    { name: "Dirección", selector: (row: Propietario) => row.direccion, sortable: true },
    { name: "Teléfono", selector: (row: Propietario) => row.telefono, sortable: true },
    { name: "Email", selector: (row: Propietario) => row.email, sortable: true },
    { name: "Fecha de Creación", selector: (row: Propietario) => new Date(row.createdAt).toLocaleDateString(), sortable: true },
  ];

  return (
    <>{isClient && (
      <DataTable
        title="Lista de Propietarios Comerciales"
        columns={columns}
        data={propietarios}
        fixedHeader
        customStyles={customStyles}
      />
    )}</>
  );
}