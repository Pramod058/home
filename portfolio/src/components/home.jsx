import { Link } from 'react-router-dom';
import {FaWhatsapp, FaLinkedin, FaGithub, FaReact, FaPython, FaDocker, FaGitAlt, FaJs } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiDjango, SiStreamlit, SiJupyter, SiTypescript, SiNestjs, SiPostgresql, SiSupabase } from 'react-icons/si';
import '../styles/Home.css';
import { data } from '../data/portfolioData';

function Home() {
    const { name, titles, location, email, phone, linkedin, github, whatsapp, profilePicture } = data.personalInfo;

    return (
        <div className="homepage-wrapper">
            <section className="home-hero-section">
                <div className="section-container hero-container">
                    <div className="hero-text">
                        <h1 className='home-name'>{name}</h1>
                        <div className='home-titles'>
                            {titles.map(title => <span key={title} className="title-tag">{title}</span>)}
                        </div>
                        <div className="contact-details">
                            <p>{location}</p>
                        <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
                            <p>{phone}</p>
                        </div>
                        <div className="home-socials">
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='social-link'><FaLinkedin /></a>
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='social-link'><FaGithub /></a>
                            <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className='social-link'><FaWhatsapp /></a>
                        </div>
                        <Link to="/project" className='action-button primary'>View My Projects</Link>
                    </div>
                    <div className="hero-image-container">
                        <img src={profilePicture} alt={name} className="profile-picture" />
                    </div>
                </div>
            </section>

            <section className="tech-galaxy-section">
                <div className="section-container">
                     <h2 className="section-title">Technologies</h2>
                    <div className="tech-galaxy">
                        <div className="tech-item item-py"><FaPython /><span className="tech-label">Python</span></div>
                        <div className="tech-item item-js"><FaJs /><span className="tech-label">JavaScript</span></div>
                        <div className="tech-item item-ts"><SiTypescript /><span className="tech-label">TypeScript</span></div>
                        <div className="tech-item item-react"><FaReact /><span className="tech-label">React</span></div>
                        <div className="tech-item item-nest"><SiNestjs /><span className="tech-label">NestJS</span></div>
                        <div className="tech-item item-dj"><SiDjango /><span className="tech-label">Django</span></div>
                        <div className="tech-item item-st"><SiStreamlit /><span className="tech-label">Streamlit</span></div>
                        <div className="tech-item item-docker"><FaDocker /><span className="tech-label">Docker</span></div>
                        <div className="tech-item item-git"><FaGitAlt /><span className="tech-label">Git</span></div>
                        <div className="tech-item item-pg"><SiPostgresql /><span className="tech-label">PostgreSQL</span></div>
                        <div className="tech-item item-supa"><SiSupabase /><span className="tech-label">Supabase</span></div>
                        <div className="tech-item item-jptr"><SiJupyter /><span className="tech-label">Jupyter</span></div>
                        <div className="tech-item item-numpy"><SiNumpy /><span className="tech-label">Numpy</span></div>
                        <div className="tech-item item-pandas"><SiPandas /><span className="tech-label">Pandas</span></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;