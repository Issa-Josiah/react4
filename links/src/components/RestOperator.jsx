function Car({ color, brand, ...rest }) {
  return <h2>My {brand} {rest.model} is {color}!</h2>;
}

export default function RestOperator() {
  return (
    <div>
      <h3>Rest Operator</h3>
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    </div>
  );
}