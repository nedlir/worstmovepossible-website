import { useEffect } from "react";
import puzzles from "./data/puzzles.json";
import { useNavigate } from "react-router-dom";

export const RandomPuzzleRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    navigate(`/puzzles/${randomPuzzle.id}`);
  }, [navigate]);

  return null;
};
