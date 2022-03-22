import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

function Navbar({ totalItems }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <NavLink to="/shopping-cart" className="navbar-brand">
        <img height="40" src={logo} alt="logo" />
      </NavLink>

      <button className="navbar-toggler border-0 mr-n2" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarText">
        <div className="navbar-nav">
          <NavLink to="/shopping-cart" end className="nav-item nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/shopping-cart/shop" className="nav-item nav-link" activeClassName="active">Shop</NavLink>
          <NavLink to="/shopping-cart/checkout" className="nav-item nav-link" activeClassName="active">Checkout <span className="badge badge-light">{totalItems}</span></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
