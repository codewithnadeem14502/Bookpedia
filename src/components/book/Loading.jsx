import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/loadingBook.json";
import "./BookLoading.css"; // Import the CSS file for the animation

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
};

export default Loading;
