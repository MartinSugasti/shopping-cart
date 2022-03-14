import React from 'react';
import CartItem from './CartItem';
import allItems from '../items.js';

const Checkout = () => {
  const itemsSample = [
    {
      id: 23,
      quantity: 2
    },
    {
      id: 78,
      quantity: 1
    },
    {
      id: 42,
      quantity: 1
    }
  ]

  const total = (items) => {
    return items.reduce((total, item) => {
      const price = allItems.find((itemInfo) => itemInfo.id === item.id).price;
      return total + parseFloat(price);
    }, 0)
  }

  return (
    <div className="container">
      <div className="card text-dark text-center mb-4">
        <div className="card-body">
          <h3 className="mb-0">Shopping Cart</h3>
        </div>

        <ul className="list-group list-group-flush">
          {itemsSample.map((item) => {
            return (
              <CartItem key={item.id} id={item.id} quantity={item.quantity} />
            );
          })}
        </ul>

        <div className="card-footer">
          <h3 className="mb-0">Total: ${total(itemsSample)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
