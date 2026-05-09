import React, { useEffect } from "react";


// const random = () => {
//   const a = Math.random();
//   console.log(a);
// };

const App = () => {

  useEffect(function(){
  console.log("use effect");
  
})
  // random();

  return (
    <div>
      <button>click here</button>
    </div>
  );
};

export default App;
