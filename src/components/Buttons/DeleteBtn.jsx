import React from "react";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { DeleteItem } from "../cart/cartSlice";

const DeleteBtn = ({ Bookid }) => {
  const dispatch = useDispatch();
  return (
    <ImBin
      className=" w-[35px] h-[30px] text-red-500  text-lg font-medium hover:text-red-400"
      type="small"
      onClick={() => dispatch(DeleteItem(Bookid))}
    >
      Delete
    </ImBin>
  );
};

export default DeleteBtn;
