// donde tengas el Card (p. ej. src/components/CardProjectTicTacToe.jsx)
import { useState } from "react";
import Modal from "../../../modals/ModalTicTacToe.jsx"; // tu modal
import { TicTacToe } from "../../game/tic-tac-toe/TicTacToe";
import { TURNS } from "../../../constants/game/tic-tac-toe/constants.js";

export default function CardProjectTicTacToe() {
  const [open, setOpen] = useState(false);
  const [resetHandler, setResetHandler] = useState(null);
  const [gameState, setGameState] = useState({ turn: TURNS.x, winner: null });

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="font-bold mb-2">Tic Tac Toe</h2>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => setOpen(true)}
      >
        Jugar
      </button>

      {open && (
        <Modal
          onClose={() => setOpen(false)}
          resetGame={resetHandler} // función registrada por TicTacToe
          turn={gameState.turn}
          winner={gameState.winner}
        >
          {/* TicTacToe se registra en setResetHandler y notifica estado via setGameState */}
          <TicTacToe
            registerReset={setResetHandler}
            onStateChange={setGameState}
          />
        </Modal>
      )}
    </div>
  );
}
