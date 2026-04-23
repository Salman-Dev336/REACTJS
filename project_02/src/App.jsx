import React from "react";
import Card from "./components/Card";

const App = () => {
  const user = 'Salman Khan'
  const age = 22
  return (
    <div>
      <div className="card">
        <h1>hello guys i am {user}</h1>
        <h2>i am {age} years old</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <Card />
    </div>
  );
};

export default App;