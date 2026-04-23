import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user = 'Salman Khan' age = {22}/>
      <Card user = 'Sharukh Khan' age = {25}/>

    </div>
  );
};

export default App;
