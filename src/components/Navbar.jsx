import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <NavLink to="/" className="navbar-brand">
        <img height="40" src={logo} alt="logo" />
      </NavLink>

      <button className="navbar-toggler border-0 mr-n2" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarText">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/shop" className="nav-item nav-link" activeClassName="active">Shop</NavLink>
          <NavLink to="/checkout" className="nav-item nav-link" activeClassName="active">Checkout</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
