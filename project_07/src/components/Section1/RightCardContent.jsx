import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full absolute top-0 p-8 flex flex-col justify-between">
      <h2 className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-xl font-nomal text-gray-700">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl font-extralight text-white leading-snug ">
          {props.intro}
        </p>
        <div className="flex flex-row justify-between mt-5 flex-nowrap gap-2 ">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-sm">
            {props.tag}
          </button>
          <button className="bg-purple-600 text-white font-medium px-3 py-2 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
