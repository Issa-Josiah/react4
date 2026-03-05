import CarClass from "./components/CarClass";
import CarFunction from "./components/CarFunction";
import Garage from "./components/Garage";
import Destructuring1 from "./components/Destructuring1";
import Destructuring2 from "./components/Destructuring2";
import RestOperator from "./components/RestOperator";
import DefaultProps from "./components/DefaultProps";
import PropsChildren from "./components/PropsChildren";

export default function App() {
  return (
    <div className="app-container">
       <h1>Class, Props, Prop Destructing, Props Children, Events, Conditions, </h1>

      <hr />
      <h2>Class Component Example</h2>
      <CarClass />

      <hr />
      <h2>Functional Component Example</h2>
      <CarFunction />

      <hr />
      <h2>Component Inside Component</h2>
      <Garage />

      <hr />
      <h2>React Props Examples</h2>
      <Destructuring1 />
      <Destructuring2 />
      <RestOperator />
      <DefaultProps />
      <PropsChildren />
    </div>
  );
}