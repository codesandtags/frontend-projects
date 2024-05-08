import { createContext, useState } from "react";
import Elevator from "./Elevator";

import "./Building.css";

export type BuildingProps = {
  elevators: number;
  floors: number;
};

function createElevators(elevators: number) {
  return Array.from({ length: elevators }, (_, index) => ({
    id: index,
    targetFloors: [],
  }));
}

export const BuildingContext = createContext({});

export default function Building({ floors, elevators }: BuildingProps) {
  const buildingState = {};
  const [elevatorStates, setElevatorStates] = useState(
    createElevators(elevators)
  );

  const moveElevator = (id: number, newTargetFloors: number[]) => {
    setElevatorStates((prevStates) =>
      prevStates.map((state) =>
        state.id === id ? { ...state, targetFloors: newTargetFloors } : state
      )
    );
  };

  const requestElevator = (floor: number) => {
    const firstElevator = elevatorStates[0];
    const newTargetFloors = [...firstElevator.targetFloors, floor];

    moveElevator(firstElevator.id, [...newTargetFloors]);
  };

  return (
    <BuildingContext.Provider value={buildingState}>
      <div className="building__information">
        <h2>Building Information</h2>
        <span>Elevators: {elevators}</span>
        <span>Floors: {floors}</span>
        {/* {JSON.stringify(elevatorStates)} */}
      </div>
      <div className="building">
        {Array.from({ length: floors }, (_, i) => (
          <div key={`floor ${i}`} className="floor">
            <div className="floor-number">Floor {i + 1}</div>
            <button onClick={() => requestElevator(i)}>Request Elevator</button>
          </div>
        ))}
        {elevatorStates &&
          elevatorStates.map((elevator) => {
            return (
              <Elevator
                key={elevator.id}
                id={elevator.id}
                targetFloors={elevator.targetFloors}
                moveElevator={moveElevator}
              />
            );
          })}
      </div>
    </BuildingContext.Provider>
  );
}
