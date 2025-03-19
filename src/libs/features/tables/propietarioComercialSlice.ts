import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropietarioComercial {
  id: number;
  propietario: string;
  rif: string;
  direccion: string;
  telefono: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface PropietarioComercialState {
  propietarios: PropietarioComercial[][];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: PropietarioComercialState = {
  propietarios: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
  errorMessage: undefined,
};

const propietarioComercialSlice = createSlice({
  name: "propietarioComercial",
  initialState,
  reducers: {
    startLoadingPropietarios: (state) => {
      state.isLoading = true;
      state.errorMessage = undefined;
    },
    setPropietarios: (
      state,
      action: PayloadAction<{
        data: PropietarioComercial[][];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.propietarios = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
    addPropietario: (state, action: PayloadAction<PropietarioComercial>) => {
      state.propietarios[0].push(action.payload);
    },
    updatePropietario: (state, action: PayloadAction<PropietarioComercial>) => {
      state.propietarios = state.propietarios.map((group) =>
        group.map((propietario) =>
          propietario.id === action.payload.id ? action.payload : propietario
        )
      );
    },
    deletePropietario: (state, action: PayloadAction<number>) => {
      state.propietarios = state.propietarios.map((group) =>
        group.filter((propietario) => propietario.id !== action.payload)
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
  startLoadingPropietarios,
  setPropietarios,
  addPropietario,
  updatePropietario,
  deletePropietario,
  setError,
  clearErrorMessage,
} = propietarioComercialSlice.actions;

export default propietarioComercialSlice.reducer;
