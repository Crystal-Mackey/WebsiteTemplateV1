import React from "react";
import "../styles/Hero.css";

const Hero = ({ title, subtitle, image }) => {
  return (
    <section className="hero">
      <img src={image} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
