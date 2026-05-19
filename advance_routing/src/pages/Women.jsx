import React from 'react'
import { useNavigate } from 'react-router-dom';

const Women = () => {
      let navigate = useNavigate();
  const btnClicked = ()=>{
    navigate('/');
  }
  return (
    <div>
        <button onClick={btnClicked} className='bg-emerald-700 px-5 py-2 m-5 rounded-2xl cursor-pointer active:scale-95 '>Return to Home</button>
        <h1>Women's Collection</h1>
    </div>
  )
}

export default Women