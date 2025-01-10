import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-start">
      {/* Desktop View */}
      <button
        className="hidden md:flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-3 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl transform hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft className="w-5 h-5" />
        {/* <span className="text-lg">Back</span> */}
      </button>

      {/* Mobile View */}
      <button
        className="flex md:hidden items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => navigate(-1)}
        style={{ width: "3rem", height: "3rem" }} // Full circular button
      >
        <AiOutlineArrowLeft className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BackButton;
