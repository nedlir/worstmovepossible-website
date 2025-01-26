import React from "react";
import CheckmarkIcon from "../../assets/Icons/CheckmarkIcon";

type SolutionMessageProps = {
  description: string;
};

const SolutionMessage: React.FC<SolutionMessageProps> = ({ description }) => (
  <div className="solution-message">
    <div className="solution-header">
      <CheckmarkIcon />
      <span className="solution-title">Puzzle Solved!</span>
    </div>
    {description}
  </div>
);

export default SolutionMessage;
