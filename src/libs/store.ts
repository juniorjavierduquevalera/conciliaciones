import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import tasaDeCambioReducer from "./features/tables/tasaDeCambioSlice";
import comercialReducer from "./features/tables/comercialSlice"; 
import propietarioComercialReducer from "./features/tables/propietarioComercialSlice";
import codigoTransaccionalReducer from "./features/tables/codigoTransaccionalSlice";
import estadoDeCuentaReducer from "./features/tables/estadoDeCuentaSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasaDeCambio: tasaDeCambioReducer,
    comercial: comercialReducer, 
    propietarioComercial: propietarioComercialReducer,
    codigoTransaccional: codigoTransaccionalReducer,
    estadoDeCuenta: estadoDeCuentaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
