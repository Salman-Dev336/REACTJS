import React, { useEffect, useState } from "react";
// const random = () => {
//   const a = Math.random();
//   console.log(a);
// };
const App = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)


  const aChanging = ()=>{
        // seta(a+10);
    console.log('a ki value change hogai');

    
  }

   const bChanging = ()=>{
    // setb(b+20);
    console.log('b ki value change hogai');
    
    
  }

  useEffect(function(){
    aChanging()
    console.log('useeffect is running');
    
  },[a,])
  // const [num, setnum] = useState(0);
  // const [num2, setnum2] = useState(100);
  // useEffect(function () {
  //   console.log("use effect");
  // }, [num]);
  // random();
  return (
    <div>

      <h1>A :{a}</h1>
      <h1>B :{b}</h1>


      <button onClick={()=>{
        seta(a+10);
      }}>change A</button>
      <button onClick={()=>{
        setb(b+20);
      }}>change B</button>


      {/* <h1>{num}</h1>
      <h1>{num2}</h1>
      <button
        onMouseEnter={() => {
          setnum(num+1);
          
        }}
        onMouseLeave={()=>{
          setnum2(num2+1);
        }}
      >
        click here
      </button> */}
    </div>
  );
};
export default App;
