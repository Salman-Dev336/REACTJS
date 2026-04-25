import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = () => {
  return (
     <div className="h-full w-full absolute top-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-xl font-nomal text-gray-700">
          1
        </h2>
        <div>
          <p className="text-xl font-extralight text-white leading-snug ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            laudantium, saepe deserunt sit temporibus expedita?
          </p>
          <div className="flex flex-row justify-between mt-5 ">
            <button className="bg-blue-500 text-white font-medium px-10 py-2 rounded-full text-sm">Satisfied</button>
            <button className="bg-blue-500 text-white font-medium px-3 py-2 rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent