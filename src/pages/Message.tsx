import { useParams } from "react-router-dom";
import TopBar from "../Components/Message/TopBar";
import Conversation from "../Components/Message/Conversation";
import SubmitMessage from "../Components/Message/SubmitMessage";
import { useEffect, useState } from "react";
// import WebSocketService from "../utils/websocketConfig";s
export default function Message() {

  const { chatId } = useParams();
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws');
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };
    
    socket.onmessage = (event) => {
      console.log('Received message:', event.data);
    };
    
    socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };
  })
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
