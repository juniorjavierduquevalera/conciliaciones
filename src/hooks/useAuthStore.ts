import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { post } from "../services/api";
import { useRouter } from "next/navigation";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../libs/features/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(
    (state: any) => state.auth
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const startLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    dispatch(onChecking());
    try {
      const data = await post("/users/login", credentials);
      Cookies.set("x-token", data.token, { expires: 90 });
      const decodedToken = JSON.parse(atob(data.token.split(".")[1]));
      dispatch(onLogin({ user: decodedToken }));
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "Bienvenido a la plataforma",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/");
    } catch (error: any) {
      dispatch(onLogout("Credenciales incorrectas"));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Credenciales incorrectas. Por favor, verifica tus datos.",
      });

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async (credentials: {
    email: string;
    password: string;
    name: string;
  }) => {
    dispatch(onChecking());
    try {
      const data = await post("/users/register", credentials);
      Cookies.set("x-token", data.token, { expires: 90 });
      const decodedToken = JSON.parse(atob(data.token.split(".")[1]));
      dispatch(onLogin({ user: decodedToken }));
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/");
    } catch (error: any) {
      dispatch(onLogout(error.message || "--"));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo completar el registro. Por favor, intenta de nuevo.",
      });

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    Cookies.remove("x-token");
    dispatch(onLogout());
  };

  return {
    errorMessage,
    status,
    user,
    startLogin,
    startLogout,
    startRegister,
  };
};
