import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EstadoDeCuenta {
  id: number;
  fecha: string;
  referencia: string;
  concepto: string;
  cargo: string;
  abono: string;
  saldo: string;
  codigo_operacion: string;
  tipo_operacion: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

interface EstadoDeCuentaState {
  estados: EstadoDeCuenta[][];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: EstadoDeCuentaState = {
  estados: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};

const estadoDeCuentaSlice = createSlice({
  name: "estadoDeCuenta",
  initialState,
  reducers: {
    startLoadingEstados: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setEstados: (
      state,
      action: PayloadAction<{
        data: EstadoDeCuenta[][];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.estados = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
    addEstado: (state, action: PayloadAction<EstadoDeCuenta>) => {
      state.estados[0].push(action.payload);
    },
    updateEstado: (state, action: PayloadAction<EstadoDeCuenta>) => {
      state.estados = state.estados.map((group) =>
        group.map((estado) =>
          estado.id === action.payload.id ? action.payload : estado
        )
      );
    },
    deleteEstado: (state, action: PayloadAction<number>) => {
      state.estados = state.estados.map((group) =>
        group.filter((estado) => estado.id !== action.payload)
      );
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  startLoadingEstados,
  setEstados,
  addEstado,
  updateEstado,
  deleteEstado,
  setError,
  clearErrorMessage,
} = estadoDeCuentaSlice.actions;

export default estadoDeCuentaSlice.reducer;
