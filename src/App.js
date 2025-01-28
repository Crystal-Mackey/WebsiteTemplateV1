import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./pages/AboutUs";
import Services from "./components/Services";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";
import config from "./config";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero
          title={config.heroTitle}
          subtitle={config.heroSubtitle}
          image={config.heroImage}
        />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services services={config.services} />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <BackToTop />
    </div>
  );
}

export default App;
