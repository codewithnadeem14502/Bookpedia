import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCgpPa7Ctg2u1ldc7iInVH7Qq0TN7UmgmM" +
          "&maxResults=40"
      )
      .then((res) => {
        setDetails(res.data.items);
        setLoading(true);
      });
  }, []);
  //   console.log(details);
  // Filter by bookid
  const filteredDetails = details.filter((detail) => {
    let bookid = detail.id;
    return bookid === id;
  });

  return (
    <div>
      {filteredDetails.map((filteredDetail) => {
        let bookid = filteredDetail.id;
        // console.log(bookid);
        let title = filteredDetail.volumeInfo.title;
        let amount =
          filteredDetail.saleInfo.listPrice &&
          filteredDetail.saleInfo.listPrice.amount;
        let bookimage =
          filteredDetail.volumeInfo.imageLinks &&
          filteredDetail.volumeInfo.imageLinks.smallThumbnail;
        let pagecount = filteredDetail.volumeInfo.pageCount;
        let author = filteredDetail.volumeInfo.authors[0];
        let publisher = filteredDetail.volumeInfo.publisher;
        let infoLink = filteredDetail.volumeInfo.infoLink;
        let publishedDate = filteredDetail.volumeInfo.publishedDate;
        let description = filteredDetail.volumeInfo.description;
        // console.log(description);
        if (bookimage != undefined && amount != undefined) {
          return (
            <div key={bookid} className="">
              <div
                className="bg-slate-200  w-full h-[1050px] rounded-xl  flex justify-between 
              sm:flex-col md:flex-row-reverse  "
              >
                <div className=" flex  justify-center flex-col">
                  <img
                    className="w-[450px] h-[600px] rounded-xl m-10 "
                    src={bookimage}
                    alt="bookimage"
                  />
                  <h2 className="font-bold text-xl m-5 ">&#8377;{amount}</h2>
                  <span className="p-5 m-5 bg-green-500 font-Poppins font-semibold text-xl text-center rounded-2xl">
                    <a href={infoLink} target="_blank">
                      Buy Now
                    </a>
                  </span>
                </div>
                <div className="mt-[55px] ml-10 text-start w-[50%]   rounded-lg ">
                  <h1 className="font-Poppins font-bold text-5xl rounded-lg text-center bg-cyan-500 p-5 ">
                    {title}
                  </h1>
                  <div className="flex justify-center">
                    <h3 className="mt-2 mr-5 font-medium">
                      Author by: {author}
                    </h3>
                    <h3 className="mt-2 font-medium">
                      PublishedDate : {publishedDate}
                    </h3>
                  </div>
                  {/* <h3 className="mt-2 font-Poppins">
                    pagecount by: {pagecount}
                  </h3> */}
                  <p className="mt-4 font-Poppins font-medium text-start">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BookDetails;
