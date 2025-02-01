import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Business Name</div>
      
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navbar Links */}
      <ul className={menuOpen ? "navbar-links open" : "navbar-links"}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500} onClick={toggleMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
