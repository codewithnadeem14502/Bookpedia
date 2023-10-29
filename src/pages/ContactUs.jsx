import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
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
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="input"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="input"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="input"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="btn" type="button">
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
