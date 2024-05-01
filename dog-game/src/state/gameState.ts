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
  gridSize: 10,
  dogPosition: generateRandomPosition(8),
  bonePosition: generateRandomPosition(8),
  score: 0,
};
