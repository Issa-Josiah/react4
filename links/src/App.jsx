import CarClass from "./components/CarClass";
import CarFunction from "./components/CarFunction";
import Garage from "./components/Garage";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Vite Demo</h1>

      <hr />
      <h2>Class Component Example</h2>
      <CarClass />

      <hr />
      <h2>Functional Component Example</h2>
      <CarFunction />

      <hr />
      <h2>Component Inside Component</h2>
      <Garage />
    </div>
  );
}