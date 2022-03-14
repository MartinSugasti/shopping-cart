import React from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import Items from './Items';

const Shop = () => {
  const categories = ['rackets', 'balls', 'shoes', 'accessories']

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mb-3">
        <NavLink to='' className="h4 text-light mx-3" activeClassName="active">All</NavLink>
        {categories.map((category, index) => {
          return (
            <NavLink to={`${category}`} key={index} className="h4 text-light mx-3" activeClassName="active">{capitalizeFirstLetter(category)}</NavLink>
          );
        })}
      </div>

      <Routes>
        <Route path='' element={<Items category="All" />} />
        {categories.map((category, index) => {
          return (
            <Route path={`${category}`} key={index} element={<Items category={category} />} />
          );
        })}
      </Routes>
    </div>
  );
}

export default Shop;
