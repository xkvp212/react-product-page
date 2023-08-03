import "./addtocartbutton.scss"
export default function AddToCartButton ({
  jsonData,
  selectedSize,
  handleAddToCart,
  errorMessage
}) {

  return (
    <div className="container">
      {errorMessage && <p style={{ color: "#C90000"}}>{errorMessage}</p>}
      <h2>
        <span className="sizeGrey">SIZE</span><span className="amperRed">*</span> {selectedSize ? selectedSize : ""}
        </h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
