import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    // const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // // console.log('data agaya hai');
    // const data = await response.json()
    // console.log(response);
    // console.log(data);

    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(response.data);

    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
    // console.log(data);
    // console.log('data agaya hai');

    // {data} this is destructuring

    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    
    setdata(response.data);
  };
  return (
    <div>
      <button onClick={getData}>get data</button>
      <div>
        {data.map(function(e, index){
          return <h3>{index}{e.author}</h3>
        })}</div>
    </div>
  );
};

export default App;
