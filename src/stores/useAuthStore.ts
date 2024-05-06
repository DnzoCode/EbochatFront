import {create} from "zustand"
import { IUser } from "../utils/interfaces/IUser";

interface AuthState {
    token: string | null;
    user: IUser | null;
    login: (username: string, password: string) => Promise<void>;
  }
export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,
    login: async (username: string, password: string) => {
        try {
            // const response = await axios.post<AuthResponse>('https://tu-api.com/login', { username, password });
            // const { token, user } = response.data;
            // set({ token, user });
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
            throw new Error('Inicio de sesión fallido');
        }
    },
}))