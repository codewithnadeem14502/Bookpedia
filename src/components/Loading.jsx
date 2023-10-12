import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center w-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-red-900"></div>
    </div>
  );
};

export default Loading;
