import React, { useEffect } from "react";
import { NextIcon } from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
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
  const { solvedPuzzles, unsolvedPuzzles, solvePuzzle } = usePuzzleStore();
  const navigate = useNavigate();

  // Automatically move solved puzzles from unsolved to solved
  useEffect(() => {
    if (isSolved && !solvedPuzzles.includes(puzzle.id)) {
      solvePuzzle(puzzle.id); // Use the correct action name from your store
    }
  }, [isSolved, puzzle.id, solvedPuzzles, solvePuzzle]);

  const handleNext = () => {
    navigate("/puzzles/");
  };

  return (
    <div className="puzzle-navigation">
      <div className="puzzle-info">
        <h3>Puzzle #{puzzle.id}</h3>
        <div className="puzzle-stats">
          <span>
            Solved: {solvedPuzzles.length}/
            {solvedPuzzles.length + unsolvedPuzzles.size}
          </span>
        </div>
      </div>
      <div className="puzzle-controls">
        {unsolvedPuzzles.size > 0 && (
          <button
            className="control-button"
            onClick={handleNext}
            disabled={!isSolved}
          >
            Next <NextIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default PuzzleNavigation;
