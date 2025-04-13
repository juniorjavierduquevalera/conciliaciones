import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get } from "../services/api";
import {
  startLoadingComisiones,
  setComisiones,
} from "../libs/features/tables/comisionesBancariasSlice";

export const useComisionesBancariasStore = () => {
  const {
    comisiones,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize
  } = useSelector((state: any) => state.comisionesBancarias);
  const dispatch = useDispatch();

  const fetchComisiones = async (page = 1) => {
    dispatch(startLoadingComisiones());
    try {
      const data = await get("/comisiones-bancarias", { page });
      
      dispatch(setComisiones(data));
    } catch (error) {
      Swal.fire('Error', 'No se pudieron obtener las comisiones.', 'error');
    }
  };

  return {
    comisiones,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    fetchComisiones,
  };
};
