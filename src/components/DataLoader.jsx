import React, { useState, useEffect } from "react";

export default function DataLoader ({ children }) {
  const [jsonData, setJsonData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Simulate fetching JSON data from an API or local file
    const fetchJsonData = async () => {
      // You can fetch data from an API or a local file using fetch() or other methods
      // For this example, I'll just set jsonData with a mock data given by Moustache Republic
      const mockJsonData = {
        id: 1,
        title: "Classic Tee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        price: 75.0,
        imageURL:
          "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
        sizeOptions: [
          { id: 1, label: "S" },
          { id: 2, label: "M" },
          { id: 3, label: "L" }
        ]
      };
      setJsonData(mockJsonData);
    };

    fetchJsonData();
  }, []);

  const handleAddToCart = () => {
    if (selectedSize === "") {
      setErrorMessage("Please select a size before adding to cart.");
    } else {
      setErrorMessage("");
      const existingItem = cartItems.find(item => item.size === selectedSize);

      if (existingItem) {
        const updatedItems = cartItems.map(item =>
          item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedItems);
      } else {
        const newItem = {
          title: jsonData.title,
          size: selectedSize,
          quantity: 1,
          imageURL: jsonData.imageURL
        };
        setCartItems([...cartItems, newItem]);
      }

      setCartCounter(cartCounter + 1);
    }
  };

  const handleSizeChange = event => {
    setSelectedSize(event.target.value);
    setErrorMessage("");
  };

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };

  return (
    <React.Fragment>
      {jsonData &&
        children(
          jsonData,
          selectedSize,
          handleSizeChange,
          handleAddToCart,
          errorMessage,
          cartItems,
          cartCounter,
          toggleCartVisibility
        )}
    </React.Fragment>
  );
};

