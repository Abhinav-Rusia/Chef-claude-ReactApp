import React from "react";
import HeadIcon from "./assets/cheflogo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={HeadIcon} alt="Logo" />
      <h1>Chef Claude</h1>
    </header>
  );
};

export default Header;
