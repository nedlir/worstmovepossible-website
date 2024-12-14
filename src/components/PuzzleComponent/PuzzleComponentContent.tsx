import React, { useState, useEffect } from "react";
import { ChessPuzzle } from "@react-chess-tools/react-chess-puzzle";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Puzzle } from "../../Puzzle";
import SolutionMessage from "../SolutionMessage/SolutionMessage";
import PuzzleActions from "./PuzzleActions";
import "./PuzzleComponentContent.css";

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

  const shouldFlipBoard = (fen: string): boolean => {
    const fenParts = fen.split(" ");
    return fenParts[1] === "b";
  };

  const playSequence = async () => {
    if (isPlayingSequence) return;

    let isMounted = true;
    setIsPlayingSequence(true);
    setShowingSequence(true);

    const game = new Chess(currentPuzzle.fen);
    if (isMounted) setSequenceGame(game);

    try {
      const moves = [
        ...(currentPuzzle.moves || []),
        ...(currentPuzzle.move_sequence || []),
      ];

      for (const move of moves) {
        if (!isMounted) break;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const newGame = new Chess(game.fen());
        newGame.move(move);
        game.move(move);
        if (isMounted) setSequenceGame(newGame);
      }
    } catch (error) {
      console.error("Error playing sequence:", error);
    } finally {
      if (isMounted) {
        setIsPlayingSequence(false);
      }
    }

    return () => {
      isMounted = false;
    };
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

  const handlers = {
    onReset: handleReset,
    onPlaySequence: playSequence,
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
          handlers={handlers}
          isSolved={isSolved}
        />

        {isSolved && (
          <SolutionMessage description={currentPuzzle.description} />
        )}
      </ChessPuzzle.Root>
    </div>
  );
};

export default PuzzleComponentContent;
