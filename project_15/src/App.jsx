import React, { useEffect, useState } from "react";
// const random = () => {
//   const a = Math.random();
//   console.log(a);
// };
const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(100);
  useEffect(function () {
    console.log("use effect");
  }, []);
  // random();
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button
        onMouseEnter={() => {
          setnum(num+1);
          
        }}
        onMouseLeave={()=>{
          setnum2(num2+1);
        }}
      >
        click here
      </button>
    </div>
  );
};
export default App;
