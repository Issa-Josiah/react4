function Car(props) {
  return <h4>I am a {props.brand}!</h4>;
}

export default function Garage() {
  return (
    <div className="card">
      <h3>Who lives in my garage?</h3>
      <Car brand="Ford" />
      <Car brand="BMW" />
      <Car brand="Tesla" />
    </div>
  );
}