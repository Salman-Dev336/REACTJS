import React from "react";
import Card from "./components/Card";

const App = () => {
  const user = 'Salman Khan'
  return (
    <div>
      <div className="card">
        <h1>hello guys i am {user}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <Card />
    </div>
  );
};

export default App;