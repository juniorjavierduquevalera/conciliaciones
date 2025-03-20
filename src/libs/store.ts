import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import tasaDeCambioReducer from "./features/tables/tasaDeCambioSlice";
import comercialReducer from "./features/tables/comercialSlice"; 
import propietarioComercialReducer from "./features/tables/propietarioComercialSlice";
import codigoTransaccionalReducer from "./features/tables/codigoTransaccionalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasaDeCambio: tasaDeCambioReducer,
    comercial: comercialReducer, 
    propietarioComercial: propietarioComercialReducer,
    codigoTransaccional: codigoTransaccionalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
