import React from 'react';
import './certificate.css';
import certificateData from '../../assets/certificateData';
import { PiCertificateBold } from "react-icons/pi";

const CertificateComponent = () => {
    return (
        <div className="certification">
            <div className="certification-title" data-aos="fade-up">
                <h1> <PiCertificateBold />CERTIFICATE</h1>
            </div>
            <div className="certification-container">
                {certificateData.map((certificate, index) => (
                    <div className="certificate" key={index} data-aos="flip-left">
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="certificate-image"
                            style={{ borderRadius: '1rem' }} 

                        />
                        <h3 className="certificate-title">{certificate.title}</h3>
                        <h4 className="certificate-organization">{certificate.organization}</h4>
                        <h4 className="certificate-duration">{certificate.duration}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificateComponent;