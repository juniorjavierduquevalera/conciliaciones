"use client";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Propietario } from "src/interfaces/interfacePropietarios";
import {customStylesTable} from "../app/styles/stylesTable"
import {columnsPropietariosComerciales} from "./data/propietariosComerciales"
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

  return (
    <>{isClient && (
      <DataTable
        title="Lista de Propietarios Comerciales"
        columns={columnsPropietariosComerciales}
        data={propietarios}
        fixedHeader
        customStyles={customStylesTable}
      />
    )}</>
  );
}