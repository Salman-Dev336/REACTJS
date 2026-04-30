 import React, { useState } from 'react'
 
 const App = () => {

    const [num, setnum] = useState(20);

    function changeNum(){
        setnum(100)        

    }

   

    // let a = 20;

    // function changeA(){
    //     console.log(a);
    //     a = 30;
    //     console.log(a);
//  }
   return (
     <div>
        <h1>value of num is {num}</h1>
        <button onClick={changeNum}>click me</button>
     </div>
   )
 }
 
 export default App