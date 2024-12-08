import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PuzzlePage from "./views/PuzzlePage/PuzzlePage";
import AboutPage from "./views/AboutPage/AboutPage";
import ContributePage from "./views/ContributePage/ContributePage";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav-container">
          <div className="nav-left">
            <div className="logo">
              <Link to="/">♟ WorstMovePossible.com</Link>
              <span className="logo-beta-badge">BETA</span>
            </div>
            <div className="nav-divider"></div>
            <div className="nav-links">
              <Link to="/">Puzzles</Link>
              <Link to="/about">About</Link>
              <Link to="/contribute">Contribute</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PuzzlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contribute" element={<ContributePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
