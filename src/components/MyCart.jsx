import "./mycart.scss"

export default function MyCart ({ cartItems }){
  return (
    <div className="cartItemsContainer">
      <ul>
        {cartItems.map((item, index) => (
          <li
            key={index}
          >
            <img
              src={item.imageURL}
              alt={item.title}
            />
            {item.title} Size: {item.size} Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

