import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addItem, getCurrentQuantityById } from "../components/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "../components/UpdateItemQuantity";
import DeleteBtn from "../components/DeleteBtn";

const BookDetails = () => {
  const [bookvalue, setBookvalue] = useState(0);
  const [like, setLike] = useState(true);
  const { id } = useParams();
  const [details, setDetails] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const apiKey = "AIzaSyCgpPa7Ctg2u1ldc7iInVH7Qq0TN7UmgmM"; // Replace with your actual API key
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  {
    console.log(currentQuantity);
  }
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
    const publisher = details.volumeInfo.publisher;
    const infoLink = details.volumeInfo.infoLink;
    const publishedDate = details.volumeInfo.publishedDate;
    const description = details.volumeInfo.description;

    const handleLike = () => {
      if (like == true) {
        setLike(false);
      } else setLike(true);
    };
    const dispatch = useDispatch();
    function handleAddToCart() {
      const newItem = {
        Bookid: bookid,
        title,
        amount,
        quantity: 1,
        totalPrice: amount * 1,
      };
      console.log(newItem);
      dispatch(addItem(newItem));
    }

    return (
      <div key={bookid} className="">
        <div className="bg-slate-200  w-full h-[auto] rounded-xl  flex justify-between flex-col lg:flex-row-reverse">
          <div className="flex items-center justify-center flex-col">
            <img
              className="w-[250px] h-[350px] md:w-[450px] md:h-[600px] rounded-xl m-10 border-2 border-yellow-400 shadow-lg"
              src={bookimage}
              alt="bookimage"
            />
            <div className="flex ">
              <h2 className="font-bold text-xl ml-12 mb-5 md:m-5">
                &#8377;{amount}
              </h2>
              <button
                onClick={handleLike}
                className=" font-bold text-lg rounded-lg"
              >
                {like == true ? (
                  <AiOutlineHeart className="w-[30px] h-[30px] text-red-500" />
                ) : (
                  <AiFillHeart className="w-[30px] h-[30px] text-red-500" />
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
          <div className="mt-[55px]  text-start  w-full   rounded-lg lg:ml-10 lg:w-[50%] p-5 lg:p-0">
            <h1 className="font-Poppins font-bold rounded-lg text-center bg-cyan-500 text-2xl md:text-4xl md:py-5 lg:text-5xl">
              {title}
            </h1>
            <div className="flex justify-center flex-col md:flex-row">
              <h3 className="mt-5  mr-5 font-medium md:mt-2">
                Author by: {author}
              </h3>
              <h3 className="mt-2 md-5 font-medium  md:mt-2 md:mb-0">
                PublishedDate : {publishedDate}
              </h3>
            </div>

            <div className=" mt-5 ">
              <p className="p-4 h-auto font-Poppins font-medium text-start">
                {description}
              </p>
              <span className="p-5 m-5  text-yellow-500 font-Poppins font-semibold text-xl text-center rounded-2xl ">
                <a href={infoLink} target="_blank">
                  More Info..
                </a>
              </span>
            </div>
            <BackButton />
          </div>
        </div>
      </div>
    );
  } else {
    return null; // Render nothing if details are not available yet
  }
};

export default BookDetails;
