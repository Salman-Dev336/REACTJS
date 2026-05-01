import React from "react";
import { useState } from "react";

const App = () => {
  
  const [email, setemail] = useState('salma123@gmail.com');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          // onChange={(e) => {
          //   console.log(e.target.value);
          // }}
        />
        <input type="text" placeholder="Enter your password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
