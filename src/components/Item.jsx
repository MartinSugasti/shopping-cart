import React from 'react';
import '../assets/styles/item.scss';
import { titleCase } from '../titleCase.js';

const Item = ({ item, addItemToCart }) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 mb-5 d-flex align-items-stretch"
    >
      <div className="card text-center w-100">
        <img src={item.image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{item.brand}</h5>
          <p className="card-text">{titleCase(item.name)}</p>
          <p className="card-text">${item.price}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary" onClick={() => addItemToCart(item.id)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
