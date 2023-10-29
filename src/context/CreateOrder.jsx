import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../components/cartSlice";
import { Form } from "react-router-dom";

import EmptyCart from "../pages/EmptyCart";
import PaymentRazorpay from "../utils/PaymentRazorpay";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
const CreateOrder = () => {
  const [phoneError, setPhoneError] = useState(false);
  const username = useSelector((state) => state.user.name);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setemail] = useState("");
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!cart.length) return <EmptyCart />;

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;

    setPhone(phoneNumber);
    if (!isValidPhone(phoneNumber)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    {
      console.log(isValidPhone(phoneNumber));
    }
  };
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="m-10 p-10 bg-slate-300">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <div className=" mb-8  flex flex-col gap-2 sm:flex-row sm:items-center ">
        <label className="sm:basis-40">First Name</label>
        <input
          className="input grow"
          defaultValue={username}
          type="text"
          name="customer"
          required
        />
      </div>

      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Phone number</label>
        <div className="grow">
          <input
            className="input w-full"
            value={phone}
            type="tel"
            name="phone"
            required
            onChange={handlePhoneChange}
          />
          {phoneError == true && (
            <p className="text-red-500">
              Invalid Phone Number & must have 10 digits
            </p>
          )}
        </div>
      </div>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">gmail</label>
        <div className="grow">
          <input
            className="input w-full"
            value={email}
            type="tel"
            name="email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
      </div>

      <div className=" mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Address</label>
        <div className="grow">
          <input
            className="input w-full"
            type="text"
            value={address}
            name="address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      {phoneError == false && (
        <PaymentRazorpay
          totalCartPrice={totalCartPrice}
          username={username}
          phone={phone}
          email={email}
          isSubmitting={isSubmitting}
        />
      )}
    </Form>
  );
};

export default CreateOrder;
