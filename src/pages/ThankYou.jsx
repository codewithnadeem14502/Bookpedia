import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { clearCart } from "../components/cart/cartSlice";

const ThankYou = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div
        className={` bg-yellow-300 p-8 rounded-lg shadow-md 
        `}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Thank You for Your Order!
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          We appreciate your business and look forward to serving you again.
        </p>
        <p className="text-gray-600">
          Your order details have been sent to your email address.
        </p>
        <Link to="/book">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
            Browse Books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
