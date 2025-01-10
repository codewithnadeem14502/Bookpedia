import React from "react";
import { bestSellingBooksData } from "../../context/BestSellingData";
import BackButton from "../Buttons/BackButton";
import BookItem from "../book/BookItem";

const BestSelling = () => {
  const bestSellingBooks = bestSellingBooksData;

  return (
    <div className="p-4">
      <div className="flex justify-start gap-3 md:flex">
        {/* <BackButton /> */}
        <h1 className="text-3xl mt-5 ml-5  font-bold text-black mb-5 md:text-4xl">
          Explore Our Best Sellers
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {bestSellingBooks.map((book) => (
          <BookItem book={book} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
