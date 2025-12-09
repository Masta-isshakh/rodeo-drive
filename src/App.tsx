import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Link } from 'react-router-dom';
import HomePage from "./Homepage";
import {Routes, Route} from 'react-router';
import Contact from './Contact'
import About from './About';
import Services from './Services';

const client = generateClient<Schema>();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    console.log(todos, createTodo)
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <div>
            {/* Header */}
      <header className={menuOpen ? "open" : ""}>
        <div className="logo">
          <img
            src="https://mastatiktok.s3.us-east-1.amazonaws.com/logo.jpeg"
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
        <nav className="nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
