import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Link } from 'react-router-dom';
import HomePage from "./Homepage";
import {Routes, Route} from 'react-router';
import Contact from './Contact'
import About from './About';
import Services from './Services';
import { useTranslation } from "react-i18next";
import i18n from "./i18n.ts";
import "./i18n";
import { useNavigate } from "react-router-dom";



const client = generateClient<Schema>();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
    const {  t } = useTranslation();
      const navigate = useNavigate();

  const switchLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };


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

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="menu"
      >
        <span />
        <span />
        <span />
      </div>

      <nav className="nav-links" role="navigation" aria-label="main">
        <Link to="/">{t("navbar.home")}</Link>
        <Link to="/services">{t("navbar.services")}</Link>
        <Link to="/about">{t("navbar.about")}</Link>
        <Link to="/contact">{t("navbar.contact")}</Link>
        <Link to="/admin">{t("navbar.admin")}</Link>
        <button
          className="lang-btn"
          onClick={switchLang}
          style={{ marginLeft: 12 }}
        >
          {i18n.language === "en" ? "AR" : "EN"}
        </button>
        <button
          className="login-btn"
          onClick={() => {
            navigate("/Login");
            setMenuOpen(false);
          }}
        >
          {t("navbar.login")}
        </button>
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
