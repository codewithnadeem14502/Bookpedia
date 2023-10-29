import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

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
              <div className="p-5 mb-5 mr-1 ml-2 group relative transform transition-transform duration-300 hover:scale-105 ">
                <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 w-[250px] h-[440px] rounded-xl shadow-lg border border-gray-300 overflow-hidden">
                  <img
                    className="w-[250px] h-[250px] rounded-tl-xl rounded-tr-xl transform transition-transform hover:scale-105"
                    src={bookimage}
                    alt="bookimage"
                  />
                  <div className="pt-2 px-5">
                    <h1 className="font-medium text-lg text-white">{title}</h1>
                    <div className="flex bg-black rounded-xl mt-3 p-2 justify-start items-center text-center content-center ">
                      <FaRupeeSign className="text-green-500" />

                      <h2 className="font-bold text-sm mt-2 text-yellow-500 ml-2">
                        {amount}
                      </h2>
                    </div>
                  </div>
                  <div className="absolute inset-0  hover:opacity-1 group-hover:opacity-10 transition-opacity duration-300 rounded-xl">
                    {/* Add overlay or hover content here */}
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
