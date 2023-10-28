import React from "react";
import clipboard from "clipboard-copy";
import CopyToClipboardButton from "../components/CopyToClipboardButton";
import { bestSellingBooksData } from "../context/BestSellingData";

const BestSelling = () => {
  const bestSellingBooks = bestSellingBooksData;
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bestSellingBooks.map((book) => (
        <div
          key={book.id}
          className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-500">{book.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-700">{book.price}</span>
              <CopyToClipboardButton BookName={book.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSelling;
