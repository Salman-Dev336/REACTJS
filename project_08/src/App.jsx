import React from "react";

const App = () => {
  function btnClicked() {
    console.log("button is clicked");
  }

  // function mouseEnter() {
  //   console.log("mouse enter");
  // }

  function mouseLeave() {
    console.log("mouseLeave");
  }

  function inputChanging() {
    console.log("user is typing ");
  }

  return (
    <div>
      <input onChange={function(element){
        console.log(element);
        
      }} type="text" placeholder="enter name " />

      {/* <h1>hello salman</h1>
      <button onClick={()=>{
        console.log("btn Clicked ");
        
      }}>click here </button> */}
    </div>
  );
};

export default App;
