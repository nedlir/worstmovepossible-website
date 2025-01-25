import React, { createContext, useContext, useState } from "react";

type PuzzleHistoryContextType = {
  solvedPuzzles: string[];
  addPuzzle: (puzzleId: string) => void;
  resetHistory: () => void;
  hasPrevious: () => boolean;
};

const PuzzleHistoryContext = createContext<
  PuzzleHistoryContextType | undefined
>(undefined);

export const PuzzleHistoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [solvedPuzzles, setSolvedPuzzles] = useState<string[]>([]);

  const addPuzzle = (puzzleId: string) => {
    setSolvedPuzzles((prev) => {
      if (prev.includes(puzzleId)) return prev;
      return [...prev, puzzleId];
    });
  };

  const resetHistory = () => {
    setSolvedPuzzles([]);
  };

  const hasPrevious = () => {
    return solvedPuzzles.length > 1;
  };

  return (
    <PuzzleHistoryContext.Provider
      value={{ solvedPuzzles, addPuzzle, resetHistory, hasPrevious }}
    >
      {children}
    </PuzzleHistoryContext.Provider>
  );
};

export const usePuzzleHistory = () => {
  const context = useContext(PuzzleHistoryContext);
  if (!context) {
    throw new Error(
      "usePuzzleHistory must be used within a PuzzleHistoryProvider"
    );
  }
  return context;
};
