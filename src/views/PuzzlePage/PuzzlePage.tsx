import React from "react";
import PuzzleComponent from "../../components/PuzzleComponent/PuzzleComponent";
import { puzzles } from "../../data/puzzles";
import "./PuzzlePage.css";

const PuzzlePage: React.FC = () => {
  return (
    <div className="puzzle-page">
      <PuzzleComponent puzzles={puzzles} />
    </div>
  );
};

export default PuzzlePage;
