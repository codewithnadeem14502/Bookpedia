import React from "react";

const BestSelling = () => {
  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">
        Best Selling Products
      </h2>
      <ul className="list-disc list-inside text-white">
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        {/* Add more products as needed */}
      </ul>
    </div>
  );
};

export default BestSelling;
