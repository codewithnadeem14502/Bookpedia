import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-2xl font-semibold">Bookpedia</p>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Books
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <p className="mt-2">Subscribe to our newsletter:</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l w-3/4"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
