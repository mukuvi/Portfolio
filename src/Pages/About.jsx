import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="about-content">
        <div className="about-profile">
          <p className="about-title">Software Developer</p>
          <p className="about-description">
            I am James Mukuvi Ngandu, a passionate software developer who
            specializes in creating modern, responsive web applications. With a
            strong foundation in both frontend and backend technologies, I focus
            on building scalable, high-performance solutions. I strive to
            provide excellent user experiences while maintaining clean,
            efficient code. My expertise includes React, Next.js, TailwindCSS,
            MongoDB, Express.js and Node.js. I am committed to delivering
            impactful, user-centered results. I am also deeply interested in
            open-source development, regularly contributing to open-source
            projects such as Hacktoberfest, where I collaborate with others to
            help improve and grow the open-source ecosystem.
          </p>
        </div>

        <div className="about-main-sect">
          <h2 className="about-main-title">My Development Journey</h2>

          <div className="about-journey">
            <h3 className="about-main-subtitle">Discovering Code</h3>
            <p className="about-main-description">
              My journey began with HTML and CSS, building simple websites and
              discovering the joy of creating something from nothing.
            </p>
          </div>

          <div className="about-journey">
            <h3 className="about-main-subtitle">Mastering JavaScript</h3>
            <p className="about-main-description">
              I focused on learning JavaScript deeply, understanding its quirks
              and powerful features to build interactive applications.
            </p>
          </div>

          <div className="about-journey">
            <h3 className="about-main-subtitle">Full Stack Development</h3>
            <p className="about-main-description">
              Today, I combine frontend and backend technologies to build
              complete, scalable solutions for complex problems.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
