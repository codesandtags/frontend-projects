import { useEffect, useState } from "react";
import "./Elevator.css";

export type ElevatorProps = {
  id: number;
  targetFloors: number[];
  moveElevator: (id: number, targetFloors: number[]) => void;
};

export type Direction = "up" | "down" | "idle";

export default function Elevator({
  id,
  targetFloors,
  moveElevator,
}: ElevatorProps) {
  const [position, setPosition] = useState(0);
  const [moving, setMoving] = useState(false);
  const [direction, setDirection] = useState<Direction>("idle");

  useEffect(() => {
    if (targetFloors.length === 0) {
      setDirection("idle");
      return;
    }

    const targetFloor = targetFloors[0];

    if (position !== targetFloor && !moving) {
      setMoving(true);
      setDirection(position < targetFloor ? "up" : "down");
      setTimeout(() => {
        setPosition(position < targetFloor ? position + 1 : position - 1);
        setMoving(false);
      }, 1000); // Simulate movement duration
    } else if (position === targetFloor && !moving) {
      // Remove the floor from targetFloors after reaching it
      moveElevator(id, targetFloors.slice(1));
    }
  }, [position, targetFloors, moving]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log({
  //         id: `Elevator ${id}`,
  //         currentFloor,
  //         targetFloor,
  //         floors,
  //       });

  //       if (currentFloor !== targetFloor) {
  //         moveElevator(id, targetFloor);
  //       }
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   }, []);

  const getStyles = () => {
    return {
      bottom: `${position * 50}px`,
    };
  };

  return (
    <div className="elevator" style={getStyles()}>
      Id ({id + 1}) - {direction}
    </div>
  );
}
