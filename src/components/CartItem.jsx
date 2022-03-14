import React from 'react';
import allItems from '../items.js';
import { titleCase } from '../titleCase.js';
import '../assets/styles/cartItem.scss';

const CartItem = ({ id, quantity }) => {
  const item = allItems.find((item) => item.id === id)

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src={`./images/${item.category}${item.brand}${item.price}.jpeg`} className="card-img-top border shadow cart-item-image" />
          </div>

          <div className="col-12 col-md-6 align-self-center text-center text-md-left mt-4 mt-md-0">
            <h5 className="mb-1">{item.brand} - {titleCase(item.name)}</h5>
            <p className="mb-0">Quantity: {quantity}</p>
            <p className="mb-0">Price: ${parseFloat(item.price)}</p>
            <h5 className="mt-1 mb-0">Total: ${parseInt(quantity) * parseFloat(item.price)}</h5>
          </div>

          <div className="col-12 col-md-3 align-self-center my-4 my-md-0">
            <button type="button" className="btn btn-danger">Remove</button>
          </div>
        </div>
      </li>
  );
};

export default CartItem;
