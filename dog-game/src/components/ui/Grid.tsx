import { Position } from "../../state/gameState";
import "./Grid.css";

interface GridProps {
  gridSize: number;
  dogPosition: Position;
  bonePosition: Position;
}

export default function Grid({
  gridSize,
  dogPosition,
  bonePosition,
}: GridProps) {
  const customStyles = {
    grid: {
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    },
  };

  function isDogPosition(x: number, y: number) {
    return x === dogPosition.x && y === dogPosition.y;
  }

  function isBonePosition(x: number, y: number) {
    return x === bonePosition.x && y === bonePosition.y;
  }

  const grid = Array.from({ length: gridSize }, (_, i) =>
    Array.from({ length: gridSize }, (_, j) => (
      <div
        key={`${i}-${j}`}
        className={`cell ${isDogPosition(i, j) ? "dog" : ""} ${
          isBonePosition(i, j) ? "bone" : ""
        }`}
      >
        {isDogPosition(i, j) ? "🐶" : ""}
        {isBonePosition(i, j) ? "🦴" : ""}
      </div>
    ))
  );

  return (
    <div className="game-grid" style={customStyles.grid}>
      {grid}
    </div>
  );
}
