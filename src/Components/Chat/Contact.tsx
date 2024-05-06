import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IChat } from "../../utils/interfaces/IChat";
import { useContactStore } from "../../stores/useContactStore";

export default function Contact({userId}:{userId:number}) {
  const [chats, setChats] = useState<IChat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    useContactStore.getState().getContactsByUserId(userId)
      .then(chats => {
        setChats(chats);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los chats:", error);
        setLoading(false);
      });
  }, [])
  const extraerIniciales = (word:string) : string => {
    return word.substring(0, 2).toUpperCase()
  }
  const navigate = useNavigate();
  const handleChatClick = (chatId:number) => {
    // Navegar a la URL con el parámetro de consulta chatId
    navigate(`/chat?chatId=${chatId}`);
  };

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Chats</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            4
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          {
            chats.map((chat, index) => (
              <div
                onClick={()=>handleChatClick(chat.chatId)}
                key={index}
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              >
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  {(chat.otherUserName) ? extraerIniciales(chat.otherUserName) : ""}
                </div>
                <div className="ml-2 text-sm font-semibold">{chat.otherUserName}</div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  );
}
