function Car({ color = "blue", brand }) {
  return <h2>My {color} {brand}!</h2>;
}

export default function DefaultProps() {
  return (
    <div>
      <h3>Default Props</h3>
      <Car brand="Ford" />
    </div>
  );
}