import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-evenly h-full w-1/3">
      <div className="p-6">
        <h3 className="mb-7 text-5xl font-bold leading-[1.2]">
          Prospective <br />{" "}
          <span className="text-purple-800">customer </span>
          <br /> segmentation
        </h3>
        <p className="text-lg font-medium text-gray-400">
          We have identified 4 key customer segments that are most likely to
          benefit from our digital banking platform. These segments are based on
          a combination of demographic, behavioral, and psychographic factors,
          and they represent a significant portion of the market for digital
          banking services.
        </p>
      </div>
      <div>
        <ArrowUpRight className="h-20 w-20" />
      </div>
    </div>
  );
};

export default LeftContent;
