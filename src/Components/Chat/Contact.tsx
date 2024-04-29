import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Link
        to={"/chat/1"}
        className="w-full p-2 flex flex-col justify-between items-start mb-2 rounded-md transition-all hover:shadow-md "
      >
        <div className="flex justify-between items-center mx-1 min-w-full">
          <span className="font-bold">Daniel Rodriguez</span>
          <small className="text-gray-400">09:30 am</small>
        </div>
        <small className="text-gray-400">Ultimo mensaje</small>
      </Link>
    </>
  );
}
