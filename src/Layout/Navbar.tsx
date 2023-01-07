import React, { useState } from "react";
//treba mi svg za meni, pitanja, 
const Navbar = () => {
const [isClicked,setIsClicked]=useState(false)

const handleClick=()=>{
  setIsClicked(!isClicked)
}
  return (
    <header>
      <nav onClick={handleClick}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
