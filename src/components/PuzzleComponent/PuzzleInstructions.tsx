import React from "react";
import { Puzzle } from "../../Puzzle";
import QueenIcon from "../../assets/Icons/QueenIcon";

type PuzzleInstructionsProps = {
  puzzle: Puzzle;
};

const PuzzleInstructions: React.FC<PuzzleInstructionsProps> = ({ puzzle }) => {
  const activeColor = puzzle.fen.split(" ")[1];
  const whoseMove = activeColor === "w" ? "White" : "Black";

  return (
    <div className="puzzle-instructions">
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
    </div>
  );
};

export default PuzzleInstructions;
