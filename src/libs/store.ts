import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import tasaDeCambioReducer from "./features/tables/tasaDeCambioSlice";
import comercialReducer from "./features/tables/comercialSlice"; 
import propietarioComercialReducer from "./features/tables/propietarioComercialSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasaDeCambio: tasaDeCambioReducer,
    comercial: comercialReducer, 
    propietarioComercial: propietarioComercialReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
