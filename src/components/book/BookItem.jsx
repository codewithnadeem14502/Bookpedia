import React from "react";
import clipboard from "clipboard-copy";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";

const BookItem = ({ book }) => {
  const { id, image, title, description, price, bookimage } = book;

  return (
    <div
      key={id}
      className="bg-white p-6 m-6 rounded-md shadow-lg hover:shadow-xl border-2 border-black transition-transform transform hover:scale-105"
      style={{ transition: "transform 0.3s ease-in-out" }} // Add smooth transition
    >
      <img
        src={image || bookimage}
        alt={title}
        className="w-full h-48 object-contain rounded-md mb-5"
        style={{ transition: "transform 0.3s ease-in-out" }} // Add smooth transition
      />
      <hr className="border-1 border-black " />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-semibold text-lg">{price}</span>
          <CopyToClipboardButton BookName={title} />
        </div>
      </div>
    </div>
  );
};

export default BookItem;
