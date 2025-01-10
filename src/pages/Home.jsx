import React from "react";
import { useSelector } from "react-redux";
import CreateUser from "../components/user/CreateUser";
import { Link } from "react-router-dom";
import bookbg from "../assets/bookbg.jpg";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-white px-6 py-12">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bookbg})` }}
      ></div>

      {/* Content on top of background */}
      <div className="relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white ">
          Best Place to Find Books
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-white opacity-80">
          Welcome to the world of literature and knowledge.
        </p>

        {username === "" ? (
          <CreateUser />
        ) : (
          <Link to="/book" className="w-full sm:w-auto">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              Continue Shopping, Dear {username}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
