import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { Form } from "react-router-dom";
import EmptyCart from "../cart/EmptyCart";
import PaymentRazorpay from "../../utils/PaymentRazorpay";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const CreateOrder = () => {
  const [phoneError, setPhoneError] = useState(false);
  const username = useSelector((state) => state.user.username);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const isSubmitting = navigation.state === "submitting";

  if (!cart.length) return <EmptyCart />;

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;

    setPhone(phoneNumber);
    if (!isValidPhone(phoneNumber)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <Form className="m-10 p-10 bg-slate-50 rounded-lg shadow-lg">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <div className="mb-4 flex justify-between items-center">
        <div className="w-1/2 mr-4">
          <label className="font-semibold block mb-2">First Name</label>
          <input
            className="input pl-2 px-10 py-3"
            defaultValue={username}
            placeholder="Enter  username"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="w-1/2 ml-4">
          <label className="font-semibold block mb-2">Phone no</label>
          <input
            className="input pl-2 px-10 py-3"
            value={phone}
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
            onChange={handlePhoneChange}
          />
          {phoneError && (
            <p className="text-red-500">
              Invalid Phone Number & must have 10 digits
            </p>
          )}
        </div>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <div className="w-1/2 mr-4">
          <label className="font-semibold block mb-2">Address</label>
          <input
            className="input pl-2 px-10 py-3"
            type="text"
            value={address}
            name="address"
            placeholder="Enter address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="w-1/2 ml-4">
          <label className="font-semibold block mb-2">Email</label>
          <input
            className="input pl-2 px-10 py-3"
            value={email}
            type="email"
            name="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {!phoneError && (
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
