import React, { useState } from "react";
import { Puzzle } from "../../Puzzle";
import PuzzleComponentSidebar from "./PuzzleSidebar";
import PuzzleComponentContent from "./PuzzleContent";
import PuzzleInstructions from "./PuzzleInstructions";

type PuzzleComponentProps = {
  puzzle: Puzzle;
};

const PuzzleComponent: React.FC<PuzzleComponentProps> = ({ puzzle }) => {
  const [resetKey, setResetKey] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [showingSequence, setShowingSequence] = useState(false);

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
    hasSequence: !!(puzzle.move_sequence || puzzle.moves),
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
        <PuzzleInstructions puzzle={puzzle} isSolved={isSolved} />
        <PuzzleComponentContent
          puzzle={puzzle}
          resetKey={resetKey}
          isSolved={isSolved}
          onReset={handleReset}
          onSolve={() => setIsSolved(true)}
        />
        <PuzzleComponentSidebar
          puzzle={puzzle}
          attempts={attempts}
          sequenceState={sequenceState}
          handlers={handlers}
        />
      </div>
    </div>
  );
};

export default PuzzleComponent;
