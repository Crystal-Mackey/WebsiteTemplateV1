import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Your Business Name</strong>. We are passionate about providing
          top-notch services to our customers. Our mission is to deliver exceptional
          quality and value, tailored to meet your specific needs.
        </p>
        <h2>Our History</h2>
        <p>
          Established in [Year], <strong>Your Business Name</strong> started as a small, family-run
          business. Over the years, we’ve grown and evolved, but our commitment to
          personalized service remains at the core of everything we do.
        </p>
        <h2>Our Mission</h2>
        <p>
          To serve our community by offering reliable, high-quality services
          that make a positive difference in our customers' lives.
        </p>
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/assets/images/team1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/assets/images/team2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <img src="/assets/images/team3.jpg" alt="Team Member 3" />
            <h3>Emily Taylor</h3>
            <p>Customer Support Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
