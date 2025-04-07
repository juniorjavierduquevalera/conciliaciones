import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { get } from "../services/api";
import {
    startLoadingCargos,
    setCargos,
} from "../libs/features/tables/cargosBancariosSlice";

export const useCargosBancariosStore = () => {
    const { cargos: cargosBancarios, isLoading } = useSelector((state: any) => state.cargosBancarios);
    const dispatch = useDispatch();

    const fetchCargosBancarios = async () => {
        dispatch(startLoadingCargos());
        try {
            const data = await get("/cargos-bancarios");
            dispatch(setCargos(data));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudieron obtener los cargos bancarios.",
            });
        }
    };

    return {
        cargosBancarios,
        isLoading,
        fetchCargosBancarios,
    };
};