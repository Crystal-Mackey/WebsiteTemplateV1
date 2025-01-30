import { useState, useEffect } from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ Stores success or error message
  const [loading, setLoading] = useState(false); // ✅ Prevents multiple submissions

  // ✅ Hide the success message after 10 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
  
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@maxartistrydesigns.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission",
          _captcha: "false",
          _template: "table",
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Failed to send: ${result.message || "Please try again later."}`);
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}
