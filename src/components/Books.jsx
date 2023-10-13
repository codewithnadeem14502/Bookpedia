import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Books = ({ search }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q='+${search}+'&key=AIzaSyCgpPa7Ctg2u1ldc7iInVH7Qq0TN7UmgmM` +
          "&maxResults=40"
      )
      .then((res) => {
        setData(res.data.items);
        setLoading(true);
      });
  }, []);
  // console.log(search);
  return (
    <div className=" bg-slate-100 w-full mt-5">
      <div className="flex flex-wrap justify-center">
        {loading == false ? <Loading /> : <BookCard books={data} />}
      </div>
    </div>
  );
};

export default Books;
