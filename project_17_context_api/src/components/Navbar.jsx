import React from "react";
import Navbar2 from "./Navbar2";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
//destructuring props
const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);
  // console.log(data);

  return (
    <div className={`nav ${theme}`}>
      <h2>SalmaN</h2>
      <Navbar2 />
    </div>
  );
};

export default Navbar;
