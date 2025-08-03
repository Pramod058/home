import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaReact, FaPython, FaDocker, FaGitAlt, FaJs, FaCuttlefish } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiDjango, SiStreamlit } from 'react-icons/si';
import '../styles/Home.css';
import { data } from '../data/portfolioData';

function Home() {
    const { name, titles, location, phone, linkedin, github, profilePicture } = data.personalInfo;
    const allSkills = [...data.skills.programming, ...data.skills.libraries, ...data.skills.frameworks, ...data.skills.tools];

    return (
        <section className="home-hero-section">
            <div className="section-container hero-container">
                <div className="hero-text">
                    <h1 className='home-name'>{name}</h1>
                    <div className='home-titles'>
                        {titles.map(title => <span key={title} className="title-tag">{title}</span>)}
                    </div>
                    <div className="contact-details">
                        <p>{location}</p>
                        <p>{phone}</p>
                    </div>
                    <div className="home-socials">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='social-link'><FaLinkedin /></a>
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='social-link'><FaGithub /></a>
                    </div>
                    <Link to="/project" className='action-button primary'>View My Projects</Link>
                </div>
                <div className="hero-image-container">
                    <img src={profilePicture} alt={name} className="profile-picture" />
                </div>
            </div>
            <div className="tech-marquee">
                <div className="tech-icons-group">
                    <FaPython title="Python"/><FaJs title="JavaScript"/><FaReact title="React"/><SiDjango title="Django"/><SiStreamlit title="Streamlit"/><FaDocker title="Docker"/><FaGitAlt title="Git"/><SiPandas title="Pandas"/><SiNumpy title="Numpy"/><FaCuttlefish title="C++/C"/>
                </div>
                <div className="tech-icons-group">
                     <FaPython title="Python"/><FaJs title="JavaScript"/><FaReact title="React"/><SiDjango title="Django"/><SiStreamlit title="Streamlit"/><FaDocker title="Docker"/><FaGitAlt title="Git"/><SiPandas title="Pandas"/><SiNumpy title="Numpy"/><FaCuttlefish title="C++/C"/>
                </div>
            </div>
        </section>
    );
}
export default Home;