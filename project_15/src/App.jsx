import React, { useEffect, useState } from "react";


// const random = () => {
//   const a = Math.random();
//   console.log(a);
// };

const App = () => {
  const [num, setnum] = useState(0)

  useEffect(function(){
  console.log("use effect");
  
})
  // random();

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(20)
      }}>click here</button>
    </div>
  );
};

export default App;
