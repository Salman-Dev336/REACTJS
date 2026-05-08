import React from 'react'

const App = () => {

  const getData = async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // console.log('data agaya hai');
    const data = await response.json()
    console.log(response);
    console.log(data);
    
    
    
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App