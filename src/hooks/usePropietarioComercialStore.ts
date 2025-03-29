import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get, post, update, remove } from "../services/api";
import {
  startLoadingPropietarios,
  setPropietarios,
  addPropietario,
  updatePropietario,
  deletePropietario,
} from "../libs/features/tables/propietarioComercialSlice";

export const usePropietarioComercialStore = () => {
  const { propietarios, isLoading } = useSelector(
    (state: any) => state.propietarioComercial
  );
  const dispatch = useDispatch();

  const fetchPropietarios = async () => {
    dispatch(startLoadingPropietarios());
    try {
      const data = await get("/propietarios-comerciales");
      dispatch(setPropietarios(data));
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron obtener los propietarios comerciales.",
      });
    }
  };

  const createPropietario = async (propietarioData: {
    propietario: string;
    rif: string;
    direccion: string;
    telefono: string;
    email: string;
  }) => {
    try {
      const newPropietario = await post("/propietarios-comerciales", propietarioData);
      dispatch(addPropietario(newPropietario));
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Propietario comercial creado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear el propietario comercial.",
      });
    }
  };

  const updatePropietarioComercial = async (id: number, updatedData: { telefono: string; email: string }) => {
    try {
      const updatedPropietario = await update(
        "/propietarios-comerciales",
        id.toString(),
        updatedData
      );
      dispatch(updatePropietario(updatedPropietario));
      Swal.fire({
        icon: "success",
        title: "Actualización Exitosa",
        text: "Propietario comercial actualizado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el propietario comercial.",
      });
    }
  };

  const deletePropietarioComercial = async (id: number) => {
    try {
      await remove("/propietarios-comerciales", id.toString());
      dispatch(deletePropietario(id));
      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "Propietario comercial eliminado correctamente.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el propietario comercial.",
      });
    }
  };

  return {
    propietarios,
    isLoading,
    fetchPropietarios,
    createPropietario,
    updatePropietarioComercial,
    deletePropietarioComercial,
  };
};
