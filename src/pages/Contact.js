import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below or reach us through the provided contact details.</p>

        <div className="contact-info">
          <div>
            <h2>Contact Details</h2>
            <p><strong>Phone:</strong> (000) 000-0000</p>
            <p><strong>Email:</strong> contact@yourbusiness.com</p>
            <p><strong>Address:</strong> 123 Business Street, City, State, ZIP</p>
          </div>
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=573%20sw%20biltmore%20st,%20port%20st%20lucie%20fl%2034983+(Tropical%20Vibe%20Detailing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Business Location"
          ></iframe>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
