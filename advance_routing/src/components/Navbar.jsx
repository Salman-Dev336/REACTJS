import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-10 bg-cyan-700 items-center">
      <h2 className="text-2xl font-bold">CementO</h2>
      <div className="flex gap-10">
        <a className="text-medium font-bold" href="/">
          Home
        </a>
        <a className="text-medium font-bold" href="/about">
          About
        </a>
        <a className="text-medium font-bold" href="/products">
          Products
        </a>
        
      </div>
    </div>
  );
};

export default Navbar;
