import React from "react";

interface IMessageProps {
  type: number;
}
export default function Message({ type }: IMessageProps) {
  return (
    <>
      {type == 1 && (
        <>
          <div className="whitespace-break-spaces w-auto bg-gray-900 text-white p-2 rounded-xl rounded-tl-none mb-4">
            <span>Mensjae que sea .....</span>
          </div>
        </>
      )}
      {type == 2 && (
        <>
          <div className="whitespace-break-spaces w-auto bg-gray-100 text-black text-right p-2 rounded-xl rounded-tr-none mt-4">
            <span>Mensjae que sea .....</span>
          </div>
        </>
      )}
    </>
  );
}
