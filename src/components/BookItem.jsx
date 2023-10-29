import React from "react";
import clipboard from "clipboard-copy";
import CopyToClipboardButton from "../components/CopyToClipboardButton";
const BookItem = ({ book }) => {
  const { id, image, title, description, price, bookimage } = book;

  return (
    <div
      key={id}
      className="bg-white p-4 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
    >
      <img
        src={image || bookimage}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
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
