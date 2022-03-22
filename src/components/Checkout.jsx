import React from 'react';
import CartItem from './CartItem';
import allItems from '../items.js';

const Checkout = ({ cart, removeItemFromCart }) => {
  const total = (items) => {
    return items.reduce((total, item) => {
      const itemInfo = allItems.find((itemInfo) => itemInfo.id === item.id);
      const price = itemInfo.price;
      const quantity = item.quantity;

      return total + parseFloat(price) * parseFloat(quantity);
    }, 0)
  }

  return (
    <div className="container">
      <div className="card text-dark text-center mb-4">
        <div className="card-body">
          <h3 className="mb-0">Shopping Cart</h3>
        </div>

        <ul className="list-group list-group-flush">
          {cart.map((item) => {
            return (
              <CartItem key={item.id} id={item.id} quantity={item.quantity} removeItemFromCart={removeItemFromCart} />
            );
          })}
        </ul>

        <div className="card-footer">
          <h3 className="mb-0">Total: ${total(cart)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
