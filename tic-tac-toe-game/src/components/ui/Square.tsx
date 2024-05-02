import "./Square.css";

export type SquareProps = {
  value: string;
  onSquareClick: () => void;
  disabled: boolean;
  highlight: boolean;
};

export default function Square({
  value,
  onSquareClick,
  disabled,
  highlight,
}: SquareProps) {
  return (
    <button
      className={`square ${highlight ? "highlight" : ""}`}
      onClick={onSquareClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
