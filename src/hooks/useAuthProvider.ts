import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
interface AuthState {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const getUserFromToken = (): User | null => {
  const token = Cookies.get("token");
  if (!token) return null;
  try {
    return jwtDecode<User>(token);
  } catch (error) {
    console.log("Error trying to decode the token", error);
    return null;
  }
};

export const useAuthProvider = (): AuthState => {
  const [user, setUser] = useState<User | null>(getUserFromToken);

  useEffect(() => {
    setUser(getUserFromToken());
  }, []);

  const login = (token: string) => {
    Cookies.set("token", token, {
      expires: 14,
      secure: true,
      sameSite: "strict",
    });
    setUser(getUserFromToken());
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };
  return { user, login, logout };
};
