function Son({ children }) {
  return (
    <div style={{ background: "lightgreen", padding: "10px" }}>
      <h2>Son</h2>
      {children}
    </div>
  );
}

function Daughter({ children }) {
  return (
    <div style={{ background: "lightblue", padding: "10px" }}>
      <h2>Daughter</h2>
      {children}
    </div>
  );
}

export default function PropsChildren() {
  return (
    <div>
      <h3>Props Children</h3>

      <Son>
        <p>Content passed from parent to Son.</p>
      </Son>

      <Daughter>
        <p>Content passed from parent to Daughter.</p>
      </Daughter>

    </div>
  );
}