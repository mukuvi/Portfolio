import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SkillCard from "../Components/SkillCard";
import { frontendSkills, backendSkills } from "../data/skillsData";

function Skills() {
  return (
    <div className="container">
      <Header />

      <div className="skills-sect">
        <div className="skills-title">
          <h1>Top Skills</h1>
          <div className="title-underline"></div>
        </div>

        <div className="skills-categories">
          <div className="skill-category">
            <div className="skill-header">
              <h2>Frontend</h2>
              <div className="skill-icon-container">
                <i className="skill-icon frontend-icon"></i>
              </div>
            </div>
            <p className="skill-description">
              I build dynamic SPAs with React, semantic code for better SEO and
              modern tech like Next.js, TailwindCSS and ES6+ for efficient,
              scalable applications.
            </p>
            <div className="skills-grid">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-header">
              <h2>Backend</h2>
              <div className="skill-icon-container">
                <i className="skill-icon backend-icon"></i>
              </div>
            </div>
            <p className="skill-description">
              I develop scalable and maintainable backend systems with MongoDB,
              Express.js and Node.
            </p>
            <div className="skills-grid">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Skills;
