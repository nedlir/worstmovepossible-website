import React from "react";
import { Puzzle } from "../../Puzzle";
import { PreviousIcon, NextIcon } from "../../assets/Icons";

type PuzzleSidebarProps = {
  puzzle: Puzzle;
  attempts: number;
  isSolved: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

const PuzzleSidebar: React.FC<PuzzleSidebarProps> = ({
  puzzle,
  attempts,
  isSolved,
  onPrevious,
  onNext,
}) => (
  <div className="puzzle-sidebar">
    <div className="puzzle-info">
      <h3>Puzzle #{puzzle.id}</h3>
      <div className="puzzle-stats">
        <span>Attempts: {attempts}</span>
      </div>
    </div>
    {isSolved && (
      <div className="puzzle-controls">
        <button className="control-button" onClick={onPrevious}>
          <PreviousIcon /> Previous
        </button>
        <button className="control-button" onClick={onNext}>
          Next <NextIcon />
        </button>
      </div>
    )}
  </div>
);

export default PuzzleSidebar;
