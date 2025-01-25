// PuzzleContent.tsx
import React, { useState } from "react";
import { ChessPuzzle } from "@react-chess-tools/react-chess-puzzle";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Puzzle } from "../../Puzzle";
import PuzzleActions from "./PuzzleActions";

type PuzzleContentProps = {
  puzzle: Puzzle;
  resetKey: number;
  isSolved: boolean;
  setIsSolved: (solved: boolean) => void;
  setResetKey: (fn: (prev: number) => number) => void;
  setAttempts: (fn: (prev: number) => number) => void;
};

const PuzzleContent: React.FC<PuzzleContentProps> = ({
  puzzle,
  resetKey,
  isSolved,
  setIsSolved,
  setResetKey,
  setAttempts,
}) => {
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [sequenceGame, setSequenceGame] = useState<Chess | null>(null);
  const [showingSequence, setShowingSequence] = useState(false);

  const shouldFlipBoard = (fen: string): boolean => fen.split(" ")[1] === "b";

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setIsSolved(false);
    setAttempts((prev) => prev + 1);
    setIsPlayingSequence(false);
    setSequenceGame(null);
    setShowingSequence(false);
  };

  const playSequence = async () => {
    if (isPlayingSequence) return;
    setIsPlayingSequence(true);
    setShowingSequence(true);
    const game = new Chess(puzzle.fen);
    setSequenceGame(game);
    const moves = [...(puzzle.moves || []), ...(puzzle.move_sequence || [])];
    for (const move of moves) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      game.move(move);
      setSequenceGame(new Chess(game.fen()));
    }
    setIsPlayingSequence(false);
  };

  const sequenceState = {
    isPlaying: isPlayingSequence,
    isShowing: showingSequence,
    hasSequence: !!(puzzle.move_sequence || puzzle.moves),
  };

  return (
    <div className="puzzle-content">
      <ChessPuzzle.Root
        key={`${puzzle.id}-${resetKey}`}
        puzzle={puzzle}
        onSolve={() => setIsSolved(true)}
      >
        <PuzzleActions
          sequenceState={sequenceState}
          handlers={{ onReset: handleReset, onPlaySequence: playSequence }}
          isSolved={isSolved}
        />
        <div className="board-container">
          {showingSequence && sequenceGame ? (
            <Chessboard
              position={sequenceGame.fen()}
              boardOrientation={shouldFlipBoard(puzzle.fen) ? "black" : "white"}
            />
          ) : (
            <ChessPuzzle.Board />
          )}
        </div>
      </ChessPuzzle.Root>
    </div>
  );
};

export default PuzzleContent;
