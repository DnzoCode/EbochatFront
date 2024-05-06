import React from "react";
import SideBar from "../Components/Chat/SideBar";
import { useAuthStore } from "../stores/useAuthStore";
import Message from "./Message";

export default function Chat() {
  const authStore = useAuthStore()
  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <SideBar username={authStore.username} userId={authStore.userId}/>
          <Message/>
        </div>
      </div>
    </>
  );
}
