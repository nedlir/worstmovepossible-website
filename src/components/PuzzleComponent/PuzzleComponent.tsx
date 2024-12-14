import React, { useState } from "react";
import { Puzzle } from "../../Puzzle";
import PuzzleComponentSidebar from "./PuzzleComponentSidebar";
import PuzzleComponentContent from "./PuzzleComponentContent";
import "./PuzzleComponent.css";

type PuzzleComponentProps = {
  puzzles: Puzzle[];
};

const PuzzleComponent: React.FC<PuzzleComponentProps> = ({ puzzles }) => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const currentPuzzle = puzzles[currentPuzzleIndex];

  const nextPuzzle = () => {
    setCurrentPuzzleIndex((prev) => (prev + 1) % puzzles.length);
    setIsSolved(false);
    setAttempts(0);
  };

  const previousPuzzle = () => {
    setCurrentPuzzleIndex(
      (prev) => (prev - 1 + puzzles.length) % puzzles.length
    );
    setIsSolved(false);
    setAttempts(0);
  };

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setIsSolved(false);
    setAttempts((prev) => prev + 1);
  };

  const handleSolved = () => {
    setIsSolved(true);
  };

  return (
    <div className="puzzle-container">
      <PuzzleComponentSidebar
        currentPuzzle={currentPuzzle}
        attempts={attempts}
        onPrevious={previousPuzzle}
        onNext={nextPuzzle}
      />
      <PuzzleComponentContent
        currentPuzzle={currentPuzzle}
        resetKey={resetKey}
        isSolved={isSolved}
        onReset={handleReset}
        onSolve={handleSolved}
      />
    </div>
  );
};

export default PuzzleComponent;
