import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import Intro from "../minicomponent/Intro";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
const Books = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [favourite, setFavourite] = useState(false);
  const handleSearch = () => {
    // useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCgpPa7Ctg2u1ldc7iInVH7Qq0TN7UmgmM` +
          `&maxResults=40`
      )
      .then((res) => {
        setData(res.data.items);
        setLoading(true);
      });
    // }, []);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  const handlefavourite = () => {
    {
      favourite == true ? setFavourite(false) : setFavourite(true);
    }
  };

  const h1ClassName = favourite
    ? "text-xl font-bold p-5 m-5 bg-green-500 rounded-lg hover:bg-green-500"
    : "text-xl font-bold p-5 m-5 bg-gray-500 rounded-lg hover:bg-green-500";
  return (
    <>
      <div className="bg-slate-50 mt-5 flex justify-center h-[60px]">
        <div className="flex w-[30%] m-1 justify-center">
          <input
            className="bg-gray-300 font-semibold text-xl w-[550px] rounded-tl-xl rounded-bl-xl  pl-5 focus:outline-none"
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={handleInputChange}
          />
          <div className="items-center">
            <FcSearch
              className="w-[35px] h-[52px]  bg-gray-300 rounded-r-xl"
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center mt-10 cursor-pointer "
        onClick={handlefavourite}
      >
        <Link to="/FavouriteBook ">
          <h1 className={h1ClassName}>Favourite book</h1>
        </Link>
      </div>
      <div className=" bg-slate-100 w-full mt-5">
        <div className="flex flex-wrap justify-center">
          {loading == false ? <Intro /> : <BookCard books={data} />}
        </div>
      </div>
    </>
  );
};

export default Books;
