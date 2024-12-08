import React, { useState, useEffect } from "react";
import { ChessPuzzle } from "@react-chess-tools/react-chess-puzzle";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Puzzle } from "../../Puzzle";
import SolutionMessage from "../SolutionMessage/SolutionMessage";
import { ResetIcon, HintIcon, PlayIcon } from "../../assets/Icons";
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

    setIsPlayingSequence(true);
    setShowingSequence(true);

    const game = new Chess(currentPuzzle.fen);
    setSequenceGame(game);

    try {
      const moves = [
        ...(currentPuzzle.moves || []),
        ...(currentPuzzle.move_sequence || []),
      ];

      for (const move of moves) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const newGame = new Chess(game.fen());
        newGame.move(move);
        game.move(move);
        setSequenceGame(newGame);
      }
    } catch (error) {
      console.error("Error playing sequence:", error);
    } finally {
      setIsPlayingSequence(false);
    }
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

        <div className="puzzle-actions">
          <ChessPuzzle.Reset asChild onReset={handleReset}>
            <button className="action-button" disabled={isPlayingSequence}>
              <ResetIcon />
              Reset
            </button>
          </ChessPuzzle.Reset>

          <ChessPuzzle.Hint asChild>
            <button
              className="action-button"
              disabled={showingSequence || isPlayingSequence}
            >
              <HintIcon />
              Hint
            </button>
          </ChessPuzzle.Hint>

          {isSolved &&
            (currentPuzzle.move_sequence || currentPuzzle.moves) &&
            !showingSequence && (
              <button
                className="action-button"
                onClick={playSequence}
                disabled={isPlayingSequence}
              >
                <PlayIcon />
                {isPlayingSequence ? "Playing..." : "Play Sequence"}
              </button>
            )}
        </div>

        {isSolved && (
          <SolutionMessage description={currentPuzzle.description} />
        )}
      </ChessPuzzle.Root>
    </div>
  );
};

export default PuzzleComponentContent;
