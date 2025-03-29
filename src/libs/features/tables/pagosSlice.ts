import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Pago {
  id: number;
  rif: string;
  razon_social: string;
  referencia: string;
  abono: string;
  tipo_de_pago: string;
  fecha: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

interface PagosState {
  pagos: Pago[];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: PagosState = {
  pagos: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
};

const pagosSlice = createSlice({
  name: "pagos",
  initialState,
  reducers: {
    startLoadingPagos: (state) => {
      state.isLoading = true;
    },
    setPagos: (
      state,
      action: PayloadAction<{
        data: Pago[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.pagos = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
    addPago: (state, action: PayloadAction<Pago>) => {
      state.pagos.unshift(action.payload);
    },
    updatePago: (state, action: PayloadAction<Pago>) => {
      state.pagos = state.pagos.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
    },
    deletePago: (state, action: PayloadAction<number>) => {
      state.pagos = state.pagos.filter((p) => p.id !== action.payload);
    },
    setErrorPago: (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    clearErrorPago: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  startLoadingPagos,
  setPagos,
  addPago,
  updatePago,
  deletePago,
  setErrorPago,
  clearErrorPago,
} = pagosSlice.actions;

export default pagosSlice.reducer;
