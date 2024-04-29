import { BiSend } from "react-icons/bi";

export default function SubmitMessage() {
  return (
    <>
      <div className="w-full h-16 bg-slate-200 flex justify-evenly absolute bottom-0 items-center">
        <textarea
          name=""
          id=""
          className="bg-white rounded-md h-10 p-2 w-[80%]"
          placeholder="Escribe tu mensaje..."
        />
        <BiSend />
      </div>
    </>
  );
}
