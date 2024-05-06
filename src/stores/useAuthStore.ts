import { create } from "zustand";
import axiosInstance from "../utils/axios";

interface AuthState {
  token: string | null;
  username: string | null;
  userId: number | null;
  login: (username: string, password: string) => Promise<void>;
}
export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || null,
  userId: localStorage.getItem("userId")
    ? parseInt(localStorage.getItem("userId")!)
    : null,
  login: async (username: string, password: string) => {
    await axiosInstance
      .post("auth/login", { username, password })
      .then((response) => {
        const { token, username, userId } = response.data;
        set({ token, username, userId });
        localStorage.setItem("token", token);
        localStorage.setItem("username", username); // Guardar el username en localStorage
        localStorage.setItem("userId", userId.toString()); // Guardar el userId en localStorage
      })
      .catch((error) => {
        throw new Error("Inicio de sesión fallido");
      });
  },
}));
