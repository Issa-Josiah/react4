function Car({ color }) {
  return <h2>My car is {color}!</h2>;
}

export default function Destructuring1() {
  return (
    <div>
      <h3>Destructuring Props (Parameters)</h3>
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    </div>
  );
}