import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return <div id='right' className="h-full rounded-4xl w-2/3 overflow-x-auto flex flex-nowrap gap-2 p-5 ">
    
    {props.users.map(function(element , index){
      return <RightCard key={index} id={index} img={element.img}
       intro={element.intro}
        tag={element.tag} />
    })}
  </div>;
};

export default RightContent;
