import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-center h-full w-1/3">
      <div className="p-5">
        <h3 className="mb-10 text-4xl font-bold leading-snug">
          Prospective <br /> <spna>Customer </spna>
          <br /> Segmentation
        </h3>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto.
          Quaerat corporis tenetur accusantium illo. Est minima cupiditate
          nostrum alias.
        </p>
      </div>
      <div className="text-8xl">
        <ArrowUpRight />
      </div>
    </div>
  );
};

export default LeftContent;
