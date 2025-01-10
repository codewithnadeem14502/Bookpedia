import React from "react";
import clipboard from "clipboard-copy";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";
import { FaRupeeSign } from "react-icons/fa";

const BookItem = ({ book }) => {
  const { id, image, title, description, price, bookimage } = book;

  return (
    <div
      key={id}
      className="bg-white w-72 h-[440px] p-6 m-6 rounded-md   transition-transform transform hover:scale-105 flex flex-col justify-between  border border-gray-300 "
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <img
        src={image || bookimage}
        alt={title}
        className="w-full h-40 object-contain rounded-md mb-4"
        style={{ transition: "transform 0.3s ease-in-out" }}
      />
      <hr className="border-1 border-black " />

      <div className="">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
          {title.length > 20 ? `${title.substring(0, 20)}...` : title}
        </h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <h1 className="text-black font-bold text-lg ml-1">{price}</h1>
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full shadow hover:bg-blue-600 transition">
            <CopyToClipboardButton BookName={title} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
