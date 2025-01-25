import React from "react";
import { useParams } from "react-router-dom";
import PuzzleComponent from "../../components/PuzzleComponent/PuzzleComponent";
import puzzles from "../../data/puzzles.json";

const PuzzlePage: React.FC = () => {
  const { puzzleId } = useParams<{ puzzleId: string }>();
  const puzzle = puzzles.find((p) => p.id === puzzleId);

  if (!puzzle) {
    return <div>Puzzle not found</div>;
  }

  return (
    <>
      <PuzzleComponent puzzle={puzzle} />
    </>
  );
};

export default PuzzlePage;
