import React from "react";
import { ArrowRight } from "lucide-react";

const RightCard = () => {
  return (
    <div className="h-full max-w-1/3 rounded-4xl overflow-hidden shadow-lg relative">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1648862513729-cb2556ba3219?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="h-full w-full absolute top-0 bg-red-700 p-8 flex flex-col justify-between">
        <h2 className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl font-semibold">
          1
        </h2>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            laudantium, saepe deserunt sit temporibus expedita?
          </p>
          <div>
            <button>Satisfied</button>
            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
