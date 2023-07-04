import React from 'react';
import './cartItem.css';

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const getImageSource = (itemName) => {
    switch (itemName) {
      case 'Red Blend':
        return require('../../components/Home/shopping/shoppingImages/wineImage2.jpg');
      case 'wine2':
        return require('../../components/Home/shopping/shoppingImages/wineImage.jpg');
      
      default:
        return null;
    }
  };

  return (
    <div className="cart-item">
      <img src={getImageSource(item.name)} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Price: ZAR {item.price}</p>
        <div className="counter">
          <div className="counter-button" onClick={() => decreaseQuantity(item)}>
            -
          </div>
          <div className="counter-value">{item.quantity}</div>
          <div className="counter-button" onClick={() => increaseQuantity(item)}>
            +
          </div>
        </div>
      </div>
      <button className="cart-button" onClick={() => removeFromCart(item)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
