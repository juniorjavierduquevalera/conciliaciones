import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Cliente {
  id: number;
  razon_social: string;
  rif: string;
  telefono: string;
  email: string;
  direccion: string;
  contribuyente_especial: boolean;
  retencion_islr: string;
  retencion_islr_otro: string;
  retencion_iva: string;
  tipo_de_cliente: string;
  createdAt: string;
  updatedAt: string;
}

interface ClientesState {
  clientes: Cliente[];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: ClientesState = {
  clientes: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};

const clientesSlice = createSlice({
  name: "clientes",
  initialState,
  reducers: {
    startLoadingClientes: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setClientes: (
      state,
      action: PayloadAction<{
        data: Cliente[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.clientes = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
    addCliente: (state, action: PayloadAction<Cliente>) => {
      state.clientes.push(action.payload);
    },
    updateCliente: (state, action: PayloadAction<Cliente>) => {
      state.clientes = state.clientes.map((c) =>
        c.id === action.payload.id ? action.payload : c
      );
    },
    deleteCliente: (state, action: PayloadAction<number>) => {
      state.clientes = state.clientes.filter((c) => c.id !== action.payload);
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  startLoadingClientes,
  setClientes,
  addCliente,
  updateCliente,
  deleteCliente,
  setError,
  clearErrorMessage,
} = clientesSlice.actions;

export default clientesSlice.reducer;
