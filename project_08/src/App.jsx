import React from 'react'

const App = () => {

  function btnClicked(){
      console.log("button is clicked");
    }

    function mouseEnter(){
      console.log("mouse enter");
    }

    function mouseLeave (){
            console.log("mouseLeave");
    }

  return (
    
    <div>
      <h1>hello salman</h1>
      <button  onMouseEnter={mouseEnter} onDoubleClick={btnClicked}
      onMouseLeave={mouseLeave}>click here  </button>
    </div>
  )
}

export default App