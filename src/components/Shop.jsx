import React from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import Items from './Items';
import { titleCase } from '../titleCase.js';

const Shop = ({ addItemToCart }) => {
  const categories = ['rackets', 'balls', 'shoes', 'accessories']

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mb-3">
        <NavLink to='' className="h4 text-light mx-3" activeClassName="active">All</NavLink>
        {categories.map((category, index) => {
          return (
            <NavLink to={`${category}`} key={index} className="h4 text-light mx-3" activeClassName="active">{titleCase(category)}</NavLink>
          );
        })}
      </div>

      <Routes>
        <Route path='' element={<Items category="All" addItemToCart={addItemToCart} />} />
        {categories.map((category, index) => {
          return (
            <Route path={`${category}`} key={index} element={<Items category={category} addItemToCart={addItemToCart} />} />
          );
        })}
      </Routes>
    </div>
  );
}

export default Shop;
