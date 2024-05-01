import { playSound } from "../utils";
import { GameState, generateRandomPosition } from "./gameState";

export type GameAction = { type: "MOVE_DOG"; payload: { direction: string } };

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "MOVE_DOG": {
      const { direction } = action.payload;
      const { dogPosition, bonePosition, gridSize } = state;
      const newDogPosition = { ...dogPosition };

      switch (direction) {
        case "up":
          if (dogPosition.x > 0) {
            newDogPosition.x -= 1;
          }
          break;
        case "down":
          if (dogPosition.x < gridSize - 1) {
            newDogPosition.x += 1;
          }
          break;
        case "left":
          if (dogPosition.y > 0) {
            newDogPosition.y -= 1;
          }
          break;
        case "right":
          if (dogPosition.y < gridSize - 1) {
            newDogPosition.y += 1;
          }
          break;
        default:
          break;
      }

      if (
        newDogPosition.x === bonePosition.x &&
        newDogPosition.y === bonePosition.y
      ) {
        // Dog found the bone
        playSound("/sounds/dog-bark.mp3");
        if (state.score % 5 === 0 && state.score > 0) {
          playSound("/sounds/level-up.mp3");
        }
        return {
          ...state,
          dogPosition: newDogPosition,
          bonePosition: generateRandomPosition(gridSize),
          score: state.score + 1,
        };
      }

      return {
        ...state,
        dogPosition: newDogPosition,
      };
    }
    default:
      return state;
  }
}
