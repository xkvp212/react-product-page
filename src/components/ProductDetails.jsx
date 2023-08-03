import SizeOptions from "./SizeOptions";
import AddToCartButton from "./AddToCartButton";
import "./productdetails.scss"
export default function ProductDetails({
    jsonData, 
    selectedSize, 
    handleSizeChange, 
    handleAddToCart, 
    errorMessage}) {
    return(    
    <div class="main-container">
    <div class="left-container">
      <div class="image-container">
        <img src={jsonData.imageURL} alt={jsonData.title}></img>
      </div>
    </div>
    <div class="right-container">
      <div class="content-container">
        <h1>{jsonData.title}</h1>
        <h3>${jsonData.price}.00</h3>
        <p>{jsonData.description}</p>
        <SizeOptions
            jsonData={jsonData}
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
          />
        <AddToCartButton 
            jsonData={jsonData} 
            handleAddToCart={handleAddToCart} 
            errorMessage={errorMessage}
            selectedSize={selectedSize}
            />  
      </div>
    </div>
  </div>
);
}