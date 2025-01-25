import React from "react";
import { Puzzle } from "../../Puzzle";
import { PreviousIcon, NextIcon } from "../../assets/Icons";

type PuzzleSidebarProps = {
  currentPuzzle: Puzzle;
  attempts: number;
  onPrevious: () => void;
  onNext: () => void;
  sequenceState: {
    isPlaying: boolean;
    isShowing: boolean;
    hasSequence: boolean;
  };
  handlers: {
    onReset: () => void;
    onPlaySequence: () => void;
  };
};

const PuzzleSidebar: React.FC<PuzzleSidebarProps> = ({
  currentPuzzle,
  attempts,
  onPrevious,
  onNext,
}) => (
  <div className="puzzle-sidebar">
    <div className="puzzle-info">
      <h3>Puzzle #{currentPuzzle.id}</h3>
      <div className="puzzle-stats">
        <span>Attempts: {attempts}</span>
      </div>
    </div>
    <div className="puzzle-controls">
      <button className="control-button" onClick={onPrevious}>
        <PreviousIcon /> Previous
      </button>
      <button className="control-button" onClick={onNext}>
        Next <NextIcon />
      </button>
    </div>
  </div>
);

export default PuzzleSidebar;
