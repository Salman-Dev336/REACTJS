import React from "react";

const App = () => {

  const pageScrolling= (value)=>{
    console.log(value);
    
  }
  return (
    <div onWheel={(element)=>{
      // console.log(element.deltaY);
      
      pageScrolling(element.deltaY)
    }}>


      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>



      {/* <div onMouseMove={(element) => {
        console.log(element.clientX);
        console.log(element.clientY);
      }} className="box">
        salman khan
      </div> */}
    </div>
  );
};

export default App;
