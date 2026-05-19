import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4 px-10">
        <Link className="text-medium font-bold" to="/products/men">
          Men's Collection
        </Link>
        <Link className="text-medium font-bold" to="/products/women">
          Women's Collection
        </Link>
        <Link className="text-medium font-bold" to="/products/kids">
          Kids Collection
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
