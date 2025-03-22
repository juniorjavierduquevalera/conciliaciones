import { useDispatch, useSelector } from 'react-redux';
import { get } from '../services/api';
import Swal from 'sweetalert2';
import {
  startLoadingConciliaciones,
  setConciliaciones,
} from '../libs/features/tables/conciliacionBancariaSlice';

export const useConciliacionStore = () => {
  const {
    conciliaciones,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
  } = useSelector((state: any) => state.conciliacion);

  const dispatch = useDispatch();

  const fetchConciliaciones = async (page = 1) => {
    dispatch(startLoadingConciliaciones());
    try {
      const data = await get('/conciliacion-bancaria', { page });
      dispatch(setConciliaciones(data));
    } catch (error: any) {
      Swal.fire('Error', 'No se pudieron obtener las conciliaciones.', 'error');
    }
  };

  return {
    conciliaciones,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    fetchConciliaciones,
  };
};
