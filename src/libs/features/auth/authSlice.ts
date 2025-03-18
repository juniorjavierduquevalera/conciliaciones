import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  user: {
    id?: number;
    name?: string;
    email?: string;
    role?: string;
  } | null;
  errorMessage?: string;
}

const initialState: AuthState = {
  status: "not-authenticated",
  user: null,
  errorMessage: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = null;
      state.errorMessage = undefined;
    },
    onLogin: (state, action: PayloadAction<{ user: AuthState["user"] }>) => {
      state.status = "authenticated";
      state.user = action.payload.user;
      state.errorMessage = undefined;
    },
    onLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = "not-authenticated";
      state.user = null;
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
export default authSlice.reducer;
