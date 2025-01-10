import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const heading = "Add to order Now";
  const para = "Add some items to your order  to get started.";
  const cat = " Order Now ";

  if (!cart.length)
    return <EmptyCart heading={heading} para={para} cat={cat} />;
  return (
    <div className="px-4 py-3">
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.Bookid} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Link to="/order/new" type="primary">
          <button className="m-3 p-3 md:m-5 md:p-5 bg-yellow-400 rounded-lg text-sm md:text-lg font-bold hover:bg-yellow-500">
            Order Books
          </button>
        </Link>

        <button
          className="m-3 p-3 md:m-5 md:p-5 bg-red-400 rounded-lg text-sm md:text-lg  font-medium"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
