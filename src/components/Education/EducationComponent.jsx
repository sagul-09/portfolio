import React from 'react'
import './education.css'
import educationData from '../../assets/educationData'
import { FaGraduationCap } from "react-icons/fa6";

const EducationComponent = () => {
  return (
    <div className="education">
        <div className="education-container-title" data-aos="fade-up">
            <h1> <FaGraduationCap />EDUCATION</h1>
        </div>
        <div className="education-container">
        {educationData.map((educate, index) => (
        <div className="education-card" key={index} data-aos="flip-right">
          <h2 className="education-title">{educate.title}</h2>
          <br/>
          <img src={educate.image} alt={educate.title} width={150} height={150} className="education-image" />
            <h3 className="education-program">{educate.program}</h3>
            <h3 className="education-duration">{educate.duration}</h3>
            <h3 className="education-institute">{educate.institute}</h3>
            <h3 className="education-location">{educate.location}</h3>
            <h3 className="education-cgpa">{educate.cgpa} CGPA</h3>
        </div>
      ))}
        </div>
    </div>
  )
}

export default EducationComponent