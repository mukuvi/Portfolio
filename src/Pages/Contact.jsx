import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function BasicForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/PZpjy-XTC8k", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("I received your submission, thank you!");
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="container">
      <Header />
      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Contact Me</h2>
          <form onSubmit={(e) => onSubmit(e)} className="contact-form">
            <div className="contact-block">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="James Ngandu"
                className="contact-input"
              />
            </div>

            <div className="contact-block">
              <label htmlFor="email">Your Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="james@gmail.com"
                className="contact-input"
              />
            </div>

            <div className="contact-block">
              <label htmlFor="message">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Enter your message..."
                className="contact-textarea"
              ></textarea>
            </div>

            <div className="contact-block">
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </div>

            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
