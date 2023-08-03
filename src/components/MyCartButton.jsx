import "./mycartbutton.scss"

export default function MyCartButton  ({ cartCounter, toggleCartVisibility }) {
  return (
      <button className="cartButton" onClick={toggleCartVisibility}>My Cart ({cartCounter})</button>

  );
};


