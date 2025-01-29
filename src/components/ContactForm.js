import { useState } from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ Status message for success or failure
  const [loading, setLoading] = useState(false); // ✅ Loading state to prevent multiple submissions

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent default form submission behavior
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formsubmit.co/info@maxartistrydesigns.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" }); // ✅ Reset form after successful submission
      } else {
        setStatus("❌ Message failed. Please try again!");
      }
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-input">
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        </div>

        <div className="contact-form-textarea">
          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
        </div>

        {/* Hidden inputs for better email handling */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Contact Form Submission" />

        <div className="contact-form-button">
          <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
        </div>

        {status && <p className="status-message">{status}</p>} {/* ✅ Display success or error message */}
      </form>
    </div>
  );
}
