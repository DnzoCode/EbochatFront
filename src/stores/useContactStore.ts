import { create } from "zustand";
import axiosInstance from "../utils/axios";
import { IChat } from "../utils/interfaces/IChat";

interface ContactState {
  getContactsByUserId: (userId: number) => Promise<IChat[]>;
}

export const useContactStore = create<ContactState>(set => ({
    getContactsByUserId: async (userId: number) => {
        try {
            const response = await axiosInstance.get(`chats/user/${userId}`);
            if (response.data && Array.isArray(response.data)) {
                const chats: IChat[] = response.data.map((item: IChat) => ({
                    chatId: item.chatId,
                    otherUserName: item.otherUserName,
                }));
                return chats;
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error al obtener los chats:", error);
            throw error;
        }
    }
}));