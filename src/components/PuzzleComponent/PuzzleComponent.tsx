import React, { useState, useEffect } from "react";
import PuzzleInstructions from "./PuzzleInstructions";
import PuzzleNavigation from "./PuzzleNavigation";
import PuzzleContent from "./PuzzleContent";
import { usePuzzleStore } from "../../stores/puzzleStore";
import { Puzzle } from "../../Puzzle";

type PuzzleComponentProps = {
  puzzle: Puzzle;
  onSolve: () => void;
};

const PuzzleComponent: React.FC<PuzzleComponentProps> = ({
  puzzle,
  onSolve,
}) => {
  const [resetKey, setResetKey] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { solvePuzzle } = usePuzzleStore();

  useEffect(() => {
    if (isSolved) {
      solvePuzzle(puzzle.id);
      onSolve();
    }
  }, [isSolved, puzzle.id, solvePuzzle, onSolve]);

  return (
    <div className="puzzle-component">
      <div className="puzzle-container">
        <PuzzleInstructions puzzle={puzzle} isSolved={isSolved} />
        <PuzzleContent
          puzzle={puzzle}
          resetKey={resetKey}
          isSolved={isSolved}
          setIsSolved={setIsSolved}
          setResetKey={setResetKey}
          setAttempts={setAttempts}
        />
        <PuzzleNavigation
          puzzle={puzzle}
          isSolved={isSolved}
          attempts={attempts}
        />
      </div>
    </div>
  );
};

export default PuzzleComponent;
