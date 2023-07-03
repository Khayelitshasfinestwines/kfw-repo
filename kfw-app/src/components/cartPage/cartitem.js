import React from 'react';


const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.title} />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <button type="button" className="btn btn-danger" onClick={() => removeFromCart(item)}>
        Remove
      </button>
    </div>
  );
};



export default CartItem;
