import React, { useState, useEffect } from "react";
import { Puzzle } from "../../Puzzle";
import PuzzleInstructions from "./PuzzleInstructions";
import PuzzleSidebar from "./PuzzleSidebar";
import { usePuzzleHistory } from "../../PuzzleHistoryContext";
import PuzzleContent from "./PuzzleContent";

type PuzzleComponentProps = {
  puzzle: Puzzle;
};

const PuzzleComponent: React.FC<PuzzleComponentProps> = ({ puzzle }) => {
  const [resetKey, setResetKey] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { addPuzzle } = usePuzzleHistory();

  useEffect(() => {
    if (isSolved) {
      addPuzzle(puzzle.id);
    }
  }, [isSolved, puzzle.id, addPuzzle]);

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
        <PuzzleSidebar puzzle={puzzle} isSolved={isSolved} />
      </div>
    </div>
  );
};

export default PuzzleComponent;
