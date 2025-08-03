import '../styles/Experience.css';
import { data } from '../data/portfolioData';

function Experience() {
  return (
    <section className="experience-section">
        <div className="section-container">
            <h1 className="page-title">Work Experience</h1>
            <div className='experience-list-container'>
                {data.experience.map((job, index) => (
                <div key={index} className='experience-item-card'>
                    <h3 className='job-role'>{job.role}</h3>
                    <p className='job-company'>{job.company} | {job.period}</p>
                    <ul className='job-responsibilities'>
                    {job.responsibilities.map((task, i) => <li key={i}>{task}</li>)}
                    </ul>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}
export default Experience;