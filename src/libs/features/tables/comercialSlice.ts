import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropietarioComercial {
  id: number;
  propietario: string;
  rif: string;
}
interface Comercial {
  id: number;
  codigo: string;
  comercial: string;
  rif: string;
  direccion: string;
  superficie: string;
  createdAt: string;
  updatedAt: string;
  propietario_comercial?: PropietarioComercial;
}
interface ComercialState {
  comerciales: Comercial[];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}
const initialState: ComercialState = {
  comerciales: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};
const comercialSlice = createSlice({
  name: "comercial",
  initialState,
  reducers: {
    startLoadingComerciales: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setComerciales: (
      state,
      action: PayloadAction<{ data: Comercial[]; totalItems: number; totalPages: number; currentPage: number }>
    ) => {
      state.comerciales = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
    addComercial: (state, action: PayloadAction<Comercial>) => {
      state.comerciales.push(action.payload);
    },
    updateComercial: (state, action: PayloadAction<Comercial>) => {
      state.comerciales = state.comerciales.map((comercial) =>
        comercial.id === action.payload.id ? action.payload : comercial
      );
    },
    deleteComercial: (state, action: PayloadAction<number>) => {
      state.comerciales = state.comerciales.filter((comercial) => comercial.id !== action.payload);
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
  startLoadingComerciales,
  setComerciales,
  addComercial,
  updateComercial,
  deleteComercial,
  setError,
  clearErrorMessage,
} = comercialSlice.actions;

export default comercialSlice.reducer;
