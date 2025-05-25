import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailto = `mailto:pramod058@gmail.com?subject=Message from ${name}&body=Email: ${email}%0A%0A${message}`;
    window.location.href = mailto;
  };

  return (
    <div className="contact-wrapper">
      <h1 className="page-title">Contact Me</h1>
      <p className="quote">“Let’s build something timeless together.”</p>

      <div className="contact-info">
        <p>Email: <a href="mailto:pramod058@gmail.com">pramod058@gmail.com</a></p>
        <p>Based in: Kathmandu, Nepal</p>
      </div>

      <div className="contact-social">
        <a
          href="https://linkedin.com/in/pramod058"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>
        <span className="divider">|</span>
        <a
          href="https://github.com/pramod058"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Your Name</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Your Email</label>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Your Message</label>
        </div>

        <button type="submit">Send ➤</button>
      </form>
    </div>
  );
};

export default Contact;
