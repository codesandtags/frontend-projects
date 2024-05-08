export interface Position {
  x: number;
  y: number;
}

export interface GameState {
  gridSize: number; // N x N grid
  dogPosition: Position;
  bonePosition: Position;
  score: number;
}

export function generateRandomPosition(gridSize: number): Position {
  return {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };
}

export const initialGameState: GameState = {
  gridSize: 6,
  dogPosition: generateRandomPosition(6),
  bonePosition: generateRandomPosition(6),
  score: 0,
};
