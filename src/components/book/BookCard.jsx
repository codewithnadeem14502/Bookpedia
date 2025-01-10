import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";

const BookCard = ({ books }) => {
  return (
    <>
      {books.map((item) => {
        let bookimage =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let indx = item.id;
        let title = item.volumeInfo.title;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (bookimage != undefined && amount != undefined) {
          // console.log(indx);
          return (
            <Link to={indx.toString()} key={indx}>
              <div
                className="bg-white w-64 h-80 p-6 m-6 rounded-md  border border-gray-300 transition-transform transform hover:scale-105 flex flex-col justify-between"
                style={{ transition: "transform 0.3s ease-in-out" }}
              >
                <img
                  className="w-full h-40 object-contain rounded-md mb-4"
                  style={{ transition: "transform 0.3s ease-in-out" }}
                  src={bookimage}
                  alt="bookimage"
                />

                <div className="border-t border-gray-300 pt-4">
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                    {title.length > 20 ? `${title.substring(0, 20)}...` : title}
                  </h2>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <FaRupeeSign className="text-black" />
                      <h1 className="text-black font-bold text-lg ml-1">
                        {Math.floor(amount)}
                      </h1>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-full shadow hover:bg-blue-600 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </>
  );
};

export default BookCard;
