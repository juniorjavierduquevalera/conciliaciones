import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get, post, update, remove } from "../services/api";
import {
  startLoadingCodigos,
  setCodigos,
  addCodigo,
  updateCodigo,
  deleteCodigo,
} from "../libs/features/tables/codigoTransaccionalSlice";

export const useCodigoTransaccionalStore = () => {
  const { codigos, isLoading } = useSelector(
    (state: any) => state.codigoTransaccional
  );
  const dispatch = useDispatch();

  const fetchCodigos = async () => {
    dispatch(startLoadingCodigos());
    try {
      const data = await get("/codigo-transaccionales");
      dispatch(setCodigos(data));
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron obtener los códigos transaccionales.",
      });
    }
  };

  const createCodigo = async (codigoData: { codigo: string; descripcion: string }) => {
    try {
      const newCodigo = await post("/codigo-transaccionales", codigoData);
      dispatch(addCodigo(newCodigo));
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Código transaccional creado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear el código transaccional.",
      });
    }
  };

  const updateCodigoTransaccional = async (id: number, updatedData: { descripcion: string }) => {
    try {
      const updatedCodigo = await update(
        "/codigo-transaccionales",
        id.toString(),
        updatedData
      );
      dispatch(updateCodigo(updatedCodigo));
      Swal.fire({
        icon: "success",
        title: "Actualización Exitosa",
        text: "Código transaccional actualizado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el código transaccional.",
      });
    }
  };

  const deleteCodigoTransaccional = async (id: number) => {
    try {
      await remove("/codigo-transaccionales", id.toString());
      dispatch(deleteCodigo(id));
      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "Código transaccional eliminado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el código transaccional.",
      });
    }
  };

  return {
    codigos,
    isLoading,
    fetchCodigos,
    createCodigo,
    updateCodigoTransaccional,
    deleteCodigoTransaccional,
  };
};
