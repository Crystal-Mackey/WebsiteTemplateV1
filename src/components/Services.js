import React from "react";
import "../styles/ServicesPage.css";

const Services = ({ services }) => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
