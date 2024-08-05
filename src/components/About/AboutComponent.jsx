import React from 'react';
import './about.css';
import { assets } from '../../assets/assets';
import { FaUser } from "react-icons/fa6";

const AboutComponent = () => {
  return (
    <div className='about'>
      <div className="about-title" data-aos="fade-up">
        <h1> <FaUser />ABOUT ME</h1>
      </div>
      <div className="about-container">
        <div className="image" data-aos="zoom-out-left">
          <img src={assets.pfbw} alt="" width={400} height={400} style={{ borderRadius: '1rem' }} />
        </div>
        <div className="info" data-aos="zoom-out-right">
          <h1>I'm Sagul</h1>
          <h4>Full Stack Developer</h4>
          <br />
          <p>As a student, I am driven by challenges and eager to learn. I possess a strong work ethic, adapt easily to new
            situations,<br /> and excel in communication. I am capable of working independently and am quick to grasp new
            concepts and skills.</p>
          <br />
          <h3>
            Email:<a href="mailto:sagul092001@gmail.com" className="email-link"> sagul092001@gmail.com</a> 
          </h3>
          <br />
         
          <br />
          <h3>Place: Chennai, India</h3>
          <br/>
          <div className="download-button">
          <button className="download-resume-button"> 
          
          <a href="/Sagul_CV.pdf" download="Sagul_Resume.pdf">Download Resume</a>
        </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;