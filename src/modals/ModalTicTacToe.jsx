// src/modals/ModalTicTacToe.jsx
import { Square } from "../components/game/tic-tac-toe/Square.jsx";
import { TURNS } from "../constants/game/tic-tac-toe/constants.js";
import { WinnerModal } from "../components/game/tic-tac-toe/WinnerModal.jsx";
import { TicTacToe } from "../components/game/tic-tac-toe/ticTacToe.jsx";
import { ResetButton } from "../components/ui/resetGame.jsx";
import { useState } from "react";
import { ScrollReveal } from "../animation/ScrollReveal .jsx";
export default function ModalTicTacToe({ onClose }) {
  const [resetHandler, setResetHandler] = useState(null);
  const [gameState, setGameState] = useState({
    turn: TURNS.x,
    winner: null,
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <ScrollReveal direction="up" className="w-full max-w-4xl px-4">
        <div className="bg-neutral-950 h-4/5 w-full shadow-lg relative rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 gap-8">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>

          {/* Columna izquierda - info y controles */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/3 text-white">
            <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
            <section className="flex gap-4">
              <Square isSelected={gameState.turn === TURNS.x}>{TURNS.x}</Square>
              <Square isSelected={gameState.turn === TURNS.o}>{TURNS.o}</Square>
            </section>

            <ResetButton resetGame={resetHandler} />
          </div>

          {/* Columna derecha - tablero */}
          <div className="flex-1 flex justify-center items-center">
            <TicTacToe
              registerReset={setResetHandler}
              onStateChange={setGameState}
            />
          </div>

          {/* WinnerModal */}
          <WinnerModal resetGame={resetHandler} winner={gameState.winner} />
        </div>
      </ScrollReveal>
    </div>
  );
}
