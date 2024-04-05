import React from "react";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteBtn from "../Buttons/DeleteBtn";
import { formatCurrency } from "../../utils/helpers";
const CartItem = ({ item }) => {
  const { Bookid, title, amount, quantity } = item;

  return (
    <>
      <li className="py-3 sm:flex sm:items-center sm:justify-between">
        <p className="mb-1 sm:mb-0 font-bold text-sm md:text-lg ">
          {quantity}&times; {title}
        </p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">
            {formatCurrency(Math.floor(amount))}
          </p>
          <UpdateItemQuantity id={Bookid} currentQuantity={quantity} />
          <DeleteBtn Bookid={Bookid} /> *
        </div>
      </li>
    </>
  );
};

export default CartItem;
