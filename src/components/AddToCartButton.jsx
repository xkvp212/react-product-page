import React from "react";

const AddToCartButton = ({
  jsonData,
  selectedSize,
  handleAddToCart,
  errorMessage
}) => {
  return (
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <h2>Size: {selectedSize ? selectedSize : "Please select a size"}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
