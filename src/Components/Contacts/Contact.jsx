import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1dc9645c-b1e0-45e7-bbad-ae8a3f5ad2c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
    
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Let’s connect! You can reach out to me via email, phone or simply
            drop a message using the form.
          </p>
          <ul>
            <li><FaEnvelope className="icon" /> hamza123muhammad4u@gmail.com</li>
            <li><FaPhone className="icon" /> +92 328 9749012</li>
            <li><FaMapMarkerAlt className="icon" /> Lahore, Pakistan</li>
          </ul>
        </div>

        
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
