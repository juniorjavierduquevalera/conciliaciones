import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Conciliacion {
  id: number;
  rif: string;
  razon_social: string;
  referencia: string;
  abono: string;
  abono_estado_de_cuenta: string;
  verificacion: 'aprobado' | 'no aprobado';
  fecha: string;
  mes: string;
  año: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

interface ConciliacionState {
  conciliaciones: Conciliacion[];
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  errorMessage?: string;
}

const initialState: ConciliacionState = {
  conciliaciones: [],
  isLoading: false,
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 14,
};

const conciliacionSlice = createSlice({
  name: 'conciliacion',
  initialState,
  reducers: {
    startLoadingConciliaciones: (state) => {
      state.isLoading = true;
    },
    setConciliaciones: (
      state,
      action: PayloadAction<{
        data: Conciliacion[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }>
    ) => {
      state.conciliaciones = action.payload.data;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
      state.isLoading = false;
    },
  },
});

export const { startLoadingConciliaciones, setConciliaciones } = conciliacionSlice.actions;
export default conciliacionSlice.reducer;
