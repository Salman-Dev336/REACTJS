import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return <div className="h-full rounded-4xl w-2/3 overflow-x-auto flex flex-nowrap gap-2 p-5 ">
    
    {props.users.map(function(){
      return <RightCard />
    })}
  </div>;
};

export default RightContent;
