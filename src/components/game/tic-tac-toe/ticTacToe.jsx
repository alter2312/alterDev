// src/game/tic-tac-toe/TicTacToe.jsx
import { useState, useEffect, useCallback } from "react";
// import confetti from "canvas-confetti";
import { WinnerModal } from "./WinnerModal.jsx";
import { Board } from "./Board.jsx";
import { TURNS } from "../../../constants/game/tic-tac-toe/constants.js";
import {
  checkWinnerFrom,
  checkEndGame,
} from "../../../logic/tic-tac-toe/board.js";
import {
  saveGameStorage,
  resetGameStorage,
} from "../../../logic/tic-tac-toe/index.js";
import "../../../assets/css/tic-tac-toe/index.css";

export function TicTacToe({ registerReset, onStateChange }) {
  const [board, setBoard] = useState(() => {
    try {
      const boardFromStorage = window.localStorage.getItem("board");
      if (!boardFromStorage) return Array(9).fill(null);
      const parsed = JSON.parse(boardFromStorage);
      return Array.isArray(parsed)
        ? parsed
        : parsed?.board ?? Array(9).fill(null);
    } catch {
      return Array(9).fill(null);
    }
  });

  const [turn, setTurns] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.x;
  });

  const [winner, setWinner] = useState(null);

  // Notificar estado al padre cada vez que cambie turn o winner
  useEffect(() => {
    if (typeof onStateChange === "function") {
      onStateChange({ turn, winner });
    }
  }, [turn, winner, onStateChange]);

  const updateBoard = (index) => {
    if (board[index] || winner !== null) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurns(newTurn);

    saveGameStorage(newBoard, newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      // confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Empate
    }
    // onStateChange se invocará por el useEffect anterior
  };

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setTurns(TURNS.x);
    setWinner(null);
    resetGameStorage("board", "turn");
    if (typeof onStateChange === "function")
      onStateChange({ turn: TURNS.x, winner: null });
  }, [onStateChange]);

  // Registrar el resetGame (si el padre nos pasó registerReset)
  useEffect(() => {
    if (typeof registerReset === "function") {
      // IMPORTANTE: envolvemos resetGame en una función para que
      // setResetHandler(recibeFuncion) no lo trate como "updater"
      registerReset(() => resetGame);
      // al desmontar limpiamos la referencia
      return () => registerReset(null);
    }
    return undefined;
  }, [registerReset, resetGame]);

  return (
    <main className="board">
      <Board board={board} updateBoard={updateBoard} />
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}
