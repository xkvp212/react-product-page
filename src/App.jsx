import React from "react";
import DataLoader from "./components/DataLoader";
import MyCartButton from "./components/MyCartButton";
import MyCart from "./components/MyCart";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <DataLoader>
      {(
        jsonData,
        selectedSize,
        handleSizeChange,
        handleAddToCart,
        errorMessage,
        cartItems,
        cartCounter,
        toggleCartVisibility
      ) => (
        <div>

          <MyCartButton
            cartCounter={cartCounter}
            toggleCartVisibility={toggleCartVisibility}
          />
          {cartItems.length > 0 && <MyCart cartItems={cartItems} />}
          <ProductDetails 
            jsonData={jsonData}
            handleAddToCart={handleAddToCart} 
            errorMessage={errorMessage}
            selectedSize={selectedSize} 
            handleSizeChange={handleSizeChange}
          />
        </div>
      )}
    </DataLoader>
  );
};

export default App;
