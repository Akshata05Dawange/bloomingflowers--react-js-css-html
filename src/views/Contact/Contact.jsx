import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Sending your message...");
    setTimeout(() => {
      setStatus("Thanks! Your message has been submitted.");
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <div className="contact-page">
      <main className="contact-content">
        <h1>Contact Us</h1>
        <p>We&apos;d love to hear from you. Send your feedback or questions below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
          />

          <button type="submit">Submit</button>
        </form>

        <div className="status-message">{status}</div>
      </main>
    </div>
  );
}

export default Contact;