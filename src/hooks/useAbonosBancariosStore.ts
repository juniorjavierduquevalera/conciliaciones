import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get } from "../services/api";
import {
  startLoadingAbonos,
  setAbonos,
} from "../libs/features/tables/abonosBancariosSlice";

export const useAbonosBancariosStore = () => {
  const { abonos, isLoading } = useSelector((state: any) => state.abonosBancarios);
  const dispatch = useDispatch();

  const fetchAbonos = async () => {
    dispatch(startLoadingAbonos());
    try {
      const data = await get("/abonos-bancarios");
      dispatch(setAbonos(data));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron obtener los abonos bancarios.",
      });
    }
  };

  return {
    abonos,
    isLoading,
    fetchAbonos,
  };
};
