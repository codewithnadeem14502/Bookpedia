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
              <div className="p-5 mb-2 mr-1 ml-2 group relative transform transition-transform duration-300 hover:scale-105 ">
                <div className="bg-white w-[250px] h-[350px] rounded-xl shadow-lg border  overflow-hidden border-black ">
                  <div className=" bg-blue-500">
                    <img
                      className="w-full h-56 object-contain rounded-md p-4"
                      style={{ transition: "transform 0.3s ease-in-out" }}
                      src={bookimage}
                      alt="bookimage"
                    />
                  </div>
                  <hr className="border-1 border-black " />
                  <div className="w-full flex  flex-col justify-center items-center text-center">
                    <div className="pt-2 px-5">
                      <h1 className="font-semibold text-lg text-black line-clamp-2">
                        {title.length > 15
                          ? `${title.substring(0, 15)}...`
                          : title}
                      </h1>
                    </div>
                    <div className="w-full flex bg-red-500 justify-center items-center mt-5 ">
                      <FaRupeeSign className="text-green-500" />
                      <h2 className="font-bold text-lg text-white ml-2">
                        {Math.floor(amount)}
                      </h2>
                    </div>
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
