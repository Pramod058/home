import { useState } from 'react';
import '../styles/Certification.css';
import certificates from '../data/certificates.json';

function Certification() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className='certificate-wrapper'>
      {certificates.map((certificate, index) => (
        <div className="certificate-container" key={index}>
          <button
            className="certificate-button"
            onClick={() => toggleExpand(index)}
          >
            {certificate.title}
          </button>
          {expandedIndex === index && (
            <div className="other-details">
              <ul>
                <li>Issuer: {certificate.issuer}</li>
                <li>Date: {certificate.date}</li>
                <li>Powered by: {certificate.poweredby}</li>
                {certificate.imagelink !== 'none' && (
                  <li>
                    <strong>Certificate Link:</strong> 
                    <a href={certificate.imagelink} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </li>
                )}
                {certificate.imagelink !== 'none' && (
                  <li>
                    <strong>Certificate Image:</strong>
                    <img src={certificate.imagelink} alt="Certificate" className="certificate-image" />
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Certification;
