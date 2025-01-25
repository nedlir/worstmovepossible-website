import React from "react";
import { Puzzle } from "../../Puzzle";
import SolutionMessage from "../SolutionMessage/SolutionMessage"; // Import the SolutionMessage component
import QueenIcon from "../../assets/Icons/QueenIcon";

type PuzzleInstructionsProps = {
  currentPuzzle: Puzzle;
  isSolved: boolean;
};

const PuzzleInstructions: React.FC<PuzzleInstructionsProps> = ({
  currentPuzzle,
  isSolved,
}) => {
  const activeColor = currentPuzzle.fen.split(" ")[1]; // The second part of the FEN string indicates the active color

  const whoseMove = activeColor === "w" ? "White" : "Black";

  return (
    <div className="puzzle-instructions">
      {!isSolved ? (
        <div className="instructions-container">
          <div className="instructions-content">
            <QueenIcon
              width={24}
              height={24}
              color={activeColor === "w" ? "white" : "black"}
            />
            <span className="instructions-text">
              Your turn. Find the WORST move for {whoseMove.toLowerCase()}.
            </span>
          </div>
        </div>
      ) : (
        <SolutionMessage description={currentPuzzle.description} />
      )}
    </div>
  );
};

export default PuzzleInstructions;
