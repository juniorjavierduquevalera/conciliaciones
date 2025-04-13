import { useDispatch, useSelector } from 'react-redux';
import { get } from '../services/api';
import Swal from 'sweetalert2';
import {
  startLoadingRecibos,
  setRecibos,
} from '../libs/features/tables/recibosSlice';

export const useRecibosStore = () => {
  const {
    recibos,
    isLoading,
    totalItems,  
    totalPages,
    currentPage,
    pageSize,
  } = useSelector((state: any) => state.recibos);

  const dispatch = useDispatch();

  const fetchRecibos = async (page = 1) => {
    dispatch(startLoadingRecibos());
    try {
      const data = await get('/recibos', { page });
      dispatch(setRecibos(data));
    } catch (error) {
      Swal.fire('Error', 'No se pudieron obtener los recibos.', 'error');
    }
  };

  return {
    recibos,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    fetchRecibos,
  };
};
