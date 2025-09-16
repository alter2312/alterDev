// src/game/tic-tac-toe/WinnerModal.jsx
import { Square } from "./Square.jsx";
import { ResetButton } from "../../../components/ui/resetGame.jsx";

export function WinnerModal({ resetGame, winner }) {
  if (winner === null) return null;

  const text = winner === false ? "Empate" : "Ganó:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{text}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <ResetButton resetGame={resetGame} />
        </footer>
      </div>
    </section>
  );
}
