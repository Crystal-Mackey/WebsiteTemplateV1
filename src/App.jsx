import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./components/Services.jsx";
import images from "./assets/images/images.jsx";
import Gallery from "./pages/Gallery.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
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
      <section id="gallery">
        <Gallery images={images}/>
      </section>
      <section id="contact">
        <ContactPage/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
      <BackToTop />
    </div>
  );
}

export default App;
