import React from "react";

const SkillCard = ({ skill }) => {
  const { name, icon, proficiency, color } = skill;

  return (
    <div className="skill-card" style={{ borderColor: color }}>
      <div className="skill-card-header" style={{ backgroundColor: color }}>
        <i className={`skill-card-icon ${icon}`}></i>
        <h3 className="skill-card-title">{name}</h3>
      </div>
      <div className="skill-proficiency">
        <div
          className="proficiency-bar"
          style={{
            width: `${proficiency}%`,
            backgroundColor: color,
          }}
        ></div>
        <span className="proficiency-text">{proficiency}%</span>
      </div>
    </div>
  );
};

export default SkillCard;
