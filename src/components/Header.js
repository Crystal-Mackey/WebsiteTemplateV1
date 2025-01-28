import React from "react";
import "../styles/Header.css";

const Header = ({ businessName }) => {
  return (
    <header>
      <h1>{businessName}</h1>
    </header>
  );
};

export default Header;
