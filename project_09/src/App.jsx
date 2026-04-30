import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function increament() {
    setnum(num + 1);
  }
  function decreament() {
    setnum(num - 1);
  }

  function jumpByFive() {
    setnum(num + 5);
  }

    function minusFive() {
    setnum(num - 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increament}>increase</button>
      <button onClick={decreament}>decrease</button>
      <button onClick={jumpByFive}>jump by 5</button>
      <button onClick={minusFive}>decrement by 5</button>


    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState(20);
//   const [username, setusername] = useState("Salman");
//   const [users, setUsers] = useState([10,20,30]);

//   function changeNum() {
//     setnum(100);
//     setusername("Sharukh Khan");
//     setUsers([40,50,60]);
//     console.log(num);
//     console.log(username);
//     console.log(users);

//   }

//   // let a = 20;

//   // function changeA(){
//   //     console.log(a);
//   //     a = 30;
//   //     console.log(a);
//   //  }
//   return (
//     <div>
//       <h1>value of num is {num}</h1>
//       <br />
//       <h1>my name is {username}</h1>
//       <br />
//       <h1>my roll no is {users}</h1>
//       <button onClick={changeNum}>click me</button>
//     </div>
//   );
// };

// export default App;
