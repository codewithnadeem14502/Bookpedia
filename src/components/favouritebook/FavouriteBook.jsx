import React from "react";
import { Link } from "react-router-dom";
import { getCart, removeFavoriteBook } from "./favouriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImBin } from "react-icons/im";
import EmptyCart from "../cart/EmptyCart";
import clipboard from "clipboard-copy";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";
import BackButton from "../Buttons/BackButton";
const FavouriteBook = () => {
  const favitems = useSelector(getCart);
  const dispatch = useDispatch();

  const uniqueBookIds = new Set();
  const uniqueBooks = [];
  const heading = "Add to favourite Now";
  const para = "Add some items to your favourite list to get started.";
  const cat = " Favourite Now ";

  favitems.forEach((book) => {
    if (!uniqueBookIds.has(book.bookid)) {
      uniqueBookIds.add(book.bookid);
      uniqueBooks.push(book);
    }
  });
  if (uniqueBooks.length == 0)
    return <EmptyCart heading={heading} para={para} cat={cat} />;

  return (
    <div className="bg-slate-100">
      <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {uniqueBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            <img
              src={book.bookimage}
              alt={book.title}
              className="w-full h-48 object-contain"
            />
            <hr className="border-1 border-black my-5" />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-500">{book.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700">{book.price}</span>
              </div>
              <div className="flex justify-between">
                <ImBin
                  className=" w-[35px] h-[30px] text-red-500  text-lg font-medium hover:text-red-400"
                  type="small"
                  onClick={() => dispatch(removeFavoriteBook(book.bookid))}
                ></ImBin>
                <CopyToClipboardButton BookName={book.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <BackButton />
    </div>
  );
};

export default FavouriteBook;
