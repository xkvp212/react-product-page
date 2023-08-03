

export default function MyCartButton  ({ cartCounter, toggleCartVisibility }) {
  return (
    <div>
      <button onClick={toggleCartVisibility}>My Cart ({cartCounter})</button>
    </div>
  );
};


