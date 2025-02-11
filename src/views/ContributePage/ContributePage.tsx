import React from "react";
import "./ContributePage.css";

const ContributePage: React.FC = () => {
  const handleContribution = (type: "submit" | "report") => {
    const baseUrl =
      "https://github.com/nedlir/worstmovepossible-website/issues/new";
    const params = new URLSearchParams({
      title: `${
        type === "submit" ? "Worst Move Puzzle" : "Puzzle Issue"
      } Report`,
      labels: type,
      template: `${type}_puzzle.yml`,
    });

    window.location.href = `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className="content-container">
      <div className="content-section">
        <h2>Contribute</h2>
        <div className="contribute-grid">
          <div
            className="contribute-card"
            style={{ "--animation-order": 1 } as React.CSSProperties}
          >
            <h3>⚡ Suggest New Puzzles</h3>
            <p>
              Design devilish chess positions where the worst possible move is
              challenging to find. Include clear justification for why the
              proposed move is truly catastrophic.
            </p>
            <button
              className="action-button"
              onClick={() => handleContribution("submit")}
            >
              Submit Worst Move Puzzle
            </button>
          </div>

          <div
            className="contribute-card"
            style={{ "--animation-order": 2 } as React.CSSProperties}
          >
            <h3>🚫 Report Puzzles</h3>
            <p>
              Found a puzzle where the "worst move" doesn't make sense? Report
              questionable positions, alternative solutions, or scoring
              oddities. Help keep our puzzle quality brutally honest.
            </p>
            <button
              className="action-button"
              onClick={() => handleContribution("report")}
            >
              Report Puzzle Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributePage;
