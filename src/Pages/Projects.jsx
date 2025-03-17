import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <div className="container">
      <Header />

      <div className="projects-container">
        <h1 className="projects-heading">My Projects</h1>
        <p className="projects-subheading">
          A showcase of my recent work and passion projects
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
