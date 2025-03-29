"use client";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../libs/store";
import Cookies from "js-cookie";
import { onLogin, onLogout, onChecking } from "../libs/features/auth/authSlice";
import { get } from "../services/api";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    store.dispatch(onChecking());
    const token = Cookies.get("x-token");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const tokenExpiry = decodedToken.exp * 1000;
        const currentTime = new Date().getTime();
        store.dispatch(onLogin({ user: decodedToken }));

        if (currentTime >= tokenExpiry) {
          console.log("El token ha expirado, cerrando sesión");
          Cookies.remove("x-token");
          store.dispatch(onLogout());
          return;
        }
        const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
        const timeLeft = tokenExpiry - currentTime;

        if (timeLeft <= threeDaysInMs) {
          console.log("El token está cerca de expirar, renovando...");
          get("/users/renew", {}, token)
            .then((data) => {
              Cookies.set("x-token", data.token, { expires: 90 });
              const renewedToken = JSON.parse(atob(data.token.split(".")[1]));
              store.dispatch(onLogin({ user: renewedToken }));
            })
            .catch((error) => {
              console.error("Error al renovar el token", error);
              Cookies.remove("x-token");
              store.dispatch(onLogout());
            });
        } else {
          store.dispatch(onLogin({ user: decodedToken }));
        }
      } catch (error) {
        console.error("Error al decodificar el token o usuario:", error);
        Cookies.remove("x-token");
        store.dispatch(onLogout());
      }
    } else {
      Cookies.remove("x-token");
      store.dispatch(onLogout());
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
