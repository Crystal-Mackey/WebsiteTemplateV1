import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Business</div>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
