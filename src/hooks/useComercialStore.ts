import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get, post, update, remove } from "../services/api";
import {
  startLoadingComerciales,
  setComerciales,
  addComercial,
  updateComercial,
  deleteComercial,
} from "../libs/features/tables/comercialSlice";

export const useComercialStore = () => {
  const { comerciales, isLoading, totalItems, totalPages, currentPage } = useSelector(
    (state: any) => state.comercial
  );
  const dispatch = useDispatch();

  const fetchComerciales = async (page: number = 1) => {
    dispatch(startLoadingComerciales());
    try {
      const data = await get("/comerciales", { page });
      dispatch(setComerciales(data));
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron obtener los comerciales.",
      });
    }
  };

  const createComercial = async (comercialData: {
    codigo: string;
    comercial: string;
    rif: string;
    direccion: string;
    superficie: string;
  }) => {
    try {
      const newComercial = await post("/comerciales", comercialData);
      dispatch(addComercial(newComercial));
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Comercial creado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear el comercial.",
      });
    }
  };

  const updateComercialData = async (id: number, updatedData: Partial<{ comercial: string; direccion: string }>) => {
    try {
      const updatedComercial = await update("/comerciales", id.toString(), updatedData);
      dispatch(updateComercial(updatedComercial));
      Swal.fire({
        icon: "success",
        title: "Actualización Exitosa",
        text: "Comercial actualizado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el comercial.",
      });
    }
  };

  const deleteComercialData = async (id: number) => {
    try {
      await remove("/comerciales", id.toString());
      dispatch(deleteComercial(id));
      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "Comercial eliminado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el comercial.",
      });
    }
  };

  return {
    comerciales,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    fetchComerciales,
    createComercial,
    updateComercialData,
    deleteComercialData,
  };
};
