import React from 'react'

const App = () => {

  function getData(){
    console.log('data agaya hai');
    
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App