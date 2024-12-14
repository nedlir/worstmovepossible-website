import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import PuzzlePage from "./views/PuzzlePage/PuzzlePage";
import AboutPage from "./views/AboutPage/AboutPage";
import ContributePage from "./views/ContributePage/ContributePage";
import "./App.css";
import "./Components.css";

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HashRouter>
      <div className="app">
        <nav className="nav-container">
          <div className="nav-left">
            <div className="logo">
              <Link to="/" onClick={closeMobileMenu}>
                ♟ WorstMovePossible.com
              </Link>
              <span className="logo-beta-badge">BETA</span>
            </div>
            <div className="nav-divider"></div>
            <div className="nav-links">
              <Link to="/">Puzzles</Link>
              <Link to="/about">About</Link>
              <Link to="/contribute">Contribute</Link>
            </div>
          </div>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            ☰
          </button>
        </nav>
        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMobileMenu}>
            Puzzles
          </Link>
          <Link to="/about" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/contribute" onClick={closeMobileMenu}>
            Contribute
          </Link>
        </div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<PuzzlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contribute" element={<ContributePage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
