import '../styles/Certification.css'
import { useState } from 'react';

const certifications = [
  {
    name: 'React Developer Certification',
    details: 'Issued by XYZ in 2024. Covered advanced React concepts and testing.',
    imageUrl: 'https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Award-Certificate-Template-2048x1489.jpg',
    iframeUrl: 'https://example.com/cert/react', 
  },
  {
    name: 'Frontend Mastery',
    details: 'Completed advanced CSS, JavaScript and performance optimization.',
    imageUrl: '/https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Award-Certificate-Template-2048x1489.jpg',
    iframeUrl: null,
  },
  {
    name: 'Full Stack Bootcamp',
    details: '6-month intensive bootcamp covering MERN stack development.',
    imageUrl: 'https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Award-Certificate-Template-2048x1489.jpg',
    iframeUrl: 'https://example.com/cert/fullstack',
  },
];



function Certification(){
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="certifications-container">
      {certifications.map((cert, index) => (
        <button
          key={index}
          className="cert-button"
          onClick={() => toggleExpand(index)}
        >
          <div className="cert-name">{cert.name}</div>

          {expandedIndex === index && (
            <div className="cert-details">
              <p>{cert.details}</p>
              <img src={cert.imageUrl} alt={cert.name} className="cert-image" />
              {cert.iframeUrl && (
                <iframe
                  src={cert.iframeUrl}
                  className="cert-iframe"
                  title={`iframe-${index}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
export default Certification;