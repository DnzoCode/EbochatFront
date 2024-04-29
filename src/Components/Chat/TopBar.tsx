import { BiPlus } from "react-icons/bi";
export default function TopBar() {
  return (
    <>
      <div className="bg-white h-16 flex justify-center items-center shadow-md relative">
        <h1 className="font-bold text-xl text-center">Mensajes</h1>

        <BiPlus className="absolute right-4 text-md" />
      </div>
    </>
  );
}
