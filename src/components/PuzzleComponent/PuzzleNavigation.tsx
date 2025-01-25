import React from "react";
import { Puzzle } from "../../Puzzle";
import { PreviousIcon, NextIcon } from "../../assets/Icons";
import { usePuzzleHistory } from "../../PuzzleHistoryContext";
import puzzles from "../../data/puzzles.json";
import { useNavigate } from "react-router-dom";

type PuzzleNavigationProps = {
  puzzle: Puzzle;
  isSolved: boolean;
  attempts: number;
};

const PuzzleNavigation: React.FC<PuzzleNavigationProps> = ({
  puzzle,
  isSolved,
  attempts,
}) => {
  const { solvedPuzzles, resetHistory } = usePuzzleHistory();
  const navigate = useNavigate();

  const currentIndex = solvedPuzzles.indexOf(puzzle.id);
  const isFirstPuzzle = currentIndex === 0;
  const isLastPuzzle = currentIndex === solvedPuzzles.length - 1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousPuzzleId = solvedPuzzles[currentIndex - 1];
      navigate(`/puzzles/${previousPuzzleId}`);
    }
  };

  const handleNext = () => {
    if (solvedPuzzles.length === puzzles.length) {
      resetHistory();
    }
    navigate("/puzzles/");
  };

  return (
    <div className="puzzle-sidebar">
      <div className="puzzle-info">
        <h3>Puzzle #{puzzle.id}</h3>
        <div className="puzzle-stats">
          <span>
            Solved: {solvedPuzzles.length}/{puzzles.length}
          </span>
          <span> attempts: {attempts}</span>
        </div>
      </div>
      <div className="puzzle-controls">
        {!isFirstPuzzle && (
          <button className="control-button" onClick={handlePrevious}>
            <PreviousIcon /> Previous
          </button>
        )}
        {isLastPuzzle && (
          <button className="control-button" onClick={handleNext}>
            Next <NextIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default PuzzleNavigation;
