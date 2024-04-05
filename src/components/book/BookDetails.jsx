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
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <div>{error}</div>;
  } else if (details) {
    const bookid = details.id;
    const title = details.volumeInfo.title;
    const amount = details.saleInfo?.listPrice?.amount || "Price not available";
    const bookimage =
      details.volumeInfo.imageLinks &&
      details.volumeInfo.imageLinks.smallThumbnail;
    const pagecount = details.volumeInfo.pageCount;
    const author = details.volumeInfo.authors[0];
    const infoLink = details.volumeInfo.infoLink;
    const publishedDate = details.volumeInfo.publishedDate;
    const description = details.volumeInfo.description;

    function handleLikeItem() {
      const newItem = {
        bookid,
        bookimage,
        title,
        pagecount,
        amount,
        author,
      };

      dispatch(addFavoriteBook(newItem));
    }

    const handleLike = () => {
      if (like == true) {
        setLike(false);
      } else {
        // dispatch(DeleteItem(bookid));
        setLike(true);
      }
    };

    function handleAddToCart() {
      const newItem = {
        Bookid: bookid,
        title,
        amount,
        quantity: 1,
        totalPrice: Math.floor(amount),
      };
      dispatch(addItem(newItem));
    }
    const plainTextDescription = description.replace(/<[^>]*>/g, "");
    return (
      <div key={bookid} className="">
        <div className="bg-slate-200  w-full h-[auto] rounded-xl  flex justify-around flex-col lg:flex-row-reverse">
          <div className="flex items-center justify-center flex-col">
            <img
              className="w-[250px] h-[350px] md:w-[350px] md:h-[450px] rounded-xl  border border-black shadow-lg my-7 md:my-0"
              src={bookimage}
              alt="bookimage"
            />
            <div className="flex ">
              <h2 className="font-bold text-xl ml-12 mb-5 md:m-5 text-center">
                &#8377;{Math.floor(amount)}
              </h2>
              <button
                onClick={handleLike}
                className=" font-bold text-lg rounded-lg"
              >
                {like == false ? (
                  <AiOutlineHeart
                    className="w-[30px] h-[30px] text-red-500 mb-5 ml-2 md:m-0"
                    onClick={handleLikeItem}
                  />
                ) : (
                  <AiFillHeart
                    ml-2
                    className="w-[30px] h-[30px] text-red-500 mb-5 ml-2 md:m-0"
                    onClick={() => dispatch(removeFavoriteBook(bookid))}
                  />
                )}
              </button>
            </div>
            {isInCart && (
              <div className="flex items-center gap-3 sm:gap-8">
                <UpdateItemQuantity
                  id={bookid}
                  currentQuantity={currentQuantity}
                />
                <DeleteBtn Bookid={bookid} />
              </div>
            )}
            {!isInCart && (
              <span className="p-5 m-5 bg-green-500 font-Poppins font-semibold text-xl text-center rounded-2xl ">
                <button type="small" onClick={handleAddToCart}>
                  Add to cart
                </button>
              </span>
            )}
          </div>
          <div className="mt-5  text-start  w-full   rounded-lg lg:ml-10 lg:w-[50%] p-5 lg:p-0">
            <h1 className="font-Poppins font-bold rounded-lg text-center text-blue-500  text-2xl md:text-3xl md:py-5 my-5 lg:text-5xl">
              {title}
            </h1>
            <div className="flex flex-wrap justify-center  bg-yellow-500 rounded-md p-5 md:p-2">
              <h3 className="font-medium ">
                Author by: <span className="font-bold ">{author}</span>
              </h3>
              <h3 className="mx-5 font-medium ">
                Published date :{" "}
                <span className="font-bold">{publishedDate}</span>
              </h3>
              <h3 className="font-medium ">
                Total page : <span className="font-bold">{pagecount}</span>
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap items-start bg-slate-200 py-4 rounded-lg shadow-lg">
              <h1 className="font-bold text-xl ml-5">Book Summary</h1>
              <p className="p-5 h-auto font-Poppins font-medium text-start overflow-hidden">
                {plainTextDescription.length > 950 ? (
                  <>
                    {`${plainTextDescription.substring(0, 940)}...`}
                    <a href={infoLink} target="_blank" className="underline">
                      More Info.
                    </a>
                  </>
                ) : (
                  plainTextDescription
                )}
              </p>
            </div>
            <div className="my-5">
              {" "}
              <BackButton />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null; // Render nothing if details are not available yet
  }
};

export default BookDetails;
