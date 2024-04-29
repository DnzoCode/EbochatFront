import { useParams } from "react-router-dom";
import TopBar from "../Components/Message/TopBar";
import Conversation from "../Components/Message/Conversation";
import SubmitMessage from "../Components/Message/SubmitMessage";
import { useEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
export default function Message() {
  const { chatId } = useParams();
  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/chat-socket");
    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe("/topic/messages", (message) => {
        const receivedMessage = JSON.parse(message.body);
      });
    });

    return () => {
      client.disconnect();
    };
  }, []);
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between items-stretch relative">
        <TopBar />
        <div className="relative w-full h-full flex flex-col overflow-y-auto mt-2">
          <Conversation />
        </div>
        <SubmitMessage />
      </div>
    </>
  );
}
