import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import tasaDeCambioReducer from "./features/tables/tasaDeCambioSlice";
import comercialReducer from "./features/tables/comercialSlice"; 
import propietarioComercialReducer from "./features/tables/propietarioComercialSlice";
import codigoTransaccionalReducer from "./features/tables/codigoTransaccionalSlice";
import estadoDeCuentaReducer from "./features/tables/estadoDeCuentaSlice";
import cargosBancariosReducer from "./features/tables/cargosBancariosSlice";
import abonosBancariosReducer from "./features/tables/abonosBancariosSlice";
import comisionesBancariasReducer from "./features/tables/comisionesBancariasSlice";
import clientesReducer from "./features/tables/clienteSlice";
import conciliacionReducer from './features/tables/conciliacionBancariaSlice';
import recibosReducer from './features/tables/recibosSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasaDeCambio: tasaDeCambioReducer,
    comercial: comercialReducer, 
    propietarioComercial: propietarioComercialReducer,
    codigoTransaccional: codigoTransaccionalReducer,
    estadoDeCuenta: estadoDeCuentaReducer,
    cargosBancarios: cargosBancariosReducer,
    abonosBancarios: abonosBancariosReducer,
    comisionesBancarias: comisionesBancariasReducer,
    clientes: clientesReducer,
    conciliacion: conciliacionReducer,
    recibos: recibosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
