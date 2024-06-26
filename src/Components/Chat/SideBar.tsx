import React from "react";
import Contact from "./Contact";

interface ISidebarProps{
  username: string|null
  userId: number|null
}

export default function SideBar({username, userId}:ISidebarProps) {
  const extraerIniciales = (word:string) : string => {
    return word.substring(0, 2).toUpperCase()
  }
  return (
    <>
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div className="flex flex-row items-center justify-center h-12 w-full">
          <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div className="ml-2 font-bold text-2xl">EboChat</div>
        </div>
        <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
          <div className="h-20 w-20 rounded-full border overflow-hidden">
            <div className="w-full h-full bg-blue-400 flex justify-center items-center">
              <span className="text-3xl">{(username != null) ? extraerIniciales(username) : ""}</span>
            </div>
          </div>
          <div className="text-sm font-semibold mt-2">{username}</div>
        </div>
        <Contact userId={(userId != null) ? userId : 0}/>
      </div>
    </>
  );
}
