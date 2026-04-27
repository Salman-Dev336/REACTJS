import React from 'react'

const App = () => {

  function btnClicked(){
      console.log("button is clicked");
    }
  return (
    
    <div>
      <h1>hello salman</h1>
      <button onClick={btnClicked}>click here  </button>
    </div>
  )
}

export default App