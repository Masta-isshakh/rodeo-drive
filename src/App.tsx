import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Link } from 'react-router-dom';
import HomePage from "./Homepage";
import {Routes, Route} from 'react-router';
import Contact from './Contact'

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
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
