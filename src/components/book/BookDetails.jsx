import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import BackButton from "../Buttons/BackButton";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { DeleteItem, addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteBtn from "../Buttons/DeleteBtn";
import {
  addFavoriteBook,
  removeFavoriteBook,
} from "../favouritebook/favouriteSlice";

const BookDetails = () => {
  const [like, setLike] = useState(false);
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "AIzaSyCgpPa7Ctg2u1ldc7iInVH7Qq0TN7UmgmM";

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  const isInCart = currentQuantity > 0;

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`)
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setError("Error fetching book details. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!details) return null;

  const bookid = details.id;
  const title = details.volumeInfo.title;
  const amount = details.saleInfo?.listPrice?.amount || "Price not available";
  const bookimage =
    details.volumeInfo.imageLinks?.smallThumbnail || "placeholder-image-url";
  const pagecount = details.volumeInfo.pageCount;
  const author = details.volumeInfo.authors?.[0] || "Unknown Author";
  const infoLink = details.volumeInfo.infoLink;
  const publishedDate = details.volumeInfo.publishedDate || "N/A";
  const description =
    details.volumeInfo.description || "No description available.";
  const plainTextDescription = description.replace(/<[^>]*>/g, "");

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      const newItem = { bookid, bookimage, title, pagecount, amount, author };
      dispatch(addFavoriteBook(newItem));
    } else {
      dispatch(removeFavoriteBook(bookid));
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      Bookid: bookid,
      title,
      amount,
      quantity: 1,
      totalPrice: Math.floor(amount),
    };
    dispatch(addItem(newItem));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Back Button */}
        {/* Book Image */}
        <div className="flex justify-center items-center bg-gray-100 p-6">
          <img
            className="w-[250px] h-[350px] md:w-[350px] md:h-[450px] rounded-lg shadow-lg"
            src={bookimage}
            alt={title}
          />
        </div>

        {/* Book Details */}
        <div className="flex-1 p-6 lg:px-10">
          <div className="flex justify-start gap-2 text-center items-center">
            <BackButton />

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 whitespace-nowrap">
              {title}
            </h1>
          </div>
          {/* Author & Metadata */}
          <div className="flex flex-wrap items-center mt-4 text-gray-600">
            <h3 className="font-medium mr-4">
              Author: <span className="font-semibold">{author}</span>
            </h3>
            <h3 className="font-medium mr-4">
              Published: <span className="font-semibold">{publishedDate}</span>
            </h3>
            <h3 className="font-medium">
              Pages: <span className="font-semibold">{pagecount}</span>
            </h3>
          </div>

          {/* Price */}
          <div className="flex items-center mt-6">
            <h2 className="text-2xl font-bold text-green-500">
              &#8377;{Math.floor(amount)}
            </h2>
            <button
              onClick={handleLike}
              className="ml-4 text-2xl text-red-500 focus:outline-none"
            >
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>

          {/* Book Summary */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Book Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {plainTextDescription.length > 400 ? (
                <>
                  {plainTextDescription.substring(0, 400)}...
                  <a
                    href={infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Read more
                  </a>
                </>
              ) : (
                plainTextDescription
              )}
            </p>
          </div>

          {/* Add to Cart or Update Quantity */}
          <div className="mt-8">
            {isInCart ? (
              <div className="flex items-center gap-4">
                <UpdateItemQuantity
                  id={bookid}
                  currentQuantity={currentQuantity}
                />
                <DeleteBtn Bookid={bookid} />
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
