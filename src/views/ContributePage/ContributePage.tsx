import React from "react";
import "./ContributePage.css";

const ContributePage: React.FC = () => (
  <div className="content-container">
    <div className="content-section">
      <h2>Contribute</h2>
      <div className="contribute-grid">
        <div
          className="contribute-card"
          style={{ "--animation-order": 1 } as React.CSSProperties}
        >
          <h3>Submit Puzzles</h3>
          <p>Share your tactical discoveries with our community.</p>
          <button className="action-button">Submit</button>
        </div>
        <div
          className="contribute-card"
          style={{ "--animation-order": 2 } as React.CSSProperties}
        >
          <h3>Review Puzzles</h3>
          <p>Help verify and improve submitted puzzles.</p>
          <button className="action-button">Review</button>
        </div>
      </div>
    </div>
  </div>
);

export default ContributePage;
