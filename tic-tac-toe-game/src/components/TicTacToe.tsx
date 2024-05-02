import { useState } from "react";
import { generateBoard, initialGameState } from "../state/gameState";
import "./TicTacToe.css";
import Board from "./ui/Board";

export default function TicTacToe() {
  const [board, updateBoard] = useState(generateBoard());
  const [currentPlayer, setCurrentPlayer] = useState(
    initialGameState.currentPlayer
  );
  const [winner, setWinner] = useState(initialGameState.winner);
  const [movements, setMovements] = useState(0);

  const resetGame = () => {
    updateBoard(generateBoard());
    setCurrentPlayer(initialGameState.currentPlayer);
    setWinner(initialGameState.winner);
    setMovements(0);
  };

  const highlightWinnerPath = (combination: number[]) => {
    const newBoard = [...board];
    const [a, b, c] = combination;
    newBoard[a].highlight = true;
    newBoard[b].highlight = true;
    newBoard[c].highlight = true;
    updateBoard(newBoard);
  };

  const checkWinner = (cellIndex: number) => {
    // Update board
    setMovements(movements + 1);
    const newBoard = [...board];
    if (newBoard[cellIndex].value === "") {
      newBoard[cellIndex].value = currentPlayer;
      // Switch player
      setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
      updateBoard(newBoard);
    }

    // Check for winner
    if (initialGameState.winningCombinations && movements < 9) {
      initialGameState.winningCombinations.forEach((combination) => {
        const [a, b, c] = combination;
        if (
          newBoard[a].value &&
          newBoard[a].value === newBoard[b].value &&
          newBoard[a].value === newBoard[c].value
        ) {
          setWinner(newBoard[a].value);
          highlightWinnerPath(combination);
        }
      });
    }
  };

  return (
    <div className="game-container">
      <h1>🎮 Tic Tac Toe</h1>
      <div className="stats">
        {movements === 9 && !winner && (
          <p>
            Nobody wins 🤷
            <button className="reset-button" onClick={resetGame}>
              Play again
            </button>
          </p>
        )}
        {!winner && <p>Current player: {currentPlayer}</p>}
        {winner && (
          <p>
            Player <strong className="winner">{winner}</strong> wins 🎉!
            <button className="reset-button" onClick={resetGame}>
              Play again
            </button>
          </p>
        )}
      </div>
      <Board board={board} handleTurn={checkWinner} hasWinner={winner !== ""} />
    </div>
  );
}
