import React from 'react'

const Navbar = (props) => {
    

    const changeTheme = ()=>{
        props.settheme('dark');
    }


  return (
    <div>
        {/* <p>{props.settheme}</p> */}
        <button onClick={changeTheme}>
            change Theme
        </button>

    </div>
  )
}


export default Navbar