const BookCard = ({ books }) => {
  console.log(books);
  return (
    <>
      {books.map((item) => {
        let bookimage =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let title = item.volumeInfo.title;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        // console.log(amount);
        if (bookimage != undefined && amount != undefined) {
          return (
            <div className="p-3 mb-5">
              <div className="bg-red-400 w-[250px] h-[400px] rounded-xl ">
                <img
                  className="w-[250px] h-[250px] rounded-xl"
                  src={bookimage}
                  alt="bookimage"
                />
                <div className="pt-2 px-5">
                  <h1 className="font-medium text-lg ">{title}</h1>
                  <h2 className="font-bold text-sm mt-2">&#8377;{amount}</h2>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default BookCard;
