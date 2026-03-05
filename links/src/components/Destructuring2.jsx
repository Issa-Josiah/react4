function Car(props) {
  const { brand, model } = props;

  return <h2>I love my {brand} {model}!</h2>;
}

export default function Destructuring2() {
  return (
    <div>
      <h3>Destructuring Inside Component</h3>
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    </div>
  );
}