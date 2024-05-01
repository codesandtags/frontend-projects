import { useEffect, useReducer } from "react";
import Grid from "./ui/Grid";

import "./DogGame.css";
import { gameReducer } from "../state/gameReducer";
import { initialGameState } from "../state/gameState";
import Score from "./ui/Score";

export default function DogGame() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  // Handle key events
  const handleKeyDown = (event: KeyboardEvent) => {
    let direction: string | undefined;

    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
      default:
        break;
    }

    if (direction) {
      dispatch({ type: "MOVE_DOG", payload: { direction } });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // OnUnmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // Handle game logic
  // Handle re-rendering

  return (
    <div>
      <main className="game-container">
        <h1>🐕 Dog Game</h1>
        {/* Score */}
        <Score score={state.score} />

        {/* Grid */}
        <Grid
          gridSize={state.gridSize}
          dogPosition={state.dogPosition}
          bonePosition={state.bonePosition}
        />
      </main>
    </div>
  );
}
