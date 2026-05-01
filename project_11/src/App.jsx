import React from "react";
import { useState } from "react";

const App = () => {
  const [email, setemail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by: ", email);
    setemail('')
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
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input type="text" placeholder="Enter your password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
