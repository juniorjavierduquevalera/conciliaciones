import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get, post, update, remove } from "../services/api";
import {
  startLoadingTasas, 
  setTasas, 
  addTasa,
  updateTasa,
  deleteTasa, 
} from "../libs/features/tables/tasaDeCambioSlice";

export const useTasaDeCambioStore = () => {
  const { tasas, isLoading } = useSelector((state: any) => state.tasaDeCambio);
  const dispatch = useDispatch();

  const fetchTasas = async () => {
    dispatch(startLoadingTasas());
    try {
      const data = await get("/tasa-de-cambio");
      dispatch(setTasas(data));
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron obtener las tasas de cambio.",
      });
    }
  };

  const createTasa = async (tasaData: { moneda_nacional: string; moneda_extranjera: string; cambio: number }) => {
    try {
      const newTasa = await post("/tasas-de-cambio", tasaData);
      dispatch(addTasa(newTasa));
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Tasa de cambio creada correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear la tasa de cambio.",
      });
    }
  };

  const updateTasaDeCambio = async (id: number, updatedData: { cambio: number }) => {
    try {
      const updatedTasa = await update("/tasas-de-cambio", id.toString(), updatedData);
      dispatch(updateTasa(updatedTasa));
      Swal.fire({
        icon: "success",
        title: "Actualización Exitosa",
        text: "Tasa de cambio actualizada correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar la tasa de cambio.",
      });
    }
  };

  const deleteTasaDeCambio = async (id: number) => {
    try {
      await remove("/tasas-de-cambio", id.toString());
      dispatch(deleteTasa(id));
      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "Tasa de cambio eliminada correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar la tasa de cambio.",
      });
    }
  };

  return {
    tasas,
    isLoading,
    fetchTasas,
    createTasa,
    updateTasaDeCambio,
    deleteTasaDeCambio,
  };
};
