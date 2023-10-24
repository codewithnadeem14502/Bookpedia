import React from "react";
import { Link } from "react-router-dom";
import useFavourite from "../context/Favourite";

const FavouriteBook = () => {
  const { booknameid } = useFavourite();
  {
    console.log(booknameid);
  }
  return (
    <div>
      <h1 className="text-xl font-bold">lorem books {booknameid} </h1>
      <Link to="/">
        <button className="m-5 p-5 rounded-md bg-cyan-500 font-bold text-lg">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default FavouriteBook;
