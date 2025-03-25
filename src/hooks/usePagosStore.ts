// hooks/usePagosStore.ts
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { RootState } from "../libs/store";
import { get, post, update, remove } from "../services/api";
import {
  startLoadingPagos,
  setPagos,
  addPago,
  updatePago,
  deletePago,
  setErrorPago,
  clearErrorPago,
} from "../libs/features/tables/pagosSlice";
import { Pago } from "../libs/features/tables/pagosSlice";

export const usePagosStore = () => {
  const {
    pagos,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    errorMessage,
  } = useSelector((state: RootState) => state.pagos);

  const dispatch = useDispatch();

  const fetchPagos = async (page = 1) => {
    dispatch(startLoadingPagos());
    try {
      const data = await get("/pagos", { page });
      dispatch(setPagos(data));
    } catch (error: any) {
      dispatch(setErrorPago(error.message));
      Swal.fire("Error", "No se pudieron obtener los pagos.", "error");
    }
  };

  const createPago = async (pagoData: Omit<Pago, "id" | "fecha_creacion" | "fecha_actualizacion">) => {
    try {
      const newPago = await post("/pagos", pagoData);
      dispatch(addPago(newPago));
      Swal.fire("Creado", "Pago registrado correctamente.", "success");
    } catch (error: any) {
      Swal.fire("Error", "No se pudo registrar el pago.", "error");
    }
  };

  const updatePagoById = async (
    id: number,
    pagoData: Partial<Omit<Pago, "id" | "fecha_creacion" | "fecha_actualizacion">>
  ) => {
    try {
      const updatedPago = await update("/pagos", id.toString(), pagoData);
      dispatch(updatePago(updatedPago));
      Swal.fire("Actualizado", "Pago actualizado correctamente.", "success");
    } catch (error: any) {
      Swal.fire("Error", "No se pudo actualizar el pago.", "error");
    }
  };

  const deletePagoById = async (id: number) => {
    try {
      await remove("/pagos", id.toString());
      dispatch(deletePago(id));
      Swal.fire("Eliminado", "Pago eliminado correctamente.", "success");
    } catch (error: any) {
      Swal.fire("Error", "No se pudo eliminar el pago.", "error");
    }
  };

  return {
    pagos,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    errorMessage,

    fetchPagos,
    createPago,
    updatePagoById,
    deletePagoById,
  };
};
