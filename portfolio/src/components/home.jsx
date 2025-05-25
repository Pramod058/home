import '../styles/Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Home() {
    return (
        <div className='home-wrapper'>
            <div className='home-container'>
                <h1>Pramod Aryal</h1>
                <p></p>
                <p>+977-9816069759 <br></br>
                    <a href='mailto:aryalpramod05@gmail.com'>aryalpramod05@gmail.com</a> <br></br>
                    📖 Bachelors Degree in Information Technology <br></br>
                    🎓 Constantly learning and researching AI/ML. <br></br>
                </p>
            </div>

            <div className="social-container">
                Connect with me </div>

 
<div className="social-icons">
  <div id="linkedin">
    <a
      href="https://www.linkedin.com/in/pramod058"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin className="icon linkedin" />
    </a>
  </div>

  <div className="divider"></div>

  <div id="github">
    <a
      href="https://github.com/pramod058"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className="icon github" />
    </a>
  </div>
</div>


        </div>
    )
}

export default Home;