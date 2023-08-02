import React from "react";

const MyCart = ({ cartItems }) => {
  return (
    <div>
      <h1>My Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li
            key={index}
            style={{
              width: "100px",
              marginRight: "10px",
              listStyleType: "none"
            }}
          >
            <img
              src={item.imageURL}
              alt={item.title}
              style={{ width: "50px", marginRight: "10px" }}
            />
            {item.title} Size: {item.size} Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
