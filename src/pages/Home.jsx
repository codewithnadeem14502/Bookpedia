import React from "react";
import { useSelector } from "react-redux";
import CreateUser from "../components/user/CreateUser";
import { Link } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="relative flex items-center justify-center h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/438140207.hd.mp4?s=e44751c4bd8b465b90de3b6070e572ac6cb3f094&profile_id=174&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 w-[80%] md:w-full h-full"></div>
      <div className="relative z-10 w-[80%] md:w-full h-[50%] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-semibold text-yellow-500 mb-4 animate-pulse">
          Best Place to Find Books
        </h1>
        <p className="text-lg mb-6 text-slate-100 animate-fade-in">
          Welcome to the world of literature and knowledge.
        </p>

        {username === "" ? (
          <CreateUser />
        ) : (
          <Link to="/book">
            <button className="bg-yellow-500 hover-bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
              Continue Shopping, Dear {username}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
