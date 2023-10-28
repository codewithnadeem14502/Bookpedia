import React from "react";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../components/cartSlice";
import { Form } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import EmptyCart from "../pages/EmptyCart";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
const CreateOrder = () => {
  const username = useSelector((state) => state.user.name);
  const isSubmitting = navigation.state === "submitting";
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!cart.length) return <EmptyCart />;
  return (
    <Form className="m-10 p-10 bg-slate-300" method="POST">
      <div className=" mb-8  flex flex-col gap-2 sm:flex-row sm:items-center ">
        <label className="sm:basis-40">First Name</label>
        <input
          className="input grow"
          value={username}
          type="text"
          name="customer"
          required
        />
      </div>

      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Phone number</label>
        <div className="grow">
          <input className="input w-full" type="tel" name="phone" required />
        </div>
      </div>

      <div className=" mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Address</label>
        <div className="grow">
          <input className="input w-full" type="text" name="address" required />
        </div>
      </div>

      <div>
        <button
          className="m-5 p-5 bg-yellow-400 text-black font-semibold rounded-md"
          disabled={isSubmitting}
          type="primary"
          // onClick={() => dispatch(clearCart())}
        >
          {isSubmitting
            ? "Placing order...."
            : `Order now from ${formatCurrency(totalCartPrice)}`}
        </button>
      </div>
    </Form>
  );
};

export default CreateOrder;
