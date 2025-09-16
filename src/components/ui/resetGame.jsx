// src/components/ui/ResetButton.jsx
export function ResetButton({ resetGame, children }) {
  return (
    <button
      onClick={() => typeof resetGame === "function" && resetGame()}
      className="px-6 py-3 cursor-pointer  hover:bg-[#4c1d95] text-white font-semibold rounded-lg transition"
    >
      {children || "Empezar de nuevo"}
    </button>
  );
}
