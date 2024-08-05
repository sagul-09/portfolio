import React from 'react'
import './hero.css'
import { assets } from '../../assets/assets.js'  
// import Particle from '../Particles/ParticlesComponent.jsx' 


const HeroComponent = () => {
    
  return (
    <div className="hero" >
        {/* <Particle /> */}
        <div className="hero-content" data-aos="fade-right">
            <h1 >Hi There,</h1>
            <h1 >I'm <span style={{color: 'orange'}}>Sagul</span></h1>
            <h1>A <span className='animate-character'>Full Stack Web Developer</span></h1>
        </div>
        <div className="hero-image" data-aos="fade-left">
            <img src={assets.pf} alt="pfp"    />
        </div>
    </div>
     

  )
}

export default HeroComponent;