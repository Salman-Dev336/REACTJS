import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(20);
  const [username, setusername] = useState("Salman");

  function changeNum() {
    setnum(100);
    setusername("Sharukh Khan");
    console.log(num);
    console.log(username);
    
    
  }

  // let a = 20;

  // function changeA(){
  //     console.log(a);
  //     a = 30;
  //     console.log(a);
  //  }
  return (
    <div>
      <h1>value of num is {num}</h1>
      <br />
      <h1>my name is {username}</h1>
      <button onClick={changeNum}>click me</button>
    </div>
  );
};

export default App;
