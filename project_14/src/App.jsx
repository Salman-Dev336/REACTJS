import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async ()=>{
    // const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // // console.log('data agaya hai');
    // const data = await response.json()
    // console.log(response);
    // console.log(data);
    
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(response.data);

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
    console.log(data);
    console.log('data agaya hai');
    

    // {data} this is destructuring
    
    

  
    
    
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App