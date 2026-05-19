import React from 'react'
import { useNavigate } from 'react-router-dom';

const Men = () => {
      let navigate = useNavigate();
  const btnClicked = ()=>{
    navigate('/');
  }
  return (
   <div>
    <h1>Men's Collection</h1>
    <button onClick={btnClicked} className='bg-emerald-700 px-5 py-2 m-5 rounded-2xl cursor-pointer active:scale-95 '>Return to Home</button>
   </div>
  )
}

export default Men