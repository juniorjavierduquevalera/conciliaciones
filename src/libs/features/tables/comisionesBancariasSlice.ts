import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComisionBancaria {
  id: number;
  fecha: string;
  referencia: string;
  concepto: string;
  cargo: string;
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

interface ComisionesState {
  comisiones: ComisionBancaria[][];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: ComisionesState = {
  comisiones: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};

const comisionesBancariasSlice = createSlice({
  name: "comisionesBancarias",
  initialState,
  reducers: {
    startLoadingComisiones: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setComisiones: (
      state,
      action: PayloadAction<{
        data: ComisionBancaria[][];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.comisiones = action.payload.data;
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

export const {
  startLoadingComisiones,
  setComisiones,
  clearErrorMessage,
} = comisionesBancariasSlice.actions;
  
export default comisionesBancariasSlice.reducer;
