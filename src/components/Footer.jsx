import React from "react";
import DesignLogo from "../assets/icons/MaxArtistryDesigns2.jpg"; // ✅ Import the image
import "../styles/Footer.css";

const Footer = ({ contactInfo }) => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={DesignLogo} alt="Max Artistry Designs Logo" className="footer-logo" />
    </footer>
  );
};

export default Footer;
