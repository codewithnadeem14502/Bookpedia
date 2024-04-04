import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any necessary actions with the form data
    alert("Send successful");
    // Clear input fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center my-8 md:m-0">
      <div className="max-w-lg w-full mx-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-5 text-center">Contact Us</h1>
          <button
            className="block text-center w-full py-2 mb-4 text-orange-500 font-semibold"
            onClick={toggleForm}
          >
            {isOpen ? "Close Form" : "Open Form"}
          </button>
          <Transition
            show={isOpen}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-lg text-gray-700 font-bold mb-2 "
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-[80%] border border-gray-300 pl-4 py-4 rounded-lg"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2 text-lg "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-[80%]  border border-gray-300 pl-4 py-4 rounded-lg"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2 w-full text-lg"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-[80%]  border pl-4 p-5 border-gray-300 rounded-lg"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                  style={{ width: "100%" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 p-4 m-4 rounded-lg text-white font-semibold"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
