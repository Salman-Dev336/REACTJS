import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-evenly h-full w-1/3">
      <div className="p-5">
        <h3 className="mb-8 text-4xl font-bold leading-snug">
          Prospective <br /> <span className="bg-gray-200 rounded-2xl">Customer </span>
          <br /> Segmentation
        </h3>
        <p className="text-lg font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto.
          Quaerat corporis tenetur accusantium illo. Est minima cupiditate
          nostrum alias.
        </p>
      </div>
      <div >
        <ArrowUpRight className="h-20 w-20" />
      </div>
    </div>
  );
};

export default LeftContent;
