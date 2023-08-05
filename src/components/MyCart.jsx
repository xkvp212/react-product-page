import "./mycart.scss"

export default function MyCart ({ cartItems }){
  return (
      <div className="cartItemsContainer">
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={index}
            >
              <div className="left">
                <img
                  src={item.imageURL}
                  alt={item.title}
                />
                </div>
              <div className="right">
                <p>{item.title} Size: {item.size} Quantity: {item.quantity}</p>
                </div>
            </li>
          ))}
        </ul>
      </div>

  );
};

