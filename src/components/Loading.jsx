import React from "react";
import "./BookLoading.css"; // Import the CSS file for the animation

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-32 h-32 book-animation">
        <div className="book-cover">
          <div className="book-inner"></div>
        </div>
      </div>
      <p className="mt-10 text-2xl font-bold text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
