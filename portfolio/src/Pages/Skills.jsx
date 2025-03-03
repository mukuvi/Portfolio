import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Skills() {
  return (
    <div className="container ">
      <Header />
      <div className="skills-sect">
        <div className="skills-title">
          <h1>Top skills</h1>
        </div>
        <div className="skills-right-sect">
          <h1>Frontend</h1>
        </div>
        <div className="skills-left-sect">
          <h1>Backend</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
