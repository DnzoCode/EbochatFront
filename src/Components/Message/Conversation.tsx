import { useEffect, useRef } from "react";
import Message from "./Message";

export default function Conversation({type, content, username}:{type:number, content:string, username:string}) {
  return (
    <>
      {type == 1 && (
        <>
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
          <div className="flex items-center justify-start flex-row-reverse">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
              A
            </div>
            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
              <div>{content}</div>
            </div>
          </div>
        </div>
        </>
      )}
      {type == 2 && (
        <>
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
              A
            </div>
            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              <div>{content}</div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}
