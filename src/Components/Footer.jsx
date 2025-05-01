import React from "react";
import { FaGithub, FaLinkedin, FaHandHoldingUsd } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-sect">
      <div className="foot-left">
        <div className="social-icons">
          <a href="https://github.com/mukuvi">
            <FaGithub size={30} className="social-icon" />
          </a>
          <a href="https://twitter.com/Mukuvi_">
            <FaXTwitter size={30} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/james-ngandu">
            <FaLinkedin size={30} className="social-icon" />
          </a>
          <Link to="/Support">
            <FaHandHoldingUsd size={30} className="social-icon" />
          </Link>
        </div>
      </div>
      <div className="foot-right">
        <p>
          &copy; {new Date().getFullYear()} James Ngandu. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
