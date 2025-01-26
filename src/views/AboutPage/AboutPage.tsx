import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => (
  <div className="content-container">
    <div className="content-section">
      <h2>Chess Training Reimagined 🐱‍🏍</h2>
      <p className="hook-text">
        Traditional chess puzzles teach you to find the best moves.
        <br />
        <strong>We train you to recognize the worst ones.</strong>
        <br />
        Because preventing disasters is what separates good players from great
        ones.
      </p>

      <div className="feature-grid">
        <div
          className="feature-card"
          style={{ "--animation-order": 1 } as React.CSSProperties}
        >
          <h3>🕵️ Blunder Prevention</h3>
          <p>
            Develop your danger radar with puzzles focused on spotting hidden
            threats and tactical oversights before they happen.
          </p>
        </div>

        <div
          className="feature-card"
          style={{ "--animation-order": 2 } as React.CSSProperties}
        >
          <h3>🛡️ Practical Defense</h3>
          <p>
            Master the art of resilient positions - learn to maintain advantage
            while neutralizing your opponent's counterplay.
          </p>
        </div>

        <div
          className="feature-card"
          style={{ "--animation-order": 3 } as React.CSSProperties}
        >
          <h3>📉 Mistake Analysis</h3>
          <p>
            Our unique puzzle system helps you learn from common positional
            errors that lead to gradual disadvantages.
          </p>
        </div>

        <div
          className="feature-card"
          style={{ "--animation-order": 4 } as React.CSSProperties}
        >
          <h3>⏳ Time Pressure Drills</h3>
          <p>
            Specialized exercises to improve your quick decision-making under
            tournament-like conditions.
          </p>
        </div>

        <div
          className="feature-card"
          style={{ "--animation-order": 5 } as React.CSSProperties}
        >
          <h3>🧩 Pattern Recognition</h3>
          <p>
            Train your brain to instinctively avoid common tactical pitfalls
            through repeated exposure to critical positions.
          </p>
        </div>

        <div
          className="feature-card"
          style={{ "--animation-order": 6 } as React.CSSProperties}
        >
          <h3>🏁 Endgame Training</h3>
          <p>
            Master the subtle art of converting advantages without blundering in
            chess's most delicate phase.
          </p>
        </div>
      </div>

      <div className="cta-section">
        <p className="challenge-text">
          Improving at chess isn't just about finding brilliant moves - it's
          about eliminating and exploiting catastrophic ones.
          <br />
          Ready to strengthen your weakest links?
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
