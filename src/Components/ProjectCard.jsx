import React from "react";

import { FaFolderOpen } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, tagline, description, color, github } = project;

  return (
    <div className="project-card">
      <h2 className="project-title" style={{ color: color }}>
        • {title}
      </h2>
      <p className="project-tagline">{tagline}</p>
      <p className="project-description">{description}</p>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <button className="github-button">
            <FaFolderOpen className="github-icon" /> View
          </button>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
