import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 max-w-1/3 rounded-4xl overflow-hidden shadow-lg relative">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
     <RightCardContent id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  );
};

export default RightCard;
