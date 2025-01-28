import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import config from "../config";

const Home = () => {
  return (
    <div>
      <Hero title={config.heroTitle} subtitle={config.heroSubtitle} image={config.heroImage} />
      <Services services={config.services} />
    </div>
  );
};

export default Home;
