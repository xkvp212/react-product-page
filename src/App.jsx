import React from "react";
import DataLoader from "./components/DataLoader";
import MyCartButton from "./components/MyCartButton";
import MyCart from "./components/MyCart";
import ProductDetails from "./components/ProductDetails";
import "./app.scss";

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
        <div className="app">
          <div className="header">
            <div className="items">
            <MyCartButton
            cartCounter={cartCounter}
            toggleCartVisibility={toggleCartVisibility}
          />
            </div>

          {cartItems.length > 0 && <MyCart cartItems={cartItems} />}
          </div>
          <div className="section">
          <ProductDetails 
            jsonData={jsonData}
            handleAddToCart={handleAddToCart} 
            errorMessage={errorMessage}
            selectedSize={selectedSize} 
            handleSizeChange={handleSizeChange}
          />
          </div>

        </div>
      )}
    </DataLoader>
  );
};

export default App;
