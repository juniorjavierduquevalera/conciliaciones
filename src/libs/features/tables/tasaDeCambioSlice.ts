import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TasaDeCambio {
  id: number;
  moneda_nacional: string;
  moneda_extranjera: string;
  cambio: number;
  fecha: string;
}

interface TasaDeCambioState {
  tasas: TasaDeCambio[];
  isLoading: boolean;
  errorMessage?: string;
}

const initialState: TasaDeCambioState = {
  tasas: [],
  isLoading: false,
  errorMessage: undefined,
};

const tasaDeCambioSlice = createSlice({
  name: "tasaDeCambio",
  initialState,
  reducers: {
    startLoadingTasas: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setTasas: (state, action: PayloadAction<TasaDeCambio[]>) => {
      state.tasas = action.payload;
      state.isLoading = false;
    },
    addTasa: (state, action: PayloadAction<TasaDeCambio>) => {
      state.tasas.push(action.payload);
    },
    updateTasa: (state, action: PayloadAction<TasaDeCambio>) => {
      state.tasas = state.tasas.map((tasa) =>
        tasa.id === action.payload.id ? action.payload : tasa
      );
    },
    deleteTasa: (state, action: PayloadAction<number>) => {
      state.tasas = state.tasas.filter((tasa) => tasa.id !== action.payload);
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
  startLoadingTasas,
  setTasas,
  addTasa,
  updateTasa,
  deleteTasa,
  setError,
  clearErrorMessage,
} = tasaDeCambioSlice.actions;

export default tasaDeCambioSlice.reducer;
