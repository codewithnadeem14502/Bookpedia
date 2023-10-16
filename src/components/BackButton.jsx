import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="m-5 p-5 flex items-center bg-red-500 rounded-lg font-bold text-xl hover:bg-yellow-500"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      <AiOutlineArrowLeft className="w-[25px] h-[25px] mt-1 mr-2" />
      BACK
    </button>
  );
};

export default BackButton;
