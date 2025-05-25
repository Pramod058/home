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

              {certificate.imagelink === 'none' ? (
                <p> Ongoing course</p>
              ) : (
                <img src={certificate.imagelink} alt={certificate.title} className="certificate-image" />
              )}

            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Certification;


