export default function CarFunction() {
  const years = [1964, 1965, 1966];

  const carInfo = {
    name: "Ford",
    model: "Mustang",
    color: "red",
    year: 1969
  };

  return (
    <div className="card">
      <h3>Functional Component</h3>

      <p className="card">
        My {carInfo.name} {carInfo.model}
      </p>

      <p className="card"> 
        It is {carInfo.color} and from {carInfo.year}
      </p>

      <p className="card">
        Available years: {years[0]}, {years[1]}, {years[2]}
      </p>
    </div>
  );
}