import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './nav.css';

const NavComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="title">
        <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu}>
          <h1>SAGUL</h1>
        </ScrollLink>
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>ABOUT</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>SKILLS</ScrollLink>
        <ScrollLink to="education" smooth={true} duration={500} onClick={toggleMenu}>EDUCATION</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>PROJECTS</ScrollLink>
        <ScrollLink to="certifications" smooth={true} duration={500} onClick={toggleMenu}>CERTIFICATIONS</ScrollLink>
        {/* <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>CONTACT</ScrollLink> */}
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span> 
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default NavComponent;