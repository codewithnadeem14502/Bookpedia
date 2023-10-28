import React from "react";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteBtn from "./DeleteBtn";
import { formatCurrency } from "../utils/helpers";
const CartItem = ({ item }) => {
  const { Bookid, title, amount, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(Bookid));

  return (
    <>
      <li className="py-3 sm:flex sm:items-center sm:justify-between">
        <p className="mb-1 sm:mb-0 font-bold text-lg">
          {quantity}&times; {title}
        </p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">{formatCurrency(amount)}</p>
          <UpdateItemQuantity id={Bookid} currentQuantity={quantity} />
          <DeleteBtn Bookid={Bookid} /> *
        </div>
      </li>
    </>
  );
};

export default CartItem;
