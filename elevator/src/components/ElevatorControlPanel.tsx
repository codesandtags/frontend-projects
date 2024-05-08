import "./ElevatorControlPanel.css";

export type ElevatorControlPanelProps = {
  onUp: () => void;
  onDown: () => void;
};

export default function ElevatorControlPanel({
  onUp,
  onDown,
}: ElevatorControlPanelProps) {
  return (
    <div className="elevator-control-panel">
      <button onClick={onUp}>Up</button>
      <button onClick={onDown}>Down</button>
    </div>
  );
}
