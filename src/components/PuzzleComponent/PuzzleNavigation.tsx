import React, { useEffect } from "react";
import { PreviousIcon, NextIcon } from "../../assets/Icons";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { usePuzzleStore } from "../../stores/puzzleStore";
import { Puzzle } from "../../Puzzle";

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
  const { solvedPuzzles, unsolvedPuzzles } = usePuzzleStore();
  const navigate: NavigateFunction = useNavigate();

  const currentIndex: number = solvedPuzzles.indexOf(puzzle.id);
  const isFirstPuzzle: boolean = solvedPuzzles.length === 0;
  const isLastPuzzle: boolean = unsolvedPuzzles.size === 0;

  useEffect(() => {
    console.log("solvedPuzzles", solvedPuzzles);
    console.log("unsolvedPuzzles", unsolvedPuzzles);
    console.log("currentIndex", currentIndex);
  }, [solvedPuzzles, unsolvedPuzzles, currentIndex]);

  const handlePrevious = () => {
    if (currentIndex < 0) return;
    if (isFirstPuzzle) return;
    if (solvedPuzzles.length <= 1) return;

    const previousPuzzleId: string = solvedPuzzles[currentIndex - 1];
    if (isSolved && previousPuzzleId) {
      navigate(`/puzzles/${previousPuzzleId}`);
    }
  };

  const handleNext = () => {
    navigate("/puzzles/");
  };

  return (
    <div className="puzzle-sidebar">
      <div className="puzzle-info">
        <h3>Puzzle #{puzzle.id}</h3>
        <div className="puzzle-stats">
          <span>
            Solved: {solvedPuzzles.length}/
            {solvedPuzzles.length + unsolvedPuzzles.size}
          </span>
          <span> Attempts: {attempts}</span>
        </div>
      </div>
      <div className="puzzle-controls">
        {!isFirstPuzzle && solvedPuzzles.length > 0 && (
          <button className="control-button" onClick={handlePrevious}>
            <PreviousIcon /> Previous
          </button>
        )}
        {!isLastPuzzle && isSolved && (
          <button className="control-button" onClick={handleNext}>
            Next <NextIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default PuzzleNavigation;
