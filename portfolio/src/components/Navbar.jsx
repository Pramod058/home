import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { data } from '../data/portfolioData';
import '../styles/Navbar.css';

function Navbar() {
  const { name } = data.personalInfo;
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">{name}</Link>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/project" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
          <NavLink to="/certification" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Certifications</NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Experience</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
export default Navbar;