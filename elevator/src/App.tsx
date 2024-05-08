import "./App.css";
import Building from "./components/Building";

function App() {
  return (
    <>
      <div className="container">
        <h1>Elevator Simulation</h1>
        <Building elevators={1} floors={5} />
      </div>
    </>
  );
}

export default App;
