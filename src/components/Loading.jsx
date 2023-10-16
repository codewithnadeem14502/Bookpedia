import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-24 h-24 border-t-8 border-blue-500 border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
