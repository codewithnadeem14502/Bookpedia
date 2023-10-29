import React, { useEffect, useState } from "react";
import BestSelling from "../book/BestSelling";
import Loading from "./Loading";

const BestSellingpage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a couple of seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div>{isLoading ? <Loading /> : <BestSelling />}</div>;
};

export default BestSellingpage;
