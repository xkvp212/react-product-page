import React from "react";

const MyCartButton = ({ cartCounter, toggleCartVisibility }) => {
  return (
    <div>
      <button onClick={toggleCartVisibility}>My Cart ({cartCounter})</button>
    </div>
  );
};

export default MyCartButton;
