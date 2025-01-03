import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
