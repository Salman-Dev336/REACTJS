import React from "react";

const App = () => {
  return (
    <div>
      <div onMouseMove={(element) => {
        console.log(element.clientX);
        console.log(element.clientY);


        

      }} className="box">
        salman khan
      </div>
    </div>
  );
};

export default App;
