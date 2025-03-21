import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get } from "../services/api";
import {
  startLoadingComisiones,
  setComisiones,
} from "../libs/features/tables/comisionesBancariasSlice";

export const useComisionesBancariasStore = () => {
  const { comisiones, isLoading } = useSelector((state: any) => state.comisionesBancarias);
  const dispatch = useDispatch();

  const fetchComisiones = async () => {
    dispatch(startLoadingComisiones());
    try {
      const data = await get("/comisiones-bancarias");
      dispatch(setComisiones(data));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron obtener las comisiones bancarias.",
      });
    }
  };

  return {
    comisiones,
    isLoading,
    fetchComisiones,
  };
};
