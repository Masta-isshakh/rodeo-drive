import { useState } from "react";
import {Routes, Route} from 'react-router';
import { Link } from 'react-router-dom';
import Homepage from "./Homepage";
import Contact from "./Contact";



function App() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
            {/* Header */}
      <header className={menuOpen ? "open" : ""}>
        <div className="logo">
          <img
            src="/src/assets/logo.jpeg"
            alt="Rodeo Drive Logo"
            className="logo-img"
          />
          <span>Rodeo Drive</span>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav> 
          <Link to="/">Home</Link> 
          <Link to="/Services">Services</Link> 
          <Link to="/About">About</Link> 
          <Link to="/Contact">Contact</Link> 
          {/* <-- redirection vers page Contact */} 
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
