import { useDispatch } from "react-redux";
// import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3 ml-4">
      <button
        className="m-2 p-2 bg-white rounded-lg text-lg font-bold hover:bg-black hover:text-white"
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        className="m-2 p-2 bg-white rounded-lg text-lg font-bold hover:bg-black hover:text-white"
        type="round"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
