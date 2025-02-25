"use client";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { TasasDeCambios } from "src/interfaces/interfaceTasaDeCambios";
import {customStylesTable} from "../app/styles/stylesTable"
import { columnsTasasDeCambios } from "./data/tasaDeCambio";

export default function ListaDeCambios() {
  const [propietarios, setPropietarios] = useState<TasasDeCambios[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const fetchData = async () => {
      try {
        const response = await fetch("https://lv9d0stg-4000.use2.devtunnels.ms/api/tasa-de-cambio/");
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

  return (
    <>{isClient && (
      <DataTable
        title="Lista de Cambios"
        columns={columnsTasasDeCambios}
        data={propietarios}
        fixedHeader
        customStyles={customStylesTable}
      />
    )}</>
  );
}
