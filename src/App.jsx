import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/NavComponent.jsx";
import Hero from "./components/Hero/HeroComponent.jsx";
import About from "./components/About/AboutComponent.jsx";
import Skills from "./components/Skills/SkillsComponent.jsx";
import Education from "./components/Education/EducationComponent.jsx";
import Project from "./components/Project/ProjectComponent.jsx";
import Certification from "./components/Certification/CertificateComponent.jsx";
import Footer from "./components/Footer/FooterComponent.jsx";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="body">
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="certifications">
        <Certification />
      </div >
      <Footer />
    </div>
  );
};

export default App;