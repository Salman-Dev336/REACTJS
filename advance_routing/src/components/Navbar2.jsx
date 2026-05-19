import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar2 = () => {
     let navigate = useNavigate();
  return (
    <div className='px-2 py-0 bg-emerald-800'>
         <button onClick={()=>{
        navigate('/');
      }} className='bg-amber-600  px-5 py-2 m-5 rounded-2xl
       cursor-pointer active:scale-95 '>Return to Home</button>
         <button onClick={()=>{
        navigate(-1);
      }} className='bg-amber-600 px-5 py-2 m-5 rounded-2xl
       cursor-pointer active:scale-95 '>Back</button>
       <button onClick={()=>{
        navigate(+1);
      }} className='bg-amber-600 px-5 py-2 m-5 rounded-2xl
       cursor-pointer active:scale-95 '>Next</button>
    </div>
  )
}

export default Navbar2