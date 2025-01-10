import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = ({ heading, para, cat }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md hover:shadow-xl w-70 md:w-ful text-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-16 h-16 mx-auto text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          {/* Your cart is empty */}
          {heading}
        </h2>
        <p className="text-gray-500 mt-2">
          {/* Add some items to your cart to get started. */}
          {para}
        </p>
        <Link to="/book">
          <button className="m-3 p-3 bg-yellow-400 rounded-lg font-bold">
            {/* Order Now */}
            {cat}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
