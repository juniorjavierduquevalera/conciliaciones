import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get, post, update, remove } from "../services/api";
import {
  startLoadingEstados,
  setEstados,
  addEstado,
  updateEstado,
  deleteEstado,
} from "../libs/features/tables/estadoDeCuentaSlice";

export const useEstadoDeCuentaStore = () => {
  const { estados, isLoading } = useSelector(
    (state: any) => state.estadoDeCuenta
  );
  const dispatch = useDispatch();

  const fetchEstados = async () => {
    dispatch(startLoadingEstados());
    try {
      const data = await get("/estado-de-cuenta");
      dispatch(setEstados(data));
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron obtener los estados de cuenta.",
      });
    }
  };

  const createEstado = async (estadoData: {
    fecha: string;
    referencia: string;
    concepto: string;
    cargo: string;
    abono: string;
    saldo: string;
    codigo_operacion: string;
    tipo_operacion: string;
  }) => {
    try {
      const newEstado = await post("/estado-de-cuenta", estadoData);
      dispatch(addEstado(newEstado));
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Estado de cuenta creado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear el estado de cuenta.",
      });
    }
  };

  const updateEstadoDeCuenta = async (
    id: number,
    updatedData: { concepto: string; cargo: string; abono: string }
  ) => {
    try {
      const updatedEstado = await update(
        "/estado-de-cuenta",
        id.toString(),
        updatedData
      );
      dispatch(updateEstado(updatedEstado));
      Swal.fire({
        icon: "success",
        title: "Actualización Exitosa",
        text: "Estado de cuenta actualizado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el estado de cuenta.",
      });
    }
  };

  const deleteEstadoDeCuenta = async (id: number) => {
    try {
      await remove("/estado-de-cuenta", id.toString());
      dispatch(deleteEstado(id));
      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "Estado de cuenta eliminado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el estado de cuenta.",
      });
    }
  };

  return {
    estados,
    isLoading,
    fetchEstados,
    createEstado,
    updateEstadoDeCuenta,
    deleteEstadoDeCuenta,
  };
};
