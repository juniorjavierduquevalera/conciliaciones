import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Recibo {
  id: number;
  numero_recibo: string;
  rif: string;
  razon_social: string;
  referencia_pago: string;
  abono: string;
  subtotal: string;
  iva: string;
  total: string;
  tipo_de_pago: string;
  mes: string;
  año: string;
  fecha: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

interface ReciboState {
  recibos: Recibo[];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: ReciboState = {
  recibos: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
};

const recibosSlice = createSlice({
  name: 'recibos',
  initialState,
  reducers: {
    startLoadingRecibos: (state) => {
      state.isLoading = true;
    },
    setRecibos: (
      state,
      action: PayloadAction<{
        data: Recibo[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.recibos = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
  },
});

export const { startLoadingRecibos, setRecibos } = recibosSlice.actions;
export default recibosSlice.reducer;
