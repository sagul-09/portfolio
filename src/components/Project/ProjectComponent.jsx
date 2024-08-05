import React from 'react';
import './project.css';
import projectData from '../../assets/projectData';

const ProjectComponent = () => {
  return (
    <div className="project">
      <div className="project-title" data-aos="fade-up">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-down">
            <h2 className="project-title">{project.title}</h2>
            <hr style={{width:300}}/>
            <img
              src={project.image}
              alt={project.title}
              width={150}
              height={150}
              className="project-image"
              style={{ borderRadius: '1rem' }} 
            />
            
            <h3 className="project-tech"><span style={{fontWeight:'2rem'}}>Stack:</span> {project.tech}</h3>
            <br/>
            <h3 className="project-description">{project.description}</h3>
            <a href={project.link} target='_blank' className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectComponent;