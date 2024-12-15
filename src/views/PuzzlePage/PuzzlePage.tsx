import React from "react";
import PuzzleComponent from "../../components/PuzzleComponent/PuzzleComponent";
import { puzzles } from "../../data/puzzles";

const PuzzlePage: React.FC = () => {
  return (
    <>
      <PuzzleComponent puzzles={puzzles} />
    </>
  );
};

export default PuzzlePage;
