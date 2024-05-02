import Square from "./Square";

import "./Board.css";

export type Cell = {
  value: string;
  highlight: boolean;
};

export type BoardProps = {
  board: Cell[];
  hasWinner: boolean;
  handleTurn: (cellIndex: number) => void;
};

export default function Board({ board, handleTurn, hasWinner }: BoardProps) {
  return (
    <div className="board-game">
      {board.map((_, cellIndex) => (
        <Square
          key={`${cellIndex}`}
          value={board[cellIndex].value}
          onSquareClick={() => handleTurn(cellIndex)}
          disabled={board[cellIndex].value !== "" || hasWinner}
          highlight={board[cellIndex].highlight}
        />
      ))}
    </div>
  );
}
