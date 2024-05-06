import { create } from "zustand";
import axiosInstance from "../utils/axios";
import { IMessageChat } from "../utils/interfaces/IMessage";

interface IMessageProps{
    getMessagesByChatId: (chatId: number) => Promise<IMessageChat[]>
}

export const useMessageStore = create<IMessageProps>(set => ({
    getMessagesByChatId: async (chatId: number) =>  {
        try{
            const response = await axiosInstance.get(`message/chat/${chatId}`);
            if (response.data && Array.isArray(response.data)) {
                const messages: IMessageChat[] = response.data.map((item: IMessageChat) => ({
                    content: item.content,
                    userId: item.userId,
                    username: item.username
                }));
                return messages;
            } else {
                return [];
            }
        }
        catch (error) {
            console.error("Error al obtener los chats:", error);
            throw error;
        }
    }
}))