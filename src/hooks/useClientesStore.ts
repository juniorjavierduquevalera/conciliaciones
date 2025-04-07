import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { get, post, update, remove } from '../services/api';
import {
  startLoadingClientes,
  setClientes,
  addCliente,
  updateCliente,
  deleteCliente,
  setError,
  clearErrorMessage,
} from '../libs/features/tables/clienteSlice';
import { Cliente } from '../libs/features/tables/clienteSlice'; 

export const useClientesStore = () => {
  const {
    clientes,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    errorMessage,
  } = useSelector((state: any) => state.clientes); 
  const dispatch = useDispatch();

  const fetchClientes = async (page = 1) => {
    dispatch(startLoadingClientes());
    try {
      const data = await get('/clientes', { page });
      dispatch(setClientes(data));
    } catch (error: any) {
      dispatch(setError(error.message));
      Swal.fire('Error', 'No se pudieron obtener los clientes.', 'error');
    }
  };

  const createCliente = async (clienteData: Omit<Cliente, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newCliente = await post('/clientes', clienteData);
      dispatch(addCliente(newCliente));
      Swal.fire('Creado', 'Cliente agregado correctamente.', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo agregar el cliente.', 'error');
    }
  };

  const updateClienteById = async (
    id: number,
    clienteData: Partial<Omit<Cliente, 'id' | 'createdAt' | 'updatedAt'>>
  ) => {
    try {
      const updatedCliente = await update('/clientes', id.toString(), clienteData);
      dispatch(updateCliente(updatedCliente));
      Swal.fire('Actualizado', 'Cliente actualizado correctamente.', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo actualizar el cliente.', 'error');
    }
  };

  const deleteClienteById = async (id: number) => {
    try {
      await remove('/clientes', id.toString());
      dispatch(deleteCliente(id));
      Swal.fire('Eliminado', 'Cliente eliminado correctamente.', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo eliminar el cliente.', 'error');
    }
  };

  return {
    clientes,
    isLoading,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    errorMessage,
    fetchClientes,
    createCliente,
    updateClienteById,
    deleteClienteById,
  };
};
