import React, { useState } from "react";
import { Puzzle } from "../../Puzzle";
import PuzzleComponentSidebar from "./PuzzleComponentSidebar";
import PuzzleComponentContent from "./PuzzleComponentContent";

type PuzzleComponentProps = {
  puzzles: Puzzle[];
};

const PuzzleComponent: React.FC<PuzzleComponentProps> = ({ puzzles }) => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [showingSequence, setShowingSequence] = useState(false);

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
    setIsPlayingSequence(false);
    setShowingSequence(false);
  };

  const handleSolved = () => {
    setIsSolved(true);
  };

  const playSequence = () => {
    setIsPlayingSequence(true);
    setShowingSequence(true);
    // Implement the sequence playing logic here
  };

  const sequenceState = {
    isPlaying: isPlayingSequence,
    isShowing: showingSequence,
    hasSequence: !!(currentPuzzle.move_sequence || currentPuzzle.moves),
  };

  const handlers = {
    onReset: handleReset,
    onPlaySequence: playSequence,
  };

  return (
    <div className="puzzle-container">
      <div className="puzzle-content">
        <PuzzleComponentContent
          currentPuzzle={currentPuzzle}
          resetKey={resetKey}
          isSolved={isSolved}
          onReset={handleReset}
          onSolve={handleSolved}
        />
        <PuzzleComponentSidebar
          currentPuzzle={currentPuzzle}
          attempts={attempts}
          onPrevious={previousPuzzle}
          onNext={nextPuzzle}
          sequenceState={sequenceState}
          handlers={handlers}
          isSolved={isSolved}
        />
      </div>
    </div>
  );
};

export default PuzzleComponent;
