import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="bg-white h-16 flex justify-center items-center shadow-md relative">
      <BiArrowBack className="absolute left-4 text-md" onClick={handleBack} />
      <h1 className="font-bold text-xl text-center">Daniel Rodriguez</h1>
    </div>
  );
}
