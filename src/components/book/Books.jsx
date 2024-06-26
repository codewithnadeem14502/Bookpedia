import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import Loading from "../../components/book/Loading";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { APIKEY } from "../../context/BestSellingData";
const Books = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [favourite, setFavourite] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortCriterion, setSortCriterion] = useState("title");

  useEffect(() => {
    // Fetch default list of books when component mounts
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=react&key=${APIKEY}&maxResults=10`
      )
      .then((res) => {
        console.log("res ", res.data.items);
        setData(res.data.items);
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error fetching default books:", error);
        setLoading(false);
      });
  }, []);
  const sortData = (order, sortBy) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      if (
        a &&
        a.volumeInfo &&
        a.volumeInfo.title &&
        b &&
        b.volumeInfo &&
        b.volumeInfo.title
      ) {
        if (sortBy === "title") {
          if (order === "asc") {
            return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
          } else {
            return b.volumeInfo.title.localeCompare(a.volumeInfo.title);
          }
        } else if (sortBy === "price") {
          const priceA = a.saleInfo?.listPrice?.amount || 0;
          const priceB = b.saleInfo?.listPrice?.amount || 0;
          if (order === "asc") {
            return priceA - priceB;
          } else {
            return priceB - priceA;
          }
        }
      } else {
        if (order === "asc") {
          return -1;
        } else {
          return 1;
        }
      }
    });

    setData(sortedData);
  };

  const handleSearch = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIKEY}&maxResults=40`
      )
      .then((res) => {
        setData(res.data.items);
        setLoading(true);
      });
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const h1ClassName = favourite
    ? "text-xl font-bold p-5 m-5 bg-yellow-500 rounded-lg hover:bg-green-500"
    : "text-xl font-bold p-5 m-5 bg-green-500 rounded-lg hover:bg-yellow-500";

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    const [newSortOrder, newSortCriterion] = selectedSort.split("-");

    setSortOrder(newSortOrder);
    setSortCriterion(newSortCriterion);
    sortData(newSortOrder, newSortCriterion);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="bg-slate-50 pt-5 flex justify-center">
        <div className="flex w-[30%] my-5 mb-10 justify-center relative">
          <input
            className="bg-slate-200 font-semibold text-xl w-[550px] h-[52px] rounded-lg pl-5 pr-[50px] focus:outline-none text-black"
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="hidden md:flex absolute right-0 top-0 bottom-0  items-center pr-2">
            <FcSearch
              className="w-[35px] h-[35px]  rounded"
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <hr className="border-1 border-black " />
      <div className="bg-slate-50 px-5 cursor-pointer">
        <div className="sm:flex sm:justify-between items-center">
          <div className="w-[90%] md:w-1/2 flex justify-center items-center">
            <Link to="/FavouriteBook">
              <h1 className={h1ClassName}>Favourite book</h1>
            </Link>
          </div>
          <div className="mt-4 sm:m-0 w-full  flex justify-center items-center pb-5">
            {data.length > 0 && (
              <div className="sm:flex sm:items-center">
                <label className="text-xl font-bold">
                  Sort by:
                  <select
                    value={`${sortOrder}-${sortCriterion}`}
                    onChange={handleSortChange}
                    className="p-2 ml-2 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="asc-title">A - Z</option>
                    <option value="desc-title">Z - A</option>
                    <option value="asc-price">Price Low to High</option>
                    <option value="desc-price">Price High to Low</option>
                  </select>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="border-1 border-black " />
      <div className="bg-slate-50 w-full pt-5">
        <div className="flex flex-wrap justify-center">
          {loading === false ? <Loading /> : <BookCard books={data} />}
        </div>
      </div>
    </>
  );
};

export default Books;
