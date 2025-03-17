import React from "react";
import "../styles/ServicesPage.css";

const ServicesPage = ({ services }) => {
  return (
    <section className="services-page">
      <div className="services-container">
        <h1>Our Services</h1>
        <p>Explore the wide range of services we offer to meet your needs:</p>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              {service.price && <p className="service-price">Starting at: ${service.price}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
