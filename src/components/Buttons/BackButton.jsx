import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden md:py-8 md:px-10 md:block">
        <button
          className="p-4 rounded-full  bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg hover:from-red-600 hover:to-yellow-600 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => {
            navigate(-1);
          }}
        >
          <div className="flex items-center space-x-2 text-white">
            <AiOutlineArrowLeft className="w-6 h-6" />
            <span className="font-bold text-lg md:text-xl">Back</span>
          </div>
        </button>
      </div>
      <button
        className="p-3 md:p-4 flex md:hidden items-center justify-center text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-full hover:from-red-600 hover:to-yellow-600 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={() => {
          navigate(-1);
        }}
      >
        <AiOutlineArrowLeft className="w-6 h-6" />
      </button>
    </>
  );
};

export default BackButton;
