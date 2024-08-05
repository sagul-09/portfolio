// src/components/NavBarComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const NavComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="title">
        <Link to="/" ><h1>SAGUL</h1></Link>
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
        <Link to="/projects" onClick={toggleMenu}>PROJECTS</Link>
        <Link to="/certifications" onClick={toggleMenu}>CERTIFICATIONS</Link>
        <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
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
