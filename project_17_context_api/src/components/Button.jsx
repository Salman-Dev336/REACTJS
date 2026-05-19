import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {

  const [theme , settheme] = useContext(ThemeDataContext);
  // console.log();
  




  const changeTheme = () => {
    console.log("hello");
    settheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Button onClick={changeTheme}>Change Theme{theme}</Button>
    </div>
  );
};

export default Button;
