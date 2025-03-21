import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CargoBancario {
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

interface CargoBancarioState {
  cargos: CargoBancario[][];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: CargoBancarioState = {
  cargos: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};

const cargosBancariosSlice = createSlice({
  name: "cargosBancarios",
  initialState,
  reducers: {
    startLoadingCargos: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setCargos: (
      state,
      action: PayloadAction<{
        data: CargoBancario[][];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.cargos = action.payload.data;
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

export const { startLoadingCargos, setCargos, clearErrorMessage } =
  cargosBancariosSlice.actions;

export default cargosBancariosSlice.reducer;
