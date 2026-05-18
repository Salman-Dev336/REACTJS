import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    
        <div className='nav'>
        <h2>Salman Khan</h2>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a> */}
        </div>
      </div>
  
  )
}

export default Navbar