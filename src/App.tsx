import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import PuzzlePage from "./views/PuzzlePage/PuzzlePage";
import AboutPage from "./views/AboutPage/AboutPage";
import ContributePage from "./views/ContributePage/ContributePage";
import "./App.css";
import "./Components.css";
import { RandomPuzzleRedirect } from "./RandomPuzzleRedirect";

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const touchProps = {
    role: "button",
    tabIndex: 0,
    onTouchStart: () => {},
    style: { touchAction: "manipulation" as const },
  };

  return (
    <HashRouter>
      <div className="app">
        <nav className="nav-container">
          <div className="nav-left">
            <div className="logo">
              <Link to="/" onClick={closeMobileMenu} {...touchProps}>
                ♟ WorstMovePossible.com
                <span className="logo-beta-badge">BETA</span>
              </Link>
            </div>
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              {...touchProps}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </nav>

        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMobileMenu} {...touchProps}>
            Puzzles
          </Link>
          <Link to="/about" onClick={closeMobileMenu} {...touchProps}>
            About
          </Link>
          <Link to="/contribute" onClick={closeMobileMenu} {...touchProps}>
            Contribute
          </Link>
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/puzzles/:puzzleId" element={<PuzzlePage />} />
            <Route path="/puzzles/" element={<RandomPuzzleRedirect />} />{" "}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contribute" element={<ContributePage />} />
            <Route path="/" element={<RandomPuzzleRedirect />} />{" "}
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
