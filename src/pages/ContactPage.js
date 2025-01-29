import ContactForm from "../components/ContactForm";
import "../styles/ContactPage.css"; // ✅ Import the styles

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us below.</p>

      {/* ✅ Contact Form */}
      <ContactForm />

      {/* ✅ Business Info Section */}
      <div className="business-info">
        <h2>Our Location</h2>
        <p><strong>Business Name:</strong> Tropical Vibe Detailing / MaxArtistry Designs</p>

        {/* ✅ Clickable Address (Opens Google Maps for Directions) */}
        <p>
          <strong>Address:</strong>{" "}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=573+SW+Biltmore+ST,+Port+St+Lucie,+FL+34983"
            target="_blank" 
            rel="noopener noreferrer"
            className="clickable-link"
          >
            573 SW Biltmore ST, Port St. Lucie, FL 34983
          </a>
        </p>

        {/* ✅ Clickable Phone Number */}
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+17722007271" className="clickable-link">
            (772) 200-7271
          </a>
        </p>

        {/* ✅ Clickable Email */}
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@maxartistrydesigns.com" className="clickable-link">
            info@maxartistrydesigns.com
          </a>
        </p>

        {/* ✅ Google Maps Embed */}
        <div className="map-container">
          <iframe
            title="Google Maps Location"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=573%20SW%20Biltmore%20ST,%20Port%20St%20Lucie,%20FL%20%2034983+(MaxArtistryDesigns)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
