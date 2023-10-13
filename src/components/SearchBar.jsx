import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  const [search, setSearch] = useState();

  return (
    <div className="bg-slate-50 mt-5 flex justify-center  h-[60px]">
      <div className="flex w-[30%] m-1 justify-center  ">
        <input
          className="bg-gray-300 font-semibold text-xl w-[550px] rounded-xl pl-5  focus:outline-none "
          type="text"
          placeholder="Search here..."
        />
        <div className="items-center  ">
          <FcSearch className="w-[30px] h-[40px] mr-2 mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
