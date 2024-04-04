import React from "react";
import { bestSellingBooksData } from "../../context/BestSellingData";
import BackButton from "../Buttons/BackButton";
import BookItem from "../book/BookItem";

const BestSelling = () => {
  const bestSellingBooks = bestSellingBooksData;

  return (
    <div className="p-4">
      <div className="flex justify-between md:flex">
        <h1 className="text-3xl mt-5 ml-5  font-bold text-black mb-5 md:text-4xl">
          Explore Our Best Sellers
        </h1>

        <BackButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bestSellingBooks.map((book) => (
          <BookItem book={book} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
