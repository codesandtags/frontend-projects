import { Cell } from "../components/ui/Board";

export interface GameState {
  board: Cell[];
  currentPlayer: string;
  winner: string;
  winningCombinations?: number[][];
}

export const generateBoard = () => {
  return Array.from({
    length: 9,
  }).map(() => {
    return { value: "", highlight: false };
  });
};

export const initialGameState: GameState = {
  board: generateBoard(),
  currentPlayer: "X",
  winner: "",
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
};
