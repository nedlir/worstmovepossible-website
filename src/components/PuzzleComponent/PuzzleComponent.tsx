import React, { useState } from "react";
import { Puzzle } from "../../Puzzle";
import PuzzleComponentSidebar from "./PuzzleSidebar";
import PuzzleComponentContent from "./PuzzleContent";

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

  const changePuzzle = (direction: number) => {
    setCurrentPuzzleIndex(
      (prev) => (prev + direction + puzzles.length) % puzzles.length
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

  const sequenceState = {
    isPlaying: isPlayingSequence,
    isShowing: showingSequence,
    hasSequence: !!(currentPuzzle.move_sequence || currentPuzzle.moves),
  };

  const handlers = {
    onReset: handleReset,
    onPlaySequence: () => {
      setIsPlayingSequence(true);
      setShowingSequence(true);
    },
  };

  return (
    <div className="puzzle-component">
      <div className="puzzle-container">
        <PuzzleComponentContent
          currentPuzzle={currentPuzzle}
          resetKey={resetKey}
          isSolved={isSolved}
          onReset={handleReset}
          onSolve={() => setIsSolved(true)}
        />
        <PuzzleComponentSidebar
          currentPuzzle={currentPuzzle}
          attempts={attempts}
          onPrevious={() => changePuzzle(-1)}
          onNext={() => changePuzzle(1)}
          sequenceState={sequenceState}
          handlers={handlers}
          isSolved={isSolved}
        />
      </div>
    </div>
  );
};

export default PuzzleComponent;
