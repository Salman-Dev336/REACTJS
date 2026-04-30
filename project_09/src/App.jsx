 import React from 'react'
 
 const App = () => {
    let a = 20;

    function changeA(){
        console.log(a);
        a = 30;
        console.log(a);
        
    }
   return (
     <div>
        <h1>{a}</h1>
        <button onClick={changeA}>click me</button>
     </div>
   )
 }
 
 export default App