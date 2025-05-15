import  { useState, Suspense } from 'react';

import "./styles/App.css";
import "./styles/Root.css";

import Home from "./components/Home" ;
import Project from "./components/Project";
import Contact from"./components/Contact";
import Certification from "./components/Certification";


function App() {
  const [tab, setTab] = useState("Home");

  const RenderTab = () => {
    switch (tab){
      case 'Home':
        return <Home />
      case 'Project':
        return < Project />
      case 'Certification':
        return < Certification />
      case 'Contact':
        return < Contact />
      default:
        return <Home />
    }
  }

  return (
        <div className="maincontainer"> 
          <nav className="navbar">
            <button onClick={() => setTab('Certification')}>Certifications</button>
            <button onClick={() => setTab('Home')}>Home</button>
            <button onClick={() => setTab('Project')}>Project</button>
            <button onClick={() => setTab('Contact')}>Contact</button>
          </nav>
                      {RenderTab()}
        </div>

  );
}

export default App;
