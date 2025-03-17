import React from "react";
import "../styles/Hero.css";
import DesignLogo from "../assets/icons/MaxArtistryDesigns2.jpg"

const Hero = ({ title, subtitle, image }) => {
  return (
    <section className="hero">
      <img src={DesignLogo} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
