import React from 'react'


const random = ()=>{
  const a = Math.random()
  console.log(a);
  
}

const App = () => {
 random()

  return (
    <div>
      <button>click here</button>
    </div>
  )
}

export default App