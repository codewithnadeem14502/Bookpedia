import { ImBooks } from "react-icons/im";
import React, { useState, useEffect } from "react";

const Intro = () => {
  const [text, setText] = useState("");
  const originalText = "Start Searching Books";
  const typingSpeed = 100; // Adjust the speed as needed

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < originalText.length) {
        setText(originalText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="w-[80%]  md:w-full h-[500px] flex justify-center items-center text-center bg-slate-300 ">
      <div className="flex justify-center items-center text-center border-solid border-4 border-black p-10 flex-col md:flex-row rounded-lg shadow-lg bg-slate-300">
        <h2 className="text-5xl text-white font-Poppins font-bold mr-5">
          {text}
        </h2>
        <ImBooks className="animate__animated animate__bounceIn w-[150px] h-[150px] text-blue-500" />
      </div>
    </div>
  );
};

export default Intro;
