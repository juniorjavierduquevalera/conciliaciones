import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AbonoBancario {
  id: number;
  fecha: string;
  referencia: string;
  concepto: string;
  abono: string;
  codigo_operacion: string;
  tipo_operacion: string;
  tasa_de_cambio: string | null;
  moneda_nacional: string;
  moneda_extranjera: string;
  cambio: number | null;
  conversion: string | null;
  mes: string;
  año: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

interface AbonoBancarioState {
  abonos: AbonoBancario[][];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: AbonoBancarioState = {
  abonos: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};

const abonosBancariosSlice = createSlice({
  name: "abonosBancarios",
  initialState,
  reducers: {
    startLoadingAbonos: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setAbonos: (
      state,
      action: PayloadAction<{
        data: AbonoBancario[][];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.abonos = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { startLoadingAbonos, setAbonos, clearErrorMessage } = abonosBancariosSlice.actions;
export default abonosBancariosSlice.reducer;
