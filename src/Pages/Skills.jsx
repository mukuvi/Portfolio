import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Skills() {
  return (
    <div className="container">
      <Header />
      <div className="skills-sect">
        <div className="skills-title">
          <h1>Top Skills</h1>
        </div>
        <div className="skills-mid-sect">
          <div className="skills-right-sect">
            <h1>Frontend</h1>
            <p>
              I build dynamic SPAs with React, semantic code for better SEO and
              modern tech like Next.js, TailwindCSS and ES6+ for efficient,
              scalable applications.
            </p>
          </div>
          <div className="skills-left-sect">
            <h1>Backend</h1>
            <p>
              I develop scalable and maintainable backend systems with MongoDB,
              Express.js and Node.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
