// src/components/SkillsComponents.js
import React from 'react';
import './skill.css'; // Ensure this path is correct
import skillsData from '../../assets/skillData'; // Adjust path if necessary

const SkillsComponent = () => {
  return (
    <div className="skills">
      <div className="skills-title" data-aos="fade-up">
        <h1>SKILLS</h1>
      </div>
      <div className="skills-container">
      {skillsData.map((skill, index) => (
        <div className="skill" key={index}  data-aos="flip-up">
          <img src={skill.image} alt={skill.title} className="skill-image" />
          <h3 className="skill-title">{skill.title}</h3>
        </div>
      ))}
 
      </div>
     
    </div>
  );
};

export default SkillsComponent;
