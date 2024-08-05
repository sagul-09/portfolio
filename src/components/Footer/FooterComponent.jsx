import React from 'react';
import './footer.css';
import {  FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media">
        <div className="social-title">
            <h1>Follow Me</h1>
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/sagul09/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/im_sag_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/sagul-09" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
        </div>
        <div className="footer-quote">
          <h1>"Crafting seamless digital experiences with full-stack expertise."</h1>
        </div>

        <div className="footer-copyright">
           <p>©sagul-portfolio</p>
        </div>
       
      </div>
    </footer>
  );
}

export default FooterComponent;
