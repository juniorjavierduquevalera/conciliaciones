"use client";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {customStylesTable} from "../app/styles/stylesTable"
import { Comerciales } from "../interfaces/interfaceComerciales"
import { columnsComerciales } from "./data/columnsComerciales";
export default function ListaComerciale() {
  const [comerciales, setComerciales] = useState<Comerciales[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const fetchData = async () => {
      try {
        const response = await fetch("https://lv9d0stg-4000.use2.devtunnels.ms/api/comerciales/");
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        setComerciales(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>{isClient && (
      <DataTable
        title="Lista de Empresas"
        columns={columnsComerciales}
        data={comerciales}
        fixedHeader
        customStyles={customStylesTable}
      />
    )}</>
  );
}