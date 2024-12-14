import React, { useState, useEffect } from "react";
import { ChessPuzzle } from "@react-chess-tools/react-chess-puzzle";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Puzzle } from "../../Puzzle";
import PuzzleActions from "./PuzzleActions";

type PuzzleComponentContentProps = {
  currentPuzzle: Puzzle;
  resetKey: number;
  isSolved: boolean;
  onReset: () => void;
  onSolve: () => void;
};

const PuzzleComponentContent: React.FC<PuzzleComponentContentProps> = ({
  currentPuzzle,
  resetKey,
  isSolved,
  onReset,
  onSolve,
}) => {
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [sequenceGame, setSequenceGame] = useState<Chess | null>(null);
  const [showingSequence, setShowingSequence] = useState(false);

  const shouldFlipBoard = (fen: string): boolean => fen.split(" ")[1] === "b";

  const playSequence = async () => {
    if (isPlayingSequence) return;
    setIsPlayingSequence(true);
    setShowingSequence(true);
    const game = new Chess(currentPuzzle.fen);
    setSequenceGame(game);
    const moves = [
      ...(currentPuzzle.moves || []),
      ...(currentPuzzle.move_sequence || []),
    ];
    for (const move of moves) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      game.move(move);
      setSequenceGame(new Chess(game.fen()));
    }
    setIsPlayingSequence(false);
  };

  const handleReset = () => {
    setIsPlayingSequence(false);
    setSequenceGame(null);
    setShowingSequence(false);
    onReset();
  };

  useEffect(() => {
    handleReset();
  }, [currentPuzzle.id]);

  const sequenceState = {
    isPlaying: isPlayingSequence,
    isShowing: showingSequence,
    hasSequence: !!(currentPuzzle.move_sequence || currentPuzzle.moves),
  };

  return (
    <div className="puzzle-content">
      <ChessPuzzle.Root
        key={`${currentPuzzle.id}-${resetKey}`}
        puzzle={currentPuzzle}
        onSolve={onSolve}
      >
        <div className="board-container">
          {showingSequence && sequenceGame ? (
            <Chessboard
              position={sequenceGame.fen()}
              boardOrientation={
                shouldFlipBoard(currentPuzzle.fen) ? "black" : "white"
              }
            />
          ) : (
            <ChessPuzzle.Board />
          )}
        </div>
        <PuzzleActions
          sequenceState={sequenceState}
          handlers={{ onReset: handleReset, onPlaySequence: playSequence }}
          isSolved={isSolved}
        />
      </ChessPuzzle.Root>
    </div>
  );
};

export default PuzzleComponentContent;
