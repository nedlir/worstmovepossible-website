import React from "react";

type SolutionMessageProps = {
  description: string;
};

const SolutionMessage: React.FC<SolutionMessageProps> = ({ description }) => (
  <div className="solution-message">
    <div className="solution-header">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
      <h3>Puzzle Solved!</h3>
    </div>
    <p>{description}</p>
  </div>
);

export default SolutionMessage;
