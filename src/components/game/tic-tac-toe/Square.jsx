// Square.jsx
export function Square({ children, isSelected, index, updateBoard }) {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <button
      className={`square ${isSelected ? "is-selected" : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
