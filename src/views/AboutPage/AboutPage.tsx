import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => (
  <div className="content-container">
    <div className="content-section">
      <h2>
        About WorstMovePossible.com
        <span className="beta-badge">BETA</span>
      </h2>
      <p>
        A modern platform for improving your chess tactics through carefully
        selected puzzles. We're currently in beta, and your feedback is
        valuable!
      </p>

      <div className="feature-grid">
        <div
          className="feature-card"
          style={{ "--animation-order": 1 } as React.CSSProperties}
        >
          <h3>Daily Puzzles</h3>
          <p>New tactical challenges every day to keep your mind sharp.</p>
        </div>
        <div
          className="feature-card"
          style={{ "--animation-order": 2 } as React.CSSProperties}
        >
          <h3>Progress Tracking</h3>
          <p>Monitor your improvement with detailed statistics.</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
