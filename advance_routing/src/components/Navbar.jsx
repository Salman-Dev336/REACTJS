import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-10 bg-cyan-700 items-center">
      <h2 className="text-2xl font-bold">SalmaN</h2>
      <div className="flex gap-10">
        <Link className="text-medium font-bold" to="/">
          Home
        </Link>
        <Link className="text-medium font-bold" to="/about">
          About
        </Link>
        <Link className="text-medium font-bold" to="/products">
          Products
        </Link>
        <Link className="text-medium font-bold" to="/courses">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
