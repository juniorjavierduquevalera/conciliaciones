"use client";
import { AuthContext } from "./AuthContext";
import { useAuthProvider } from "../hooks/useAuthProvider";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
