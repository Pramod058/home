import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/Contact.css';
import { data } from '../data/portfolioData';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { email, linkedin, github, location } = data.personalInfo;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email: fromEmail, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${fromEmail}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section">
      <div className="section-container">
        <div className="contact-content-wrapper">
          <div className="contact-header">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">I'm currently open to new opportunities. Feel free to reach out for collaborations or just to say hello!</p>
            <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
            </div>

            <button type="submit" className="contact-submit-button">Send Message ➤</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;