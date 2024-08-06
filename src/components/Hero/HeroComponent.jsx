import React from 'react';
import ParticleBackground from '../Particles/ParticleBackground';
import './hero.css';
import { assets } from '../../assets/assets';

const HeroComponent = () => {
  return (
    <div className="hero">
      <div className="hero-particles">
        <ParticleBackground />
      </div>
      <div className="hero-content" >
        <div className="hero-title">
        <h1>Hi There,</h1>
        <h1>
          I'm <span style={{ color: 'orange' }}>Sagul</span>
        </h1>
        </div>
        
        <h1><span className="animate-character" data-aos="fade-right" data-aos-duration="800">Full Stack Web Developer</span>
        </h1>
      </div>
      <div className="hero-image" data-aos="fade-left" data-aos-duration="800">
        <img src={assets.pf} alt="pfp" />
      </div>
    </div>
  );
};

export default HeroComponent;
