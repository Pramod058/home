import '../styles/Certification.css';
import { data } from '../data/portfolioData';

function Certification() {
  return (
    <section className="certification-section">
      <div className="section-container">
        <h1 className="page-title">Licenses & Certifications</h1>
        <div className='certifications-grid'>
          {data.certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <a href={cert.image} target="_blank" rel="noopener noreferrer" className="cert-image-link">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </a>
              <div className="cert-text-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} · {cert.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;