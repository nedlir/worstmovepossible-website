import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePuzzleStore } from "./stores/puzzleStore";

export const RandomPuzzleRedirect: React.FC = () => {
  const navigate = useNavigate();
  const { unsolvedPuzzles } = usePuzzleStore();

  useEffect(() => {
    if (unsolvedPuzzles.size === 0) {
      navigate("/");
      return;
    }

    const randomId = Array.from(unsolvedPuzzles).pop();
    navigate(`/puzzles/${randomId}`);
  }, [navigate, unsolvedPuzzles]);

  return null;
};
