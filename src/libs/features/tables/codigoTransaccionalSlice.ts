import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CodigoTransaccional {
  id: number;
  codigo: string;
  descripcion: string;
  createdAt: string;
  updatedAt: string;
}

interface CodigoTransaccionalState {
  codigos: CodigoTransaccional[][];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: CodigoTransaccionalState = {
  codigos: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};

const codigoTransaccionalSlice = createSlice({
  name: "codigoTransaccional",
  initialState,
  reducers: {
    startLoadingCodigos: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setCodigos: (
      state,
      action: PayloadAction<{
        data: CodigoTransaccional[][];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.codigos = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
    addCodigo: (state, action: PayloadAction<CodigoTransaccional>) => {
      state.codigos[0].push(action.payload);
    },
    updateCodigo: (state, action: PayloadAction<CodigoTransaccional>) => {
      state.codigos = state.codigos.map((group) =>
        group.map((codigo) =>
          codigo.id === action.payload.id ? action.payload : codigo
        )
      );
    },
    deleteCodigo: (state, action: PayloadAction<number>) => {
      state.codigos = state.codigos.map((group) =>
        group.filter((codigo) => codigo.id !== action.payload)
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
  startLoadingCodigos,
  setCodigos,
  addCodigo,
  updateCodigo,
  deleteCodigo,
  setError,
  clearErrorMessage,
} = codigoTransaccionalSlice.actions;

export default codigoTransaccionalSlice.reducer;
