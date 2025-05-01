import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MyImage from "/mukuvi.jpeg";
import { Link } from "react-router-dom";
import SupportPage from "./SupportPage";
import { FaHandHoldingUsd } from "react-icons/fa";
export default function BasicForm() {
  return (
    <div className="container">
      <Header />
      <div className="contact-section">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's Talk</h2>
            <p>
              Feel free to reach out if you're looking for a developer, have a
              question or just want to connect.
            </p>

            <div className="contact-image">
              <img src={MyImage} alt="Mukuvi" />
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon-circle">
                  <Link to="/Support">
                    <FaHandHoldingUsd size={30} className="social-icon" />
                  </Link>
                </div>
                <div>
                  <h3>Support me</h3>
                  <Link to="/Support">click</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Me a Message</h2>
            <form
              action="https://formsubmit.co/82247b2786a024d98db380267c4f2c24"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="james..@gmail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for contacting me! I'll get back to you shortly."
              />

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
